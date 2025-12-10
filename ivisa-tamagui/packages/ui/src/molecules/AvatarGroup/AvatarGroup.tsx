import React from 'react'
import { XStack, styled, GetProps, View, Text } from 'tamagui'
import { Avatar, AvatarFallback } from '../../atoms/Avatar'

const AvatarGroupFrame = styled(XStack, {
  name: 'AvatarGroup',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 10,
})

const AvatarGroupItemFrame = styled(View, {
  name: 'AvatarGroupItem',
  borderColor: '$background',
  borderWidth: 2,
  borderRadius: 1000,
  marginLeft: -10,
})

export interface AvatarGroupProps extends GetProps<typeof AvatarGroupFrame> {
  children: React.ReactNode
  limit?: number
}

export const AvatarGroup = ({ children, limit, ...props }: AvatarGroupProps) => {
  const childrenArray = React.Children.toArray(children)
  const count = childrenArray.length

  const visibleChildren = limit ? childrenArray.slice(0, limit) : childrenArray
  const remaining = count - visibleChildren.length

  return (
    <AvatarGroupFrame {...props}>
      {visibleChildren.map((child, index) => (
        <AvatarGroupItemFrame key={index} zIndex={visibleChildren.length - index}>
          {child}
        </AvatarGroupItemFrame>
      ))}
      {remaining > 0 && (
        <AvatarGroupItemFrame zIndex={0}>
          <Avatar circular size="$3" backgroundColor="$muted">
            <AvatarFallback>
              <Text fontSize="$2" fontWeight="bold">+{remaining}</Text>
            </AvatarFallback>
          </Avatar>
        </AvatarGroupItemFrame>
      )}
    </AvatarGroupFrame>
  )
}
