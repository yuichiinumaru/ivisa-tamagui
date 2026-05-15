// Removed @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'
import { Search } from '@tamagui/lucide-icons'
import { YStack, Text } from 'tamagui'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Átomos/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    state: {
      control: { type: 'select' },
      options: ['error', 'success'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Padrao: Story = {
  args: {
    placeholder: 'Digite algo...',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText('Digite algo...')
    await userEvent.type(input, 'Olá, mundo!', { delay: 100 })
  }
}

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Input preenchido...',
  },
}

export const ComIcone: Story = {
  render: () => (
    <YStack gap="$4" width={300}>
      <Text>Input com Ícone à Esquerda</Text>
      <Input>
        <Input.Icon>
          <Search size="$1" />
        </Input.Icon>
        <Input.Field placeholder="Buscar..." />
      </Input>

      <Text>Input com Ícone à Direita</Text>
      <Input>
        <Input.Field placeholder="Buscar..." />
        <Input.Icon>
          <Search size="$1" />
        </Input.Icon>
      </Input>
    </YStack>
  ),
}

export const ComBotao: Story = {
  render: () => (
    <YStack gap="$4" width={300}>
      <Text>Input com Botão</Text>
      <Input>
        <Input.Field placeholder="Endereço de e-mail" />
        <Input.Button>
          Inscrever-se
        </Input.Button>
      </Input>
    </YStack>
  ),
}

export const ComposedComplete: Story = {
  render: () => (
    <YStack gap="$4" width={300}>
      <Text>Ícone + Campo + Botão</Text>
      <Input>
        <Input.Icon>
          <Search size="$1" />
        </Input.Icon>
        <Input.Field placeholder="Buscar..." />
        <Input.Button themeInverse>
          Ir
        </Input.Button>
      </Input>
    </YStack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <YStack gap="$4" width={300}>
      <Input size="sm" placeholder="Pequeno" />
      <Input size="default" placeholder="Padrão" />
      <Input size="lg" placeholder="Grande" />

      <Text marginTop="$4">Tamanhos Compostos (herdam do Frame)</Text>
      <Input size="sm">
         <Input.Icon><Search size={12} /></Input.Icon>
         <Input.Field placeholder="Pequeno Composto" />
      </Input>
       <Input size="lg">
         <Input.Icon><Search size={20} /></Input.Icon>
         <Input.Field placeholder="Grande Composto" />
      </Input>
    </YStack>
  ),
}

export const Carregando: Story = {
  args: {
    loading: true,
    placeholder: 'Carregando...',
  },
}

export const ComposedLoading: Story = {
  render: () => (
    <YStack gap="$4" width={300}>
      <Text>Input Composto em Carregamento</Text>
      <Input loading>
        <Input.Icon>
          <Search size="$1" />
        </Input.Icon>
        <Input.Field placeholder="Buscando..." />
        <Input.Button>
          Buscar
        </Input.Button>
      </Input>
    </YStack>
  )
}


export const TextoLongo: Story = {
  args: {
    defaultValue: 'Este é um texto muito longo para testar o comportamento do input com strings que excedem seu tamanho horizontal para garantir que o overflow ou o scroll funcionem como esperado.',
  },
}

export const ConstraintCheck: Story = {
  render: () => (
    <YStack gap="$4" width={150}>
      <Text>Input em um contêiner pequeno</Text>
      <Input placeholder="Placeholder..." />
      <Input>
        <Input.Field placeholder="Composto..." />
        <Input.Button>Ir</Input.Button>
      </Input>
    </YStack>
  )
}

export const ComDica: Story = {
  render: () => (
    <YStack gap="$4" width={300}>
      <Text>Input com Dica</Text>
      <Input placeholder="Digite seu nome" />
      <Input.Hint>Esta é uma dica útil.</Input.Hint>
    </YStack>
  )
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Digite sua senha',
  },
}

export const Sucesso: Story = {
  args: {
    state: 'success',
    defaultValue: 'contato@ivisa.com',
  },
}

export const Error: Story = {
  render: () => (
    <YStack gap="$4" width={300}>
      <Input state="error" defaultValue="email-invalido" />
      <Input.Hint>O e-mail inserido é inválido.</Input.Hint>
    </YStack>
  )
}

