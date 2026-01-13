// @ts-nocheck
import React from 'react'
import { YStack, XStack, Text } from 'tamagui'
import { Button } from '../../atoms/Button'
import { ScrollArea } from '../../atoms/ScrollArea'
import { Bell } from '@tamagui/lucide-icons'

export interface Notification {
  id: string
  title: string
  description: string
  date: string
  isRead: boolean
}

export interface NotificationFeedProps {
  notifications: Notification[]
  onMarkAsRead?: (id: string) => void
  onMarkAllAsRead?: () => void
  emptyMessage?: string
  maxHeight?: number | string
}

export function NotificationFeed({
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
  emptyMessage = 'Nenhuma notificação',
  maxHeight = 400,
}: NotificationFeedProps) {

  if (!notifications || notifications.length === 0) {
    return (
      <YStack padding="$4" alignItems="center" justifyContent="center" gap="$2" height={200}>
        <Bell size={24} color="$gray8" />
        <Text color="$gray8">{emptyMessage}</Text>
      </YStack>
    )
  }

  return (
    <YStack
        borderWidth={1}
        borderColor="$borderColor"
        borderRadius="$4"
        backgroundColor="$background"
        overflow="hidden"
    >
      <XStack
        padding="$3"
        borderBottomWidth={1}
        borderBottomColor="$borderColor"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontWeight="bold">Notificações</Text>
        {onMarkAllAsRead && (
            <Button size="$2" onPress={onMarkAllAsRead}>
                Marcar todas como lidas
            </Button>
        )}
      </XStack>

      <ScrollArea maxHeight={maxHeight as any} height={maxHeight as any}>
        <YStack>
          {notifications.map((notification) => (
            <XStack
              key={notification.id}
              padding="$3"
              gap="$3"
              borderBottomWidth={1}
              borderBottomColor="$borderColor"
              backgroundColor={notification.isRead ? 'transparent' : '$backgroundHover'}
              cursor="pointer"
              onPress={() => onMarkAsRead?.(notification.id)}
              hoverStyle={{ backgroundColor: '$backgroundHover' }}
            >
              <YStack
                width={8}
                height={8}
                borderRadius={4}
                backgroundColor={notification.isRead ? 'transparent' : '$blue10'}
                marginTop={6}
              />
              <YStack flex={1} gap="$1">
                <Text fontWeight="bold" fontSize="$3">
                  {notification.title}
                </Text>
                <Text color="$gray11" fontSize="$3">
                  {notification.description}
                </Text>
                <Text color="$gray9" fontSize="$2">
                  {notification.date}
                </Text>
              </YStack>
            </XStack>
          ))}
        </YStack>
      </ScrollArea>
    </YStack>
  )
}
