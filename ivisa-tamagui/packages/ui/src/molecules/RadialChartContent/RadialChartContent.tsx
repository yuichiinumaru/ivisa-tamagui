import { IconProps } from '@tamagui/helpers-icon'
import { ReactNode } from 'react'
import { Circle, Star } from '@tamagui/lucide-icons'
import { Paragraph, Text, XStack, YStack, styled } from 'tamagui'
import { Skeleton } from '../../atoms/Skeleton'

const RadialChartContentFrame = styled(XStack, {
  name: 'RadialChartContent',
  gap: '$4',
  p: '$4',
  br: '$4',
  backgroundColor: '$background',
  alignItems: 'center',

  variants: {
    error: {
      true: {
        borderColor: '$red10',
        borderWidth: 1,
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
})

const IconContainer = styled(YStack, {
  name: 'IconContainer',
  p: '$3',
  br: '$12',
  backgroundColor: '$background',
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: '$gray8',
  borderWidth: 1,
})

type DataPoint = {
  label: string
  value: string
  color?: string
  icon?: React.ComponentType<IconProps>
}

type RadialChartContentProps = {
  title: string
  subtitle?: string
  icon?: ReactNode
  data: DataPoint[]
  rightSlot?: ReactNode
  isLoading?: boolean
  hasError?: boolean
  isDisabled?: boolean
}

const renderDataPoint = (item: DataPoint, index: number) => {
  const Icon = item.icon || Circle
  return (
    <XStack key={index} gap="$2" alignItems="center">
      <Icon size="$1" color={item.color || '$gray8'} />
      <Paragraph size="$2">{item.label}</Paragraph>
      <Text size="$2" fontWeight="bold">
        {item.value}
      </Text>
    </XStack>
  )
}

const RadialChartContent = ({
  title,
  subtitle,
  icon = <Star />,
  data,
  rightSlot,
  isLoading = false,
  hasError = false,
  isDisabled = false,
}: RadialChartContentProps) => {
  if (isLoading) {
    return (
      <RadialChartContentFrame>
        <YStack gap="$2" f={1}>
          <Skeleton h="$4" w="$24" />
          <Skeleton h="$2" w="$32" />
          <XStack gap="$4" mt="$2">
            <Skeleton h="$2" w="$12" />
            <Skeleton h="$2" w="$12" />
          </XStack>
        </YStack>
        <Skeleton h="$8" w="$16" />
      </RadialChartContentFrame>
    )
  }

  return (
    <RadialChartContentFrame error={hasError} disabled={isDisabled}>
      <IconContainer>{icon}</IconContainer>
      <YStack f={1} gap="$2">
        <YStack gap="$1">
          <Text fontSize="$6" fontWeight="bold" ellipse>
            {title}
          </Text>
          {subtitle && (
            <Paragraph size="$2" ellipse>
              {subtitle}
            </Paragraph>
          )}
        </YStack>
        <XStack gap="$4">{data.map(renderDataPoint)}</XStack>
      </YStack>
      {rightSlot}
    </RadialChartContentFrame>
  )
}

export { RadialChartContent }
export type { RadialChartContentProps }
