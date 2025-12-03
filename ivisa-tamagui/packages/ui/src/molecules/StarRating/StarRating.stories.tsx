import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { StarRating } from './StarRating'

const meta: Meta<typeof StarRating> = {
  title: 'Molecules/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number' },
    count: { control: 'number' },
    size: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof StarRating>

export const Default: Story = {
  render: (args: any) => {
    const [value, setValue] = useState(args.value ?? 3)
    return <StarRating {...args} value={value} onValueChange={setValue} />
  },
  args: {
    count: 5,
    value: 3,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 4,
  },
}
