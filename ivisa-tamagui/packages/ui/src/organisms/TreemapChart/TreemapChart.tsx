import { Skeleton } from '../../atoms/Skeleton'
import { YStack, Text, useTheme } from 'tamagui'
import { AlertTriangle, Grid } from '@tamagui/lucide-icons'
import React, { useMemo } from 'react'
import Svg, { Rect as SvgRect, Text as SvgText, G } from 'react-native-svg'

export interface TreemapChartProps {
  data?: Record<string, unknown>[]
  labelKey: string
  valueKey: string
  height?: number
  isLoading?: boolean
  error?: Error | null
  headerContent?: React.ReactNode
}

interface Rect {
  x: number
  y: number
  w: number
  h: number
}

interface Node {
  value: number
  label: string
  originalData: any
  rect?: Rect
  color?: string
}

const layout = (nodes: Node[], container: Rect): Node[] => {
  if (nodes.length === 0) return []
  if (nodes.length === 1) {
    return [{ ...nodes[0], rect: container }]
  }

  // Sort by value desc
  // Assuming nodes are already sorted or we sort them here
  // But recursive calls shouldn't resort if we want stability?
  // Treemap usually works best with sorted data.

  const total = nodes.reduce((s, n) => s + n.value, 0)
  if (total === 0) return nodes

  const mid = total / 2
  let currentSum = 0
  let splitIndex = 0

  for (let i = 0; i < nodes.length; i++) {
    const v = nodes[i].value
    if (currentSum + v >= mid) {
       // Check which is closer
       if (i > 0 && Math.abs(currentSum - mid) < Math.abs(currentSum + v - mid)) {
           splitIndex = i
       } else {
           splitIndex = i + 1
       }
       break
    }
    currentSum += v
    splitIndex = i + 1
  }

  // Edge case: if splitIndex is 0 or length, force split
  if (splitIndex === 0) splitIndex = 1
  if (splitIndex === nodes.length) splitIndex = nodes.length - 1

  const group1 = nodes.slice(0, splitIndex)
  const group2 = nodes.slice(splitIndex)

  const sum1 = group1.reduce((s, n) => s + n.value, 0)

  // Split along longer axis to maintain aspect ratio
  const isHorizontal = container.w > container.h

  let rect1: Rect, rect2: Rect

  if (isHorizontal) {
    const w1 = container.w * (sum1 / total)
    rect1 = { x: container.x, y: container.y, w: w1, h: container.h }
    rect2 = { x: container.x + w1, y: container.y, w: container.w - w1, h: container.h }
  } else {
    const h1 = container.h * (sum1 / total)
    rect1 = { x: container.x, y: container.y, w: container.w, h: h1 }
    rect2 = { x: container.x, y: container.y + h1, w: container.w, h: container.h - h1 }
  }

  return [
    ...layout(group1, rect1),
    ...layout(group2, rect2)
  ]
}

export const TreemapChart = ({
  data,
  labelKey,
  valueKey,
  height = 300,
  isLoading = false,
  error = null,
  headerContent,
}: TreemapChartProps) => {
  const theme = useTheme()
  const textColor = theme.color?.get() || '#fff'

  const processedNodes = useMemo(() => {
    if (!data) return []
    // Process and Sort
    const nodes = data.map(d => ({
      value: Number(d[valueKey]),
      label: String(d[labelKey]),
      originalData: d
    })).sort((a, b) => b.value - a.value)

    // Layout
    // Assume width 100%? We need concrete width.
    // SVG uses viewBox. We can define a coordinate system e.g. 1000x(1000*height/width)
    // Or just 100x100 and use percentages? No, text needs coords.
    // Let's use a virtual coordinate system of 1000 x height (scaled).
    // Or simpler: 1000 x 1000 and preserve aspect ratio?
    // If container width is unknown, we can't optimize for aspect ratio perfectly.
    // We'll assume a standard width of 500 for calculation.

    return layout(nodes, { x: 0, y: 0, w: 500, h: height })
  }, [data, labelKey, valueKey, height])

  // Colors
  const colors = [
    '#e63946', '#f1faee', '#a8dadc', '#457b9d', '#1d3557',
    '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51', '#264653'
  ]

  const getColor = (index: number) => colors[index % colors.length]

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

    return (
      <Svg width="100%" height={height} viewBox={`0 0 500 ${height}`}>
        {processedNodes.map((node, i) => (
          <G key={i}>
            <SvgRect
              x={node.rect?.x}
              y={node.rect?.y}
              width={node.rect?.w}
              height={node.rect?.h}
              fill={getColor(i)}
              stroke="white"
              strokeWidth="1"
            />
            {node.rect && node.rect.w > 20 && node.rect.h > 15 && (
              <SvgText
                x={(node.rect.x || 0) + (node.rect.w || 0) / 2}
                y={(node.rect.y || 0) + (node.rect.h || 0) / 2}
                fontSize="12"
                fill="white"
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                {node.label}
              </SvgText>
            )}
          </G>
        ))}
      </Svg>
    )
  }

  return (
    <YStack width="100%" gap="$4" paddingHorizontal="$4">
      {headerContent}
      {renderContent()}
    </YStack>
  )
}
