import type { Meta, StoryObj } from '@storybook/react'
import { ComponentStatus } from './ComponentStatus'

const meta: Meta<typeof ComponentStatus> = {
  title: 'Átomos/ComponentStatus',
  component: ComponentStatus,
  argTypes: {
    status: {
      control: 'select',
      options: ['stable', 'experimental', 'deprecated'],
    },
  },
}

export default meta

type Story = StoryObj<typeof ComponentStatus>

export const Stable: Story = {
  args: {
    status: 'stable',
  },
}

export const Experimental: Story = {
  args: {
    status: 'experimental',
  },
}

export const Deprecated: Story = {
  args: {
    status: 'deprecated',
  },
}
