import type { Meta, StoryObj } from '@storybook/react'
import { BoxPlotChart } from './BoxPlotChart'
import { boxPlotData } from './BoxPlotChart.mocks'

const meta: Meta<typeof BoxPlotChart> = {
  title: 'Organisms/BoxPlotChart',
  component: BoxPlotChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BoxPlotChart>

export const Default: Story = {
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

export const Loading: Story = {
  args: {
    isLoading: true,
  },
}

export const ErrorState: Story = {
  args: {
    error: new Error('Failed to load'),
  },
}

export const Empty: Story = {
  args: {
    data: [],
  },
}
