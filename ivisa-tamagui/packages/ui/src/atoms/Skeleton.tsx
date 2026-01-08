import { YStack, styled, GetProps } from 'tamagui'
import './Skeleton.css'

const SkeletonFrame = styled(YStack, {
  name: 'Skeleton',
  backgroundColor: '$muted',
  borderRadius: '$sm',

  variants: {
    animationType: {
      pulse: {},
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

export const Skeleton = SkeletonFrame.styleable(({ animationType, ...props }, ref) => (
  <SkeletonFrame
    {...props}
    animationType={animationType}
    ref={ref}
    aria-hidden={true}
    data-testid="skeleton"
    className={animationType === 'pulse' || !animationType ? 'skeleton-pulse' : ''}
  />
))

export type SkeletonProps = GetProps<typeof Skeleton>
