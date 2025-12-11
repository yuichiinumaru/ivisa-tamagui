import type { Meta, StoryObj } from '@storybook/react'
import { ToggleGroup } from './ToggleGroup'
import { Text, YStack } from 'tamagui'
import { AlignCenter, AlignLeft, AlignRight } from '@tamagui/lucide-icons'

const meta: Meta<typeof ToggleGroup> = {
  title: 'Molecules/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof ToggleGroup>

const renderToggleGroup = (args) => (
  <ToggleGroup {...args}>
    <ToggleGroup.Item value="esquerda" aria-label="Alinhar à esquerda">
      <AlignLeft />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="centro" aria-label="Alinhar ao centro">
      <AlignCenter />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="direita" aria-label="Alinhar à direita">
      <AlignRight />
    </ToggleGroup.Item>
  </ToggleGroup>
)

export const Padrao: Story = {
  args: {
    type: 'single',
    defaultValue: 'centro',
  },
  render: renderToggleGroup,
}

export const MultiplaSelecao: Story = {
  args: {
    type: 'multiple',
    defaultValue: ['esquerda', 'direita'],
  },
  render: renderToggleGroup,
}

export const Desabilitado: Story = {
  args: {
    type: 'single',
    defaultValue: 'centro',
    disabled: true,
  },
  render: renderToggleGroup,
}

export const ComErro: Story = {
  args: {
    type: 'single',
    defaultValue: 'centro',
    error: true,
  },
  render: renderToggleGroup,
}

export const Carregando: Story = {
  args: {
    type: 'single',
    loading: true,
  },
  render: renderToggleGroup,
}

export const EstresseDeTexto: Story = {
    args: {
        type: 'single',
        defaultValue: 'item1',
    },
    render: (args) => (
        <YStack width={200}>
            <ToggleGroup {...args}>
                <ToggleGroup.Item value="item1" aria-label="Item com texto muito longo que deve ser cortado">
                    <Text overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
                        TextoLongoQueNaoDeveriaQuebrar
                    </Text>
                </ToggleGroup.Item>
                <ToggleGroup.Item value="item2" aria-label="Item 2">
                    <Text>Item 2</Text>
                </ToggleGroup.Item>
            </ToggleGroup>
        </YStack>
    ),
}
