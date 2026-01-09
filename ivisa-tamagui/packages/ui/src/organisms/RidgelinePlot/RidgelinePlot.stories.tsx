
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { RidgelinePlot } from './RidgelinePlot'


const meta: Meta<React.ComponentProps<typeof RidgelinePlot>> = {
  title: 'Organismos/Gráficos/RidgelinePlot',
  component: RidgelinePlot,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof RidgelinePlot>>

// Generate distribution data
const generateDist = (mean: number, std: number) => {
    const data = []
    for (let x = 0; x <= 100; x += 5) {
        // Gaussian
        const y = (1 / (std * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mean) / std, 2))
        data.push({ x, y: y * 100 }) // scale up
    }
    return data
}

const sampleSeries = [
    { id: '2020', label: '2020', data: generateDist(50, 15), color: '#3b82f6' },
    { id: '2021', label: '2021', data: generateDist(55, 15), color: '#8b5cf6' },
    { id: '2022', label: '2022', data: generateDist(60, 10), color: '#ec4899' },
    { id: '2023', label: '2023', data: generateDist(45, 20), color: '#f43f5e' },
]

export const Padrao: Story = {
  args: {
    series: sampleSeries,
    width: 600,
    height: 400,
    overlap: 0.5
  },
}

export const Carregando: Story = {
  args: {
    series: sampleSeries,
    isLoading: true,
  },
}
