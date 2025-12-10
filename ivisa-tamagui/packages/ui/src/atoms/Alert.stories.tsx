import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Alert } from './Alert'
import { AlertTriangle } from '@tamagui/lucide-icons'

const meta: Meta<typeof Alert> = {
  title: 'atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive'],
    },
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    // leftIcon and rightIcon are React.ReactNode, so we don't add controls for them.
  },
}

export default meta

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    variant: 'default',
    title: 'Atenção!',
    description: 'Você pode adicionar componentes à sua aplicação usando o CLI.',
    leftIcon: <AlertTriangle />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const alert = await canvas.findByRole('alert')
    await expect(alert).toBeInTheDocument()
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    title: 'Erro!',
    description: 'Ocorreu um erro inesperado ao processar sua solicitação.',
    leftIcon: <AlertTriangle />,
  },
}

export const LongText: Story = {
  args: {
    variant: 'default',
    title: 'Texto Longo',
    description: 'Este é um texto muito longo para testar o comportamento de quebra de linha e truncamento do componente de alerta. O texto deve ser exibido corretamente sem quebrar o layout do componente.',
    leftIcon: <AlertTriangle />,
  },
}

export const Constrained: Story = {
    render: (args) => (
        <div style={{ maxWidth: '200px', border: '1px solid red' }}>
            <Alert {...args} />
        </div>
    ),
    args: {
        variant: 'default',
        title: 'Contido',
        description: 'Este alerta está dentro de um contêiner pequeno.',
        leftIcon: <AlertTriangle />,
    },
}
