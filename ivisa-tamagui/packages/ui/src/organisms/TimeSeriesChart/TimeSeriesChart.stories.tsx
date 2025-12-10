import type { Meta, StoryObj } from '@storybook/react'
import { TimeSeriesChart } from './TimeSeriesChart'

const meta: Meta<typeof TimeSeriesChart> = {
  title: 'Organisms/TimeSeriesChart',
  component: TimeSeriesChart,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof TimeSeriesChart>

export const Default: Story = {
  args: {},
}
