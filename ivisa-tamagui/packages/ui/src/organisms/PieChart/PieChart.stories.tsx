
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { PieChart } from './PieChart'


const meta: Meta<React.ComponentProps<typeof PieChart>> = {
  title: 'Organismos/Gráficos/PieChart',
  component: PieChart,
  argTypes: {
    isLoading: { control: 'boolean' },
    error: { control: 'text' },
    variant: {
      control: 'radio',
      options: ['pie', 'donut'],
    },
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof PieChart>>

const mockData = [
  { label: 'Aprovados', value: 60 },
  { label: 'Pendentes', value: 25 },
  { label: 'Reprovados', value: 15 },
]

export const PieVariant: Story = {
  args: {
    title: 'Status de Inspeções',
    data: mockData,
    xKey: 'label',
    yKey: 'value',
    variant: 'pie',
  },
}

export const DonutVariant: Story = {
  args: {
    title: 'Distribuição Orçamentária',
    data: mockData,
    xKey: 'label',
    yKey: 'value',
    variant: 'donut',
  },
}

export const Carregando: Story = {
  args: {
    title: 'Carregando...',
    data: [],
    xKey: 'label',
    yKey: 'value',
    isLoading: true,
  },
}
