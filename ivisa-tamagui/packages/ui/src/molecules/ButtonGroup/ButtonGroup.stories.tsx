// @ts-nocheck

import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGroup } from './ButtonGroup'
import { Button } from '../../atoms/Button'
import { YStack } from 'tamagui'
import { Heart } from '@tamagui/lucide-icons'


const meta: Meta<React.ComponentProps<typeof ButtonGroup>> = {
  title: 'Moléculas/Grupo de Botões',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Um Grupo de Botões organiza ações relacionadas em um layout de pilha horizontal, aplicando espaçamento consistente e gerenciando estados unificados.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    gap: {
      control: { type: 'select' },
      options: ['$1', '$2', '$3', '$4', '$5', '$6'],
      description: 'O espaçamento entre os botões no grupo.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Desabilita todos os botões no grupo.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Mostra um estado de esqueleto para o grupo de botões.',
    },
    hasError: {
      control: 'boolean',
      description: 'Aplica um estilo de erro (borda vermelha) aos botões filhos.',
    },
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof ButtonGroup>>

const renderButtons = (args) => (
  <ButtonGroup {...args}>
    <Button>Primário</Button>
    <Button>Secundário</Button>
    <Button>Terciário</Button>
  </ButtonGroup>
)

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    gap: '$2',
    isDisabled: false,
    isLoading: false,
    hasError: false,
  },
  render: renderButtons,
}

export const Carregando: Story = {
  args: {
    isLoading: true,
  },
  render: renderButtons,
}

export const Desabilitado: Story = {
  args: {
    isDisabled: true,
  },
  render: renderButtons,
}

export const ComErro: Story = {
  args: {
    hasError: true,
  },
  render: renderButtons,
}

export const ComSlotDireito: Story = {
  name: 'Com Slot Direito',
  args: {
    rightSlot: (
      <Button icon={<Heart />} variant="outline">
        Favorito
      </Button>
    ),
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Ação Principal</Button>
      <Button>Outra Ação</Button>
    </ButtonGroup>
  ),
}

export const ContainerPequeno: Story = {
  name: 'Container Pequeno',
  decorators: [
    (Story) => (
      <YStack width={250} p="$2" borderWidth={1} borderColor="$borderColor" borderRadius="$4">
        <Story />
      </YStack>
    ),
  ],
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Botão Um</Button>
      <Button>Botão Dois</Button>
    </ButtonGroup>
  ),
}
