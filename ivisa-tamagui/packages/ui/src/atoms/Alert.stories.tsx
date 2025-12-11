import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'
import { AlertTriangle, Info, CheckCircle, XCircle } from '@tamagui/lucide-icons'
import { action } from '@storybook/addon-actions'
import { YStack } from 'tamagui'

const meta: Meta<typeof Alert> = {
  title: 'Átomos/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'success', 'warning'],
    },
    isDismissible: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'default',
    isDismissible: false,
    onDismiss: action('dismissed'),
  },
  render: (args) => (
    <Alert {...args} icon={<Info />}>
      <Alert.Title>Atenção!</Alert.Title>
      <Alert.Description>
        Você pode adicionar componentes à sua aplicação usando o CLI.
      </Alert.Description>
    </Alert>
  ),
}

export default meta

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    variant: 'default',
    title: 'Atenção!',
    description: 'Você pode adicionar componentes à sua aplicação usando o CLI.',
    icon: <Info />,
    isDismissible: true,
  },
  render: (args) => (
    <Alert {...args}>
      <Alert.Title>{args.title}</Alert.Title>
      <Alert.Description>{args.description}</Alert.Description>
    </Alert>
  )
}

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Sucesso!',
    description: 'Sua operação foi concluída com êxito.',
    icon: <CheckCircle />,
    isDismissible: true,
  },
  render: (args) => (
    <Alert {...args}>
      <Alert.Title>{args.title}</Alert.Title>
      <Alert.Description>{args.description}</Alert.Description>
    </Alert>
  )
}

export const Warning: Story = {
    args: {
      variant: 'warning',
      title: 'Aviso!',
      description: 'Parece que há um problema com sua conexão de rede.',
      icon: <AlertTriangle />,
      isDismissible: true,
    },
    render: (args) => (
      <Alert {...args}>
        <Alert.Title>{args.title}</Alert.Title>
        <Alert.Description>{args.description}</Alert.Description>
      </Alert>
    )
  }

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    title: 'Erro!',
    description: 'Ocorreu um erro inesperado ao processar sua solicitação.',
    icon: <XCircle />,
    isDismissible: true,
  },
  render: (args) => (
    <Alert {...args}>
      <Alert.Title>{args.title}</Alert.Title>
      <Alert.Description>{args.description}</Alert.Description>
    </Alert>
  )
}

export const LongText: Story = {
    args: {
      variant: 'default',
      title: 'Texto Longo',
      description: 'Este é um texto muito longo para testar o comportamento de quebra de linha e truncamento do componente de alerta. O texto deve ser exibido corretamente sem quebrar o layout do componente.',
      icon: <Info />,
    },
    render: (args) => (
        <Alert {...args}>
          <Alert.Title>{args.title}</Alert.Title>
          <Alert.Description>{args.description}</Alert.Description>
        </Alert>
      )
  }

  export const Constrained: Story = {
      render: (args) => (
          <div style={{ maxWidth: '300px', border: '1px solid red', padding: '1rem' }}>
              <Alert {...args}>
                <Alert.Title>{args.title}</Alert.Title>
                <Alert.Description>{args.description}</Alert.Description>
            </Alert>
          </div>
      ),
      args: {
          variant: 'default',
          title: 'Contido',
          description: 'Este alerta está dentro de um contêiner pequeno para testar o comportamento responsivo.',
          icon: <Info />,
      },
  }

  export const OnlyTitle: Story = {
    args: {
      variant: 'default',
      title: 'Apenas um título, sem descrição.',
      icon: <Info />,
      isDismissible: true,
    },
    render: (args) => (
      <Alert {...args}>
        <Alert.Title>{args.title}</Alert.Title>
      </Alert>
    ),
  };
