import { YStack, styled, GetProps } from 'tamagui'
import './Skeleton.css'

const SkeletonFrame = styled(YStack, {
  name: 'Skeleton',
  backgroundColor: '$muted',
  borderRadius: '$4',

  variants: {
    animationType: {
      pulse: {
        animationName: 'skeleton-pulse',
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
