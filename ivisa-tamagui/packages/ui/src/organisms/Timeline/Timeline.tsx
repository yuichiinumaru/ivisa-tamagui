import React from 'react'
import { YStack, XStack, styled, View, Text } from 'tamagui'
import { Alert } from '../../atoms/Alert'
import { Empty } from '../../molecules/Empty'
import { Skeleton } from '../../atoms/Skeleton'

const TimelineFrame = styled(YStack, {
  name: 'Timeline',
  tag: 'ul',
  width: '100%',
  gap: '$4',
})

const TimelineItemFrame = styled(XStack, {
  name: 'TimelineItem',
  tag: 'li',
  gap: '$4',
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
  gap: '$1',
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

const TimelineSkeleton = () => (
  <TimelineFrame data-testid="timeline-skeleton">
    {[...Array(3)].map((_, index) => (
      <TimelineItemFrame key={index}>
        <View>
          <Skeleton width={20} height={20} borderRadius={10} />
        </View>
        <TimelineContent>
          <Skeleton width="50%" height={15} />
          <Skeleton width="80%" height={15} />
        </TimelineContent>
      </TimelineItemFrame>
    ))}
  </TimelineFrame>
)

export const Timeline = ({ items, children, isLoading, isEmpty, hasError }: { items?: TimelineItemProps[], children?: React.ReactNode, isLoading?: boolean, isEmpty?: boolean, hasError?: boolean }) => {
  if (isLoading) {
    return <TimelineSkeleton />
  }

  if (hasError) {
    return (
      <Alert variant="destructive">
        <Alert.Title>Erro</Alert.Title>
        <Alert.Description>Ocorreu um erro ao carregar os dados. Por favor, tente novamente.</Alert.Description>
      </Alert>
    )
  }

  if (isEmpty || (items && items.length === 0 && !children)) {
    return <Empty title="Nenhum item encontrado" description="Não há itens para serem exibidos no momento." />
  }

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
