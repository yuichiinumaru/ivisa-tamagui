// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import { Kbd } from './Kbd'
import { XStack, Text } from 'tamagui'
import { userEvent, within } from '@storybook/test'
import { Search } from '@tamagui/lucide-icons'
import { expect } from '@storybook/test'

const meta: Meta<typeof Kbd> = {
  title: 'Átomos/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Uso
O componente \`Kbd\` é usado para exibir atalhos de teclado.

### Variantes
- **Tamanhos**: \`sm\`, \`default\`, \`lg\`.
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'subtle'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    children: {
      control: { type: 'text' },
    },
    onClick: { action: 'clicked' },
    asChild: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Kbd>

export const Padrao: Story = {
  args: {
    children: '⌘K',
    size: 'default',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const kbd = canvas.getByText('⌘K')
    await userEvent.click(kbd)
    expect(kbd).toBeInTheDocument()
  },
}

export const Pequeno: Story = {
  args: {
    ...Padrao.args,
    size: 'sm',
  },
}

export const Grande: Story = {
  args: {
    ...Padrao.args,
    size: 'lg',
  },
}

export const Sutil: Story = {
  args: {
    ...Padrao.args,
    variant: 'subtle',
  },
}

export const ComoBotao: Story = {
  render: (args) => (
    <Kbd {...args}>
      <button>Botão</button>
    </Kbd>
  ),
  args: {
    asChild: true,
  },
}

export const ComIcone: Story = {
  args: {
    ...Padrao.args,
    iconBefore: <Search size={12} />,
  },
}

export const Combinacao: Story = {
  render: (args) => (
    <XStack gap="$2" alignItems="center">
      <Text>Pressione</Text>
      <Kbd {...args}>⌘</Kbd>
      <Text>+</Text>
      <Kbd {...args}>Shift</Kbd>
      <Text>+</Text>
      <Kbd {...args}>P</Kbd>
    </XStack>
  ),
  args: {
    size: 'default',
  },
}

export const TextoExtenso: Story = {
  args: {
    children: 'a'.repeat(100),
    size: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Este teste verifica como o componente lida com textos muito longos.',
      },
    },
  },
}

export const EmContainerPequeno: Story = {
  render: (args) => (
    <div style={{ maxWidth: '100px', border: '1px solid red', padding: '10px' }}>
      <Kbd {...args} />
    </div>
  ),
  args: {
    children: 'TextoLongoParaTestarQuebra',
    size: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Este teste verifica o comportamento do componente dentro de um contêiner com largura limitada.',
      },
    },
  },
}
