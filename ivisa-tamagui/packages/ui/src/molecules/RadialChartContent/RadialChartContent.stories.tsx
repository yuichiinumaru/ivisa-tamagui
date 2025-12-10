import type { Meta, StoryObj } from '@storybook/react'
import { RadialChartContent } from './RadialChartContent'

const meta: Meta<typeof RadialChartContent> = {
  title: 'Molecules/RadialChartContent',
  component: RadialChartContent,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof RadialChartContent>

export const Default: Story = {
  args: {
    message: 'Data Viz',
  },
}
