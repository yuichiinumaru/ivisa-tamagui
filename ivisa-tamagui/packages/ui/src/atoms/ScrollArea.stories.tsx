
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'
import { Text, YStack } from 'tamagui'
import { ScrollArea } from './ScrollArea'


const renderItems = (count: number, prefix: string) => (
  <>
    {Array.from({ length: count })
      .map((_, i) => `${prefix} ${i + 1}`)
      .map((tag) => (
        <Text key={tag} py="$1">
          {tag}
        </Text>
      ))}
  </>
)

const meta: Meta<React.ComponentProps<typeof ScrollArea>> = {
  title: 'Átomos/Área de Rolagem',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Um componente de área de rolagem para exibir conteúdo que transborda o seu contêiner. Construído sobre o ScrollView do Tamagui para garantir compatibilidade entre plataformas.',
      },
    },
  },
  argTypes: {
    scrollbar: {
      control: 'select',
      options: ['default', 'subtle', 'hidden'],
      description: 'Define o estilo visual da barra de rolagem.',
      defaultValue: { summary: 'default' },
    },
    horizontal: {
      control: 'boolean',
      description: 'Define a direção de rolagem para horizontal.',
      defaultValue: { summary: false },
    },
    showsVerticalScrollIndicator: {
      control: 'boolean',
      description: 'Controla a visibilidade do indicador de rolagem vertical.',
      defaultValue: { summary: true },
    },
    showsHorizontalScrollIndicator: {
      control: 'boolean',
      description: 'Controla a visibilidade do indicador de rolagem horizontal.',
      defaultValue: { summary: true },
    },
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <YStack height={200} width={300} borderWidth={1} borderColor="$borderColor" borderRadius="$4">
        <Story />
      </YStack>
    ),
  ],
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof ScrollArea>>

export const Padrao: Story = {
  name: 'Padrão (Vertical)',
  args: {
    scrollbar: 'default',
    'aria-label': 'Área de rolagem com uma lista de etiquetas',
  },
  render: (args) => (
    <ScrollArea {...args}>
      <YStack p="$4">
        <Text fontSize="$4" fontWeight="bold" mb="$2">
          Etiquetas
        </Text>
        {renderItems(50, 'Etiqueta')}
      </YStack>
    </ScrollArea>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const scrollAreaWithLabel = canvas.getByLabelText('Área de rolagem com uma lista de etiquetas')

    await step('Verificar se a primeira etiqueta está visível', async () => {
      await canvas.findByText('Etiqueta 1')
    })

    await step('Simular clique na área de rolagem para acionar a ação', async () => {
      await userEvent.click(scrollAreaWithLabel)
    })
  },
}

export const Sutil: Story = {
  name: 'Barra de Rolagem Sutil',
  args: {
    scrollbar: 'subtle',
    'aria-label': 'Área de rolagem com barra de rolagem sutil',
  },
  render: (args) => (
    <ScrollArea {...args}>
      <YStack p="$4">{renderItems(50, 'Item')}</YStack>
    </ScrollArea>
  ),
}

export const Oculta: Story = {
  name: 'Barra de Rolagem Oculta',
  args: {
    scrollbar: 'hidden',
    'aria-label': 'Área de rolagem com barra de rolagem oculta',
  },
  render: (args) => (
    <ScrollArea {...args}>
      <YStack p="$4">{renderItems(50, 'Item')}</YStack>
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  args: {
    horizontal: true,
    scrollbar: 'default',
    'aria-label': 'Área de rolagem horizontal com itens',
  },
  render: (args) => (
    <ScrollArea {...args}>
      <YStack p="$4" flexDirection="row" gap="$4">
        {Array.from({ length: 20 }).map((_, i) => (
          <Text key={i} whiteSpace="nowrap">
            Item {i + 1}
          </Text>
        ))}
      </YStack>
    </ScrollArea>
  ),
}
