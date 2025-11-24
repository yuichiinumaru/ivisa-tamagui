import React from 'react'
import { View, styled } from 'tamagui'

const StyledSeparator = styled(View, {
  name: 'Separator',
  height: 1,
  backgroundColor: '$borderColor',
  variants: {
    orientation: {
      horizontal: {
        width: '100%',
        height: 1,
      },
      vertical: {
        width: 1,
        height: '100%',
      }
    }
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
})

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical'
}

export const Separator: React.FC<SeparatorProps> = ({ orientation = 'horizontal' }) => {
  return <StyledSeparator orientation={orientation} />
}
