// @ts-nocheck
import { Skeleton } from '../../atoms/Skeleton'
import { YStack, Text, useTheme } from 'tamagui'
import { AlertTriangle, Share2 } from '@tamagui/lucide-icons'
import React, { useMemo } from 'react'
import Svg, { Circle, Line, Text as SvgText, G } from 'react-native-svg'

export interface NetworkNode {
  id: string
  label: string
}

export interface NetworkLink {
  source: string
  target: string
}

export interface NetworkData {
  nodes: NetworkNode[]
  links: NetworkLink[]
}

export interface NetworkGraphProps {
  data?: NetworkData
  width?: number
  height?: number
  isLoading?: boolean
  error?: Error | null
  headerContent?: React.ReactNode
}

interface SimNode extends NetworkNode {
  x: number
  y: number
  vx: number
  vy: number
}

interface SimLink {
  source: SimNode
  target: SimNode
}

const runSimulation = (nodes: NetworkNode[], links: NetworkLink[], width: number, height: number) => {
  const simNodes: SimNode[] = nodes.map((n, i) => ({
    ...n,
    x: width / 2 + (Math.random() - 0.5) * 50,
    y: height / 2 + (Math.random() - 0.5) * 50,
    vx: 0,
    vy: 0
  }))

  const nodeMap = new Map(simNodes.map(n => [n.id, n]))
  const simLinks: SimLink[] = links.map(l => ({
    source: nodeMap.get(l.source)!,
    target: nodeMap.get(l.target)!
  })).filter(l => l.source && l.target)

  const repulsion = 500
  const springLength = 100
  const springStrength = 0.1
  const centerStrength = 0.05
  const damping = 0.9

  // Run simulation steps
  for (let i = 0; i < 300; i++) {
    // Repulsion
    for (let j = 0; j < simNodes.length; j++) {
      for (let k = j + 1; k < simNodes.length; k++) {
        const n1 = simNodes[j]
        const n2 = simNodes[k]
        const dx = n1.x - n2.x
        const dy = n1.y - n2.y
        const distSq = dx * dx + dy * dy || 1
        const dist = Math.sqrt(distSq)
        const f = repulsion / distSq
        const fx = (dx / dist) * f
        const fy = (dy / dist) * f

        n1.vx += fx
        n1.vy += fy
        n2.vx -= fx
        n2.vy -= fy
      }
    }

    // Attraction (Springs)
    simLinks.forEach(link => {
      const { source, target } = link
      const dx = target.x - source.x
      const dy = target.y - source.y
      const dist = Math.sqrt(dx * dx + dy * dy) || 1
      const force = (dist - springLength) * springStrength
      const fx = (dx / dist) * force
      const fy = (dy / dist) * force

      source.vx += fx
      source.vy += fy
      target.vx -= fx
      target.vy -= fy
    })

    // Center Gravity
    const cx = width / 2
    const cy = height / 2
    simNodes.forEach(n => {
      n.vx += (cx - n.x) * centerStrength
      n.vy += (cy - n.y) * centerStrength
    })

    // Apply Velocity
    simNodes.forEach(n => {
      n.vx *= damping
      n.vy *= damping
      n.x += n.vx
      n.y += n.vy

      // Bounds
      const r = 20
      n.x = Math.max(r, Math.min(width - r, n.x))
      n.y = Math.max(r, Math.min(height - r, n.y))
    })
  }

  return { nodes: simNodes, links: simLinks }
}

export const NetworkGraph = ({
  data,
  width = 600,
  height = 400,
  isLoading = false,
  error = null,
  headerContent,
}: NetworkGraphProps) => {
  const theme = useTheme()
  const primaryColor = theme.primary?.get() || '#0070f3'

  const layout = useMemo(() => {
    if (!data || data.nodes.length === 0) return null
    return runSimulation(data.nodes, data.links, width, height)
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
          <Share2 color="$gray10" />
          <Text>Não há dados para exibir.</Text>
        </YStack>
      )
    }

    return (
      <Svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
        <G>
          {layout.links.map((link, i) => (
            <Line
              key={`link-${i}`}
              x1={link.source.x}
              y1={link.source.y}
              x2={link.target.x}
              y2={link.target.y}
              stroke={theme.borderColor?.get() || '#ccc'}
              strokeWidth="2"
            />
          ))}
          {layout.nodes.map((node, i) => (
            <G key={`node-${i}`}>
              <Circle
                cx={node.x}
                cy={node.y}
                r={20}
                fill={primaryColor}
                stroke="white"
                strokeWidth="2"
              />
              <SvgText
                x={node.x}
                y={node.y + 5} // approximate centering vertically
                fill="white"
                fontSize="10"
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                {node.label}
              </SvgText>
            </G>
          ))}
        </G>
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

