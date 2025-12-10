import { styled, YStack, GetProps, Text } from 'tamagui'

export const TimeSeriesChartFrame = styled(YStack, {
  name: 'TimeSeriesChart',
  height: 300,
  padded: true,
  backgroundColor: '$background',
})

export type TimeSeriesChartProps = GetProps<typeof TimeSeriesChartFrame>

export const TimeSeriesChart = TimeSeriesChartFrame.styleable<TimeSeriesChartProps>((props, ref) => {
    return (
        <TimeSeriesChartFrame ref={ref} {...props}>
           <Text>Time Series Chart Placeholder</Text>
        </TimeSeriesChartFrame>
    )
})

export default TimeSeriesChart
