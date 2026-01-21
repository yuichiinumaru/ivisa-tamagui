// @ts-nocheck
import { Skeleton } from '../../atoms/Skeleton'
import { YStack, Text, useTheme } from 'tamagui'
import { AlertTriangle, Activity } from '@tamagui/lucide-icons'
import React, { useMemo } from 'react'
import Svg, { Rect, Text as SvgText, Path, G } from 'react-native-svg'

export interface SankeyNode {
  id: string
  label: string
}

export interface SankeyLink {
  source: string
  target: string
  value: number
}

export interface SankeyData {
  nodes: SankeyNode[]
  links: SankeyLink[]
}

export interface SankeyDiagramProps {
  data?: SankeyData
  width?: number
  height?: number
  isLoading?: boolean
  error?: Error | null
  headerContent?: React.ReactNode
}

interface LayoutNode extends SankeyNode {
  x: number
  y: number
  dy: number // height
  value: number
  depth: number
  sourceLinks: LayoutLink[]
  targetLinks: LayoutLink[]
}

interface LayoutLink extends SankeyLink {
  sourceNode: LayoutNode
  targetNode: LayoutNode
  y0: number // source y connection
  y1: number // target y connection
  width: number // thickness
}

const computeLayout = (data: SankeyData, width: number, height: number) => {
  const { nodes: rawNodes, links: rawLinks } = data

  // Clone
  const nodes: LayoutNode[] = rawNodes.map(n => ({
    ...n, x: 0, y: 0, dy: 0, value: 0, depth: 0, sourceLinks: [], targetLinks: []
  }))
  const nodeMap = new Map(nodes.map(n => [n.id, n]))

  const links: LayoutLink[] = rawLinks.map(l => ({
    ...l,
    sourceNode: nodeMap.get(l.source)!,
    targetNode: nodeMap.get(l.target)!,
    y0: 0, y1: 0, width: 0
  })).filter(l => l.sourceNode && l.targetNode)

  // Link references
  links.forEach(l => {
    l.sourceNode.sourceLinks.push(l)
    l.targetNode.targetLinks.push(l)
  })

  // Compute depths
  // Simple DAG assumption.
  // Initialize source nodes (no inputs) to depth 0
  // Propagate
  let changed = true
  let iter = 0
  while (changed && iter < 10) {
    changed = false
    links.forEach(l => {
      if (l.targetNode.depth <= l.sourceNode.depth) {
        l.targetNode.depth = l.sourceNode.depth + 1
        changed = true
      }
    })
    iter++
  }

  const maxDepth = Math.max(...nodes.map(n => n.depth), 1)

  // Compute values
  nodes.forEach(n => {
    const inputSum = n.targetLinks.reduce((s, l) => s + l.value, 0)
    const outputSum = n.sourceLinks.reduce((s, l) => s + l.value, 0)
    n.value = Math.max(inputSum, outputSum)
  })

  // Scale
  // Width
  const nodeWidth = 20
  const widthPerDepth = (width - nodeWidth) / maxDepth
  nodes.forEach(n => {
    n.x = n.depth * widthPerDepth
  })

  // Height
  // Group by depth
  const layers: LayoutNode[][] = Array.from({ length: maxDepth + 1 }, () => [])
  nodes.forEach(n => layers[n.depth].push(n))

  // Calculate vertical scaling
  const maxLayerValue = Math.max(...layers.map(layer => layer.reduce((s, n) => s + n.value, 0)))
  const nodePadding = 10
  // available height for values = height - (maxItemsInLayer * padding)
  const maxItems = Math.max(...layers.map(l => l.length))
  const ky = (height - maxItems * nodePadding) / maxLayerValue

  layers.forEach(layer => {
    let y = 0
    layer.forEach(n => {
      n.dy = Math.max(n.value * ky, 5) // Min height 5
      n.y = y
      y += n.dy + nodePadding
    })
  })

  // Link positions
  // Sort links?
  nodes.forEach(n => {
    let sy = 0
    n.sourceLinks.sort((a, b) => a.targetNode.y - b.targetNode.y).forEach(l => {
       l.width = Math.max(l.value * ky, 1)
       l.y0 = n.y + sy + l.width / 2
       sy += l.width
    })

    let ty = 0
    n.targetLinks.sort((a, b) => a.sourceNode.y - b.sourceNode.y).forEach(l => {
       l.width = Math.max(l.value * ky, 1) // Using same scale
       l.y1 = n.y + ty + l.width / 2
       ty += l.width
    })
  })

  return { nodes, links }
}

export const SankeyDiagram = ({
  data,
  width = 600,
  height = 400,
  isLoading = false,
  error = null,
  headerContent,
}: SankeyDiagramProps) => {
  const theme = useTheme()
  const primaryColor = theme.primary?.get() || '#0070f3'

  const layout = useMemo(() => {
    if (!data || data.nodes.length === 0) return null
    return computeLayout(data, width, height)
  }, [data, width, height])

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

    if (!layout || layout.nodes.length === 0) {
      return (
        <YStack flex={1} justifyContent="center" alignItems="center" gap="$2" height={height}>
          <Activity color="$gray10" />
          <Text>Não há dados para exibir.</Text>
        </YStack>
      )
    }

    const { nodes, links } = layout

    return (
      <Svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
        {links.map((link, i) => {
           // Bezier Curve
           const x0 = link.sourceNode.x + 20 // nodeWidth
           const x1 = link.targetNode.x
           const y0 = link.y0
           const y1 = link.y1
           const midX = (x0 + x1) / 2
           const d = `M ${x0} ${y0} C ${midX} ${y0}, ${midX} ${y1}, ${x1} ${y1}`

           return (
             <Path
               key={`link-${i}`}
               d={d}
               stroke={primaryColor}
               strokeOpacity={0.2}
               strokeWidth={link.width}
               fill="none"
             />
           )
        })}
        {nodes.map((node, i) => (
          <G key={`node-${i}`}>
            <Rect
              x={node.x}
              y={node.y}
              width={20}
              height={node.dy}
              fill={primaryColor}
              fillOpacity={0.8}
            />
            <SvgText
              x={node.x + 25}
              y={node.y + node.dy / 2}
              fontSize="12"
              fill={theme.color?.get() || 'black'}
              alignmentBaseline="middle"
            >
              {node.label}
            </SvgText>
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

