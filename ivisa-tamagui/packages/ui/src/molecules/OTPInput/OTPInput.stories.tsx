import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { YStack, Text } from 'tamagui'

import { OTPInput } from './OTPInput'

const meta: Meta<React.ComponentProps<typeof OTPInput>> = {
  title: 'Moléculas/OTPInput',
  component: OTPInput,
  tags: ['autodocs'],
  args: {
    length: 6,
    hasError: false,
    isLoading: false,
    disabled: false,
  },
  argTypes: {
    length: {
      control: { type: 'number' },
    },
    hasError: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof OTPInput>>

export const Padrao: Story = {
  render: args => {
    const [value, setValue] = React.useState('')
    const [completedValue, setCompletedValue] = React.useState<string | null>(null)

    return (
      <YStack gap="$4" width={320}>
        <OTPInput
          {...args}
          value={value}
          onChange={setValue}
          onComplete={setCompletedValue}
          autoFocus
        />
        <Text fontSize="$3">Valor: {value || '—'}</Text>
        <Text fontSize="$3">Completo: {completedValue || 'Aguardando…'}</Text>
      </YStack>
    )
  },
}

export const MascaraAlfanumerica: Story = {
  args: {
    allowedCharacters: 'alphanumeric',
    mask: true,
    length: 8,
  },
  render: args => {
    const [value, setValue] = React.useState('')

    return (
      <YStack gap="$4" width={320}>
        <OTPInput {...args} value={value} onChange={setValue} />
        <Text fontSize="$3">Valor Mascarado: {value || '—'}</Text>
      </YStack>
    )
  },
}

export const ComErro: Story = {
  args: {
    hasError: true,
  },
  render: args => {
    const [value, setValue] = React.useState('123')

    return (
      <YStack gap="$4" width={320}>
        <OTPInput {...args} value={value} onChange={setValue} />
        <Text fontSize="$3" color="$red10">
          Ocorreu um erro ao validar o código.
        </Text>
      </YStack>
    )
  },
}

export const Carregando: Story = {
  args: {
    isLoading: true,
  },
  render: args => (
    <YStack gap="$4" width={320}>
      <OTPInput {...args} />
      <Text fontSize="$3">Validando o código...</Text>
    </YStack>
  ),
}

export const ContainerEstreito: Story = {
  render: args => {
    const [value, setValue] = React.useState('')

    return (
      <YStack gap="$4" width={240}>
        <OTPInput {...args} length={6} value={value} onChange={setValue} />
        <Text fontSize="$3">
          O componente se ajusta a um contêiner mais estreito sem quebrar o layout.
        </Text>
      </YStack>
    )
  },
}
