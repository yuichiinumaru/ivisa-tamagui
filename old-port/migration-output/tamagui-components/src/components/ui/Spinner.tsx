import React from 'react'
import { View, Text } from 'tamagui'
import styled from '@tamagui/styled-components'
import { useAnimatedValue } from 'react-native'

const SpinnerContainer = styled(View, {
  name: 'SpinnerContainer', 
  width: 20,
  height: 20,
  justifyContent: 'center',
  alignItems: 'center',
})

const SpinnerDot = styled(View, {
  name: 'SpinnerDot',
  width: '$2',
  height: '$2',
  borderRadius: '50%',
  backgroundColor: '$primary',
  margin: '$1',
  variants: {
    delay: {
      0: { animationDelay: '0ms' },
      1: { animationDelay: '-0.2s' },
      2: { animationDelay: '-0.4s' },
    }
  }
})

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className }) => {
  const sizeMap = { sm: 16, md: 20, lg: 24 }
  const actualSize = sizeMap[size] || sizeMap.md
  
  return (
    <SpinnerContainer style={{ width: actualSize, height: actualSize }}>
      <SpinnerDot delay={0} />
      <SpinnerDot delay={1} />
      <SpinnerDot delay={2} />
    </SpinnerContainer>
  )
}
