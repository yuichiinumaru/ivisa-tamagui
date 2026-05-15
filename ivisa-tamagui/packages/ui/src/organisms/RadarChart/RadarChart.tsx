import { Skeleton } from '../../atoms/Skeleton'
import { YStack, Text, useTheme } from 'tamagui'
import { VictoryChart, VictoryPolarAxis, VictoryArea, VictoryGroup, VictoryLabel, VictoryContainer } from 'victory'
import { AlertTriangle, Activity as RadarIcon } from '@tamagui/lucide-icons'
import React from 'react'

export interface RadarChartProps {
  data?: Record<string, unknown>[]
  keys?: string[] // Keys for the radar axes (e.g. ['math', 'science', 'english'])
  labelKey?: string // Key to display labels for axes (e.g. 'subject')
  valueKey?: string // Key for values (e.g. 'score')
  // Alternative data structure: array of objects where each object has all keys
  color?: string | string[]
  height?: number
  isLoading?: boolean
  error?: Error | null
  headerContent?: React.ReactNode
}

// Victory Radar Chart requires data transformation usually
export const RadarChart = ({
  data,
  keys,
  color = '$primary',
  height = 300,
  isLoading = false,
  error = null,
  headerContent,
}: RadarChartProps) => {
  const theme = useTheme()
  const axisColor = theme.borderColor?.get() || '#ccc'
  const textColor = theme.color?.get() || '#000'

  const getColor = (c: string) => {
    const themeColor = theme[c as keyof typeof theme]
    return themeColor && typeof themeColor === 'object' && 'get' in themeColor
      ? (themeColor as { get: () => string }).get()
      : c
  }

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

    if (!data || data.length === 0 || !keys) {
      return (
        <YStack flex={1} justifyContent="center" alignItems="center" gap="$2" height={height}>
          <RadarIcon color="$gray10" />
          <Text>Não há dados para exibir.</Text>
        </YStack>
      )
    }

    // Assuming data is array of objects where each object represents a dataset (e.g. Student A, Student B)
    // and keys are the axes.
    // We need to transform this for VictoryPolarAxis if needed, or simply map it.
    // However, typical Victory Radar example uses specific grouping.

    // Let's assume input data: [{ attribute: 'Speed', value: 10 }, { attribute: 'Power', value: 20 }, ...] for a single radar
    // OR multiple arrays.

    // Let's support the structure where 'data' is an array of datasets, each dataset is an array of points { x: 'Speed', y: 10 }
    // But to keep it simple and aligned with standard props:
    // data = [ { x: 'Speed', y: 10 }, { x: 'Power', y: 20 } ] for single series
    // or data = [ [ { x: 'Speed', y: 10 } ... ], [ ... ] ] for multiple series?

    // Let's simplify: data is array of objects. keys is just passed for valid axes.
    // If data is Record<string, unknown>[], and we have xKey and yKey...
    // But Radar usually needs 'x' (category) and 'y' (value).

    // Let's assume data is standard: [ { x: 'Math', y: 90 }, { x: 'Science', y: 80 } ]

    // Defensive copy to prevent mutation of frozen Storybook args
    const chartData = React.useMemo(() => (data ? [...data] : []), [data])

    const datasets = Array.isArray(chartData[0]) ? (chartData as unknown as any[]) : [chartData]
    const colors = Array.isArray(color) ? color : [color]

    return (
      <VictoryChart
        polar
        height={height}
        domainPadding={{ x: 20, y: 20 }}
        containerComponent={<VictoryContainer responsive={true} />}
      >
        <VictoryGroup
          colorScale={colors.map(c => getColor(c))}
          style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
        >
          {datasets.map((dataset, i) => (
            <VictoryArea key={i} data={dataset} />
          ))}
        </VictoryGroup>

        {datasets[0]?.map((d: any, i: number) => {
          return (
            <VictoryPolarAxis key={i} dependentAxis style={{ axisLabel: { padding: 10 } }} labelPlacement="vertical" />
          )
        })}
        <VictoryPolarAxis
          labelPlacement="parallel"
          tickFormat={() => ''}
          style={{
            axis: { stroke: axisColor },
            grid: { stroke: axisColor, opacity: 0.5 }
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

