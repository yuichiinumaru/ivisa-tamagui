import type { Meta, StoryObj } from '@storybook/react'
import { BarChart } from './BarChart'

const meta: Meta<typeof BarChart> = {
  title: 'Organisms/Charts',
  component: BarChart,
  args: {
    data: [
      { month: 'Jan', value: 100 },
      { month: 'Feb', value: 200 },
      { month: 'Mar', value: 150 },
      { month: 'Apr', value: 300 },
      { month: 'May', value: 250 },
    ],
    xKey: 'month',
    yKey: 'value',
    height: 300,
  },
}

export default meta

type Story = StoryObj<typeof BarChart>

export const Bar: Story = {}

export const ColoredBar: Story = {
  args: {
    color: '$secondary',
  },
}
