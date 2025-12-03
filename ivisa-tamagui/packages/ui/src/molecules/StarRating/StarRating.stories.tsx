import type { Meta, StoryObj } from '@storybook/react'
import { StarRating } from './StarRating'
import { YStack, Text } from 'tamagui'
import { useState } from 'react'

const meta: Meta<typeof StarRating> = {
  title: 'molecules/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'number' },
    size: { control: 'select', options: ['$1', '$2', '$3', '$4', '$5', '$6'] },
    disabled: { control: 'boolean' },
    value: { control: { disable: true } },
  },
}

export default meta

type Story = StoryObj<typeof StarRating>

export const Default: Story = {
  args: {
    count: 5,
    defaultValue: 3,
  },
}

export const Controlled = () => {
    const [rating, setRating] = useState<number | null>(2)
    return (
        <YStack gap="$4">
            <Text>Current Rating: {rating}</Text>
            <StarRating value={rating} onChange={setRating} count={5} size="$4" />
        </YStack>
    )
}

export const Disabled: Story = {
  args: {
    count: 5,
    defaultValue: 4,
    disabled: true,
  },
}

export const CustomColors: Story = {
  args: {
    count: 5,
    defaultValue: 3,
    color: '$gray5',
    colorActive: '$red10',
    colorHover: '$red7',
    colorActiveHover: '$red8',
    size: '$4',
  },
}
