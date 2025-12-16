import type { Meta, StoryObj } from '@storybook/react'
import { ParallelCoordinates } from './ParallelCoordinates'

const meta: Meta<typeof ParallelCoordinates> = {
  title: 'Organismos/Gráficos/ParallelCoordinates',
  component: ParallelCoordinates,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof ParallelCoordinates>

const sampleData = [
  { economy: 3, cylinders: 4, displacement: 100, power: 80, weight: 2000, acceleration: 15 },
  { economy: 4, cylinders: 4, displacement: 120, power: 90, weight: 2200, acceleration: 14 },
  { economy: 2, cylinders: 6, displacement: 200, power: 150, weight: 3000, acceleration: 10 },
  { economy: 1, cylinders: 8, displacement: 300, power: 200, weight: 4000, acceleration: 8 },
]

export const Padrao: Story = {
  args: {
    data: sampleData,
    attributes: ['economy', 'cylinders', 'displacement', 'power', 'weight', 'acceleration'],
    width: 600,
    height: 400,
  },
}

export const Carregando: Story = {
  args: {
    data: sampleData,
    attributes: ['economy'],
    isLoading: true,
  },
}

export const Erro: Story = {
  args: {
    data: sampleData,
    attributes: ['economy'],
    error: new Error('Failed to load data'),
  },
}
