import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryContainer } from 'victory'
import { useTheme } from 'tamagui'

export interface BarChartProps {
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
  const barColor = (theme[color as any] as any)?.get() || color
  const axisColor = theme.borderColor?.get() || '#ccc'
  const textColor = theme.color?.get() || '#000'
  const gridColor = theme.borderColor?.get() || '#eee'

  return (
    <div style={{ height, width: width || '100%' }}>
      <VictoryChart
        domainPadding={{ x: 20 }}
        height={height}
        width={width}
        containerComponent={<VictoryContainer responsive={!width} />}
      >
        <VictoryAxis
          style={{
            axis: { stroke: axisColor },
            tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: 'inherit' },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: 'inherit' },
            grid: { stroke: gridColor, strokeDasharray: '4, 4' },
          }}
        />
        <VictoryBar
          data={data}
          x={xKey}
          y={yKey}
          style={{
            data: { fill: barColor },
          }}
          cornerRadius={{ top: 4 }}
        />
      </VictoryChart>
    </div>
  )
}
