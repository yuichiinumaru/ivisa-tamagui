import React from 'react'
import {
  GetProps,
  Label,
  RadioGroup as TamaguiRadioGroup,
  StackProps,
  styled,
  XStack,
  YStack,
} from 'tamagui'

import { Skeleton } from '../atoms/Skeleton'

// Defines the basic frame for a single radio button item.
const RadioGroupItemFrame = styled(TamaguiRadioGroup.Item, {
  name: 'RadioGroupItem',
  width: 16,
  height: 16,
  borderRadius: '$10', // Fully rounded
  borderWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
  alignItems: 'center',
  justifyContent: 'center',

  // Focus style for accessibility
  focusStyle: {
    outlineColor: '$blue10',
    outlineStyle: 'solid',
    outlineWidth: 2,
  },

  // Hover style for interactivity
  hoverStyle: {
    borderColor: '$borderColorHover',
  },

  // Pressed style for feedback
  pressStyle: {
    borderColor: '$blue10',
    backgroundColor: '$backgroundPress',
  },

  // Variants for different states
  variants: {
    hasError: {
      true: {
        borderColor: '$red10', // Red border for error state
      },
    },
    disabled: {
      true: {
        backgroundColor: '$background',
        borderColor: '$gray8',
        opacity: 0.5,
      },
    },
  },
})

// Defines the indicator (the dot inside the radio button).
const RadioGroupIndicator = styled(TamaguiRadioGroup.Indicator, {
  name: 'RadioGroupIndicator',
  backgroundColor: '$blue10',
  width: 8,
  height: 8,
  borderRadius: '$10',
  variants: {
    disabled: {
      true: {
        backgroundColor: '$gray8',
      },
    },
  },
})

// Props for a single RadioGroup item, extending the frame's props.
export type RadioGroupItemProps = GetProps<typeof RadioGroupItemFrame>

/**
 * A composite component representing a single item in a RadioGroup.
 * It includes the frame and the indicator.
 */
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupItemFrame>,
  RadioGroupItemProps
>((props, ref) => {
  return (
    <RadioGroupItemFrame ref={ref} {...props}>
      <RadioGroupIndicator disabled={props.disabled} />
    </RadioGroupItemFrame>
  )
})

RadioGroupItem.displayName = 'RadioGroupItem'

// Type definition for a single radio option.
export type RadioOption = {
  value: string
  label: string
  disabled?: boolean
}

// Props for the main RadioGroup component.
export type RadioGroupProps = GetProps<typeof TamaguiRadioGroup> & {
  options: RadioOption[]
  orientation?: 'vertical' | 'horizontal'
  isLoading?: boolean
  hasError?: boolean
}

/**
 * A molecule component that presents a set of radio buttons,
 * allowing the user to select one option from a set.
 */
export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof TamaguiRadioGroup>,
  RadioGroupProps
>(
  (
    {
      options,
      orientation = 'vertical',
      isLoading = false,
      hasError = false,
      ...props
    },
    ref
  ) => {
    // The container stack changes based on the orientation prop.
    const Container = orientation === 'vertical' ? YStack : XStack

    if (isLoading) {
      // If loading, render a skeleton layout.
      return (
        <Container gap="$2" aria-busy="true" aria-live="polite">
          {options.map((option) => (
            <XStack key={option.value} alignItems="center" space="$2">
              <Skeleton width={16} height={16} borderRadius="$10" />
              <Skeleton width={100} height={16} />
            </XStack>
          ))}
        </Container>
      )
    }

    return (
      <TamaguiRadioGroup ref={ref} {...props}>
        <Container gap="$2">
          {options.map((option) => (
            <XStack key={option.value} alignItems="center" space="$2">
              <RadioGroupItem
                value={option.value}
                id={option.value}
                hasError={hasError}
                disabled={option.disabled || props.disabled}
                aria-label={option.label}
              />
              <Label
                htmlFor={option.value}
                disabled={option.disabled || props.disabled}
                ellipse
                numberOfLines={1}
              >
                {option.label}
              </Label>
            </XStack>
          ))}
        </Container>
      </TamaguiRadioGroup>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'
