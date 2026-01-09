import React from 'react'
import { VictoryPie, VictoryTheme } from 'victory-native'
import { YStack, Text, useTheme } from 'tamagui'
import { PieChartProps } from './PieChart'
import { Skeleton } from '../../atoms/Skeleton'
import { AlertCircle, Inbox } from '@tamagui/lucide-icons'

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

  const innerRadius = variant === 'donut' ? 60 : 0

  if (isLoading) {
    return <Skeleton width={height} height={height} circle />
  }
  if (error) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center" gap="$2" height={height}>
        <AlertCircle color="$red10" size="$2" />
        <Text color="$red10">Erro ao carregar os dados.</Text>
      </YStack>
    )
  }
  if (!data || data.length === 0) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center" gap="$2" height={height}>
        <Inbox size="$2" />
        <Text>Sem dados para exibir</Text>
      </YStack>
    )
  }

  return (
    <YStack width="100%" alignItems="center" gap="$4" padding="$4" backgroundColor="$background" borderRadius="$4">
      {title && <Text fontSize="$5" fontWeight="bold">{title}</Text>}
      <VictoryPie
        data={data}
        x={xKey}
        y={yKey}
        colorScale={colorScale}
        innerRadius={innerRadius}
        height={height}
        theme={VictoryTheme.material}
      />
      {footerContent}
    </YStack>
  )
}

// Alias
export const DonutChart = (props: PieChartProps) => <PieChart {...props} variant="donut" />

export type PieChartProps = React.ComponentProps<typeof PieChart>

export type DonutChartProps = React.ComponentProps<typeof DonutChart>
