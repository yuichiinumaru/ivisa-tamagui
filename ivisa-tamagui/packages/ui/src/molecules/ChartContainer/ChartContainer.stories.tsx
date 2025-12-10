import type { Meta, StoryObj } from '@storybook/react'
import { ChartContainer } from './ChartContainer'
import { Text } from 'tamagui'

const meta: Meta<typeof ChartContainer> = {
  title: 'Molecules/ChartContainer',
  component: ChartContainer,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof ChartContainer>

export const Default: Story = {
  args: {
    title: 'Sales Performance',
    children: <Text>Chart goes here</Text>,
  },
}
