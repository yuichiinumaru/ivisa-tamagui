import { GetProps, Stack, styled, TamaguiElement } from 'tamagui'
import React, { forwardRef } from 'react'
import { Skeleton } from './Skeleton'

const AspectRatioFrame = styled(Stack, {
  name: 'AspectRatio',
  variants: {
    variant: {
      square: {
        aspectRatio: 1,
      },
      video: {
        aspectRatio: 16 / 9,
      },
      photo: {
        aspectRatio: 4 / 3,
      },
    },
  } as const,
  defaultVariants: {
    variant: 'square',
  },
})

/**
 * Displays content within a desired ratio.
 */
export interface AspectRatioProps extends Omit<GetProps<typeof AspectRatioFrame>, 'aspectRatio'> {
  /**
   * A custom ratio to override any variant.
   */
  ratio?: number
  /**
   * If true, a skeleton loader will be shown.
   */
  loading?: boolean
}

export const AspectRatio = forwardRef<TamaguiElement, AspectRatioProps>(
  ({ ratio, variant = 'square', loading, children, ...props }, ref) => {
    // Filter out animation props that might leak to DOM if passed from parent
    const { animationName, animationDuration, ...safeProps } = props as any

    return (
      <AspectRatioFrame
        ref={ref}
        variant={variant}
        aspectRatio={ratio}
        {...safeProps}
      >
        {loading ? <Skeleton width="100%" height="100%" data-testid="skeleton-loader" /> : children}
      </AspectRatioFrame>
    )
  }
)

AspectRatio.displayName = 'AspectRatio'

