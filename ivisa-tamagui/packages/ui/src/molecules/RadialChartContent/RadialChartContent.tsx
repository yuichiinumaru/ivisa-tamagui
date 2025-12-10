import { styled, YStack, GetProps, Text } from 'tamagui'

export const RadialChartContentFrame = styled(YStack, {
  name: 'RadialChartContent',
  alignItems: 'center',
  justifyContent: 'center',
})

export type RadialChartContentProps = GetProps<typeof RadialChartContentFrame> & {
    message: string
}

export const RadialChartContent = RadialChartContentFrame.styleable<RadialChartContentProps>((props, ref) => {
    const { message, ...rest } = props
    return (
        <RadialChartContentFrame ref={ref} {...rest}>
           <Text>Radial Chart Placeholder: {message}</Text>
        </RadialChartContentFrame>
    )
})

export default RadialChartContent
