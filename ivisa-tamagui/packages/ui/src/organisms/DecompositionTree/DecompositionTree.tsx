import React, { useMemo } from 'react'
import { YStack, Text, useTheme } from 'tamagui'
import { Svg, Path, G, Rect, Text as SvgText } from 'react-native-svg'
import { Skeleton } from '../../atoms/Skeleton'
import { AlertTriangle, GitMerge } from '@tamagui/lucide-icons'

export interface TreeNode {
  id: string
  label: string
  value?: number | string
  children?: TreeNode[]
  color?: string
}

export interface DecompositionTreeProps {
  data: TreeNode
  width?: number
  height?: number
  color?: string
  isLoading?: boolean
  error?: Error | null
  headerContent?: React.ReactNode
}

// Simple horizontal tree layout
interface LayoutNode {
    x: number
    y: number
    data: TreeNode
    width: number
    height: number
    children: LayoutNode[]
}

const calculateTreeLayout = (
    data: TreeNode,
    width: number,
    height: number,
    nodeWidth = 100,
    nodeHeight = 40,
    gapX = 50,
    gapY = 20
): LayoutNode => {
    // Post-order traversal to calculate heights
    // We assume simplistic layout:
    // Root at left center.
    // Children spread vertically.

    let nextY = 0

    // We first need to compute the vertical size required by each node (including children)
    const computeSize = (node: TreeNode): number => {
        if (!node.children || node.children.length === 0) {
            return nodeHeight + gapY
        }
        const childrenSize = node.children.reduce((acc, child) => acc + computeSize(child), 0)
        return childrenSize
    }

    // Map to LayoutNodes with positions
    // x depends on depth.

    const layout = (node: TreeNode, depth: number, startY: number): LayoutNode => {
        const myHeight = computeSize(node)
        const x = depth * (nodeWidth + gapX) + 20 // padding left

        let childStartY = startY
        const children: LayoutNode[] = []

        if (node.children) {
            node.children.forEach(child => {
                const childH = computeSize(child)
                children.push(layout(child, depth + 1, childStartY))
                childStartY += childH
            })
        }

        // y is centered relative to children range
        let y = startY + myHeight / 2 - nodeHeight / 2
        if (children.length > 0) {
             const firstChildY = children[0].y
             const lastChildY = children[children.length - 1].y
             y = (firstChildY + lastChildY) / 2
        } else {
             // Leaf: just center in its allocated slot
             // Actually startY tracks the top of the allocated slot.
             // Slot height is myHeight (nodeHeight + gapY)
             y = startY + (myHeight - gapY) / 2
        }

        return {
            x,
            y,
            width: nodeWidth,
            height: nodeHeight,
            data: node,
            children
        }
    }

    return layout(data, 0, 0)
}

// Flatten for rendering
const flattenTree = (root: LayoutNode) => {
    const nodes: LayoutNode[] = []
    const links: { x1: number, y1: number, x2: number, y2: number }[] = []

    const traverse = (node: LayoutNode) => {
        nodes.push(node)
        if (node.children) {
            node.children.forEach(child => {
                links.push({
                    x1: node.x + node.width,
                    y1: node.y + node.height / 2,
                    x2: child.x,
                    y2: child.y + child.height / 2
                })
                traverse(child)
            })
        }
    }
    traverse(root)
    return { nodes, links }
}


export const DecompositionTree = ({
  data,
  width = 800,
  height = 500,
  color = '$primary',
  isLoading = false,
  error = null,
  headerContent,
}: DecompositionTreeProps) => {
  const theme = useTheme()

  const { nodes, links } = useMemo(() => {
    if (!data) return { nodes: [], links: [] }
    const root = calculateTreeLayout(data, width, height)
    return flattenTree(root)
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

    if (!data) {
        return (
          <YStack flex={1} justifyContent="center" alignItems="center" gap="$2" height={height}>
            <GitMerge color="$gray10" />
            <Text>Não há dados para exibir.</Text>
          </YStack>
        )
      }

    return (
        <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <G>
                {/* Links */}
                {links.map((link, i) => {
                     // Bezier curve
                     const midX = (link.x1 + link.x2) / 2
                     const d = `M ${link.x1} ${link.y1} C ${midX} ${link.y1}, ${midX} ${link.y2}, ${link.x2} ${link.y2}`
                     return (
                         <Path
                            key={`link-${i}`}
                            d={d}
                            stroke={theme.borderColor?.get() || '#ccc'}
                            strokeWidth={2}
                            fill="none"
                         />
                     )
                })}

                {/* Nodes */}
                {nodes.map((node, i) => (
                    <G key={`node-${i}`} x={node.x} y={node.y}>
                        <Rect
                            width={node.width}
                            height={node.height}
                            rx={4}
                            fill={node.data.color || theme.background?.get() || 'white'}
                            stroke={theme.blue9?.get() || '#3b82f6'}
                            strokeWidth={2}
                        />
                        <SvgText
                            x={node.width / 2}
                            y={node.height / 2 - 5}
                            textAnchor="middle"
                            fontSize={12}
                            fontWeight="bold"
                            fill={theme.color?.get() || 'black'}
                        >
                            {node.data.label}
                        </SvgText>
                         <SvgText
                            x={node.width / 2}
                            y={node.height / 2 + 10}
                            textAnchor="middle"
                            fontSize={10}
                            fill={theme.color10?.get() || '#666'}
                        >
                            {node.data.value}
                        </SvgText>
                    </G>
                ))}
            </G>
        </Svg>
    )
  }

  return (
    <YStack width="100%" gap="$4" paddingHorizontal="$4" overflow="scroll">
      {headerContent}
      {renderContent()}
    </YStack>
  )
}

