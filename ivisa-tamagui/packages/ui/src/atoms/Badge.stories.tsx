import type { Meta, StoryObj } from '@storybook/react'
import { Badge, BadgeText } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
  render: (args) => (
    <Badge {...args}>
      <BadgeText variant={args.variant}>Badge</BadgeText>
    </Badge>
  ),
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    variant: 'default',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
}
