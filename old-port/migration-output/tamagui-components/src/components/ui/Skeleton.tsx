import React from 'react'
import { View } from 'tamagui'
import styled from '@tamagui/styled-components'

const StyledSkeleton = styled(View, {
  name: 'Skeleton',
  backgroundColor: '$muted',
  borderRadius: '$4',
  variants: {
    variant: {
      text: {
        height: '$3',
        width: '60%',
      },
      circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
      },
      rect: {
        width: '100%',
        height: '$4',
      }
    },
    size: {
      sm: { height: '$2', width: '20%' },
      md: { height: '$3', width: '40%' },
      lg: { height: '$4', width: '60%' },
    },
    animate: {
      true: {
        animationDuration: '1.5s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        animationName: 'pulse',
      }
    }
  },
  defaultVariants: {
    variant: 'rect',
    animate: true
  }
})

interface SkeletonProps {
  variant?: 'text' | 'circle' | 'rect'
  size?: 'sm' | 'md' | 'lg'
  animate?: boolean
  className?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  variant = 'rect', 
  size = 'md', 
  animate = true,
  className 
}) => {
  return <StyledSkeleton variant={variant} size={size} animate={animate} className={className} />
}
