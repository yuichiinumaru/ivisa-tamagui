import { Stack, StackProps, TamaguiElement } from 'tamagui'
import React, { forwardRef } from 'react'

/**
 * Displays content within a desired ratio.
 */
export interface AspectRatioProps extends StackProps {
  /**
   * The ratio of the component's width to its height.
   * @default 1
   */
  ratio?: number
}

export const AspectRatio = forwardRef<TamaguiElement, AspectRatioProps>(({ ratio = 1, ...props }, ref) => {
  return (
    <Stack
      ref={ref}
      aspectRatio={ratio}
      {...props}
    />
  )
})

AspectRatio.displayName = 'AspectRatio'
