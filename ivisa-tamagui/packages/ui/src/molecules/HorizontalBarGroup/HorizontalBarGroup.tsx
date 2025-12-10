import { styled, YStack, GetProps, Text } from 'tamagui'

export const HorizontalBarGroupFrame = styled(YStack, {
  name: 'HorizontalBarGroup',
  gap: '$2'
})

export type HorizontalBarGroupProps = GetProps<typeof HorizontalBarGroupFrame>

export const HorizontalBarGroup = HorizontalBarGroupFrame.styleable<HorizontalBarGroupProps>((props, ref) => {
    return (
        <HorizontalBarGroupFrame ref={ref} {...props}>
           <Text>Horizontal Bar Group Placeholder</Text>
        </HorizontalBarGroupFrame>
    )
})

export default HorizontalBarGroup
