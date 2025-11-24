import React from 'react'
import { Text } from 'tamagui'
import styled from '@tamagui/styled-components'

const StyledBadge = styled(Text, {
  name: 'Badge',
  fontSize: '$1',
  fontWeight: '500',
  color: '$background',
  backgroundColor: '$primary',
  paddingHorizontal: '$2',
  paddingVertical: '$1',
  borderRadius: '$maxSize',
  borderWidth: '$0',
  variants: {
    variant: {
      default: {
        backgroundColor: '$primary',
        color: '$background',
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$background',
      },
      destructive: {
        backgroundColor: '$destructive',
        color: '$background',
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '$primary',
        color: '$primary',
      },
      success: {
        backgroundColor: '$success',
        color: '$background',
      },
      warning: {
        backgroundColor: '$warning',
        color: '$background',
      }
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

interface BadgeProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning'
  children: React.ReactNode
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'default', children }) => {
  return (
    <StyledBadge variant={variant}>
      {children}
    </StyledBadge>
  )
}
