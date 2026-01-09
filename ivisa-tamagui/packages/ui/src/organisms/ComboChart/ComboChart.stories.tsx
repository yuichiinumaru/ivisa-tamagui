
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { ComboChart } from './ComboChart'
import { VictoryBar, VictoryLine } from 'victory'


const meta: Meta<React.ComponentProps<typeof ComboChart>> = {
  title: 'Organismos/Gráficos/ComboChart',
  component: ComboChart,
  argTypes: {
    isLoading: { control: 'boolean' },
    error: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof ComboChart>>

const dataBar = [
  { x: 'A', y: 10 },
  { x: 'B', y: 20 },
  { x: 'C', y: 15 },
]

const dataLine = [
  { x: 'A', y: 15 },
  { x: 'B', y: 25 },
  { x: 'C', y: 20 },
]

export const Padrao: Story = {
  args: {
    title: 'Misto (Barra + Linha)',
    children: (
      <>
        <VictoryBar data={dataBar} style={{ data: { fill: '#007BFF' } }} />
        <VictoryLine data={dataLine} style={{ data: { stroke: '#FF5733' } }} />
      </>
    ),
  },
}
