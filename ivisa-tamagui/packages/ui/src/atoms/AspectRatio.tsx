import { Stack, StackProps } from 'tamagui'
import React, { forwardRef } from 'react'

export interface AspectRatioProps extends StackProps {
  ratio?: number
}

export const AspectRatio = forwardRef<React.ElementRef<typeof Stack>, AspectRatioProps>(
  ({ ratio = 1, ...props }, ref) => {
    return (
      <Stack
        ref={ref}
        aspectRatio={ratio}
        {...props}
      />
    )
  }
)

AspectRatio.displayName = 'AspectRatio'
