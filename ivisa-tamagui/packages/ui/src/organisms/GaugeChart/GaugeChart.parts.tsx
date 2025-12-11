import { styled, YStack, Text } from 'tamagui'

export const GaugeChartFrame = styled(YStack, {
  name: 'GaugeChartFrame',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  flex: 1,
  minHeight: 200,
  gap: '$4',
})

export const GaugeChartTitle = styled(Text, {
  name: 'GaugeChartTitle',
  fontSize: '$6',
  fontWeight: 'bold',
  color: '$color',
})

export const GaugeChartValueText = styled(Text, {
  name: 'GaugeChartValueText',
  fontSize: '$8',
  fontWeight: 'bold',
  color: '$color',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: [{ translateX: -50 }, { translateY: -50 }],
})
