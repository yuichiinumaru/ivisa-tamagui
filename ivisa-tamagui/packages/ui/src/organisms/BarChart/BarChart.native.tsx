// Removed ts-nocheck
import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory-native'
import { YStack, Text, useTheme } from 'tamagui'
import { BarChartProps } from './BarChart'
import { Skeleton } from '../../atoms/Skeleton'
import { AlertTriangle, BarChart3 } from '@tamagui/lucide-icons'

export const BarChart = ({
  data,
  xKey,
  yKey,
  color = '$primary',
  height = 300,
  isLoading = false,
  error = null,
  headerContent,
}: BarChartProps) => {
  const theme = useTheme()
  const themeColor = theme[color as keyof typeof theme]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const barColor = themeColor ? (themeColor as any).get() : color
  const axisColor = theme.borderColor?.get() || '#ccc'
  const textColor = theme.color?.get() || '#000'

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
    <YStack width="100%" gap="$4">
      {headerContent}
      <VictoryChart height={height} theme={VictoryTheme.material}>
        <VictoryAxis
          style={{
            axis: { stroke: axisColor },
            tickLabels: { fill: textColor, fontSize: 12 },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: axisColor },
            tickLabels: { fill: textColor, fontSize: 12 },
          }}
        />
        <VictoryBar
          data={data}
          x={xKey}
          y={yKey}
          style={{
            data: { fill: barColor },
          }}
        />
      </VictoryChart>
    </YStack>
  )
}

// Aliases
export const ColumnChart = BarChart
export const Charts = BarChart

export type BarChartProps = React.ComponentProps<typeof BarChart>

export type ColumnChartProps = React.ComponentProps<typeof ColumnChart>

export type ChartsProps = React.ComponentProps<typeof Charts>
