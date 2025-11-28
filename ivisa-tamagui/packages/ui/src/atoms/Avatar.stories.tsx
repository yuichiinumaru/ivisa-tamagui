import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarImage, AvatarFallback } from './Avatar'
import { Text } from 'tamagui'

const meta: Meta<typeof Avatar> = {
  title: 'atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['$8', '$10', '$12'],
    },
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/tamagui.png" />
      <AvatarFallback>
        <Text>AB</Text>
      </AvatarFallback>
    </Avatar>
  ),
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    size: '$10',
  },
}

export const Small: Story = {
  args: {
    ...Default.args,
    size: '$8',
  },
}

export const Large: Story = {
  args: {
    ...Default.args,
    size: '$12',
  },
}

export const Fallback: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://broken.link.png" />
      <AvatarFallback>
        <Text>AB</Text>
      </AvatarFallback>
    </Avatar>
  ),
}
