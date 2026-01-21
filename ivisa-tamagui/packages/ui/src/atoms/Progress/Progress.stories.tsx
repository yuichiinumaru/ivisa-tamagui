// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import { Progress, ProgressProps } from './Progress'
import { YStack } from 'tamagui'

const meta: Meta<typeof Progress> = {
  title: 'Átomos/Progress',
  component: Progress,
  tags: ['autodocs'],
  args: {
    value: 50,
    size: 'md',
    status: 'default',
    showValue: false,
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Progresso atual (0-100).',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Tamanho da barra de progresso.',
    },
    status: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
      description: 'Estado semântico (cor).',
    },
    showValue: {
      control: 'boolean',
      description: 'Exibe a porcentagem ao lado da barra.',
    },
    label: {
      control: 'text',
      description: 'Texto descritivo exibido acima da barra.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente atômico para visualização de progresso. Suporta variantes de tamanho, status semânticos e exibição de valores numéricos.',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Progress>

export const Padrao: Story = {}

export const ComValor: Story = {
  args: {
    showValue: true,
  },
}

export const ComRotulo: Story = {
  args: {
    label: 'Carregando arquivos...',
    value: 30,
    showValue: true,
  },
}

export const Statuses: Story = {
  render: (args) => (
    <YStack gap="$4" width={300}>
      <Progress {...args} status="default" label="Padrão" value={20} />
      <Progress {...args} status="success" label="Sucesso" value={100} />
      <Progress {...args} status="warning" label="Aviso" value={60} />
      <Progress {...args} status="error" label="Erro" value={40} />
    </YStack>
  ),
}

export const Tamanhos: Story = {
  render: (args) => (
    <YStack gap="$4" width={300}>
      <Progress {...args} size="xs" label="Extra Small" />
      <Progress {...args} size="sm" label="Small" />
      <Progress {...args} size="md" label="Medium" />
      <Progress {...args} size="lg" label="Large" />
    </YStack>
  ),
}

export const Composto: Story = {
  render: () => (
    <Progress.Root value={75} size="lg">
      <Progress.Indicator status="warning" />
    </Progress.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo utilizando o padrão Compound Component (`Progress.Root` e `Progress.Indicator`) para maior controle.',
      },
    },
  },
}

