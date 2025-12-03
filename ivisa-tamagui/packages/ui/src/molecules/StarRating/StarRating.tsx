import { Star } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { SizeTokens, SizableStack, XStack, XStackProps } from 'tamagui'

export interface StarRatingProps extends XStackProps {
  count?: number
  value?: number
  onValueChange?: (value: number) => void
  size?: SizeTokens
  disabled?: boolean
  color?: string
  activeColor?: string
}

export const StarRating = ({
  count = 5,
  value = 0,
  onValueChange,
  size = '$2',
  disabled = false,
  gap = '$1',
  color = '$gray8',
  activeColor = '$yellow9',
  ...props
}: StarRatingProps) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null)

  const stars = Array.from({ length: count }, (_, i) => i + 1)

  return (
    <XStack gap={gap} {...props}>
      {stars.map((starValue) => {
        const isFilled = starValue <= (hoverValue ?? value)

        const iconColor = isFilled ? activeColor : color
        const iconFill = isFilled ? activeColor : 'transparent'

        return (
          <SizableStack
            key={starValue}
            cursor={disabled ? 'not-allowed' : 'pointer'}
            onHoverIn={() => !disabled && setHoverValue(starValue)}
            onHoverOut={() => !disabled && setHoverValue(null)}
            onPress={() => !disabled && onValueChange?.(starValue)}
          >
            <Star
              size={size}
              color={iconColor}
              fill={iconFill}
            />
          </SizableStack>
        )
      })}
    </XStack>
  )
}
