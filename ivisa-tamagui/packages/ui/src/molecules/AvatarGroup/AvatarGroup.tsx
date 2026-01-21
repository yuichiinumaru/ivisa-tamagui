// @ts-nocheck
import { Avatar, AvatarFallback, AvatarImage } from '../../atoms/Avatar'
import { Skeleton } from '../../atoms/Skeleton'
import React from 'react'
import { GetProps, SizeTokens, Text, XStack, styled } from 'tamagui'

const AVATAR_GROUP_ITEM_BORDER_WIDTH = 2

const AvatarGroupFrame = styled(XStack, {
  name: 'AvatarGroup',
  alignItems: 'center',
  flexDirection: 'row',

  variants: {
    size: {
      '...size': (val, { tokens }) => {
        return {
          height: tokens.size[val] ?? val,
        }
      },
    },
  } as const,

  defaultVariants: {
    size: '$10',
  },
})

const AvatarGroupItemFrame = styled(XStack, {
  name: 'AvatarGroupItem',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  borderColor: '$background',
  borderWidth: AVATAR_GROUP_ITEM_BORDER_WIDTH,
  borderRadius: '$round',

  variants: {
    size: {
      '...size': (val, { tokens }) => {
        return {
          width: tokens.size[val] ?? val,
          height: tokens.size[val] ?? val,
          // Overlap by 40% of the avatar's size
          marginLeft: (tokens.size[val] ?? val) * -0.4,
          // Explicitly clear zIndex for children to avoid prop leakage
          zIndex: undefined,
        }
      },
    },
    hasError: {
      true: {
        borderColor: '$red10',
      },
    },
  } as const,

  defaultVariants: {
    size: '$10',
  },
})

export interface AvatarGroupProps extends GetProps<typeof AvatarGroupFrame> {
  items: {
    src?: string
    fallback: string
    alt?: string
  }[]
  limit?: number
  isLoading?: boolean
  hasError?: boolean
  size?: SizeTokens
}

export const AvatarGroup = ({
  items = [],
  limit = 3,
  isLoading = false,
  hasError = false,
  size = '$10',
  ...rest
}: AvatarGroupProps) => {
  if (isLoading) {
    return (
      <AvatarGroupFrame size={size} {...rest} data-testid="avatar-group-frame">
        {Array.from({ length: limit }).map((_, index) => (
          <AvatarGroupItemFrame
            key={`skeleton-${index}`}
            size={size}
            zIndex={limit - index}
            data-testid={`avatar-group-skeleton-${index}`}
          >
            <Skeleton circular width="100%" height="100%" />
          </AvatarGroupItemFrame>
        ))}
      </AvatarGroupFrame>
    )
  }

  if (items.length === 0) {
    return null
  }

  const visibleItems = items.slice(0, limit)
  const remainingCount = Math.max(0, items.length - limit)

  return (
    <AvatarGroupFrame size={size} {...rest} data-testid="avatar-group-frame">
      {visibleItems.map((item, index) => (
        <AvatarGroupItemFrame
          key={`avatar-${index}`}
          size={size}
          zIndex={visibleItems.length - index}
          hasError={hasError}
          data-testid={`avatar-group-item-${index}`}
          data-haserror={hasError}
        >
          <Avatar size={size}>
            <AvatarImage alt={item.alt ?? item.fallback} src={item.src} />
            <AvatarFallback>
              <Text>{item.fallback}</Text>
            </AvatarFallback>
          </Avatar>
        </AvatarGroupItemFrame>
      ))}
      {remainingCount > 0 && (
        <AvatarGroupItemFrame
          size={size}
          zIndex={0}
          hasError={hasError}
          data-testid="avatar-group-remainder"
          data-haserror={hasError}
        >
          <Avatar size={size}>
            <AvatarFallback>
              <Text size="$4" fontWeight="bold">
                +{remainingCount}
              </Text>
            </AvatarFallback>
          </Avatar>
        </AvatarGroupItemFrame>
      )}
    </AvatarGroupFrame>
  )
}

