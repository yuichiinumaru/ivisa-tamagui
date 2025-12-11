import React from 'react'
import { YStack, styled, Text, useTheme, XStack } from 'tamagui'
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryVoronoiContainer,
  VictoryTooltip,
} from 'victory-native'
import { Skeleton } from '../../atoms/Skeleton'
import { AlertCircle, Inbox } from '@tamagui/lucide-icons'

const TimeSeriesChartContainer = styled(YStack, {
  name: 'TimeSeriesChart',
  padding: '$4',
  borderRadius: '$4',
  backgroundColor: '$background',
  gap: '$4',
  width: '100%',
  tag: 'section',
})

const Header = styled(XStack, {
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$2',
})

const ChartContainer = styled(YStack, {
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

export interface TimeSeriesChartProps {
  title?: string
  data: Record<string, unknown>[]
  xKey: string
  yKey: string
  color?: string
  isLoading?: boolean
  error?: string
  headerActions?: React.ReactNode
  footerContent?: React.ReactNode
}

export const TimeSeriesChart = ({
  title,
  data,
  xKey,
  yKey,
  color = '$primary',
  isLoading = false,
  error,
  headerActions,
  footerContent,
}: TimeSeriesChartProps) => {
  const theme = useTheme()
  const themeColor = theme[color as keyof typeof theme]
  const lineColor = themeColor ? (themeColor as unknown as { get: () => string }).get() : color
  const axisColor = theme.borderColor?.get() || '#ccc'
  const textColor = theme.color?.get() || '#000'
  const gridColor = theme.borderColor?.get() || '#eee'

  const renderContent = () => {
    if (isLoading) {
      return <Skeleton width="100%" height={300} />
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
    if (!data || data.length === 0) {
      return (
        <StateContainer>
          <Inbox size="$2" />
          <Text>Sem dados para exibir</Text>
          <Text fontSize="$2" color="$color11">
            Não há informações disponíveis no momento.
          </Text>
        </StateContainer>
      )
    }
    return (
      <VictoryChart
        height={300}
        padding={{ top: 20, bottom: 50, left: 50, right: 20 }}
        containerComponent={
          <VictoryVoronoiContainer
            voronoiDimension="x"
            labels={({ datum }) => `${datum.y}`}
            labelComponent={
              <VictoryTooltip
                cornerRadius={4}
                flyoutStyle={{ fill: theme.background?.get() || 'white' }}
                style={{ fill: textColor }}
              />
            }
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
        <VictoryLine
          data={data}
          x={xKey}
          y={yKey}
          style={{
            data: { stroke: lineColor, strokeWidth: 2 },
          }}
        />
      </VictoryChart>
    )
  }

  return (
    <TimeSeriesChartContainer>
      <Header>
        {title && <Text fontSize="$5">{title}</Text>}
        {headerActions}
      </Header>
      <ChartContainer>{renderContent()}</ChartContainer>
      {footerContent}
    </TimeSeriesChartContainer>
  )
}
