import type { Meta, StoryObj } from '@storybook/react'
import { Kbd } from './Kbd'
import { XStack, Text } from 'tamagui'

const meta: Meta<typeof Kbd> = {
  title: 'Atoms/Kbd',
  component: Kbd,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Kbd>

export const Default: Story = {
  args: {
    children: '⌘K',
  },
}

export const Combination: Story = {
  render: () => (
    <XStack gap="$2" alignItems="center">
      <Text>Press</Text>
      <Kbd>⌘</Kbd>
      <Text>+</Text>
      <Kbd>Shift</Kbd>
      <Text>+</Text>
      <Kbd>P</Kbd>
    </XStack>
  )
}
