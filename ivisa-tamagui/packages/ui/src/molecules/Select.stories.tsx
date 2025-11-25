import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'
import { YStack, Label } from 'tamagui'

const meta: Meta<typeof Select> = {
  title: 'Molecules/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'grapes', label: 'Grapes' },
  { value: 'pineapple', label: 'Pineapple' },
]

export const Default: Story = {
  render: () => (
    <YStack width={200} gap="$2">
      <Label>Favorite Fruit</Label>
      <Select items={fruits} placeholder="Select a fruit..." />
    </YStack>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <YStack width={200} gap="$2">
      <Label>Diet Preference</Label>
      <Select 
        label="Fruits" 
        items={fruits} 
        placeholder="Select..." 
      />
    </YStack>
  ),
}
