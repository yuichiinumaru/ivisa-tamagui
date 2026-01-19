import React from 'react'
import { VictoryArea, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory-native'
import { YStack, Text, useTheme } from 'tamagui'
import { AreaChartProps } from './AreaChart'
import { Skeleton } from '../../atoms/Skeleton'
import { AlertCircle, Inbox } from '@tamagui/lucide-icons'

export const AreaChart = ({
  title,
  data,
  xKey,
  yKey,
  stacked = false,
  colors,
  height = 300,
  isLoading = false,
  error,
  footerContent,
}: AreaChartProps) => {
  const theme = useTheme()
  const defaultColor = theme.blue10?.get() || '#007BFF'
  const colorScale = colors || [
    defaultColor,
    theme.green10?.get() || '#28A745',
    theme.orange10?.get() || '#FD7E14',
  ]
  const axisColor = theme.borderColor?.get() || '#ccc'
  const textColor = theme.color?.get() || '#000'

  if (isLoading) {
    return <Skeleton width="100%" height={height} />
  }
  if (error) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center" gap="$2" height={height}>
        <AlertCircle color="$red10" size="$2" />
        <Text color="$red10">Erro ao carregar os dados.</Text>
      </YStack>
    )
  }

  const isMultiSeries = Array.isArray(data) && Array.isArray(data[0])
  if (!data || (isMultiSeries && data.length === 0) || (!isMultiSeries && (data as any[]).length === 0)) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center" gap="$2" height={height}>
        <Inbox size="$2" />
        <Text>Sem dados para exibir</Text>
      </YStack>
    )
  }

  const renderAreas = () => {
    if (isMultiSeries) {
      const seriesData = data as Record<string, unknown>[][]
      const areas = seriesData.map((series, index) => (
        <VictoryArea
          key={index}
          data={series}
          x={xKey}
          y={yKey}
          style={{
            data: { fill: colorScale[index % colorScale.length], fillOpacity: 0.6 }
          }}
        />
      ))

      if (stacked) {
        return <VictoryStack>{areas}</VictoryStack>
      }
      return areas
    }

    return (
      <VictoryArea
        data={data as Record<string, unknown>[]}
        x={xKey}
        y={yKey}
        style={{
          data: { fill: colorScale[0], fillOpacity: 0.6 }
        }}
      />
    )
  }

  return (
    <YStack width="100%" gap="$4" padding="$4" backgroundColor="$background" borderRadius="$4">
      {title && <Text fontSize="$5" fontWeight="bold">{title}</Text>}
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
        {renderAreas()}
      </VictoryChart>
      {footerContent}
    </YStack>
  )
}

export type AreaChartProps = React.ComponentProps<typeof AreaChart>

