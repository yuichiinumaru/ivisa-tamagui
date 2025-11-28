import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './Progress'

const meta: Meta<typeof Progress> = {
  title: 'atoms/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
}

export default meta

type Story = StoryObj<typeof Progress>

export const Default: Story = {
  args: {
    value: 50,
  },
}

export const Empty: Story = {
  args: {
    value: 0,
  },
}

export const Full: Story = {
  args: {
    value: 100,
  },
}
