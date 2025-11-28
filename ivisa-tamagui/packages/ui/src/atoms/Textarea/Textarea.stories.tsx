import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'atoms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'subtle'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    invalid: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    }
  },
}

export default meta

type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    placeholder: 'Your message here...'
  },
}

export const Filled: Story = {
  args: {
    ...Default.args,
    variant: 'filled',
  },
}

export const Subtle: Story = {
  args: {
    ...Default.args,
    variant: 'subtle',
  },
}

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg',
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const Invalid: Story = {
  args: {
    ...Default.args,
    invalid: true,
  },
}
