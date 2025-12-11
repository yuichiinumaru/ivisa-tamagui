import { Skeleton } from '../../atoms/Skeleton'
import { YStack, Text, useTheme } from 'tamagui'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryContainer } from 'victory'
import { AlertTriangle, BarChart3 } from '@tamagui/lucide-icons'
import React from 'react'

export interface ChartsProps {
  data?: Record<string, unknown>[]
  xKey: string
  yKey: string
  color?: string
  height?: number
  isLoading?: boolean
  error?: Error | null
  headerContent?: React.ReactNode
}

export const Charts = ({
  data,
  xKey,
  yKey,
  color = '$primary',
  height = 300,
  isLoading = false,
  error = null,
  headerContent,
}: ChartsProps) => {
  const theme = useTheme()
  const themeColor = theme[color as keyof typeof theme]
  const barColor = themeColor ? (themeColor as unknown as { get: () => string }).get() : color
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
          <BarChart3 color="$gray10" />
          <Text>Não há dados para exibir.</Text>
        </YStack>
      )
    }

    return (
      <VictoryChart
        domainPadding={{ x: 20 }}
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
        <VictoryBar
          data={data}
          x={xKey}
          y={yKey}
          style={{
            data: { fill: barColor },
          }}
          cornerRadius={{ top: 4 }}
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
