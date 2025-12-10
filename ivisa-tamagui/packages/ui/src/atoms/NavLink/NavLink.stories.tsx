import type { Meta, StoryObj } from '@storybook/react'
import { NavLink } from './NavLink'

const meta: Meta<typeof NavLink> = {
  title: 'Atoms/NavLink',
  component: NavLink,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof NavLink>

export const Default: Story = {
  args: {
    children: 'Navigation Link',
  },
}
