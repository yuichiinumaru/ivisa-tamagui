import React from 'react'
import { CartesianChart, Bar } from 'victory-native'
import { useTheme } from 'tamagui'
import { View } from 'react-native'

export interface BarChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>[]
  xKey: string
  yKey: string
  color?: string
  height?: number
  width?: number
}

export const BarChart = ({
  data,
  xKey,
  yKey,
  color = '$primary',
  height = 300,
  width,
}: BarChartProps) => {
  const theme = useTheme()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const barColor = (theme[color as any] as any)?.get() || color

  // Note: Axis labels require a Skia Font object.
  // We omit axisOptions for now to avoid crashes until a font strategy is defined.

  return (
    <View style={{ height, width: width || '100%' }}>
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
    </View>
  )
}
