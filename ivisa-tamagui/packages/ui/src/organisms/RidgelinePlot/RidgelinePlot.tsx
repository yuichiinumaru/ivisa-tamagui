import React, { useMemo } from 'react'
import { YStack, Text, useTheme } from 'tamagui'
import { VictoryChart, VictoryArea, VictoryAxis } from 'victory'
import { Skeleton } from '../../atoms/Skeleton'
import { AlertTriangle, Activity } from '@tamagui/lucide-icons'

export interface SeriesData {
    id: string | number
    label?: string
    data: { x: number | string, y: number }[]
    color?: string
}

export interface RidgelinePlotProps {
  series: SeriesData[]
  width?: number
  height?: number
  overlap?: number // How much the areas overlap (offset)
  isLoading?: boolean
  error?: Error | null
  headerContent?: React.ReactNode
}

export const RidgelinePlot = ({
  series,
  width = 600,
  height = 400,
  overlap = 0.5,
  isLoading = false,
  error = null,
  headerContent,
}: RidgelinePlotProps) => {
  const theme = useTheme()
  const axisColor = theme.borderColor?.get() || '#ccc'
  const textColor = theme.color?.get() || '#000'

  // Calculate plot height allocated to each series vs overlap
  // In a Ridgeline, series are stacked vertically with fixed offsets.
  // We can achieve this by simply rendering multiple charts or one chart with shifted Y domains?
  // Easier: Shift the data Y values.

  // Normalization: Assume all series share the same X domain.
  // Y values need to be scaled so they fit within a "row" height, then added to the row's base Y.

  const processedSeries = useMemo(() => {
      if (!series || series.length === 0) return []

      const numSeries = series.length
      // height per row (approx)
      const rowHeight = 100
      // max Y value in all data (to normalize)
      const maxY = Math.max(...series.flatMap(s => s.data.map(d => d.y))) || 1

      return series.map((s, i) => {
          // Calculate offset
          const yOffset = i * (rowHeight * (1 - overlap)) // vertical shift

          // Normalize data Y to fit in rowHeight and add offset
          const data = s.data.map(d => ({
              x: d.x,
              y: yOffset + (d.y / maxY) * rowHeight,
              y0: yOffset // Baseline for area
          }))

          return {
              ...s,
              processedData: data,
              yOffset
          }
      }).reverse() // Draw top series first? or bottom first? usually bottom first so top overlaps bottom.
      // Actually, if we want the "front" (bottom) to occlude the "back" (top), we draw top first (painters algo).
      // Standard Ridgeline: bottom series is in front.
      // So draw Top (highest offset) first? No, Top is visually higher Y.
      // Wait, SVG order: last drawn is on top.
      // If S1 is bottom (y=0), S2 is above (y=10).
      // If we draw S1 then S2, S2 covers S1's top.
      // We want S1 to cover S2's bottom?
      // Usually Ridgeline looks like mountains. Front mountains cover back mountains.
      // Front = Bottom.
      // So we should draw Back (Top) first.
      // The processedSeries should be sorted by yOffset descending.
  }, [series, overlap])

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

    if (!series || series.length === 0) {
      return (
        <YStack flex={1} justifyContent="center" alignItems="center" gap="$2" height={height}>
          <Activity color="$gray10" />
          <Text>Não há dados para exibir.</Text>
        </YStack>
      )
    }

    return (
      <VictoryChart
        height={height}
        width={width}
        domainPadding={{ x: 20, y: 10 }}
      >
        <VictoryAxis
            style={{
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 10, fontFamily: 'inherit' },
            }}
        />
        {/* We can hide Y axis or show just labels for series */}

        {processedSeries.map((s, i) => (
            <VictoryArea
                key={s.id}
                data={s.processedData}
                style={{
                    data: {
                        fill: s.color || theme.blue9?.get() || '#3b82f6',
                        fillOpacity: 0.8,
                        stroke: theme.background?.get() || 'white',
                        strokeWidth: 1
                    }
                }}
            />
        ))}

        {/* Optional: Add labels for each series on the left/right */}
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
