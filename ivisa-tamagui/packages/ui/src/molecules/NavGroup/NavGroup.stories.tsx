import type { Meta, StoryObj } from '@storybook/react'
import { NavGroup } from './NavGroup'

const meta: Meta<typeof NavGroup> = {
  title: 'Molecules/NavGroup',
  component: NavGroup,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof NavGroup>

export const Default: Story = {
  args: {
    items: [
        { label: 'Dashboard', href: '#' },
        { label: 'Settings', href: '#' },
        { label: 'Profile', href: '#' },
    ]
  },
}
