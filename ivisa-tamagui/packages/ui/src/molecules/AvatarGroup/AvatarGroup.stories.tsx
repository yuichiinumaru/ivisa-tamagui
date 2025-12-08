import type { Meta, StoryObj } from '@storybook/react'
import { AvatarGroup } from './AvatarGroup'
import { Avatar, AvatarFallback } from '../../atoms/Avatar'
import { Text } from 'tamagui'
import React from 'react'

const meta: Meta<typeof AvatarGroup> = {
  title: 'molecules/AvatarGroup',
  component: AvatarGroup,
}

export default meta
type Story = StoryObj<typeof AvatarGroup>

export const Default: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar circular size="$3" backgroundColor="$blue10"><AvatarFallback><Text color="white">A</Text></AvatarFallback></Avatar>
      <Avatar circular size="$3" backgroundColor="$red10"><AvatarFallback><Text color="white">B</Text></AvatarFallback></Avatar>
      <Avatar circular size="$3" backgroundColor="$green10"><AvatarFallback><Text color="white">C</Text></AvatarFallback></Avatar>
    </AvatarGroup>
  ),
}

export const Limited: Story = {
  render: (args) => (
    <AvatarGroup {...args} limit={2}>
      <Avatar circular size="$3" backgroundColor="$blue10"><AvatarFallback><Text color="white">A</Text></AvatarFallback></Avatar>
      <Avatar circular size="$3" backgroundColor="$red10"><AvatarFallback><Text color="white">B</Text></AvatarFallback></Avatar>
      <Avatar circular size="$3" backgroundColor="$green10"><AvatarFallback><Text color="white">C</Text></AvatarFallback></Avatar>
    </AvatarGroup>
  ),
}
