// @ts-nocheck
import React from 'react'
import { YStack, styled, Text, useTheme } from 'tamagui'
import {
  VictoryChart,
  VictoryScatter,
  VictoryAxis,
  VictoryVoronoiContainer,
  VictoryTooltip,
} from 'victory'
import { Skeleton } from '../../atoms/Skeleton'
import { AlertCircle, Inbox } from '@tamagui/lucide-icons'

const ScatterChartContainer = styled(YStack, {
  name: 'ScatterChart',
  padding: '$4',
  borderRadius: '$4',
  backgroundColor: '$background',
  gap: '$4',
  width: '100%',
  tag: 'section',
})

const ChartWrapper = styled(YStack, {
  flex: 1,
  minHeight: 300,
  justifyContent: 'center',
  alignItems: 'center',
})

const StateContainer = styled(YStack, {
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  flex: 1,
  padding: '$4',
})

export interface ScatterChartProps {
  title?: string
  data: Record<string, unknown>[]
  xKey: string
  yKey: string
  bubbleKey?: string // Key for bubble size
  color?: string
  height?: number
  isLoading?: boolean
  error?: string
  footerContent?: React.ReactNode
}

export const ScatterChart = ({
  title,
  data,
  xKey,
  yKey,
  bubbleKey,
  color,
  height = 300,
  isLoading = false,
  error,
  footerContent,
}: ScatterChartProps) => {
  const theme = useTheme()
  const defaultColor = theme.blue10?.get() || '#007BFF'
  const scatterColor = color ? (theme[color as keyof typeof theme] as any)?.get() || color : defaultColor
  const axisColor = theme.borderColor?.get() || '#ccc'
  const textColor = theme.color?.get() || '#000'
  const gridColor = theme.borderColor?.get() || '#eee'

  // Defensive copy to prevent mutation of frozen Storybook args
  const chartData = React.useMemo(() => (data ? [...data] : []), [data])

  const renderContent = () => {
    if (isLoading) {
      return <Skeleton width="100%" height={height} />
    }
    if (error) {
      return (
        <StateContainer>
          <AlertCircle color="$red10" size="$2" />
          <Text color="$red10">Erro ao carregar os dados.</Text>
          <Text fontSize="$2" color="$color11">
            {error}
          </Text>
        </StateContainer>
      )
    }

    if (!chartData || chartData.length === 0) {
      return (
        <StateContainer>
          <Inbox size="$2" />
          <Text>Sem dados para exibir</Text>
        </StateContainer>
      )
    }

    return (
      <VictoryChart
        height={height}
        padding={{ top: 20, bottom: 50, left: 50, right: 20 }}
        containerComponent={
          <VictoryVoronoiContainer
            voronoiDimension="x"
            labels={({ datum }) => `${datum[yKey]}`}
            labelComponent={<VictoryTooltip />}
          />
        }
      >
        <VictoryAxis
          style={{
            axis: { stroke: axisColor },
            tickLabels: { fill: textColor, padding: 5, fontSize: 12 },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: { fill: textColor, padding: 5, fontSize: 12 },
            grid: { stroke: gridColor, strokeDasharray: '4, 4' },
          }}
        />
        <VictoryScatter
          data={chartData}
          x={xKey}
          y={yKey}
          size={bubbleKey ? ({ datum }) => Math.max(3, datum[bubbleKey] / 2) : 5}
          style={{ data: { fill: scatterColor } }}
        />
      </VictoryChart>
    )
  }

  return (
    <ScatterChartContainer>
      {title && (
        <Text fontSize="$5" fontWeight="bold">
          {title}
        </Text>
      )}
      <ChartWrapper>{renderContent()}</ChartWrapper>
      {footerContent}
    </ScatterChartContainer>
  )
}
