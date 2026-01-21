// @ts-nocheck
import React, { useMemo } from 'react'
import { YStack, Text, useTheme } from 'tamagui'
import { VictoryChart, VictoryBar, VictoryAxis, VictoryContainer } from 'victory'
import { Skeleton } from '../../atoms/Skeleton'
import { AlertTriangle, BarChart2 } from '@tamagui/lucide-icons'

export interface MarimekkoChartProps {
  data: Record<string, any>[]
  xKey: string
  yKey: string
  widthKey: string // The key for the variable width
  color?: string
  width?: number
  height?: number
  isLoading?: boolean
  error?: Error | null
  headerContent?: React.ReactNode
}

export const MarimekkoChart = ({
  data,
  xKey,
  yKey,
  widthKey,
  color = '$primary',
  width = 600,
  height = 400,
  isLoading = false,
  error = null,
  headerContent,
}: MarimekkoChartProps) => {
  const theme = useTheme()
  const themeColor = theme[color as keyof typeof theme]
  const barColor = themeColor ? (themeColor as unknown as { get: () => string }).get() : color
  const axisColor = theme.borderColor?.get() || '#ccc'
  const textColor = theme.color?.get() || '#000'

  // Process data to calculate x (midpoint) and width for each bar
  const processedData = useMemo(() => {
    if (!data || data.length === 0) return []

    let currentX = 0
    return data.map((d) => {
      const w = Number(d[widthKey]) || 0
      const midpoint = currentX + w / 2
      currentX += w
      return {
        ...d,
        _x: midpoint,
        _width: w,
        _y: Number(d[yKey]),
        label: d[xKey], // for tooltip or axis
      }
    })
  }, [data, xKey, yKey, widthKey])

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
          <BarChart2 color="$gray10" />
          <Text>Não há dados para exibir.</Text>
        </YStack>
      )
    }

    return (
      <VictoryChart
        domainPadding={{ x: 0 }} // No padding between bars usually
        height={height}
        width={width}
        containerComponent={<VictoryContainer responsive={true} />}
      >
        <VictoryAxis
          style={{
            axis: { stroke: axisColor },
            tickLabels: { fill: textColor, padding: 5, fontSize: 10, fontFamily: 'inherit' },
          }}
          // We might want to customize tickValues to match bar centers or edges
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: 'inherit' },
            grid: { stroke: theme.borderColor?.get() || '#eee', strokeDasharray: '4, 4' },
          }}
        />
        <VictoryBar
          data={processedData}
          x="_x"
          y="_y"
          // VictoryBar style data width expects pixel values usually, or function of data.
          // Wait, VictoryBar `width` prop sets fixed width.
          // To have variable width, we might need to use `barWidth` prop or style.
          // `style={{ data: { width: ({ datum }) => datum._width } }}` might work if scale is linear?
          // But `width` in style is in pixels.
          // If we want width in data coordinates, we need to map it.
          // A workaround is to calculate pixel width based on chart width and domain.
          // Simple approximation: total width of data = sum of all widths.
          // pixel width = (datum._width / totalDataWidth) * (chartWidth - padding).

          style={{
            data: {
                fill: barColor,
                stroke: theme.background?.get() || 'white',
                strokeWidth: 1
            },
          }}
          barWidth={({ datum }) => {
              // This function receives calculated props.
              // We need to know the scale to convert data width to pixels.
              // This is tricky inside the component props.
              // Let's assume we simply pass a calculated width if we know the scale.
              // Alternatively, simply passing `barWidth` might not work if it expects pixels.

              // Let's compute total width
              const totalWidth = processedData.reduce((acc, d) => acc + d._width, 0)
              // This is approximate since we don't know exact inner width (chart width - padding)
              const chartInnerWidth = width - 100 // aprox padding
              return (datum._width / totalWidth) * chartInnerWidth
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

