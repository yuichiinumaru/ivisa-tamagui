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

const ScrollBar = styled(TamaguiScrollView, {
    // This is a placeholder. In Radix, ScrollBar is a separate interactive element.
    // In Native/Tamagui, scrollbars are usually native.
    // We can't easily implement a custom cross-platform scrollbar without a dedicated library.
    // So we will just export a stub or a styled view that does nothing for now, 
    // or we can omit it and just let ScrollArea handle scrolling.
    name: 'ScrollBar',
    display: 'none',
})

export const ScrollArea = ScrollAreaFrame
// export const ScrollBar = ScrollBar // Optional, shadcn uses it but we might not need it for native scroll

export type ScrollAreaProps = GetProps<typeof ScrollAreaFrame>
