import React, { ReactNode } from 'react'
import { GetProps, Text, YStack, useTheme } from 'tamagui'
import { VictoryPie } from 'victory-native'
import { Skeleton } from '../../atoms/Skeleton'
import {
  GaugeChartFrame,
  GaugeChartTitle,
  GaugeChartValueText,
} from './GaugeChart.parts'

// Skeleton Component for Loading State
const GaugeChartSkeleton = () => {
  return (
    <GaugeChartFrame>
      <YStack alignItems="center" gap="$2" width="100%">
        <Skeleton width={150} height={24} />
        <Skeleton circle width={200} height={100} />
        <Skeleton width={100} height={20} />
      </YStack>
    </GaugeChartFrame>
  )
}

export type GaugeChartProps = GetProps<typeof GaugeChartFrame> & {
  title: string
  value: number // Percentage value (0-100)
  variant?: 'default' | 'radial'
  footerContent?: ReactNode
  isLoading?: boolean
  error?: string | null
  emptyMessage?: string
  primaryColor?: string
  secondaryColor?: string
  tag?: 'section' | 'aside' | 'div'
}

export const GaugeChart = ({
  title,
  value,
  variant = 'default',
  footerContent,
  isLoading = false,
  error = null,
  emptyMessage = 'Sem dados para exibir.',
  primaryColor: primaryColorProp,
  secondaryColor: secondaryColorProp,
  tag = 'div',
  ...rest
}: GaugeChartProps) => {
  const theme = useTheme()
  const primaryColor = primaryColorProp || theme.blue10?.val || '#007BFF'
  const secondaryColor = secondaryColorProp || theme.gray6?.val || '#E0E0E0'

  if (isLoading) {
    return <GaugeChartSkeleton />
  }

  if (error) {
    return (
      <GaugeChartFrame tag={tag} {...rest}>
        <Text color="$red10" textAlign="center">
          Erro ao carregar dados: {error}
        </Text>
      </GaugeChartFrame>
    )
  }

  const chartData = [
    { x: 'value', y: value, fill: primaryColor },
    { x: 'remainder', y: 100 - value, fill: secondaryColor },
  ]

  // Render empty state if value is 0 or data is otherwise invalid
  if (value === 0) {
    return (
      <GaugeChartFrame tag={tag} {...rest}>
        <GaugeChartTitle>{title}</GaugeChartTitle>
        <Text color="$gray10" textAlign="center">
          {emptyMessage}
        </Text>
        {footerContent}
      </GaugeChartFrame>
    )
  }

  // Configuration for variants
  const isRadial = variant === 'radial'
  const startAngle = isRadial ? 0 : -90
  const endAngle = isRadial ? 360 : 90
  const innerRadius = isRadial ? 80 : 80
  const cornerRadius = isRadial ? 40 : 25
  const parentStyle = isRadial ? {} : { marginTop: -60 }

  return (
    <GaugeChartFrame tag={tag} {...rest}>
      {/* Title */}
      <GaugeChartTitle>{title}</GaugeChartTitle>

      {/* Chart Container */}
      <YStack position="relative" alignItems="center" justifyContent="center">
        <VictoryPie
          data={chartData}
          innerRadius={innerRadius}
          cornerRadius={cornerRadius}
          labels={() => null}
          startAngle={startAngle}
          endAngle={endAngle}
          width={240}
          height={240}
          padding={0}
          style={{
            data: {
              fill: ({ datum }) => datum.fill,
            },
            parent: parentStyle,
          }}
        />
        <GaugeChartValueText>{`${Math.round(value)}%`}</GaugeChartValueText>
      </YStack>

      {/* Footer Slot */}
      {footerContent && <YStack>{footerContent}</YStack>}
    </GaugeChartFrame>
  )
}

export default GaugeChart

export type GaugeChartSkeletonProps = React.ComponentProps<typeof GaugeChartSkeleton>
