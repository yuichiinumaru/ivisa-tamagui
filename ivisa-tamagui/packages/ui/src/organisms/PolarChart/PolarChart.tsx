import { Skeleton } from '../../atoms/Skeleton'
import { YStack, Text, useTheme } from 'tamagui'
import { VictoryChart, VictoryPolarAxis, VictoryBar, VictoryContainer, VictoryTheme } from 'victory'
import { AlertTriangle, PieChart as PolarIcon } from '@tamagui/lucide-icons'
import React from 'react'

export interface PolarChartProps {
  data?: Record<string, unknown>[]
  xKey: string
  yKey: string
  color?: string | string[]
  height?: number
  isLoading?: boolean
  error?: Error | null
  headerContent?: React.ReactNode
}

export const PolarChart = ({
  data,
  xKey,
  yKey,
  color = '$primary',
  height = 300,
  isLoading = false,
  error = null,
  headerContent,
}: PolarChartProps) => {
  const theme = useTheme()
  const axisColor = theme.borderColor?.get() || '#ccc'
  const textColor = theme.color?.get() || '#000'

  const getColor = (c: string) => {
    const themeColor = theme[c as keyof typeof theme]
    return themeColor && typeof themeColor === 'object' && 'get' in themeColor
      ? (themeColor as { get: () => string }).get()
      : c
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
          <PolarIcon color="$gray10" />
          <Text>Não há dados para exibir.</Text>
        </YStack>
      )
    }

    const colors = Array.isArray(color) ? color : [color]

    return (
      <VictoryChart
        polar
        height={height}
        domainPadding={{ x: 20, y: 20 }}
        theme={VictoryTheme.material}
        containerComponent={<VictoryContainer responsive={true} />}
      >
        <VictoryPolarAxis
            style={{
                axis: { stroke: axisColor },
                grid: { stroke: axisColor, opacity: 0.5 },
                tickLabels: { fill: textColor, fontSize: 12 }
            }}
        />
        <VictoryBar
            data={data}
            x={xKey}
            y={yKey}
            style={{
                data: {
                    fill: (d: any) => {
                        return getColor(colors[d.index % colors.length] || colors[0])
                    },
                    width: 30
                }
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

