// @ts-nocheck
import React from 'react'
import { YStack, XStack, styled, GetProps, Text, Circle } from 'tamagui'

const AuditContainer = styled(YStack, {
  name: 'TimelineAudit',
  width: '100%',
  gap: '$4',
  padding: '$4',
  backgroundColor: '$background',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$4',
})

const AuditItem = styled(XStack, {
  gap: '$3',
  position: 'relative',
})

const Line = styled(YStack, {
  position: 'absolute',
  left: 11, // Center of circle (24/2) - (2/2)
  top: 24,
  bottom: -16, // Connect to next
  width: 2,
  backgroundColor: '$borderColor',
  zIndex: 0,
})

const AvatarCircle = styled(Circle, {
  width: 24,
  height: 24,
  backgroundColor: '$primary',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
})

const AvatarText = styled(Text, {
  color: 'white',
  fontSize: 10,
  fontWeight: 'bold',
})

const Content = styled(YStack, {
  flex: 1,
  gap: '$1',
  paddingBottom: '$4',
})

const HeaderRow = styled(XStack, {
  alignItems: 'center',
  gap: '$2',
  flexWrap: 'wrap',
})

const UserText = styled(Text, {
  fontWeight: 'bold',
  color: '$foreground',
  fontSize: '$3',
})

const ActionText = styled(Text, {
  color: '$mutedForeground',
  fontSize: '$3',
})

const TimeText = styled(Text, {
  color: '$gray10',
  fontSize: '$2',
  marginLeft: 'auto',
})

const DiffBox = styled(YStack, {
  backgroundColor: '$muted',
  padding: '$2',
  borderRadius: '$2',
  marginTop: '$2',
})

const DiffText = styled(Text, {
  fontFamily: '$mono',
  fontSize: '$2',
  color: '$foreground',
})

export type AuditEvent = {
  id: string
  user: string
  userInitials?: string
  action: string
  timestamp: string
  details?: string
  diff?: string
}

export type TimelineAuditProps = GetProps<typeof AuditContainer> & {
  events: AuditEvent[]
}

export const TimelineAudit = ({ events, ...props }: TimelineAuditProps) => {
  return (
    <AuditContainer {...props}>
      {events.map((event, index) => {
        const isLast = index === events.length - 1
        return (
          <AuditItem key={event.id}>
            {!isLast && <Line />}
            <AvatarCircle>
              <AvatarText>{event.userInitials || event.user.substring(0, 2).toUpperCase()}</AvatarText>
            </AvatarCircle>
            <Content>
              <HeaderRow>
                <UserText>{event.user}</UserText>
                <ActionText>{event.action}</ActionText>
                <TimeText>{new Date(event.timestamp).toLocaleString()}</TimeText>
              </HeaderRow>
              {event.details && <Text fontSize="$3">{event.details}</Text>}
              {event.diff && (
                <DiffBox>
                  <DiffText>{event.diff}</DiffText>
                </DiffBox>
              )}
            </Content>
          </AuditItem>
        )
      })}
    </AuditContainer>
  )
}
