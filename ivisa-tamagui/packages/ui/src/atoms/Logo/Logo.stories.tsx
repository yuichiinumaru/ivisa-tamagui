import type { Meta, StoryObj } from '@storybook/react'
import { YStack, Text } from 'tamagui'
import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Átomos/Logo',
  component: Logo as any,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'O componente `Logo` é um átomo visual essencial que exibe a identidade da marca. Ele é projetado para ser flexível, oferecendo diferentes variantes e cores para se adaptar a vários contextos de layout e temas.',
      },
    },
  },
  argTypes: {
    asChild: {
      name: 'Renderizar como filho (asChild)',
      description:
        'Se `true`, o componente será renderizado como um filho do componente passado, permitindo polimorfismo.',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    variant: {
      name: 'Variante',
      description: 'Define a variante do logo a ser exibida (`full` ou `symbol`).',
      control: { type: 'select' },
      options: ['full', 'symbol'],
      table: {
        defaultValue: { summary: 'full' },
        type: { summary: "'full' | 'symbol'" },
      },
    },
    color: {
      name: 'Cor',
      description: 'Define a cor do logo (`primary` ou `white`).',
      control: { type: 'radio' },
      options: ['primary', 'white'],
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: "'primary' | 'white'" },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Logo>

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    variant: 'full',
    color: 'primary',
  },
}

export const Simbolo: Story = {
  name: 'Símbolo',
  args: {
    variant: 'symbol',
    color: 'primary',
  },
}

export const Branco: Story = {
  name: 'Branco',
  args: {
    variant: 'full',
    color: 'white',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const SimboloBranco: Story = {
  name: 'Símbolo Branco',
  args: {
    variant: 'symbol',
    color: 'white',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const EmContainerPequeno: Story = {
  name: 'Em Container Pequeno',
  decorators: [
    (Story) => (
      <YStack
        width={120}
        padding="$3"
        borderRadius="$4"
        borderWidth={1}
        borderColor="$borderColor"
        alignItems="center"
        justifyContent="center"
      >
        <Story />
      </YStack>
    ),
  ],
  args: {
    variant: 'full',
    color: 'primary',
  },
}

export const ComoLink: Story = {
  name: 'Como Link (asChild)',
  render: (args) => (
    <Logo {...args} asChild>
      <a href="https://tamagui.dev" target="_blank" rel="noopener noreferrer">
        <Text>Eu sou um link com o logo dentro!</Text>
      </a>
    </Logo>
  ),
  args: {
    variant: 'full',
    color: 'primary',
  },
}

export const LogosOficiais: Story = {
  name: 'Logos Oficiais PCRJ',
  render: () => (
    <YStack gap="$4" padding="$4">
      <YStack gap="$2">
        <Text fontWeight="bold">Horizontal - Brasão Gradiente</Text>
        <img src="/logos/Logo_PCRJ_Horizontal_BrasaoGradiente.svg" alt="PCRJ Horizontal Gradiente" style={{ height: 60 }} />
      </YStack>
      <YStack gap="$2">
        <Text fontWeight="bold">Horizontal - Azul</Text>
        <img src="/logos/Logo_PCRJ_Horizontal_UmaCor-Azul.svg" alt="PCRJ Horizontal Azul" style={{ height: 60 }} />
      </YStack>
      <YStack gap="$2" backgroundColor="$slate900" padding="$2" borderRadius="$2">
        <Text fontWeight="bold" color="white">Horizontal - Branco</Text>
        <img src="/logos/Logo_PCRJ_Horizontal_UmaCor-Branco.svg" alt="PCRJ Horizontal Branco" style={{ height: 60 }} />
      </YStack>
      <YStack gap="$2">
        <Text fontWeight="bold">Vertical - Brasão Gradiente</Text>
        <img src="/logos/Logo_PCRJ_Vertical_BrasaoGradiente.svg" alt="PCRJ Vertical Gradiente" style={{ height: 100 }} />
      </YStack>
    </YStack>
  ),
}
