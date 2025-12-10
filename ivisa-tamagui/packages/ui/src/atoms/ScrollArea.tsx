import { GetProps, ScrollView as TamaguiScrollView, styled } from 'tamagui'

/**
 * @module ScrollArea - A scrollable container component.
 * @description Provides a versatile and theme-aware scrollable area. It's built on Tamagui's ScrollView,
 * ensuring cross-platform compatibility. It supports the `asChild` prop for polymorphism, allowing it
 * to compose with other components seamlessly.
 * @see https://tamagui.dev/docs/components/scroll-view
 *
 * @param {React.ReactNode} children - The content to be scrolled.
 * @param {boolean} [horizontal=false] - If true, scrolling is horizontal.
 * @param {boolean} [showsVerticalScrollIndicator=true] - Toggles the visibility of the vertical scrollbar.
 * @param {boolean} [showsHorizontalScrollIndicator=true] - Toggles the visibility of the horizontal scrollbar.
 * @param {boolean} [asChild=false] - Merges the component with its immediate child.
 */
const ScrollArea = styled(TamaguiScrollView, {
  name: 'ScrollArea',
  width: '100%',
  height: '100%',
})

ScrollArea.displayName = 'ScrollArea'

export { ScrollArea }
export type ScrollAreaProps = GetProps<typeof ScrollArea>
