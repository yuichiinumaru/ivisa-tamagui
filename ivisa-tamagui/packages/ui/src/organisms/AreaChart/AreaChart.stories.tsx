// @ts-nocheck

import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { AreaChart } from './AreaChart'


const meta: Meta<React.ComponentProps<typeof AreaChart>> = {
  title: 'Organismos/Gráficos/AreaChart',
  component: AreaChart,
  argTypes: {
    isLoading: { control: 'boolean' },
    error: { control: 'text' },
    stacked: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof AreaChart>>

const singleData = [
  { month: 'Jan', value: 50 },
  { month: 'Feb', value: 80 },
  { month: 'Mar', value: 45 },
  { month: 'Apr', value: 90 },
]

const stackedData = [
  [
    { month: 'Jan', value: 20 },
    { month: 'Feb', value: 30 },
  ],
  [
    { month: 'Jan', value: 30 },
    { month: 'Feb', value: 40 },
  ],
]

export const Padrao: Story = {
  args: {
    title: 'Evolução Mensal',
    data: singleData,
    xKey: 'month',
    yKey: 'value',
  },
}

export const Empilhado: Story = {
  args: {
    title: 'Vendas por Região (Stacked)',
    data: stackedData,
    xKey: 'month',
    yKey: 'value',
    stacked: true,
  },
}
