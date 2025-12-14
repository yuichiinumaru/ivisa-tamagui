import { Skeleton } from '../../atoms/Skeleton'
import { YStack, Text, useTheme } from 'tamagui'
import { VictoryChart, VictoryBoxPlot, VictoryAxis, VictoryContainer } from 'victory'
import { AlertTriangle, BarChart as BoxPlotIcon } from '@tamagui/lucide-icons'
import React from 'react'

export interface BoxPlotChartProps {
  data?: Record<string, unknown>[]
  xKey?: string
  minKey?: string
  maxKey?: string
  q1Key?: string
  q3Key?: string
  medianKey?: string
  color?: string
  height?: number
  isLoading?: boolean
  error?: Error | null
  headerContent?: React.ReactNode
}

export const BoxPlotChart = ({
  data,
  xKey = 'x',
  minKey = 'min',
  maxKey = 'max',
  q1Key = 'q1',
  q3Key = 'q3',
  medianKey = 'median',
  color = '$primary',
  height = 300,
  isLoading = false,
  error = null,
  headerContent,
}: BoxPlotChartProps) => {
  const theme = useTheme()
  const themeColor = theme[color as keyof typeof theme]
  const boxColor =
    themeColor && typeof themeColor === 'object' && 'get' in themeColor
      ? (themeColor as { get: () => string }).get()
      : color
  const axisColor = theme.borderColor?.get() || '#ccc'
  const textColor = theme.color?.get() || '#000'
  const gridColor = theme.borderColor?.get() || '#eee'

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
          <BoxPlotIcon color="$gray10" />
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
          style={{
            axis: { stroke: axisColor },
            tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: 'inherit' },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: 'inherit' },
            grid: { stroke: gridColor, strokeDasharray: '4, 4' },
          }}
        />
        <VictoryBoxPlot
          data={data}
          x={xKey}
          min={minKey}
          max={maxKey}
          q1={q1Key}
          q3={q3Key}
          median={medianKey}
          style={{
            min: { stroke: boxColor, strokeWidth: 2 },
            max: { stroke: boxColor, strokeWidth: 2 },
            q1: { fill: boxColor, fillOpacity: 0.5, stroke: boxColor, strokeWidth: 2 },
            q3: { fill: boxColor, fillOpacity: 0.5, stroke: boxColor, strokeWidth: 2 },
            median: { stroke: textColor, strokeWidth: 2 },
          }}
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
