import { Star } from '@tamagui/lucide-icons'
import React, { forwardRef, useState } from 'react'
import {
  GetProps,
  SizeTokens,
  TamaguiElement,
  XStack,
  getVariableValue,
  styled,
  withStaticProperties,
} from 'tamagui'

import { Skeleton } from '../../atoms/Skeleton'

const StarRatingFrame = styled(XStack, {
  name: 'StarRating',
  gap: '$1',
  variants: {
    hasError: {
      true: {
        // You can define error styles for the container if needed,
        // but for now, we'll handle color on the icon itself.
      },
    },
  },
})

const StarIconContainer = styled(XStack, {
  name: 'StarIconContainer',
  cursor: 'pointer',
  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
    },
  },
})

export type StarRatingProps = GetProps<typeof StarRatingFrame> & {
  count?: number
  onChange?: (rating: number | null) => void
  value?: number | null
  defaultValue?: number | null
  size?: SizeTokens
  iconProps?: Record<string, unknown>
  Icon?: React.ElementType
  colorActive?: string
  colorInactive?: string
  isLoading?: boolean
  rightSlot?: React.ReactNode
}

const StarRatingComponent = forwardRef<TamaguiElement, StarRatingProps>(
  (
    {
      count = 5,
      onChange,
      value,
      defaultValue = null,
      disabled,
      hasError,
      isLoading,
      iconProps,
      Icon = Star,
      size = '$2',
      colorActive: colorActiveProp = '$yellow10',
      colorInactive: colorInactiveProp = '$gray7',
      rightSlot,
      ...frameProps
    },
    ref,
  ) => {
    const [internalRating, setInternalRating] = useState<number | null>(defaultValue)
    const [hoverRating, setHoverRating] = useState<number | null>(null)

    const isControlled = value !== undefined
    const currentRating = isControlled ? value : internalRating
    const colorActive = getVariableValue(colorActiveProp)
    const colorError = getVariableValue('$red10')
    const colorInactive = getVariableValue(colorInactiveProp)

    const handlePress = (ratingToSet: number) => {
      if (disabled || isLoading) return
      const newRating = currentRating === ratingToSet ? null : ratingToSet
      if (!isControlled) {
        setInternalRating(newRating)
      }
      onChange?.(newRating)
    }

    if (isLoading) {
      return (
        <StarRatingFrame {...frameProps} ref={ref}>
          {Array.from({ length: count }, (_, i) => (
            <Skeleton key={i} width={size} height={size} br="$10" />
          ))}
        </StarRatingFrame>
      )
    }

    return (
      <StarRatingFrame {...frameProps} ref={ref}>
        {Array.from({ length: count }, (_, i) => {
          const ratingValue = i + 1
          const isFilled = ratingValue <= (hoverRating ?? currentRating ?? 0)
          const starColor = hasError ? colorError : isFilled ? colorActive : colorInactive

          return (
            <StarIconContainer
              key={ratingValue}
              disabled={disabled}
              onHoverIn={() => !disabled && setHoverRating(ratingValue)}
              onHoverOut={() => !disabled && setHoverRating(null)}
              onPress={() => handlePress(ratingValue)}
              aria-label={`Avaliação ${ratingValue} de ${count}`}
              data-testid={`star-${ratingValue}`}
            >
              <Icon
                {...iconProps}
                size={size}
                color={starColor}
                fill={isFilled ? starColor : 'transparent'}
              />
            </StarIconContainer>
          )
        })}
        {rightSlot}
      </StarRatingFrame>
    )
  },
)

StarRatingComponent.displayName = 'StarRating'

export const StarRating = withStaticProperties(StarRatingComponent, {})
