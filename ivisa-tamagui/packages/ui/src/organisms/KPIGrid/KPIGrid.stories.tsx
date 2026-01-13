// @ts-nocheck

import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { KPIGrid } from './KPIGrid'
import { YStack } from 'tamagui'


const meta: Meta<React.ComponentProps<typeof KPIGrid>> = {
  title: 'Organismos/KPIGrid',
  component: KPIGrid,
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: { type: 'object' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'text' },
    },
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof KPIGrid>>

const mockData = [
  { metric: { title: 'Receita Total', value: 'R$ 45.231,89', trend: 'up' as const } },
  { metric: { title: 'Assinaturas', value: '+2.350', trend: 'up' as const } },
  { metric: { title: 'Vendas', value: '1.235', trend: 'down' as const } },
  { metric: { title: 'Taxa de Churn', value: '5,8%', trend: 'neutral' as const } },
]

export const GoldenPath: Story = {
  args: {
    data: mockData,
  },
}

export const ZeroData: Story = {
  args: {
    data: [],
  },
}

export const Carregando: Story = {
  args: {
    isLoading: true,
  },
}

export const Error: Story = {
  args: {
    error: 'Ocorreu um erro ao carregar os dados. Por favor, tente novamente.',
  },
}

export const LayoutStress: Story = {
  args: {
    data: mockData,
  },
  decorators: [
    (Story) => (
      <YStack width={400} mx="auto">
        <Story />
      </YStack>
    ),
  ],
}
