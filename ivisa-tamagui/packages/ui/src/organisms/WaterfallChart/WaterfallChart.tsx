// Removed @ts-nocheck — enabling type checking
import { Skeleton } from '../../atoms/Skeleton'
import { YStack, Text, useTheme } from 'tamagui'
import { VictoryChart, VictoryBar, VictoryAxis, VictoryContainer } from 'victory'
import { AlertTriangle, BarChart as WaterfallIcon } from '@tamagui/lucide-icons'
import React from 'react'

export interface WaterfallChartProps {
  data?: Record<string, unknown>[]
  xKey: string
  yKey: string // The change value
  // We compute start and end automatically or expect 'y0' and 'y' in data?
  // Let's assume standard waterfall data prep is done internally or data has y0 and y.
  // Standard Victory Bar can take y0 and y.
  // But usually users provide just values and we compute rolling sum.

  color?: string // Positive color
  negativeColor?: string // Negative color
  totalColor?: string // Total/Summary color

  height?: number
  isLoading?: boolean
  error?: Error | null
  headerContent?: React.ReactNode
}

export const WaterfallChart = ({
  data,
  xKey,
  yKey,
  color = '$green10',
  negativeColor = '$red10',
  totalColor = '$blue10',
  height = 300,
  isLoading = false,
  error = null,
  headerContent,
}: WaterfallChartProps) => {
  const theme = useTheme()
  const axisColor = theme.borderColor?.get() || '#ccc'
  const textColor = theme.color?.get() || '#000'
  const gridColor = theme.borderColor?.get() || '#eee'

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

    if (!data || data.length === 0) {
      return (
        <YStack flex={1} justifyContent="center" alignItems="center" gap="$2" height={height}>
          <WaterfallIcon color="$gray10" />
          <Text>Não há dados para exibir.</Text>
        </YStack>
      )
    }

    // Process data for waterfall
    let runningTotal = 0
    const processedData = data.map((d) => {
      const val = d[yKey] as number
      const isTotal = (d as any).isTotal // Optional flag for total columns

      let y0 = runningTotal
      let y = runningTotal + val

      if (isTotal) {
        y0 = 0
        y = runningTotal
        // Or if the value is explicitly provided as the total
        if (val !== undefined && val !== null) {
            y = val
        }
      } else {
         runningTotal += val
      }

      return {
        ...d,
        _y0: y0,
        _y: y,
        _val: val,
        _isTotal: isTotal
      }
    })

    return (
      <VictoryChart
        domainPadding={{ x: 20 }}
        height={height}
        containerComponent={<VictoryContainer responsive={true} />}
      >
        <VictoryAxis
          style={{
            axis: { stroke: axisColor },
            tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: 'inherit' },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: 'inherit' },
            grid: { stroke: gridColor, strokeDasharray: '4, 4' },
          }}
        />
        <VictoryBar
          data={processedData}
          x={xKey}
          y="_y"
          y0="_y0"
          style={{
            data: {
                fill: (d: any) => {
                    if (d.datum._isTotal) return getColor(totalColor)
                    if (d.datum._val < 0) return getColor(negativeColor)
                    return getColor(color)
                }
            }
          }}
          cornerRadius={{ top: 2, bottom: 2 }}
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

