import { styled, YStack, GetProps, Text } from 'tamagui'

export const RankingChartFrame = styled(YStack, {
  name: 'RankingChart',
  gap: '$2'
})

export type RankingChartProps = GetProps<typeof RankingChartFrame>

export const RankingChart = RankingChartFrame.styleable<RankingChartProps>((props, ref) => {
    return (
        <RankingChartFrame ref={ref} {...props}>
           <Text>Ranking Chart Placeholder</Text>
        </RankingChartFrame>
    )
})

export default RankingChart
