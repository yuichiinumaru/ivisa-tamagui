import { YStack, styled, GetProps } from 'tamagui'
import { keyframes } from '@tamagui/core'

const pulse = keyframes({
  '0%, 100%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0.5,
  },
})

const SkeletonFrame = styled(YStack, {
  name: 'Skeleton',
  backgroundColor: '$muted',
  borderRadius: '$4',

  variants: {
    animationType: {
      pulse: {
        animationName: pulse.name,
        animationDuration: '2s',
        animationIterationCount: 'infinite',
      },
      none: {},
    },
  } as const,

  defaultVariants: {
    animationType: 'pulse',
  },
})

export const Skeleton = SkeletonFrame.styleable((props, ref) => (
  <SkeletonFrame {...props} ref={ref} aria-hidden="true" />
))

export type SkeletonProps = GetProps<typeof Skeleton>
