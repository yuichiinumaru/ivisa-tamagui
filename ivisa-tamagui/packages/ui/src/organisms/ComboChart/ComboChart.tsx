// @ts-nocheck
import React from 'react'
import { YStack, styled, Text, useTheme } from 'tamagui'
import {
  VictoryChart,
  VictoryAxis,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryGroup,
} from 'victory'
import { Skeleton } from '../../atoms/Skeleton'
import { AlertCircle, Inbox } from '@tamagui/lucide-icons'

const ComboChartContainer = styled(YStack, {
  name: 'ComboChart',
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

export interface ComboChartProps {
  title?: string
  children: React.ReactNode // Pass VictoryBar, VictoryLine, etc. as children
  height?: number
  isLoading?: boolean
  error?: string
  footerContent?: React.ReactNode
}

export const ComboChart = ({
  title,
  children,
  height = 300,
  isLoading = false,
  error,
  footerContent,
}: ComboChartProps) => {
  const theme = useTheme()
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

    if (!children) {
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
          <VictoryVoronoiContainer labelComponent={<VictoryTooltip />} />
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
        <VictoryGroup>
          {children}
        </VictoryGroup>
      </VictoryChart>
    )
  }

  return (
    <ComboChartContainer>
      {title && (
        <Text fontSize="$5" fontWeight="bold">
          {title}
        </Text>
      )}
      <ChartWrapper>{renderContent()}</ChartWrapper>
      {footerContent}
    </ComboChartContainer>
  )
}

