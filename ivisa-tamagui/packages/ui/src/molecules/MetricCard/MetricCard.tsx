
import { ReactNode } from 'react'
import { GetProps, H4, styled, Text, XStack, YStack } from 'tamagui'
import { ArrowUp, ArrowDown, Minus } from '@tamagui/lucide-icons'
import { Skeleton } from '../../atoms/Skeleton'

type Metric = {
  title: string
  value: string
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  trendLabel?: string
}

const MetricCardFrame = styled(YStack, {
  name: 'MetricCard',
  padding: '$4',
  borderRadius: '$2',
  backgroundColor: '$background',
  borderWidth: 1,
  borderColor: '$borderColor',
  gap: '$2',
})

const MetricCardHeader = styled(XStack, {
  name: 'MetricCardHeader',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$2',
})

const MetricCardContent = styled(YStack, {
  name: 'MetricCardContent',
  gap: '$1',
})

type MetricCardProps = GetProps<typeof MetricCardFrame> & {
  metric: Metric
  isLoading?: boolean
  hasError?: boolean
  rightSlot?: ReactNode
  footerSlot?: ReactNode
}

const trendMap = {
  up: {
    icon: <ArrowUp size="$1" color="$green10" />,
    color: '$green10',
    defaultLabel: 'Aumento de',
  },
  down: {
    icon: <ArrowDown size="$1" color="$red10" />,
    color: '$red10',
    defaultLabel: 'Queda de',
  },
  neutral: {
    icon: <Minus size="$1" color="$gray10" />,
    color: '$gray10',
    defaultLabel: 'Estável em',
  },
}

const MetricCardComponent = MetricCardFrame.styleable<MetricCardProps>(
  ({ metric, isLoading, hasError, rightSlot, footerSlot, ...rest }, ref) => {
    const { title, value, trend, trendValue, trendLabel } = metric

    if (isLoading) {
      return (
        <MetricCardFrame ref={ref} {...rest}>
          <Skeleton height={120} />
        </MetricCardFrame>
      )
    }

    const trendInfo = trend ? trendMap[trend] : null
    const displayLabel = trendLabel || (trendInfo ? trendInfo.defaultLabel : '')

    return (
      <MetricCardFrame ref={ref} borderColor={hasError ? '$red10' : '$borderColor'} {...rest}>
        <MetricCardHeader>
          <H4 size="$4" fontWeight="400" color="$gray11">
            {title}
          </H4>
          {rightSlot}
        </MetricCardHeader>
        <MetricCardContent>
          <Text fontSize="$8" fontWeight="bold">
            {value}
          </Text>
          {trendInfo && trendValue && (
            <XStack
              gap="$1.5"
              alignItems="center"
              aria-label={`${displayLabel} ${trendValue}`}
            >
              {trendInfo.icon}
              <Text color={trendInfo.color} fontSize="$2">
                {trendValue}
              </Text>
              {displayLabel && (
                <Text color="$gray11" fontSize="$2">
                  {displayLabel}
                </Text>
              )}
            </XStack>
          )}
          {footerSlot}
        </MetricCardContent>
      </MetricCardFrame>
    )
  },
)

export const MetricCard = MetricCardComponent
export type { MetricCardProps }

export type MetricCardProps = React.ComponentProps<typeof MetricCard>

