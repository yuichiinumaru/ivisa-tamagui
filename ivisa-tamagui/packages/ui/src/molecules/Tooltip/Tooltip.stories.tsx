
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'
import { Button } from '../../atoms/Button'
import { XStack, YStack, Text, Paragraph } from 'tamagui'


const meta: Meta<React.ComponentProps<typeof Tooltip>> = {
  title: 'Moléculas/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'text' },
    },
    placement: {
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'select' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    hasError: {
      control: { type: 'boolean' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof Tooltip>>

export const Padrao: Story = {
  args: {
    content: 'Isso é uma dica de ferramenta.',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Passe o mouse sobre mim</Button>
    </Tooltip>
  ),
}

export const ComConteudoCustomizado: Story = {
  args: {
    content: (
      <YStack padding="$2" backgroundColor="$background" borderRadius="$2">
        <Paragraph fontWeight="bold">Título Customizado</Paragraph>
        <Text>Este é um conteúdo customizado com múltiplos elementos.</Text>
      </YStack>
    ),
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="outline">Conteúdo Customizado</Button>
    </Tooltip>
  ),
}

export const Carregando: Story = {
  args: {
    isLoading: true,
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Isso não será visível</Button>
    </Tooltip>
  ),
}

export const ComErro: Story = {
  args: {
    content: 'Ocorreu um erro ao processar a informação.',
    hasError: true,
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="destructive">Passe para ver o erro</Button>
    </Tooltip>
  ),
}

export const Desabilitado: Story = {
  args: {
    content: 'Você não verá esta mensagem.',
    isDisabled: true,
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Tooltip Desabilitado</Button>
    </Tooltip>
  ),
}

export const ComAcoes: Story = {
  args: {
    content: 'Você pode adicionar ações aqui.',
    actions: (
      <>
        <Button size="$1" variant="outline">
          Cancelar
        </Button>
        <Button size="$1">Confirmar</Button>
      </>
    ),
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Tooltip com Ações</Button>
    </Tooltip>
  ),
}

export const EmContainerApertado: Story = {
  decorators: [
    (Story) => (
      <XStack width={200} justifyContent="center">
        <Story />
      </XStack>
    ),
  ],
  args: {
    content:
      'Este é um texto muito longo para a dica de ferramenta, que deve quebrar a linha ou ser truncado para caber no contêiner de largura máxima.',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Container Apertado</Button>
    </Tooltip>
  ),
}
