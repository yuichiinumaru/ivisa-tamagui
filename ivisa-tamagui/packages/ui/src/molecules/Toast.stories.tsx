import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../atoms/Button'
import { ToastProvider, useToast } from './Toast'
import { YStack } from 'tamagui'

const meta: Meta = {
  title: 'Moléculas/Toast',
  component: ToastProvider,
  decorators: [
    (Story, context) => (
      <ToastProvider>
        <YStack
          alignItems="center"
          justifyContent="center"
          height="100vh"
          width="100vw"
          backgroundColor="$background"
        >
          <Story {...context.args} />
        </YStack>
      </ToastProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A molécula Toast é usada para fornecer feedback breve e acionável sobre uma operação. Os toasts aparecem na parte inferior da tela e são removidos automaticamente após um tempo limite.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj

// --- Story Components ---

const ToastDemo = () => {
  const { toast, dismiss } = useToast()

  return (
    <YStack space="$3" alignItems="center">
      <Button
        onPress={() =>
          toast({
            title: 'Agendado: Reunião de Alinhamento',
            description: 'Sexta-feira, 10 de Fevereiro de 2024 às 17:57',
          })
        }
      >
        Exibir Toast Padrão
      </Button>
      <Button
        variant="destructive"
        onPress={() =>
          toast({
            title: 'Erro Inesperado!',
            description: 'Houve um problema com a sua solicitação.',
            variant: 'destructive',
          })
        }
      >
        Exibir Toast Destrutivo
      </Button>
      <Button
        variant="success"
        onPress={() =>
          toast({
            title: 'Sucesso!',
            description: 'Suas alterações foram salvas com êxito.',
            variant: 'success',
          })
        }
      >
        Exibir Toast de Sucesso
      </Button>
      <Button
        onPress={() => {
          const toastId = `loading-toast-${Math.random()}`
          toast({
            id: toastId,
            isLoading: true,
          })
          // Simulate a network request
          setTimeout(() => {
            dismiss(toastId)
            toast({
              title: 'Dados Carregados',
              description: 'As informações foram atualizadas.',
              variant: 'success',
            })
          }, 3000)
        }}
      >
        Exibir Toast de Carregamento
      </Button>
      <Button
        onPress={() =>
          toast({
            title: 'Evento Criado',
            description: 'Você pode visualizá-lo em sua agenda.',
            action: (
              <Button size="$1" chromeless>
                Desfazer
              </Button>
            ),
          })
        }
      >
        Exibir Toast com Ação
      </Button>
    </YStack>
  )
}

const ConstrainedToastDemo = () => {
  const { toast } = useToast()

  return (
    <YStack space="$3" alignItems="center">
      <Button
        onPress={() =>
          toast({
            title: 'Título Extremamente Longo Que Deveria Ser Cortado Para Evitar Quebra de Layout',
            description:
              'Esta é uma descrição muito, muito, muito longa que definitivamente excederá a largura do container do toast e, portanto, deve ser elegantemente truncada com reticências para manter a integridade da interface do usuário.',
          })
        }
      >
        Exibir Toast com Texto Longo
      </Button>
    </YStack>
  )
}

const PartialDataToastDemo = () => {
  const { toast } = useToast()

  return (
    <YStack space="$3" alignItems="center">
      <Button onPress={() => toast({ title: 'Apenas Título' })}>
        Toast Apenas com Título
      </Button>
      <Button onPress={() => toast({ description: 'Apenas uma descrição, sem título.' })}>
        Toast Apenas com Descrição
      </Button>
    </YStack>
  )
}

// --- Stories ---

export const Padrao: Story = {
  name: 'Padrao',
  render: () => <ToastDemo />,
  parameters: {
    docs: {
      storyDescription:
        'Demonstração básica do Toast com variantes de feedback (padrão, destrutivo, sucesso) e uma ação opcional.',
    },
  },
}

export const StressTestConstraint: Story = {
  name: 'Teste de Estresse: Conteúdo Longo',
  render: () => <ConstrainedToastDemo />,
  parameters: {
    docs: {
      storyDescription:
        'Verifica como o Toast se comporta com textos longos que excedem o espaço disponível, garantindo que o layout permaneça intacto.',
    },
  },
}

export const StressTestPartialData: Story = {
  name: 'Teste de Estresse: Dados Parciais',
  render: () => <PartialDataToastDemo />,
  parameters: {
    docs: {
      storyDescription:
        'Testa a resiliência do componente quando apenas um título ou uma descrição é fornecido.',
    },
  },
}

export const CarregandoState: Story = {
  name: 'Estado de Carregamento',
  render: () => <ToastDemo />, // The loading button is inside the main demo
  parameters: {
    docs: {
      storyDescription:
        'Demonstra como acionar um toast de carregamento usando a prop `isLoading`. O toast de carregamento não desaparece automaticamente e deve ser dispensado programaticamente, geralmente sendo substituído por um toast de sucesso ou erro.',
    },
  },
}

export type ToastDemoProps = React.ComponentProps<typeof ToastDemo>

export type ConstrainedToastDemoProps = React.ComponentProps<typeof ConstrainedToastDemo>

export type PartialDataToastDemoProps = React.ComponentProps<typeof PartialDataToastDemo>

