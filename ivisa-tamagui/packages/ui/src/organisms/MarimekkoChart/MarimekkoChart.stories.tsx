import type { Meta, StoryObj } from '@storybook/react'
import { MarimekkoChart } from './MarimekkoChart'

const meta: Meta<typeof MarimekkoChart> = {
  title: 'Organisms/Complex & Custom Charts/MarimekkoChart',
  component: MarimekkoChart,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof MarimekkoChart>

const sampleData = [
  { segment: 'Segment 1', marketShare: 40, growth: 10 },
  { segment: 'Segment 2', marketShare: 30, growth: 20 },
  { segment: 'Segment 3', marketShare: 20, growth: 30 },
  { segment: 'Segment 4', marketShare: 10, growth: 5 },
]

export const Default: Story = {
  args: {
    data: sampleData,
    xKey: 'segment',
    yKey: 'growth',
    widthKey: 'marketShare',
    width: 600,
    height: 400,
  },
}

export const Loading: Story = {
  args: {
    data: sampleData,
    xKey: 'segment',
    yKey: 'growth',
    widthKey: 'marketShare',
    isLoading: true,
  },
}

export const ErrorState: Story = {
  args: {
    data: sampleData,
    xKey: 'segment',
    yKey: 'growth',
    widthKey: 'marketShare',
    error: new Error('Failed to load data'),
  },
}
