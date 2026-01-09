
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Timeline } from './Timeline'
import { YStack } from 'tamagui'


const meta: Meta<React.ComponentProps<typeof Timeline>> = {
  title: 'Organismos/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Exibe uma lista de eventos em ordem cronológica.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof Timeline>>

const mockItems = [
  {
    title: 'Pedido Recebido',
    description: 'Seu pedido #12345 foi recebido e está aguardando processamento.',
    time: '25 de Jul, 10:30',
  },
  {
    title: 'Pagamento Aprovado',
    description: 'O pagamento foi aprovado com sucesso.',
    time: '25 de Jul, 10:35',
  },
  {
    title: 'Pedido em Separação',
    description: 'Seu pedido está sendo separado em nosso armazém.',
    time: '25 de Jul, 14:00',
  },
  {
    title: 'Pedido Enviado',
    description: 'O pedido foi enviado e está a caminho.',
    time: '26 de Jul, 09:00',
  },
  {
    title: 'Entregue',
    description: 'O pedido foi entregue com sucesso!',
    time: '27 de Jul, 16:45',
  },
]

export const GoldenPath: Story = {
  args: {
    items: mockItems,
  },
}

export const Carregando: Story = {
  args: {
    isLoading: true,
  },
}

export const Empty: Story = {
  args: {
    isEmpty: true,
  },
}

export const Error: Story = {
  args: {
    hasError: true,
  },
}

export const LayoutStress: Story = {
  render: () => (
    <YStack width={300} borderWidth={1} borderColor="$borderColor" padding="$2" borderRadius="$2">
      <Timeline items={mockItems} />
    </YStack>
  ),
}
