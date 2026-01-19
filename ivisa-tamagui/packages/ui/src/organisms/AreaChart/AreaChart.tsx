import React from 'react'
import { YStack, styled, Text, useTheme } from 'tamagui'
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
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

  // Defensive copy and transformation
  const { chartData, seriesKeys } = React.useMemo(() => {
    let processedChartData: any[] = []
    const processedSeriesKeys: string[] = []

    if (!data) return { chartData: [], seriesKeys: [] }

    const isMultiSeries = Array.isArray(data) && Array.isArray(data[0])

    if (isMultiSeries) {
      const seriesData = data as Record<string, unknown>[][]
      if (seriesData.length > 0) {
        seriesData.forEach((_, sIndex) => processedSeriesKeys.push(`series_${sIndex}`))

        // Map based on the first series to establish x-axis points
        processedChartData = seriesData[0].map((item, index) => {
          const mergedItem: any = { [xKey]: item[xKey] }
          seriesData.forEach((series, sIndex) => {
            const key = `series_${sIndex}`
            mergedItem[key] = series[index]?.[yKey]
          })
          return mergedItem
        })
      }
    } else {
      // Defensive copy for single series
      processedChartData = [...(data as Record<string, unknown>[])]
      processedSeriesKeys.push(yKey)
    }
    return { chartData: processedChartData, seriesKeys: processedSeriesKeys }
  }, [data, xKey, yKey])

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
      <YStack width="100%" height={height}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsAreaChart
            data={chartData}
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
            />
            {seriesKeys.map((key, index) => (
              <Area
                key={key}
                type="monotone"
                dataKey={key}
                stackId={stacked ? '1' : undefined}
                stroke={colorScale[index % colorScale.length]}
                fill={colorScale[index % colorScale.length]}
                fillOpacity={0.6}
              />
            ))}
          </RechartsAreaChart>
        </ResponsiveContainer>
      </YStack>
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

