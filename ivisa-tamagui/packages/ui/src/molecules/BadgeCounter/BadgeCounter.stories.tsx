import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { BadgeCounter } from './BadgeCounter'
import { Button, XStack } from 'tamagui'
import { Bell, Mail } from '@tamagui/lucide-icons'

const meta: Meta<typeof BadgeCounter> = {
    title: 'Molecules/BadgeCounter',
    component: BadgeCounter,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof BadgeCounter>

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <XStack
        width={40}
        height={40}
        backgroundColor="$muted"
        alignItems="center"
        justifyContent="center"
        borderRadius="$sm"
        position="relative"
    >
        {children}
    </XStack>
)

export const Default: Story = {
    render: (args) => (
        <XStack gap="$8" padding="$4">
            <IconWrapper>
                <Bell size={20} />
                <BadgeCounter {...args} />
            </IconWrapper>

            <IconWrapper>
                <Mail size={20} />
                <BadgeCounter count={5} />
            </IconWrapper>

            <IconWrapper>
                <Bell size={20} />
                <BadgeCounter variant="dot" />
            </IconWrapper>
        </XStack>
    ),
    args: {
        count: 120,
        limit: 99,
    }
}
