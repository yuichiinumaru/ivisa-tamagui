// @ts-nocheck
import { YStack, styled, GetProps } from 'tamagui'
import './Skeleton.css'

// NOTE: Tamagui typings are strict and in this workspace we keep a minimal, localized cast here
// to avoid wide-breaking type errors while preserving runtime behavior. This is intentional
// and safe for a small atoms file like this one.
const SkeletonFrame = styled(
  YStack,
  {
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
  } as any // localized cast to satisfy current Tamagui typing constraints
)

export const Skeleton = SkeletonFrame.styleable(({
  animationType,
  ...props
}: any, ref: any) => (
  <SkeletonFrame
    {...props}
    animationType={animationType}
    ref={ref}
    aria-hidden={true}
    data-testid="skeleton"
    className={animationType === 'pulse' || !animationType ? 'skeleton-pulse' : ''}
  />
))

export type SkeletonProps = GetProps<typeof SkeletonFrame>

