
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { ScatterChart } from './ScatterChart'


const meta: Meta<React.ComponentProps<typeof ScatterChart>> = {
  title: 'Organismos/Gráficos/ScatterChart',
  component: ScatterChart,
  argTypes: {
    isLoading: { control: 'boolean' },
    error: { control: 'text' },
    bubbleKey: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof ScatterChart>>

const scatterData = [
  { x: 10, y: 20, size: 30 },
  { x: 20, y: 40, size: 10 },
  { x: 30, y: 25, size: 50 },
  { x: 40, y: 60, size: 20 },
]

export const Padrao: Story = {
  args: {
    title: 'Dispersão de Casos',
    data: scatterData,
    xKey: 'x',
    yKey: 'y',
  },
}

export const Bubble: Story = {
  args: {
    title: 'Bolhas por Gravidade',
    data: scatterData,
    xKey: 'x',
    yKey: 'y',
    bubbleKey: 'size',
    color: '$red10',
  },
}
