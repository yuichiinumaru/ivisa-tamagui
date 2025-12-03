import type { Meta, StoryObj } from '@storybook/react'
import { StarRating } from './StarRating'
import { YStack, Text } from 'tamagui'
import { useState } from 'react'

const meta: Meta<typeof StarRating> = {
  title: 'Molecules/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number' },
    count: { control: 'number' },
    size: { control: 'select', options: ['$1', '$2', '$3', '$4', '$5', '$6'] },
    disabled: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof StarRating>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 3)
    return <StarRating {...args} value={value} onChange={setValue} />
  },
  args: {
    count: 5,
    value: 3,
  },
}

export const Controlled = () => {
  const [rating, setRating] = useState<number | null>(2)
  return (
    <YStack gap="$4">
      <Text>Current Rating: {rating}</Text>
      <StarRating value={rating ?? 0} onChange={setRating} count={5} size="$4" />
    </YStack>
  )
}

export const Disabled: Story = {
  args: {
    count: 5,
    value: 4,
    disabled: true,
  },
}

export const CustomColors: Story = {
  render: (args) => {
    const [value, setValue] = useState(3)
    return <StarRating {...args} value={value} onChange={setValue} />
  },
  args: {
    count: 5,
    color: '$gray5',
    colorActive: '$red10',
    size: '$4',
  },
}
