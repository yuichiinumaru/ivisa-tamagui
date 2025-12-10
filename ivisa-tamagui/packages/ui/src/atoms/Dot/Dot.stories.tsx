import type { Meta, StoryObj } from '@storybook/react'
import { Dot } from './Dot'

const meta: Meta<typeof Dot> = {
  title: 'Atoms/Dot',
  component: Dot,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'warning', 'error', 'neutral']
    }
  },
}

export default meta
type Story = StoryObj<typeof Dot>

export const Default: Story = {
  args: {
    status: 'success',
  },
}
