import { YStack, styled, GetProps } from 'tamagui'
import './Skeleton.css'

const SkeletonFrame = styled(YStack, {
  name: 'Skeleton',
  backgroundColor: '$muted',
  borderRadius: '$sm',

  variants: {
    animationType: {
      pulse: {
        animationName: 'skeleton-pulse',
        animationDuration: '2s',
        animationIterationCount: 'infinite',
      },
      none: {},
    },
    round: {
      true: {
        borderRadius: '$full',
      },
    },
  } as const,

  defaultVariants: {
    animationType: 'pulse',
  },
})

export const Skeleton = SkeletonFrame.styleable((props, ref) => (
  <SkeletonFrame {...props} ref={ref} aria-hidden={true} data-testid="skeleton" />
))

export type SkeletonProps = GetProps<typeof Skeleton>
