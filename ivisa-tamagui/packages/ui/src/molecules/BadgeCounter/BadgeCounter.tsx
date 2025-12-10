import React from 'react'
import { ZStack, styled, GetProps, View } from 'tamagui'
import { Badge, BadgeText } from '../../atoms/Badge'

const BadgeCounterFrame = styled(ZStack, {
  name: 'BadgeCounter',
  alignItems: 'center',
  justifyContent: 'center',
})

const BadgePosition = styled(View, {
  position: 'absolute',
  zIndex: 1,
  top: -5,
  right: -5,
})

export interface BadgeCounterProps extends GetProps<typeof BadgeCounterFrame> {
  children: React.ReactNode
  count?: number
  max?: number
  showZero?: boolean
}

export const BadgeCounter = ({ children, count = 0, max = 99, showZero = false, ...props }: BadgeCounterProps) => {
  if (!showZero && count === 0) {
    return <>{children}</>
  }

  const displayCount = count > max ? `${max}+` : count

  return (
    <BadgeCounterFrame {...props}>
      {children}
      <BadgePosition>
        <Badge variant="destructive">
          <BadgeText variant="destructive">{displayCount}</BadgeText>
        </Badge>
      </BadgePosition>
    </BadgeCounterFrame>
  )
}
