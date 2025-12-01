import type { Meta, StoryObj } from '@storybook/react'
import { Search, Eye } from '@tamagui/lucide-icons'
import { YStack, Text, XStack } from 'tamagui'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Type something...',
  },
}

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Filled input...',
  },
}

export const WithIcon: Story = {
  render: () => (
    <YStack gap="$4" width={300}>
      <Text>Input with Left Icon</Text>
      <Input>
        <Input.Icon>
          <Search size="$1" />
        </Input.Icon>
        <Input.Field placeholder="Search..." />
      </Input>

      <Text>Input with Right Icon</Text>
      <Input>
        <Input.Field placeholder="Search..." />
        <Input.Icon>
          <Search size="$1" />
        </Input.Icon>
      </Input>
    </YStack>
  ),
}

export const WithButton: Story = {
  render: () => (
    <YStack gap="$4" width={300}>
      <Text>Input with Button</Text>
      <Input>
        <Input.Field placeholder="Email address" />
        <Input.Button>
          Subscribe
        </Input.Button>
      </Input>
    </YStack>
  ),
}

export const ComposedComplete: Story = {
  render: () => (
    <YStack gap="$4" width={300}>
      <Text>Icon + Field + Button</Text>
      <Input>
        <Input.Icon>
          <Search size="$1" />
        </Input.Icon>
        <Input.Field placeholder="Search..." />
        <Input.Button themeInverse>
          Go
        </Input.Button>
      </Input>
    </YStack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <YStack gap="$4" width={300}>
      <Input size="sm" placeholder="Small" />
      <Input size="default" placeholder="Default" />
      <Input size="lg" placeholder="Large" />

      <Text marginTop="$4">Composed Sizes (inherit from Frame)</Text>
      <Input size="sm">
         <Input.Icon><Search size={12} /></Input.Icon>
         <Input.Field placeholder="Small Composed" />
      </Input>
       <Input size="lg">
         <Input.Icon><Search size={20} /></Input.Icon>
         <Input.Field placeholder="Large Composed" />
      </Input>
    </YStack>
  ),
}
