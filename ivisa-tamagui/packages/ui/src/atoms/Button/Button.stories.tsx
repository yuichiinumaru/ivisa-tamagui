// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'
import { expect, fn } from '@storybook/test'
import { Button } from './Button'
import { Text } from 'tamagui'

const meta: Meta<typeof Button> = {
  title: 'Átomos/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Uso
Botões são usados para disparar ações ou navegação. Eles devem ser usados para ações primárias (Salvar, Enviar) e ações secundárias (Cancelar, Voltar).

### Variantes
- **Default**: Ação primária.
- **Secondary**: Ação de menor prioridade.
- **Destructive**: Ação que exclui ou remove dados.
- **Outline**: Ação secundária alternativa.
- **Ghost**: Ação minimalista, frequentemente usada em barras de ferramentas.
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'quiet'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'xl'],
    },
    children: {
      control: { type: 'text' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    asChild: {
      control: { type: 'boolean' },
    },
    leftIcon: {
      control: false,
    },
    rightIcon: {
      control: false,
    },
    onClick: { action: 'clicked' },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Enviar',
    variant: 'default',
    size: 'default',
    loading: false,
    disabled: false,
    asChild: false,
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /Enviar/i })
    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalled()
  },
}

export const Secondary: Story = {
  args: {
    ...Default.args,
    children: 'Cancelar',
    variant: 'secondary',
  },
}

export const Destructive: Story = {
  args: {
    ...Default.args,
    children: 'Excluir',
    variant: 'destructive',
  },
}

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: 'ghost',
  },
}

export const Quiet: Story = {
  args: {
    ...Default.args,
    variant: 'quiet',
  },
}

export const WithIcon: Story = {
  args: {
    ...Default.args,
    children: 'Salvar',
  },
  render: (args) => <Button {...args} leftIcon={<Text>✅</Text>} />,
}

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg',
  },
}

export const ExtraLarge: Story = {
  args: {
    ...Default.args,
    size: 'xl',
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const LongText: Story = {
  args: {
    ...Default.args,
    children: 'Este é um texto excessivamente longo para um botão para testar o comportamento de quebra de linha e truncamento.',
  },
}

export const SmallContainer: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '150px', border: '1px solid #ccc', padding: '10px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    ...Default.args,
    children: 'Botão Pressionado',
  },
}

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
}
