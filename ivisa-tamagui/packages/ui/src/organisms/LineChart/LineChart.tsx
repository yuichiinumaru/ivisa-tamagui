import React from 'react'
import { YStack, styled, Text, useTheme, XStack } from 'tamagui'
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { Skeleton } from '../../atoms/Skeleton'
import { AlertCircle, Inbox } from '@tamagui/lucide-icons'

const LineChartContainer = styled(YStack, {
  name: 'LineChart',
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

export interface LineChartProps {
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
      <YStack width="100%" height={300}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
            <XAxis
              dataKey={xKey}
              stroke={axisColor}
              tick={{ fill: textColor, fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: axisColor }}
            />
            <YAxis
              stroke={axisColor}
              tick={{ fill: textColor, fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: '8px',
                border: `1px solid ${gridColor}`,
                backgroundColor: theme.background?.get() || 'white',
              }}
              cursor={{ stroke: gridColor }}
            />
            <Line
              type="monotone"
              dataKey={yKey}
              stroke={lineColor}
              strokeWidth={2}
              dot={{ r: 4, fill: lineColor, strokeWidth: 2, stroke: theme.background?.get() || 'white' }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </YStack>
    )
  }

  return (
    <LineChartContainer>
      <Header>
        {title && <Text fontSize="$5">{title}</Text>}
        {headerActions}
      </Header>
      <ChartContainer>{renderContent()}</ChartContainer>
      {footerContent}
    </LineChartContainer>
  )
}

// Backward compatibility alias
export const TimeSeriesChart = LineChart
export type TimeSeriesChartProps = LineChartProps
