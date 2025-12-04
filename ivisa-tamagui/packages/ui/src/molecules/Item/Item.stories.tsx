import type { Meta, StoryObj } from '@storybook/react'
import { Item, ItemText, ItemValue } from './Item'
import { User } from '@tamagui/lucide-icons'

const meta: Meta<typeof Item> = {
  title: 'Molecules/Item',
  component: Item,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Item>

export const Default: Story = {
  render: () => (
    <Item width={300}>
      <User size={20} />
      <ItemText>Profile</ItemText>
      <ItemValue>⌘P</ItemValue>
    </Item>
  ),
}
