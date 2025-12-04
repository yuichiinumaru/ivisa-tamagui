import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './Label'
import { Input } from '../Input'
import { YStack } from 'tamagui'

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'email',
  },
}

export const WithInput: Story = {
  render: () => (
    <YStack gap="$2" width={300}>
        <Label htmlFor="email2">Email</Label>
        <Input id="email2" placeholder="hello@example.com" />
    </YStack>
  )
}
