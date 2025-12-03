import React, { forwardRef, useState } from 'react'
import { SizableStack, SizeTokens, XStack, XStackProps } from 'tamagui'
import { Star } from '@tamagui/lucide-icons'

export type StarRatingProps = XStackProps & {
  count?: number
  onChange?: (rating: number | null) => void
  value?: number | null
  defaultValue?: number | null
  size?: SizeTokens
  disabled?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  iconProps?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon?: any
  colorActive?: string
  colorHover?: string
  colorActiveHover?: string
  color?: string
}

export const StarRating = forwardRef<any, StarRatingProps>(({
  count = 5,
  onChange,
  value,
  defaultValue = null,
  disabled,
  iconProps,
  gap = '$1',
  Icon = Star,
  size = '$1',
  colorHover = '$yellow7',
  colorActiveHover = '$yellow8',
  colorActive = '$yellow10',
  color = '$gray7',
  ...stackProps
}: StarRatingProps, ref) => {
  const [internalRating, setInternalRating] = useState<number | null>(defaultValue)
  const [hoverRating, setHoverRating] = useState<number | null>(null)

  const isControlled = value !== undefined
  const currentRatingValue = isControlled ? value : internalRating

  const arr = Array.from(Array(count).keys())

  const handlePress = (ratingToSet: number) => {
      if (disabled) return

      const newRating = currentRatingValue === ratingToSet ? null : ratingToSet

      if (!isControlled) {
          setInternalRating(newRating)
      }
      onChange?.(newRating)
  }

  return (
      <XStack gap={gap} {...stackProps} ref={ref}>
        {arr.map((idx) => {
          const ratingValue = idx + 1
          const filled = ratingValue <= (currentRatingValue || 0)
          const hovered = ratingValue <= (hoverRating || 0)

          let currentColor = color
          if (hoverRating !== null) {
              // We are hovering
              if (hovered) {
                  currentColor = colorHover
              }
          } else {
               // Not hovering
               if (filled) {
                   currentColor = colorActive
               }
          }

          if (filled) {
              currentColor = hovered ? colorActiveHover : colorActive
          } else {
              currentColor = hovered ? colorHover : color
          }

          return (
            <SizableStack
              key={`${ratingValue}`}
              testID={`star-${ratingValue}`}
              size={size}
              // circular // SizableStack circular might clip the icon if not careful
              onHoverIn={() => {
                if (disabled) return
                setHoverRating(ratingValue)
              }}
              onHoverOut={() => {
                if (disabled) return
                setHoverRating(null)
              }}
              onPress={() => handlePress(ratingValue)}
              cursor={disabled ? 'not-allowed' : 'pointer'}
            >
              <Icon
                {...iconProps}
                size={size}
                color={currentColor}
                fill={filled ? currentColor : 'transparent'}
              />
            </SizableStack>
          )
        })}
      </XStack>
  )
})

StarRating.displayName = 'StarRating'
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
