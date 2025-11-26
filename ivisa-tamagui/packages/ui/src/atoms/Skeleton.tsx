import { styled, YStack, GetProps } from 'tamagui'

const SkeletonFrame = styled(YStack, {
    name: 'Skeleton',
    backgroundColor: '$muted', // bg-muted
    borderRadius: '$4', // rounded-md

    // Animation
    // Tamagui requires an animation driver and config.
    // Assuming 'quick' or 'bouncy' exists.
    // For a pulse effect, we'd ideally use a keyframe animation or a loop.
    // Tamagui's animation prop is for transitions.
    // For continuous pulse, we might need a CSS animation or a reanimated loop.
    // For now, we'll just style it static or add a simple enter animation.
    animation: 'quick',
    enterStyle: { opacity: 0.5 },
})

export const Skeleton = SkeletonFrame
export type SkeletonProps = GetProps<typeof SkeletonFrame>
