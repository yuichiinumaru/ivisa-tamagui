
// import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../atoms/Button'
import { H4, Paragraph } from '../../atoms/Typography'
import { VStack } from '../../atoms/Stack'
import { Sonner, toast } from './Sonner'
import { Toast } from './Toast'


const meta: Meta<React.ComponentProps<typeof Sonner>> = {
  title: 'Moléculas/Sonner',
  component: Sonner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Um componente de toast baseado no Sonner que fornece notificações não intrusivas e personalizadas com o design system.',
      },
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      description: 'A posição das notificações de toast na tela.',
    },
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof Sonner>>

export const Demonstracao: Story = {
  render: (args) => (
    <VStack gap="$3" alignItems="flex-start">
      <Sonner {...args} />
      <H4>Clique nos botões para ver os diferentes tipos de toast</H4>
      <Button onPress={() => toast.message('Notificação Padrão', 'Esta é uma mensagem de exemplo.')}>
        Padrão
      </Button>
      <Button
        onPress={() =>
          toast.success('Sucesso!', 'A operação foi concluída com êxito.')
        }
      >
        Sucesso
      </Button>
      <Button
        onPress={() => toast.error('Erro!', 'Ocorreu um problema ao processar a solicitação.')}
      >
        Erro
      </Button>
      <Button
        onPress={() =>
          toast.warning('Atenção!', 'Verifique as informações inseridas.')
        }
      >
        Aviso
      </Button>
      <Button
        onPress={() =>
          toast.custom((t) => (
            <Toast
              variant="info"
              title="Evento Criado"
              description="Sua alteração foi salva."
              onDismiss={() => toast.dismiss(t)}
              action={{
                label: 'Desfazer',
                onClick: () => console.log('Desfeito!'),
              }}
            />
          ))
        }
      >
        Com Ação
      </Button>
    </VStack>
  ),
  args: {
    position: 'bottom-right',
  },
}

export const EstadoDeCarregamento: Story = {
  render: (args) => (
    <VStack gap="$3" alignItems="flex-start">
      <Sonner {...args} />
      <H4>Toast no estado de carregamento</H4>
      <Button
        onPress={() =>
          toast.loading('Carregando...', 'Por favor, aguarde enquanto processamos os dados.')
        }
      >
        Mostrar Toast de Carregamento
      </Button>
    </VStack>
  ),
  args: {
    position: 'bottom-right',
  },
}

export const TextoExtenso: Story = {
  render: (args) => (
    <VStack gap="$3" alignItems="flex-start" width={400}>
      <Sonner {...args} />
      <H4>Teste de Truncação de Texto</H4>
      <Paragraph>
        O componente de toast deve truncar textos longos para evitar quebras de layout em
        contêineres estreitos.
      </Paragraph>
      <Button
        onPress={() =>
          toast.message(
            'Este é um título excepcionalmente longo que definitivamente deveria ser truncado',
            'Esta é uma descrição muito, muito longa que foi projetada para testar o comportamento de truncamento de texto dentro do componente de toast para garantir que ele não quebre o layout.'
          )
        }
      >
        Mostrar Toast com Texto Longo
      </Button>
    </VStack>
  ),
  args: {
    position: 'top-center',
  },
}

export const ApenasComTitulo: Story = {
  render: (args) => (
    <VStack gap="$3" alignItems="flex-start">
      <Sonner {...args} />
      <H4>Toast contendo apenas o título</H4>
      <Button
        onPress={() =>
          toast.success('Arquivo Enviado')
        }
      >
        Mostrar Toast Apenas com Título
      </Button>
    </VStack>
  ),
  args: {
    position: 'bottom-right',
  },
}

export const ComPromise: Story = {
  render: (args) => (
    <VStack gap="$3" alignItems="flex-start">
      <Sonner {...args} />
      <H4>Toast com Promise</H4>
      <Paragraph>
        Exibe toasts de carregando, sucesso e erro com base no ciclo de vida de uma promise.
      </Paragraph>
      <Button
        onPress={() => {
          const promise = () =>
            new Promise((resolve) =>
              setTimeout(() => {
                resolve({ name: 'Sonner' })
              }, 2000)
            )

          toast.promise(promise, {
            loading: 'Carregando...',
            success: 'Carregado com sucesso!',
            error: 'Erro!',
          })
        }}
      >
        Executar Promise
      </Button>
    </VStack>
  ),
  args: {
    position: 'bottom-right',
  },
}

