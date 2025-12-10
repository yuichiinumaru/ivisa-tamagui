import { styled, YStack, GetProps, Text } from 'tamagui'

export const GaugeChartFrame = styled(YStack, {
  name: 'GaugeChart',
  alignItems: 'center',
  justifyContent: 'center',
  size: 200,
})

export type GaugeChartProps = GetProps<typeof GaugeChartFrame> & {
    value: number
}

export const GaugeChart = GaugeChartFrame.styleable<GaugeChartProps>((props, ref) => {
    const { value, ...rest } = props
    return (
        <GaugeChartFrame ref={ref} {...rest}>
           <Text>Gauge Chart: {value}%</Text>
        </GaugeChartFrame>
    )
})

export default GaugeChart
