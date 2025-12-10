import React from 'react'
import { YStack, XStack, styled, View, Text } from 'tamagui'

const TimelineFrame = styled(YStack, {
  name: 'Timeline',
  space: '$4',
})

const TimelineItemFrame = styled(XStack, {
  name: 'TimelineItem',
  space: '$4',
})

const TimelineConnector = styled(View, {
  width: 2,
  backgroundColor: '$borderColor',
  position: 'absolute',
  top: 24,
  bottom: -24,
  left: 9, // center of dot (w=20 / 2 - 1)
  zIndex: 0,
})

const TimelineDot = styled(View, {
  width: 20,
  height: 20,
  borderRadius: 10,
  backgroundColor: '$background',
  borderWidth: 2,
  borderColor: '$primary',
  zIndex: 1,
})

const TimelineContent = styled(YStack, {
  flex: 1,
  space: '$1',
})

const TimelineTime = styled(Text, {
  fontSize: '$2',
  color: '$mutedForeground',
})

const TimelineTitle = styled(Text, {
  fontSize: '$3',
  fontWeight: 'bold',
  color: '$foreground',
})

const TimelineDescription = styled(Text, {
  fontSize: '$3',
  color: '$foreground',
})

export type TimelineItemProps = {
  title: string
  description?: string
  time?: string
  isLast?: boolean
}

export const TimelineItem = ({ title, description, time, isLast, children }: TimelineItemProps & { children?: React.ReactNode }) => {
  return (
    <TimelineItemFrame>
      <View>
        <TimelineDot />
        {!isLast && <TimelineConnector />}
      </View>
      <TimelineContent>
        {time && <TimelineTime>{time}</TimelineTime>}
        {title && <TimelineTitle>{title}</TimelineTitle>}
        {description && <TimelineDescription>{description}</TimelineDescription>}
        {children}
      </TimelineContent>
    </TimelineItemFrame>
  )
}

export const Timeline = ({ items, children }: { items?: TimelineItemProps[], children?: React.ReactNode }) => {
  if (items) {
    return (
      <TimelineFrame>
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} isLast={index === items.length - 1} />
        ))}
      </TimelineFrame>
    )
  }

  // Handle composition pattern
  return (
    <TimelineFrame>
      {children}
    </TimelineFrame>
  )
}
