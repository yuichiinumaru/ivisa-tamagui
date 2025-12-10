import type { Meta, StoryObj } from '@storybook/react'
import { AvatarGroup } from './AvatarGroup'
import { Avatar, AvatarFallback, AvatarImage } from '../../atoms/Avatar'
import { Text } from 'tamagui'

const meta: Meta<typeof AvatarGroup> = {
  title: 'Molecules/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AvatarGroup stacks avatars with an overlap.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AvatarGroup>

export const Default: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/mjackson.png" />
        <AvatarFallback>MJ</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>+2</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
}
