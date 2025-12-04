import type { Meta, StoryObj } from '@storybook/react'
import { Item } from './Item'
import { User, Settings, CreditCard } from '@tamagui/lucide-icons'
import { YStack } from 'tamagui'

const meta: Meta<typeof Item> = {
  title: 'Molecules/Item',
  component: Item,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'An Item is a flexible component used in lists or menus. It typically contains an icon, text, and an optional value or shortcut.',
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'The main text content of the item.',
    },
    value: {
      control: 'text',
      description: 'The value or shortcut displayed on the right.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Item>

export const Default: Story = {
  args: {
    icon: <User />,
    text: 'Profile',
    value: '⌘P',
  },
}

export const WithoutIcon: Story = {
  args: {
    text: 'Billing',
    value: '⌘B',
  },
}

export const WithoutValue: Story = {
  args: {
    icon: <Settings />,
    text: 'Settings',
  },
}

export const ItemGroup: Story = {
  render: () => (
    <YStack width={300} gap="$2" backgroundColor="$background" padding="$2" borderRadius="$md">
      <Item icon={<User />} text="Profile" value="⌘P" />
      <Item icon={<CreditCard />} text="Billing" value="⌘B" />
      <Item icon={<Settings />} text="Settings" value="⌘S" />
    </YStack>
  ),
}
