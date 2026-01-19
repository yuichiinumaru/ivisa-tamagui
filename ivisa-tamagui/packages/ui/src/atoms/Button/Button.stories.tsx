import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'
import { expect, fn } from '@storybook/test'
import { Button } from './Button'
import { Text } from 'tamagui'

const meta: Meta<any> = {
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
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
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

type Story = StoryObj<any>

export const Primario: Story = {
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

export const Secundario: Story = {
  args: {
    ...Primario.args,
    children: 'Cancelar',
    variant: 'secondary',
  },
}

export const Destrutivo: Story = {
  args: {
    ...Primario.args,
    children: 'Excluir',
    variant: 'destructive',
  },
}

export const Contorno: Story = {
  args: {
    ...Primario.args,
    variant: 'outline',
  },
}

export const Fantasma: Story = {
  args: {
    ...Primario.args,
    variant: 'ghost',
  },
}

export const ComIcone: Story = {
  args: {
    ...Primario.args,
    children: 'Salvar',
    leftIcon: <Text>✅</Text>,
  },
}

export const Pequeno: Story = {
  args: {
    ...Primario.args,
    size: 'sm',
  },
}

export const Grande: Story = {
  args: {
    ...Primario.args,
    size: 'lg',
  },
}

export const Desabilitado: Story = {
  args: {
    ...Primario.args,
    disabled: true,
  },
}

export const ComTextoLongo: Story = {
  args: {
    ...Primario.args,
    children: 'Este é um texto excessivamente longo para um botão para testar o comportamento de quebra de linha e truncamento.',
  },
}

export const EmContainerPequeno: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '150px', border: '1px solid #ccc', padding: '10px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    ...Primario.args,
    children: 'Botão Pressionado',
  },
}

export const Carregando: Story = {
  args: {
    ...Primario.args,
    loading: true,
  },
}

