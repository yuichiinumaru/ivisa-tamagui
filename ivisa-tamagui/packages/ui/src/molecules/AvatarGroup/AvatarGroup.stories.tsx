import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { AvatarGroup } from './AvatarGroup'
import { Avatar, AvatarFallback, AvatarImage } from '../../atoms/Avatar'

const meta: Meta<typeof AvatarGroup> = {
    title: 'Molecules/AvatarGroup',
    component: AvatarGroup,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AvatarGroup>

const UserAvatar = ({ src, fallback }: { src?: string; fallback: string }) => (
    <Avatar>
        <AvatarImage source={{ uri: src }} />
        <AvatarFallback backgroundColor="$blue4" alignItems="center" justifyContent="center">
            <span style={{ color: 'white', fontWeight: 'bold' }}>{fallback}</span>
        </AvatarFallback>
    </Avatar>
)

export const Default: Story = {
    render: (args) => (
        <AvatarGroup {...args}>
            <UserAvatar src="https://i.pravatar.cc/150?u=1" fallback="U1" />
            <UserAvatar src="https://i.pravatar.cc/150?u=2" fallback="U2" />
            <UserAvatar src="https://i.pravatar.cc/150?u=3" fallback="U3" />
            <UserAvatar src="https://i.pravatar.cc/150?u=4" fallback="U4" />
            <UserAvatar fallback="U5" />
        </AvatarGroup>
    ),
    args: {
        limit: 3,
        size: '$5',
    }
}

export const Small: Story = {
    render: (args) => (
        <AvatarGroup {...args}>
            <UserAvatar src="https://i.pravatar.cc/150?u=1" fallback="A" />
            <UserAvatar src="https://i.pravatar.cc/150?u=2" fallback="B" />
            <UserAvatar src="https://i.pravatar.cc/150?u=3" fallback="C" />
        </AvatarGroup>
    ),
    args: {
        limit: 3,
        size: '$3',
    }
}
