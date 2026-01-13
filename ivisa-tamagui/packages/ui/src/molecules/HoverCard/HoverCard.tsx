// @ts-nocheck
import React from 'react'
import { Paragraph, PopoverProps, XStack, YStack, Text } from 'tamagui'
import { Skeleton } from '../../atoms/Skeleton'
import { AlertTriangle } from '@tamagui/lucide-icons'
import { Avatar } from '../../atoms/Avatar'
import { Popover, PopoverTrigger, PopoverContent, PopoverAnchor, PopoverClose } from '../Popover'

export const HoverCard = ({ children, ...rest }: PopoverProps) => {
  return (
    <Popover placement="top" hoverable {...rest}>
      {children}
    </Popover>
  )
}

export const HoverCardTrigger = PopoverTrigger
export const HoverCardContent = PopoverContent
export const HoverCardAnchor = PopoverAnchor
export const HoverCardClose = PopoverClose

type ProfileContentProps = {
  user: {
    name: string
    avatar: string
    handle: string
    bio?: string // bio is now optional
    followers: number
    following: number
  }
  isLoading?: boolean
  hasError?: boolean
  actions?: React.ReactNode
}

export const HoverCardProfileContent = ({
  user,
  isLoading,
  hasError,
  actions,
}: ProfileContentProps) => {
  const containerProps = {
    w: 280,
    p: '$4',
    space: true,
    ...(hasError && {
      borderColor: '$red10',
      borderWidth: 1,
    }),
  }

  if (hasError) {
    return (
      <YStack {...containerProps}>
        <XStack space="$2" ai="center" jc="center">
          <AlertTriangle color="$red10" size="$1" />
          <Text color="$red10" fontSize="$2">
            Não foi possível carregar o perfil.
          </Text>
        </XStack>
      </YStack>
    )
  }

  if (isLoading) {
    return (
      <YStack {...containerProps}>
        <XStack space="$4" ai="center">
          <Skeleton br="$12" w="$10" h="$10" />
          <YStack space="$1">
            <Skeleton h="$2" w="$12" />
            <Skeleton h="$2" w="$8" />
          </YStack>
        </XStack>
        <Skeleton h="$2" />
        <Skeleton h="$2" />

        <XStack space="$4">
          <Skeleton h="$2" w="$12" />
          <Skeleton h="$2" w="$12" />
        </XStack>

        {actions && <XStack jc="flex-end">{actions}</XStack>}
      </YStack>
    )
  }

  return (
    <YStack {...containerProps}>
      <XStack space="$4" ai="center">
        <Avatar circular size="$10">
          <Avatar.Image source={{ uri: user.avatar }} />
        </Avatar>
        <YStack space="$1" f={1}>
          <Paragraph size="$3" fontWeight="bold" ellipse>
            {user.name}
          </Paragraph>
          <Paragraph size="$2" color="$gray11" ellipse>
            {user.handle}
          </Paragraph>
        </YStack>
      </XStack>

      {user.bio && (
        <Paragraph size="$2" ellipse>
          {user.bio}
        </Paragraph>
      )}

      <XStack space="$4">
        <Paragraph size="$2">
          <Paragraph fontWeight="bold">{user.following}</Paragraph> Seguindo
        </Paragraph>
        <Paragraph size="$2">
          <Paragraph fontWeight="bold">{user.followers}</Paragraph> Seguidores
        </Paragraph>
      </XStack>

      {actions && <XStack jc="flex-end">{actions}</XStack>}
    </YStack>
  )
}

export type HoverCardProps = React.ComponentProps<typeof HoverCard>

export type HoverCardTriggerProps = React.ComponentProps<typeof HoverCardTrigger>

export type HoverCardContentProps = React.ComponentProps<typeof HoverCardContent>

export type HoverCardAnchorProps = React.ComponentProps<typeof HoverCardAnchor>

export type HoverCardCloseProps = React.ComponentProps<typeof HoverCardClose>

export type HoverCardProfileContentProps = React.ComponentProps<typeof HoverCardProfileContent>
