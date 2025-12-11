import React from 'react'
import { CartesianChart, Bar } from 'victory-native'
import { YStack, Text, useTheme } from 'tamagui'
import { Skeleton } from '../../atoms/Skeleton'
import { AlertTriangle, BarChart3 } from '@tamagui/lucide-icons'

export interface ChartsProps {
  data?: Record<string, unknown>[]
  xKey: string
  yKey: string
  color?: string
  height?: number
  isLoading?: boolean
  error?: Error | null
  headerContent?: React.ReactNode
}

export const Charts = ({
  data,
  xKey,
  yKey,
  color = '$primary',
  height = 300,
  isLoading = false,
  error = null,
  headerContent,
}: ChartsProps) => {
  const theme = useTheme()
  const themeColor = theme[color as keyof typeof theme]
  const barColor = themeColor ? (themeColor as unknown as { get: () => string }).get() : color

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
          <BarChart3 color="$gray10" />
          <Text>Não há dados para exibir.</Text>
        </YStack>
      )
    }

    return (
      <YStack height={height} width="100%" alignSelf="stretch">
        <CartesianChart
          data={data}
          xKey={xKey}
          yKeys={[yKey]}
          padding={{ left: 10, right: 10, bottom: 10, top: 10 }}
        >
          {({ points, chartBounds }) => (
            <Bar
              points={points[yKey]}
              chartBounds={chartBounds}
              color={barColor}
              roundedCorners={{ topLeft: 4, topRight: 4 }}
            />
          )}
        </CartesianChart>
      </YStack>
    )
  }

  return (
    <YStack width="100%" gap="$4" paddingHorizontal="$4">
      {headerContent}
      {renderContent()}
    </YStack>
  )
}
