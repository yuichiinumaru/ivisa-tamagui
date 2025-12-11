import { ReactNode } from 'react'
import { styled, YStack, Text, XStack, Paragraph } from 'tamagui'
import { ArrowUp, ArrowDown } from '@tamagui/lucide-icons'

import { Skeleton } from '../../atoms/Skeleton'

export const METRIC_CARD_NAME = 'MetricCard'

const MetricCardFrame = styled(YStack, {
  name: METRIC_CARD_NAME,
  backgroundColor: '$background',
  borderRadius: '$4',
  p: '$4',
  gap: '$4',
  borderColor: '$borderColor',
  borderWidth: 1,

  variants: {
    error: {
      true: {
        borderColor: '$red10',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
})

const MetricCardTrend = styled(XStack, {
  name: 'MetricCardTrend',
  gap: '$2',
  alignItems: 'center',

  variants: {
    direction: {
      up: {
        color: '$green10',
      },
      down: {
        color: '$red10',
      },
      neutral: {
        color: '$gray10',
      },
    },
  } as const,
})

export type MetricCardMetric = {
  title: string
  value: string
  trend?: {
    value: string
    direction: 'up' | 'down' | 'neutral'
  }
}

export type MetricCardProps = {
  metric: MetricCardMetric
  isLoading?: boolean
  hasError?: boolean
  isDisabled?: boolean
  rightSlot?: ReactNode
}

export const MetricCard = ({ metric, isLoading = false, hasError = false, isDisabled = false, rightSlot }: MetricCardProps) => {
  const { title, value, trend } = metric

  if (isLoading) {
    return (
      <MetricCardFrame>
        <XStack justifyContent="space-between" alignItems="center">
          <Skeleton width={100} height={20} />
          {rightSlot && <Skeleton width={80} height={40} />}
        </XStack>
        <YStack gap="$2">
          <Skeleton width={150} height={30} />
          <Skeleton width={120} height={16} />
        </YStack>
      </MetricCardFrame>
    )
  }

  const TrendIcon = trend?.direction === 'up' ? ArrowUp : trend?.direction === 'down' ? ArrowDown : null

  return (
    <MetricCardFrame error={hasError} disabled={isDisabled}>
      <XStack justifyContent="space-between" alignItems="flex-start" gap="$4">
        <Paragraph size="$5" fontWeight="500" numberOfLines={1} ellipse>
          {title}
        </Paragraph>
        {rightSlot}
      </XStack>

      <YStack gap="$1">
        <Text fontSize="$8" fontWeight="bold" numberOfLines={1} ellipse>
          {value}
        </Text>
        {trend && (
          <MetricCardTrend direction={trend.direction}>
            {TrendIcon && <TrendIcon size={16} />}
            <Paragraph size="$3">{trend.value}</Paragraph>
          </MetricCardTrend>
        )}
      </YStack>
    </MetricCardFrame>
  )
}
