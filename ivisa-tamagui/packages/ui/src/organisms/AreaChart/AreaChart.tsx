import React from 'react'
import { YStack, styled, Text, useTheme } from 'tamagui'
import {
  VictoryChart,
  VictoryArea,
  VictoryStack,
  VictoryAxis,
  VictoryVoronoiContainer,
  VictoryTooltip,
} from 'victory'
import { Skeleton } from '../../atoms/Skeleton'
import { AlertCircle, Inbox } from '@tamagui/lucide-icons'

const AreaChartContainer = styled(YStack, {
  name: 'AreaChart',
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

export interface AreaChartProps {
  title?: string
  data: Record<string, unknown>[] | Record<string, unknown>[][]
  xKey: string
  yKey: string
  stacked?: boolean
  colors?: string[]
  height?: number
  isLoading?: boolean
  error?: string
  footerContent?: React.ReactNode
}

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
  const gridColor = theme.borderColor?.get() || '#eee'

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

    const isMultiSeries = Array.isArray(data) && Array.isArray(data[0])
    if (!data || (isMultiSeries && data.length === 0) || (!isMultiSeries && (data as any[]).length === 0)) {
      return (
        <StateContainer>
          <Inbox size="$2" />
          <Text>Sem dados para exibir</Text>
        </StateContainer>
      )
    }

    const renderSeries = () => {
      if (stacked && isMultiSeries) {
        return (
          <VictoryStack colorScale={colorScale}>
            {(data as Record<string, unknown>[][]).map((series, i) => (
              <VictoryArea key={i} data={series} x={xKey} y={yKey} />
            ))}
          </VictoryStack>
        )
      }
      return (
        <VictoryArea
          data={data as Record<string, unknown>[]}
          x={xKey}
          y={yKey}
          style={{ data: { fill: colorScale[0], fillOpacity: 0.7, stroke: colorScale[0], strokeWidth: 2 } }}
        />
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
        {renderSeries()}
      </VictoryChart>
    )
  }

  return (
    <AreaChartContainer>
      {title && (
        <Text fontSize="$5" fontWeight="bold">
          {title}
        </Text>
      )}
      <ChartWrapper>{renderContent()}</ChartWrapper>
      {footerContent}
    </AreaChartContainer>
  )
}
