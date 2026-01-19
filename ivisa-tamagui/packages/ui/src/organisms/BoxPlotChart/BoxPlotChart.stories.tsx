
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { BoxPlotChart } from './BoxPlotChart'
import { boxPlotData } from './BoxPlotChart.mocks'


const meta: Meta<React.ComponentProps<typeof BoxPlotChart>> = {
  title: 'Organismos/Gráficos/BoxPlotChart',
  component: BoxPlotChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof BoxPlotChart>>

export const Padrao: Story = {
  args: {
    data: boxPlotData,
    xKey: 'x',
    minKey: 'min',
    maxKey: 'max',
    q1Key: 'q1',
    q3Key: 'q3',
    medianKey: 'median',
  },
}

export const Carregando: Story = {
  args: {
    isLoading: true,
  },
}

export const Erro: Story = {
  args: {
    error: new Error('Failed to load'),
  },
}

export const Empty: Story = {
  args: {
    data: [],
  },
}

