import { Skeleton } from '../../atoms/Skeleton'
import { YStack, Text, useTheme } from 'tamagui'
import { VictoryChart, VictoryBar, VictoryAxis, VictoryContainer, VictoryGroup, VictoryScatter } from 'victory'
import { AlertTriangle, BarChart as BulletIcon } from '@tamagui/lucide-icons'
import React from 'react'

export interface BulletChartProps {
  data?: Record<string, unknown>[]
  xKey: string // Category (e.g. Metric Name)
  yKey: string // Current Value
  targetKey: string // Target Value
  rangeKey: string // Range/Background (e.g. Max or multiple ranges)

  color?: string
  targetColor?: string
  rangeColor?: string

  height?: number
  isLoading?: boolean
  error?: Error | null
  headerContent?: React.ReactNode
}

export const BulletChart = ({
  data,
  xKey,
  yKey,
  targetKey,
  rangeKey,
  color = '$primary',
  targetColor = '$red10',
  rangeColor = '$gray5',
  height = 300,
  isLoading = false,
  error = null,
  headerContent,
}: BulletChartProps) => {
  const theme = useTheme()
  const themeColor = theme[color as keyof typeof theme]
  const barColor =
    themeColor && typeof themeColor === 'object' && 'get' in themeColor
      ? (themeColor as { get: () => string }).get()
      : color

  const themeTargetColor = theme[targetColor as keyof typeof theme]
  const targetMarkColor =
    themeTargetColor && typeof themeTargetColor === 'object' && 'get' in themeTargetColor
      ? (themeTargetColor as { get: () => string }).get()
      : targetColor

  const themeRangeColor = theme[rangeColor as keyof typeof theme]
  const rangeBarColor =
    themeRangeColor && typeof themeRangeColor === 'object' && 'get' in themeRangeColor
      ? (themeRangeColor as { get: () => string }).get()
      : rangeColor

  const axisColor = theme.borderColor?.get() || '#ccc'
  const textColor = theme.color?.get() || '#000'

  const renderContent = () => {
    if (isLoading) {
      return <Skeleton height={height} width="100%" />
    }

    if (error) {
      return (
        <YStack flex={1} justifyContent="center" alignItems="center" gap="$2" height={height}>
          <AlertTriangle color="$red10" />
          <Text color="$red10">Ocorreu um erro ao carregar os dados.</Text>
        </YStack>
      )
    }

    if (!data || data.length === 0) {
      return (
        <YStack flex={1} justifyContent="center" alignItems="center" gap="$2" height={height}>
          <BulletIcon color="$gray10" />
          <Text>Não há dados para exibir.</Text>
        </YStack>
      )
    }

    return (
      <VictoryChart
        domainPadding={{ x: 20, y: 20 }}
        height={height}
        containerComponent={<VictoryContainer responsive={true} />}
      >
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: axisColor },
            tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: 'inherit' },
          }}
        />
        <VictoryAxis
            style={{
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: 'inherit' },
            }}
        />

        {/* Background Range Bar */}
        <VictoryBar
            data={data}
            x={xKey}
            y={rangeKey}
            style={{ data: { fill: rangeBarColor, width: 40 } }}
            cornerRadius={{ top: 2 }}
        />

        {/* Value Bar */}
        <VictoryBar
            data={data}
            x={xKey}
            y={yKey}
            style={{ data: { fill: barColor, width: 15 } }}
            cornerRadius={{ top: 2 }}
        />

        {/* Target Marker */}
        <VictoryScatter
            data={data}
            x={xKey}
            y={targetKey}
            size={8}
            symbol="minus"
            style={{ data: { fill: targetMarkColor, strokeWidth: 2 } }}
        />
      </VictoryChart>
    )
  }

  return (
    <YStack width="100%" gap="$4" paddingHorizontal="$4">
      {headerContent}
      {renderContent()}
    </YStack>
  )
}

