import { Avatar as TamaguiAvatar, styled, GetProps } from 'tamagui'

const AvatarFrame = styled(TamaguiAvatar, {
    name: 'Avatar',
    circular: true,
    size: '$10', // Default size (40px)
    borderWidth: 0,
    overflow: 'hidden',
})

const AvatarImage = styled(TamaguiAvatar.Image, {
    name: 'AvatarImage',
    source: { uri: '' }, // Default source object for TS
    width: '100%',
    height: '100%',
})

const AvatarFallback = styled(TamaguiAvatar.Fallback, {
    name: 'AvatarFallback',
    backgroundColor: '$muted',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
})

export const Avatar = AvatarFrame
export const AvatarImageComponent = AvatarImage
export const AvatarFallbackComponent = AvatarFallback

// Exporting with shadcn names
export {
    AvatarImage as AvatarImage,
    AvatarFallback as AvatarFallback,
}

export type AvatarProps = GetProps<typeof AvatarFrame>
export type AvatarImageProps = GetProps<typeof AvatarImage>
export type AvatarFallbackProps = GetProps<typeof AvatarFallback>
