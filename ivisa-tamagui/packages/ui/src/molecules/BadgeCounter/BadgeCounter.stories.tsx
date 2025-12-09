import type { Meta, StoryObj } from '@storybook/react'
import { BadgeCounter } from './BadgeCounter'
import { Button } from '../../atoms/Button'
import { Bell } from '@tamagui/lucide-icons'

const meta: Meta<typeof BadgeCounter> = {
  title: 'Molecules/BadgeCounter',
  component: BadgeCounter,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BadgeCounter wraps an element and displays a notification count badge.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'number' },
    max: { control: 'number' },
    showZero: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof BadgeCounter>

export const Default: Story = {
  args: {
    count: 5,
    children: <Button icon={Bell} circular size="$md" />,
  },
}

export const Overflow: Story = {
  args: {
    count: 100,
    max: 99,
    children: <Button icon={Bell} circular size="$md" />,
  },
}

export const ShowZero: Story = {
  args: {
    count: 0,
    showZero: true,
    children: <Button icon={Bell} circular size="$md" />,
  },
}
