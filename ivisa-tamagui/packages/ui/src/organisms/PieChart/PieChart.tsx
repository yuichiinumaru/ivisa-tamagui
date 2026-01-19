import React from 'react'
import { YStack, styled, Text, useTheme } from 'tamagui'
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { Skeleton } from '../../atoms/Skeleton'
import { AlertCircle, Inbox } from '@tamagui/lucide-icons'

const PieChartContainer = styled(YStack, {
  name: 'PieChart',
  padding: '$4',
  borderRadius: '$4',
  backgroundColor: '$background',
  gap: '$4',
  width: '100%',
  alignItems: 'center',
  tag: 'section',
})

const ChartWrapper = styled(YStack, {
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: 300,
})

const StateContainer = styled(YStack, {
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  flex: 1,
  padding: '$4',
})

export interface PieChartProps {
  title?: string
  data: Record<string, unknown>[]
  xKey: string
  yKey: string
  variant?: 'pie' | 'donut'
  colors?: string[]
  height?: number
  isLoading?: boolean
  error?: string
  footerContent?: React.ReactNode
}

export const PieChart = ({
  title,
  data,
  xKey,
  yKey,
  variant = 'pie',
  colors,
  height = 300,
  isLoading = false,
  error,
  footerContent,
}: PieChartProps) => {
  const theme = useTheme()
  const defaultColor = theme.blue10?.get() || '#007BFF'
  const colorScale = colors || [
    defaultColor,
    theme.green10?.get() || '#28A745',
    theme.orange10?.get() || '#FD7E14',
    theme.red10?.get() || '#DC3545',
    theme.purple10?.get() || '#6F42C1',
  ]

  const innerRadius = variant === 'donut' ? '60%' : '0%'
  const outerRadius = '80%'

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
      <YStack width="100%" height={height}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              data={chartData}
              dataKey={yKey}
              nameKey={xKey}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              paddingAngle={2}
            >
              {chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colorScale[index % colorScale.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                borderRadius: '8px',
                border: `1px solid ${theme.borderColor?.get() || '#eee'}`,
                backgroundColor: theme.background?.get() || 'white',
              }}
              itemStyle={{ color: theme.color?.get() || '#000' }}
            />
          </RechartsPieChart>
        </ResponsiveContainer>
      </YStack>
    )
  }

  return (
    <PieChartContainer>
      {title && (
        <Text fontSize="$5" fontWeight="bold">
          {title}
        </Text>
      )}
      <ChartWrapper>{renderContent()}</ChartWrapper>
      {footerContent}
    </PieChartContainer>
  )
}

// Aliases
export const DonutChart = (props: PieChartProps) => <PieChart {...props} variant="donut" />

export type DonutChartProps = React.ComponentProps<typeof DonutChart>

