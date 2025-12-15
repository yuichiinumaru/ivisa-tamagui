import React from 'react'
import { GetProps, styled, XStack, YStack, Paragraph } from 'tamagui'
import { Card } from '../Card'
import { Bell, X } from '@tamagui/lucide-icons'
import { Avatar } from '../../atoms/Avatar'
import { Button } from '../../atoms/Button'

const NotificationCardFrame = styled(Card, {
  name: 'NotificationCard',
  padding: '$4',
  width: '100%',
  flexDirection: 'row',
  gap: '$3',
  alignItems: 'flex-start',
  position: 'relative',
})

const NotificationContent = styled(YStack, {
  flex: 1,
  gap: '$1',
})

const NotificationTitle = styled(Paragraph, {
  fontWeight: '600',
  fontSize: '$3',
  color: '$foreground',
})

const NotificationDescription = styled(Paragraph, {
  fontSize: '$3',
  color: '$mutedForeground',
  lineHeight: '$4',
})

const NotificationTime = styled(Paragraph, {
  fontSize: '$2',
  color: '$mutedForeground',
  marginTop: '$1',
})

const UnreadIndicator = styled(XStack, {
  width: 8,
  height: 8,
  borderRadius: '$full',
  backgroundColor: '$primary',
  position: 'absolute',
  top: '$4',
  right: '$4',
})

export type NotificationCardProps = GetProps<typeof NotificationCardFrame> & {
  title: string
  description: string
  time?: string
  unread?: boolean
  avatarSrc?: string
  avatarFallback?: string
  onDismiss?: () => void
  onPress?: () => void
}

export const NotificationCard = React.forwardRef<React.ElementRef<typeof NotificationCardFrame>, NotificationCardProps>(
  ({ title, description, time, unread, avatarSrc, avatarFallback, onDismiss, onPress, ...props }, ref) => {
    return (
      <NotificationCardFrame ref={ref} {...props} onPress={onPress} hoverStyle={{ backgroundColor: '$muted' }} pressStyle={{ opacity: 0.8 }}>
        {unread && <UnreadIndicator />}

        <Avatar size="$4" circular>
          <Avatar.Image src={avatarSrc} />
          <Avatar.Fallback backgroundColor="$muted" alignItems="center" justifyContent="center">
            {avatarFallback ? (
              <Paragraph>{avatarFallback}</Paragraph>
            ) : (
              <Bell size={16} color="$mutedForeground" />
            )}
          </Avatar.Fallback>
        </Avatar>

        <NotificationContent>
          <NotificationTitle>{title}</NotificationTitle>
          <NotificationDescription>{description}</NotificationDescription>
          {time && <NotificationTime>{time}</NotificationTime>}
        </NotificationContent>

        {onDismiss && (
          <Button
            size="$2"
            variant="ghost"
            borderRadius="$full"
            icon={X}
            onPress={(e) => {
              e.stopPropagation()
              onDismiss()
            }}
          />
        )}
      </NotificationCardFrame>
    )
  }
)

NotificationCard.displayName = 'NotificationCard'
