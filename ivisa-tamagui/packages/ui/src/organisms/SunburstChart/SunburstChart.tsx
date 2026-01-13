// @ts-nocheck
import React, { useMemo } from 'react'
import { YStack, Text, useTheme } from 'tamagui'
import { Svg, Path, G, Text as SvgText } from 'react-native-svg'
import { Skeleton } from '../../atoms/Skeleton'
import { AlertTriangle, PieChart } from '@tamagui/lucide-icons'

export interface SunburstData {
  name: string
  value?: number
  children?: SunburstData[]
  color?: string
}

export interface SunburstChartProps {
  data: SunburstData
  width?: number
  height?: number
  color?: string
  isLoading?: boolean
  error?: Error | null
  headerContent?: React.ReactNode
}

interface Arc {
  path: string
  color: string
  data: SunburstData
  depth: number
  value: number
}

// Helper to calculate partition layout
const calculateSunburst = (
  data: SunburstData,
  radius: number,
  centerX: number,
  centerY: number
): Arc[] => {
  const arcs: Arc[] = []

  // Pre-calculate values
  const calculateValues = (node: SunburstData): number => {
    if (!node.children || node.children.length === 0) {
      return node.value || 0
    }
    const sum = node.children.reduce((acc, child) => acc + calculateValues(child), 0)
    node.value = sum // Store sum in node (mutation for simplicity in local scope)
    return sum
  }

  // Clone data to avoid mutation of props
  const root = JSON.parse(JSON.stringify(data))
  const totalValue = calculateValues(root)

  if (totalValue === 0) return []

  const maxDepth = 4 // Limit depth
  const levelThickness = radius / (maxDepth + 1)

  const processNode = (
    node: SunburstData,
    startAngle: number,
    endAngle: number,
    depth: number
  ) => {
    if (depth > maxDepth) return

    const innerRadius = depth * levelThickness
    const outerRadius = (depth + 1) * levelThickness

    // Create arc path
    // SVG path for annular sector
    const startRad = startAngle - Math.PI / 2
    const endRad = endAngle - Math.PI / 2

    const x1 = centerX + innerRadius * Math.cos(startRad)
    const y1 = centerY + innerRadius * Math.sin(startRad)
    const x2 = centerX + outerRadius * Math.cos(startRad)
    const y2 = centerY + outerRadius * Math.sin(startRad)
    const x3 = centerX + outerRadius * Math.cos(endRad)
    const y3 = centerY + outerRadius * Math.sin(endRad)
    const x4 = centerX + innerRadius * Math.cos(endRad)
    const y4 = centerY + innerRadius * Math.sin(endRad)

    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0

    // Only draw if not root (depth > 0) or draw root as circle? Usually sunburst root is center.
    // Let's draw root at depth 0.

    let path = ''
    if (depth === 0) {
        // Full circle for root or just inner circle?
        // Usually root is empty or central circle.
        // Let's draw it as a circle
         path = `M ${centerX} ${centerY - outerRadius} A ${outerRadius} ${outerRadius} 0 1 1 ${centerX} ${centerY + outerRadius} A ${outerRadius} ${outerRadius} 0 1 1 ${centerX} ${centerY - outerRadius} Z`
    } else {
        path = `
            M ${x1} ${y1}
            L ${x2} ${y2}
            A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x3} ${y3}
            L ${x4} ${y4}
            A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x1} ${y1}
            Z
        `
    }

    // Assign color
    // Simple palette logic or use node color
    const nodeColor = node.color || '#ccc'

    arcs.push({
        path,
        color: nodeColor,
        data: node,
        depth,
        value: node.value || 0
    })

    if (node.children) {
        let currentAngle = startAngle
        node.children.forEach(child => {
            const childValue = child.value || 0
            const sliceAngle = (childValue / (node.value || 1)) * (endAngle - startAngle)
            processNode(child, currentAngle, currentAngle + sliceAngle, depth + 1)
            currentAngle += sliceAngle
        })
    }
  }

  processNode(root, 0, 2 * Math.PI, 0)
  return arcs
}


export const SunburstChart = ({
  data,
  width = 300,
  height = 300,
  color = '$primary',
  isLoading = false,
  error = null,
  headerContent,
}: SunburstChartProps) => {
  const theme = useTheme()
  const themeColor = theme[color as keyof typeof theme]
  // Colors for levels/children could be generated.
  // For now, we assume data has colors or we use a basic scale.

  const radius = Math.min(width, height) / 2
  const centerX = width / 2
  const centerY = height / 2

  const arcs = useMemo(() => {
    if (!data) return []
    // Inject colors if missing
    const colorPalette = [
        theme.blue9?.get() || '#3b82f6',
        theme.green9?.get() || '#22c55e',
        theme.yellow9?.get() || '#eab308',
        theme.red9?.get() || '#ef4444',
        theme.purple9?.get() || '#a855f7',
    ]

    const enrichData = (node: SunburstData, index: number, depth: number): SunburstData => {
        return {
            ...node,
            color: node.color || colorPalette[(index + depth) % colorPalette.length],
            children: node.children?.map((child, i) => enrichData(child, i, depth + 1))
        }
    }

    const enrichedData = enrichData(data, 0, 0)
    return calculateSunburst(enrichedData, radius, centerX, centerY)
  }, [data, radius, centerX, centerY, theme])

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

    if (!data) {
        return (
          <YStack flex={1} justifyContent="center" alignItems="center" gap="$2" height={height}>
            <PieChart color="$gray10" />
            <Text>Não há dados para exibir.</Text>
          </YStack>
        )
      }

    return (
        <Svg width={width} height={height}>
            <G>
                {arcs.map((arc, i) => (
                    <Path
                        key={i}
                        d={arc.path}
                        fill={arc.color}
                        stroke={theme.background?.get() || 'white'}
                        strokeWidth={1}
                    />
                ))}
            </G>
        </Svg>
    )
  }

  return (
    <YStack width="100%" gap="$4" paddingHorizontal="$4" alignItems="center">
      {headerContent}
      {renderContent()}
    </YStack>
  )
}
