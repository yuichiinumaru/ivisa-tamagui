import React from 'react'
import { GetProps, Stack, styled, XStack, Text } from 'tamagui'
import { Avatar, AvatarFallback, AvatarImage } from '../../atoms/Avatar'

const AvatarGroupFrame = styled(XStack, {
    name: 'AvatarGroup',
    flexDirection: 'row',
    alignItems: 'center',
})

const AvatarGroupItem = styled(Stack, {
    name: 'AvatarGroupItem',
    borderWidth: 2,
    borderColor: '$background',
    borderRadius: '$full',
    marginLeft: -10, // Overlap
    zIndex: 1,

    variants: {
        first: {
            true: {
                marginLeft: 0,
                zIndex: 10,
            }
        }
    }
})

const MoreAvatarsFrame = styled(Stack, {
    name: 'MoreAvatars',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$muted',
    borderWidth: 2,
    borderColor: '$background',
    borderRadius: '$full',
    marginLeft: -10,
})

const MoreAvatarsText = styled(Text, {
    name: 'MoreAvatarsText',
    color: '$mutedForeground',
    fontWeight: '500',
    fontSize: '$2',
})

export interface AvatarGroupProps extends GetProps<typeof AvatarGroupFrame> {
    children?: React.ReactNode
    limit?: number
    size?: GetProps<typeof Avatar>['size']
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
    children,
    limit = 3,
    size = '$4',
    ...props
}) => {
    const avatars = React.Children.toArray(children).filter(Boolean)
    const visibleAvatars = avatars.slice(0, limit)
    const overflowCount = Math.max(0, avatars.length - limit)

    return (
        <AvatarGroupFrame {...props}>
            {visibleAvatars.map((avatar, index) => (
                <AvatarGroupItem key={index} first={index === 0} zIndex={avatars.length - index}>
                    {React.isValidElement(avatar) ? React.cloneElement(avatar as any, { size }) : avatar}
                </AvatarGroupItem>
            ))}

            {overflowCount > 0 && (
                <MoreAvatarsFrame
                    width={size}
                    height={size}
                    zIndex={0}
                >
                    <MoreAvatarsText>+{overflowCount}</MoreAvatarsText>
                </MoreAvatarsFrame>
            )}
        </AvatarGroupFrame>
    )
}
