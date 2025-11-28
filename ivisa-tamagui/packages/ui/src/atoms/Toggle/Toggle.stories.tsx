import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from './Toggle'
import { Bold } from '@tamagui/lucide-icons'

const meta: Meta<typeof Toggle> = {
  title: 'atoms/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    pressed: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: {
    children: <Bold />,
  },
}

export const Pressed: Story = {
  args: {
    ...Default.args,
    pressed: true,
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}
