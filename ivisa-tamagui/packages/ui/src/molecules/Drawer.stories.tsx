import type { Meta, StoryObj } from '@storybook/react'
import { Drawer } from './Drawer'
import { Button } from '../atoms/Button'
import { YStack, Text, Paragraph } from 'tamagui'
import { Input } from '../atoms/Input'
import { Label } from '../atoms/Label'

const meta: Meta<typeof Drawer> = {
  title: 'Molecules/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Um drawer que desliza da parte inferior da tela, construído sobre o Sheet do Tamagui.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'O título exibido no cabeçalho do drawer.',
    },
    description: {
      control: 'text',
      description: 'Uma descrição opcional exibida abaixo do título.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Se verdadeiro, exibe um skeleton loader no lugar do conteúdo.',
    },
    hasError: {
      control: 'boolean',
      description: 'Se verdadeiro, aplica um estilo de erro ao título.',
    },
  },
}

export default meta

type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  args: {
    title: 'Editar Perfil',
    description: 'Faça alterações no seu perfil aqui. Clique em salvar quando terminar.',
    trigger: <Button>Abrir Drawer</Button>,
  },
  render: (args) => (
    <Drawer
      {...args}
      footer={
        <>
          <Drawer.Close asChild>
            <Button variant="outline">Cancelar</Button>
          </Drawer.Close>
          <Button>Salvar Alterações</Button>
        </>
      }
    >
      <YStack space="$4">
        <YStack space="$2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" defaultValue="John Doe" />
        </YStack>
        <YStack space="$2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" defaultValue="john.doe@example.com" />
        </YStack>
      </YStack>
    </Drawer>
  ),
}

export const LoadingState: Story = {
  args: {
    ...Default.args,
    isLoading: true,
    title: 'Carregando Dados',
    description: 'Por favor, aguarde enquanto buscamos suas informações.',
  },
  render: (args) => (
    <Drawer {...args} footer={<Button disabled>Carregando...</Button>}>
      <Text>Este conteúdo não será exibido.</Text>
    </Drawer>
  ),
}

export const ErrorState: Story = {
  args: {
    ...Default.args,
    hasError: true,
    title: 'Erro ao Salvar',
    description: 'Não foi possível salvar as alterações. Verifique os campos.',
  },
  render: (args) => (
    <Drawer
      {...args}
      footer={
        <>
          <Drawer.Close asChild>
            <Button variant="outline">Ok</Button>
          </Drawer.Close>
        </>
      }
    >
      <Paragraph color="$red10">
        Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.
      </Paragraph>
    </Drawer>
  ),
}

export const LongContent: Story = {
  name: 'Conteúdo Longo (Scroll)',
  args: {
    ...Default.args,
    title: 'Termos de Serviço',
    description: 'Leia e aceite os termos para continuar.',
  },
  render: (args) => (
    <Drawer
      {...args}
      footer={
        <Drawer.Close asChild>
          <Button>Eu Aceito</Button>
        </Drawer.Close>
      }
    >
      <YStack space="$3" maxHeight={300}>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Paragraph>
        <Paragraph>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </Paragraph>
        <Paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.
        </Paragraph>
        <Paragraph>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </Paragraph>
      </YStack>
    </Drawer>
  ),
}

export const NoFooter: Story = {
  name: 'Sem Rodapé',
  args: {
    ...Default.args,
    title: 'Aviso',
    description: 'Esta é uma notificação importante sem ações.',
  },
  render: (args) => (
    <Drawer {...args}>
      <Paragraph>
        Seu perfil foi atualizado com sucesso. Nenhuma outra ação é necessária.
      </Paragraph>
    </Drawer>
  ),
}

export const Composition: Story = {
  name: 'Composição Avançada',
  args: {
    trigger: <Button>Abrir com Composição</Button>,
  },
  render: ({ trigger }) => {
    return (
      <Drawer.Content>
        {trigger}
        <Drawer.Portal>
          <Drawer.Overlay />
          <Drawer.Content animation="medium" enterStyle={{ y: 300 }} exitStyle={{ y: 300 }}>
            <Drawer.Handle />
            <YStack padding="$4" space>
              <Drawer.Title>Título Customizado</Drawer.Title>
              <Paragraph>
                Este layout foi construído usando as partes de baixo nível do Drawer para controle
                total.
              </Paragraph>
              <Button theme="green">Ação Customizada</Button>
              <Drawer.Close asChild>
                <Button>Fechar</Button>
              </Drawer.Close>
            </YStack>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Content>
    )
  },
}
