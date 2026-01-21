// @ts-nocheck
import { Skeleton } from '../../atoms/Skeleton'
import { YStack, Text, useTheme } from 'tamagui'
import { VictoryChart, VictoryBar, VictoryAxis, VictoryContainer, VictoryLabel } from 'victory'
import { AlertTriangle, Filter as FunnelIcon } from '@tamagui/lucide-icons'
import React from 'react'

export interface FunnelChartProps {
  data?: Record<string, unknown>[]
  xKey: string // Category (Step)
  yKey: string // Value
  color?: string
  height?: number
  isLoading?: boolean
  error?: Error | null
  headerContent?: React.ReactNode
}

export const FunnelChart = ({
  data,
  xKey,
  yKey,
  color = '$primary',
  height = 300,
  isLoading = false,
  error = null,
  headerContent,
}: FunnelChartProps) => {
  const theme = useTheme()
  const themeColor = theme[color as keyof typeof theme]
  const barColor =
    themeColor && typeof themeColor === 'object' && 'get' in themeColor
      ? (themeColor as { get: () => string }).get()
      : color
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
          <FunnelIcon color="$gray10" />
          <Text>Não há dados para exibir.</Text>
        </YStack>
      )
    }

    const processedData = data.map((d) => {
      const val = Number(d[yKey]) || 0
      return {
        ...d,
        _y0: -val / 2,
        _y: val / 2,
        _label: val
      }
    })

    return (
      <VictoryChart
        domainPadding={{ x: 20, y: 20 }}
        height={height}
        containerComponent={<VictoryContainer responsive={true} />}
      >
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: { fill: 'transparent' },
            grid: { stroke: 'transparent' }
          }}
        />
        <VictoryAxis
            style={{
                axis: { stroke: 'transparent' },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12 }
            }}
        />
        <VictoryBar
          horizontal
          data={processedData}
          x={xKey}
          y="_y"
          y0="_y0"
          style={{
            data: { fill: barColor, width: 30 },
            labels: { fill: textColor }
          }}
          labels={({ datum }) => datum._label}
          labelComponent={<VictoryLabel />}
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

