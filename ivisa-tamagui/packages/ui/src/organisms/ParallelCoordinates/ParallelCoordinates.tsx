// @ts-nocheck
import React, { useMemo } from 'react'
import { YStack, Text, useTheme } from 'tamagui'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryGroup } from 'victory'
import { Skeleton } from '../../atoms/Skeleton'
import { AlertTriangle, Activity } from '@tamagui/lucide-icons'

export interface ParallelCoordinatesProps {
  data: Record<string, number>[]
  attributes: string[]
  width?: number
  height?: number
  color?: string
  isLoading?: boolean
  error?: Error | null
  headerContent?: React.ReactNode
}

export const ParallelCoordinates = ({
  data,
  attributes,
  width = 600,
  height = 400,
  color = '$primary',
  isLoading = false,
  error = null,
  headerContent,
}: ParallelCoordinatesProps) => {
  const theme = useTheme()
  const themeColor = theme[color as keyof typeof theme]
  const lineColor = themeColor ? (themeColor as unknown as { get: () => string }).get() : color
  const axisColor = theme.borderColor?.get() || '#ccc'
  const textColor = theme.color?.get() || '#000'

  // Normalize data to 0-1 range for plotting
  const normalizedData = useMemo(() => {
    if (!data || data.length === 0) return []

    // Find min/max for each attribute
    const bounds = attributes.reduce((acc, attr) => {
      const values = data.map(d => d[attr])
      acc[attr] = {
        min: Math.min(...values),
        max: Math.max(...values),
      }
      return acc
    }, {} as Record<string, { min: number, max: number }>)

    return data.map(d => {
        // We need to map each attribute to an X coordinate (0, 1, 2...)
        // and its value to a Y coordinate (0-1)
        const points = attributes.map((attr, i) => {
            const { min, max } = bounds[attr]
            const val = d[attr]
            const range = max - min
            const y = range === 0 ? 0.5 : (val - min) / range
            return { x: i + 1, y, val } // x is 1-based index
        })
        return points
    })
  }, [data, attributes])

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
          <Activity color="$gray10" />
          <Text>Não há dados para exibir.</Text>
        </YStack>
      )
    }

    return (
      <VictoryChart
        domain={{ x: [0, attributes.length + 1], y: [0, 1] }}
        height={height}
        width={width}
      >
        {/* Draw Axis Lines */}
        {attributes.map((attr, i) => (
            <VictoryAxis
                key={attr}
                dependentAxis
                label={attr}
                style={{
                    axis: { stroke: axisColor },
                    tickLabels: { fill: textColor, padding: 5, fontSize: 10, fontFamily: 'inherit' },
                    axisLabel: { padding: 30, fontSize: 12, fill: textColor },
                    grid: { stroke: 'none' }
                }}
                offsetX={((i + 1) / (attributes.length + 1)) * width}
                // We fake the ticks to show real values?
                // This is hard with multiple dependent axes sharing the same chart space.
                // Standard Victory doesn't support multiple dependent axes easily distributed horizontally.
                // But we can position them using offsetX.
            />
        ))}

        {/* Draw Lines */}
        <VictoryGroup>
            {normalizedData.map((series, i) => (
                <VictoryLine
                    key={i}
                    data={series}
                    style={{
                        data: { stroke: lineColor, opacity: 0.7, strokeWidth: 1 }
                    }}
                />
            ))}
        </VictoryGroup>
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
