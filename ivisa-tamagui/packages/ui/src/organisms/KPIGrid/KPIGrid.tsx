import { styled, YStack, GetProps, Text } from 'tamagui'

export const KPIGridFrame = styled(YStack, {
  name: 'KPIGrid',
  flexWrap: 'wrap',
  gap: '$4',
  flexDirection: 'row',
})

export type KPIGridProps = GetProps<typeof KPIGridFrame>

export const KPIGrid = KPIGridFrame.styleable<KPIGridProps>((props, ref) => {
    return (
        <KPIGridFrame ref={ref} {...props}>
           <Text>KPI Grid Placeholder</Text>
        </KPIGridFrame>
    )
})

export default KPIGrid
