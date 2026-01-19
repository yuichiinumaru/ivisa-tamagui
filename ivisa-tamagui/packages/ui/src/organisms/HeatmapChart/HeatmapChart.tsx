import { Skeleton } from '../../atoms/Skeleton'
import { YStack, Text, useTheme } from 'tamagui'
import { VictoryScatter, VictoryChart, VictoryAxis, VictoryContainer, VictoryLabel } from 'victory'
import { AlertTriangle, Grid } from '@tamagui/lucide-icons'
import React, { useMemo } from 'react'

export interface HeatmapChartProps {
  data?: Record<string, unknown>[]
  xKey: string
  yKey: string
  valueKey: string
  height?: number
  isLoading?: boolean
  error?: Error | null
  headerContent?: React.ReactNode
}

export const HeatmapChart = ({
  data,
  xKey,
  yKey,
  valueKey,
  height = 300,
  isLoading = false,
  error = null,
  headerContent,
}: HeatmapChartProps) => {
  const theme = useTheme()
  const axisColor = theme.borderColor?.get() || '#ccc'
  const textColor = theme.color?.get() || '#000'

  const processedData = useMemo(() => {
    if (!data) return []
    const values = data.map((d) => Number(d[valueKey]))
    const min = Math.min(...values)
    const max = Math.max(...values)
    return data.map((d) => ({
      x: d[xKey],
      y: d[yKey],
      value: Number(d[valueKey]),
      min,
      max,
    }))
  }, [data, xKey, yKey, valueKey])

  const getColor = (value: number, min: number, max: number) => {
    // Simple interpolation from light to dark primary color
    // We can assume a 5-step scale for simplicity or continuous if needed.
    // Let's use opacity of the primary color.
    const ratio = max === min ? 1 : (value - min) / (max - min)
    // Using a blueish base if theme.primary is generic, or utilize tokens.
    // Let's use hsl.
    // Assuming primary is a color string, we might need a specific color.
    // Let's use a fixed color range for now: light blue to dark blue.
    // #e0f2f1 to #00695c (Teal)
    // or #e3f2fd to #0d47a1 (Blue)
    const startColor = { r: 227, g: 242, b: 253 }
    const endColor = { r: 13, g: 71, b: 161 }

    const r = Math.round(startColor.r + (endColor.r - startColor.r) * ratio)
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * ratio)
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * ratio)

    return `rgb(${r},${g},${b})`
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
          <Grid color="$gray10" />
          <Text>Não há dados para exibir.</Text>
        </YStack>
      )
    }

    // Determine square size approx
    // This is tricky in Victory without fixed domain/range.
    // We'll set a fixed size for now or try to be smart.
    // For a heatmap, dynamic sizing is hard without measuring container.
    // We'll use a fixed size symbol.

    return (
      <VictoryChart
        domainPadding={{ x: 20, y: 20 }}
        height={height}
        containerComponent={<VictoryContainer responsive={true} />}
      >
        <VictoryAxis
          style={{
            axis: { stroke: axisColor },
            tickLabels: { fill: textColor, padding: 5, fontSize: 10, fontFamily: 'inherit' },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: axisColor },
            tickLabels: { fill: textColor, padding: 5, fontSize: 10, fontFamily: 'inherit' },
          }}
        />
        <VictoryScatter
          data={processedData}
          symbol="square"
          size={15} // Fixed size for now
          style={{
            data: {
              fill: ({ datum }) => getColor(datum.value, datum.min, datum.max),
            },
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

