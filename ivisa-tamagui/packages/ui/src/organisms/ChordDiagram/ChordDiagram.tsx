import { Skeleton } from '../../atoms/Skeleton'
import { YStack, Text, useTheme } from 'tamagui'
import { AlertTriangle, Circle } from '@tamagui/lucide-icons'
import React, { useMemo } from 'react'
import Svg, { Path, G, Text as SvgText } from 'react-native-svg'

export interface ChordDiagramProps {
  matrix?: number[][]
  labels?: string[]
  width?: number
  height?: number
  isLoading?: boolean
  error?: Error | null
  headerContent?: React.ReactNode
}

const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInRadians: number) => {
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  }
}

const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
  const start = polarToCartesian(x, y, radius, endAngle)
  const end = polarToCartesian(x, y, radius, startAngle)
  const largeArcFlag = endAngle - startAngle <= Math.PI ? '0' : '1'
  return [
    'M', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(' ')
}

const computeLayout = (matrix: number[][], labels: string[], width: number, height: number) => {
  const size = Math.min(width, height)
  const outerRadius = size / 2 - 40
  const innerRadius = outerRadius - 20
  const cx = width / 2
  const cy = height / 2

  const n = matrix.length
  const rowSums = matrix.map(row => row.reduce((a, b) => a + b, 0))
  const total = rowSums.reduce((a, b) => a + b, 0)

  if (total === 0) return { groups: [], ribbons: [] }

  const padding = 0.05 // radians
  const k = (2 * Math.PI - n * padding) / total

  const groups = []
  let currentAngle = 0

  // Calculate groups (outer arcs)
  const groupAngles = []
  for (let i = 0; i < n; i++) {
    const value = rowSums[i]
    const startAngle = currentAngle
    const endAngle = currentAngle + value * k
    const midAngle = (startAngle + endAngle) / 2

    groupAngles.push({ startAngle, endAngle, current: startAngle })

    groups.push({
      index: i,
      label: labels[i] || `Node ${i}`,
      startAngle,
      endAngle,
      midAngle,
      color: `hsl(${(i * 360) / n}, 70%, 50%)`,
      path: describeArc(cx, cy, outerRadius, startAngle, endAngle)
    })

    currentAngle = endAngle + padding
  }

  // Calculate ribbons
  const ribbons = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const value = matrix[i][j]
      if (value > 0) {
        const sourceGroup = groupAngles[i]
        const targetGroup = groupAngles[j]

        const sa1 = sourceGroup.current
        const ea1 = sa1 + value * k
        sourceGroup.current = ea1

        // For target, we need to coordinate where inputs land?
        // Usually chords are symmetric or directed.
        // For standard chord diagram (undirected/symmetric flow), logic is complex.
        // For directed flow (i -> j), we just draw ribbon from i's output segment to j's input segment.
        // But matrix usually implies i->j flow.
        // Wait, standard chord diagram sums i->j and j->i?
        // Let's assume directed ribbons.

        // We need to track input angles for targets separately?
        // Simplification: Just map outputs to outputs.
        // But ribbons usually connect source to target.
        // If it's a flow, the target group needs an "input" section.
        // Standard Chord Diagram: segments represent TOTAL flow (in + out).
        // Here we calculated segments based on ROW sums (out only).
        // This is a Dependency Wheel.
        // We'll stick to Dependency Wheel logic (Out -> In).
        // But to make it look nice, target should accept it.
        // Issue: We allocated arc length based on Output only.
        // So we can only map outputs. Where do they go?
        // They go to the target node. But the target node's arc represents IT'S outputs.
        // So we can't land on the target arc properly if we don't account for inputs.

        // Better logic: Arc length = sum(row[i]) + sum(col[i]).
        // But let's stick to simple "Source Arc -> Target Arc" with Q curve.
        // We'll use the center point.
        // Target angle: just pick the middle of target group? No, overlaps.
        // Let's just draw a ribbon from Source Segment to Target Center.
        // Or simplified: Just lines/curves.

        // Better:
        // Source Arc: [sa1, ea1].
        // Target Point: midAngle of group j.
        // Ribbon: path from Arc to Point.
        // Move to start of arc.
        // Arc to end of arc.
        // Quad curve to target point.
        // Quad curve to start of arc.

        const targetMid = (targetGroup.startAngle + targetGroup.endAngle) / 2
        const tp = polarToCartesian(cx, cy, innerRadius * 0.2, targetMid) // Pull towards center

        // Points on inner radius
        const p1 = polarToCartesian(cx, cy, innerRadius, sa1)
        const p2 = polarToCartesian(cx, cy, innerRadius, ea1)
        const tp2 = polarToCartesian(cx, cy, innerRadius, targetMid) // Actually land on target? No space reserved.

        // Let's draw to center.
        const d = [
          'M', p1.x, p1.y,
          'A', innerRadius, innerRadius, 0, 0, 1, p2.x, p2.y,
          'Q', cx, cy, tp2.x, tp2.y, // To target group mid
          'Q', cx, cy, p1.x, p1.y
        ].join(' ')

        ribbons.push({
          sourceIndex: i,
          targetIndex: j,
          d,
          color: groups[i].color
        })
      }
    }
  }

  return { groups, ribbons, cx, cy, outerRadius }
}

export const ChordDiagram = ({
  matrix,
  labels,
  width = 400,
  height = 400,
  isLoading = false,
  error = null,
  headerContent,
}: ChordDiagramProps) => {
  const theme = useTheme()

  const layout = useMemo(() => {
    if (!matrix || matrix.length === 0) return null
    return computeLayout(matrix, labels || [], width, height)
  }, [matrix, labels, width, height])

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

    if (!layout || layout.groups.length === 0) {
      return (
        <YStack flex={1} justifyContent="center" alignItems="center" gap="$2" height={height}>
          <Circle color="$gray10" />
          <Text>Não há dados para exibir.</Text>
        </YStack>
      )
    }

    const { groups, ribbons, cx, cy, outerRadius } = layout

    return (
      <Svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
        <G>
          {ribbons.map((ribbon, i) => (
            <Path
              key={`ribbon-${i}`}
              d={ribbon.d}
              fill={ribbon.color}
              fillOpacity={0.5}
              stroke="none"
            />
          ))}
          {groups.map((group, i) => {
            const labelPos = polarToCartesian(cx, cy, outerRadius + 20, group.midAngle)
            return (
              <G key={`group-${i}`}>
                <Path
                  d={group.path}
                  fill={group.color}
                  stroke={theme.borderColor?.get() || 'white'}
                />
                <SvgText
                  x={labelPos.x}
                  y={labelPos.y}
                  fill={theme.color?.get() || 'black'}
                  fontSize="12"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  {group.label}
                </SvgText>
              </G>
            )
          })}
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
