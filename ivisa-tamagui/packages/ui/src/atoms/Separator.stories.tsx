import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from './Separator'
import { YStack, XStack, Text } from 'tamagui'

const meta: Meta<typeof Separator> = {
  title: 'atoms/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Separator>

export const Horizontal: Story = {
  render: (args) => (
    <YStack width={200} gap="$2">
      <Text>Item 1</Text>
      <Separator {...args} />
      <Text>Item 2</Text>
    </YStack>
  ),
  args: {
    orientation: 'horizontal',
  },
}

export const Vertical: Story = {
  render: (args) => (
    <XStack height={50} gap="$2">
      <Text>Item 1</Text>
      <Separator {...args} />
      <Text>Item 2</Text>
    </XStack>
  ),
  args: {
    orientation: 'vertical',
  },
}
