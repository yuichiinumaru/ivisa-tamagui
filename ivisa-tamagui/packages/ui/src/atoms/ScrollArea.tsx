// @ts-nocheck
import { GetProps, ScrollView as TamaguiScrollView, styled, TamaguiElement } from 'tamagui'
import { forwardRef } from 'react'

/**
 * @module ScrollArea - A scrollable container component.
 * @description Provides a versatile and theme-aware scrollable area. It's built on Tamagui's ScrollView,
 * ensuring cross-platform compatibility. It supports the `asChild` prop for polymorphism, allowing it
 * to compose with other components seamlessly. It also features customizable scrollbar styles.
 * @see https://tamagui.dev/docs/components/scroll-view
 *
 * @param {React.ReactNode} children - The content to be scrolled.
 * @param {'default' | 'subtle' | 'hidden'} [scrollbar='default'] - The visual style of the scrollbar.
 * @param {boolean} [horizontal=false] - If true, scrolling is horizontal.
 * @param {boolean} [showsVerticalScrollIndicator=true] - Toggles the visibility of the vertical scrollbar.
 * @param {boolean} [showsHorizontalScrollIndicator=true] - Toggles the visibility of the horizontal scrollbar.
 * @param {boolean} [asChild=false] - Merges the component with its immediate child.
 */
const ScrollAreaFrame = styled(TamaguiScrollView, {
  name: 'ScrollArea',
  width: '100%',
  height: '100%',

  variants: {
    scrollbar: {
      default: {
        // @ts-expect-error - Tamagui CSS syntax
        '&::-webkit-scrollbar': {
          width: 8,
          height: 8,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '$background',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '$borderColor',
          borderRadius: 100,
        },
      },
      subtle: {
        // @ts-ignore
        '&::-webkit-scrollbar': {
          width: 4,
          height: 4,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '$borderColor',
          borderRadius: 100,
        },
      },
      hidden: {
        // @ts-ignore
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
  } as const,

  defaultVariants: {
    scrollbar: 'default',
  },
})

const ScrollArea = forwardRef<TamaguiElement, ScrollAreaProps>((props, ref) => {
  return <ScrollAreaFrame {...props} ref={ref} />
})

ScrollArea.displayName = 'ScrollArea'

export { ScrollArea }
export type ScrollAreaProps = GetProps<typeof ScrollAreaFrame>
