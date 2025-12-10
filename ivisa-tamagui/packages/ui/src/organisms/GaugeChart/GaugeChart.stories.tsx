import type { Meta, StoryObj } from '@storybook/react'
import { GaugeChart } from './GaugeChart'

const meta: Meta<typeof GaugeChart> = {
  title: 'Organisms/GaugeChart',
  component: GaugeChart,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof GaugeChart>

export const Default: Story = {
  args: {
    value: 75,
  },
}
