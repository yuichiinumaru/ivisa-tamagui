import React from 'react'
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from 'victory-native'
import { YStack, Text, useTheme, XStack } from 'tamagui'
import { LineChartProps } from './LineChart'
import { Skeleton } from '../../atoms/Skeleton'
import { AlertCircle, Inbox } from '@tamagui/lucide-icons'

export const LineChart = ({
  title,
  data,
  xKey,
  yKey,
  color = '$primary',
  isLoading = false,
  error,
  headerActions,
  footerContent,
}: LineChartProps) => {
  const theme = useTheme()
  const themeColor = theme[color as keyof typeof theme]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lineColor = themeColor ? (themeColor as any).get() : color
  const axisColor = theme.borderColor?.get() || '#ccc'
  const textColor = theme.color?.get() || '#000'

  if (isLoading) {
    return <Skeleton width="100%" height={300} />
  }
  if (error) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center" gap="$2" height={300}>
        <AlertCircle color="$red10" size="$2" />
        <Text color="$red10">Erro ao carregar os dados.</Text>
      </YStack>
    )
  }
  if (!data || data.length === 0) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center" gap="$2" height={300}>
        <Inbox size="$2" />
        <Text>Sem dados para exibir</Text>
      </YStack>
    )
  }

  return (
    <YStack width="100%" gap="$4" padding="$4" backgroundColor="$background" borderRadius="$4">
      <XStack justifyContent="space-between" alignItems="center">
        {title && <Text fontSize="$5">{title}</Text>}
        {headerActions}
      </XStack>
      <VictoryChart height={300} theme={VictoryTheme.material}>
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
        <VictoryLine
          data={data}
          x={xKey}
          y={yKey}
          style={{
            data: { stroke: lineColor },
          }}
        />
      </VictoryChart>
      {footerContent}
    </YStack>
  )
}

// Alias
export const TimeSeriesChart = LineChart
