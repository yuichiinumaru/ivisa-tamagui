import { YStack, styled, GetProps } from 'tamagui'

const SkeletonFrame = styled(YStack, {
  name: 'Skeleton',
  backgroundColor: '$muted',
  borderRadius: '$4',
})

export type SkeletonProps = GetProps<typeof SkeletonFrame>

export const Skeleton = SkeletonFrame.styleable<SkeletonProps>((props, ref) => (
  <SkeletonFrame
    ref={ref}
    {...props}
    data-testid="skeleton"
    aria-hidden="true"
  />
))
