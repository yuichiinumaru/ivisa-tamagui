// Removed @ts-nocheck — enabling type checking
import React from 'react'
import {
  GetProps,
  Label,
  RadioGroup as TamaguiRadioGroup,
  styled,
  Text,
  XStack,
  YStack,
} from 'tamagui'

import { Skeleton } from '../atoms/Skeleton'

// Defines the basic frame for a single radio button item.
const RadioGroupItemFrame = styled(TamaguiRadioGroup.Item, {
  name: 'RadioGroupItem',
  width: 16,
  height: 16,
  borderRadius: '$10',
  borderWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
  alignItems: 'center',
  justifyContent: 'center',

  focusStyle: {
    outlineColor: '$blue10',
    outlineStyle: 'solid',
    outlineWidth: 2,
  },
  hoverStyle: {
    borderColor: '$borderColorHover',
  },
  pressStyle: {
    borderColor: '$blue10',
    backgroundColor: '$backgroundPress',
  },

  variants: {
    hasError: {
      true: {
        borderColor: '$red10',
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

export type RadioGroupItemProps = GetProps<typeof RadioGroupItemFrame>

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

export type RadioOption = {
  value: string
  label: string
  disabled?: boolean
}

export type RadioGroupProps = GetProps<typeof TamaguiRadioGroup> & {
  options: RadioOption[]
  orientation?: 'vertical' | 'horizontal'
  isLoading?: boolean
  hasError?: boolean
  errorMessage?: string
}

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
      errorMessage,
      ...props
    },
    ref
  ) => {
    const Container = orientation === 'vertical' ? YStack : XStack

    if (isLoading) {
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
      <YStack>
        <TamaguiRadioGroup ref={ref} {...props}>
          <Container gap="$2">
            {options.map((option) => (
              <XStack key={option.value} alignItems="center" space="$2">
                <RadioGroupItem
                  value={option.value}
                  id={option.value}
                  hasError={hasError}
                  disabled={option.disabled || props.disabled}
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
        {hasError && errorMessage && (
          <Text color="$red10" fontSize="$2" marginTop="$2">
            {errorMessage}
          </Text>
        )}
      </YStack>
    )
  }
)
RadioGroup.displayName = 'RadioGroup'

