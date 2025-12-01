import { ScrollView as TamaguiScrollView, styled, GetProps } from 'tamagui'

const ScrollAreaFrame = styled(TamaguiScrollView, {
    name: 'ScrollArea',
    width: '100%',
    height: '100%',
    overflow: 'hidden', // Tamagui ScrollView handles overflow internally usually

    // Custom scrollbar styling is tricky in cross-platform.
    // Tamagui supports `showsVerticalScrollIndicator` etc.
    // For web, we can use CSS in `contentContainerStyle` or similar if needed.
    // But for now, we map to the primitive.
})

export const ScrollArea = ScrollAreaFrame

export type ScrollAreaProps = GetProps<typeof ScrollAreaFrame>
