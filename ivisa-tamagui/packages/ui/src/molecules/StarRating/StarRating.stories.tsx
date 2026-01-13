// @ts-nocheck

// import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { StarRating } from './StarRating'
import { YStack, Text, XStack } from 'tamagui'
import { useState } from 'react'
import { Heart } from '@tamagui/lucide-icons'


const meta: Meta<React.ComponentProps<typeof StarRating>> = {
  title: 'Moléculas/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number', description: 'Valor atual da avaliação.' },
    count: { control: 'number', description: 'Número total de estrelas.' },
    size: {
      control: 'select',
      options: ['$1', '$2', '$3', '$4', '$5', '$6'],
      description: 'Tamanho do ícone da estrela.',
    },
    disabled: { control: 'boolean', description: 'Desativa a interação.' },
    isLoading: { control: 'boolean', description: 'Mostra o estado de carregamento (skeleton).' },
    hasError: { control: 'boolean', description: 'Mostra o estado de erro.' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Um componente para exibir e interagir com uma avaliação por estrelas.',
      },
    },
  },
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof StarRating>>

export const Padrao: Story = {
  name: 'Padrão',
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 3)
    return <StarRating {...args} value={value} onChange={setValue} />
  },
  args: {
    count: 5,
    value: 3,
  },
}

export const Controlado: Story = {
  name: 'Controlado',
  render: () => {
    const [rating, setRating] = useState<number | null>(2)
    return (
      <YStack gap="$4" ai="flex-start">
        <Text>Avaliação Atual: {rating ?? 'Nenhuma'}</Text>
        <StarRating value={rating} onChange={setRating} count={5} size="$4" />
      </YStack>
    )
  },
}

export const Desativado: Story = {
  name: 'Desativado',
  args: {
    count: 5,
    value: 4,
    disabled: true,
  },
}

export const CoresCustomizadas: Story = {
  name: 'Cores Customizadas',
  render: (args) => {
    const [value, setValue] = useState(3)
    return <StarRating {...args} value={value} onChange={setValue} />
  },
  args: {
    count: 5,
    value: 3,
    colorInactive: '$gray5',
    colorActive: '$blue10',
    size: '$4',
  },
}

export const IconeCustomizado: Story = {
  name: 'Ícone Customizado',
  render: (args) => {
    const [value, setValue] = useState(2)
    return <StarRating {...args} value={value} onChange={setValue} />
  },
  args: {
    count: 5,
    value: 2,
    Icon: Heart,
    colorActive: '$red10',
    size: '$4',
  },
}

export const Carregando: Story = {
  name: 'Carregando (Skeleton)',
  args: {
    count: 5,
    isLoading: true,
    size: '$3',
  },
}

export const ComErro: Story = {
  name: 'Com Erro',
  args: {
    count: 5,
    value: 3,
    hasError: true,
  },
}

export const ComSlotDireito: Story = {
  name: 'Com Slot Direito',
  render: (args) => {
    const [value, setValue] = useState(4)
    return (
      <StarRating
        {...args}
        value={value}
        onChange={setValue}
        rightSlot={
          <Text size="$2" ml="$2" col="$gray10">
            ({value} de 5)
          </Text>
        }
      />
    )
  },
  args: {
    count: 5,
    size: '$3',
  },
}

export const EmContainerEstreito: Story = {
  name: 'Em Container Estreito',
  render: (args) => {
    const [value, setValue] = useState(4)
    return (
      <XStack width={200} boc="$red5" bw={1} p="$2" jc="center">
        <StarRating {...args} value={value} onChange={setValue} />
      </XStack>
    )
  },
  args: {
    count: 5,
  },
}
