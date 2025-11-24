import React, { useId } from 'react'
import { Label, Stack, XStack, styled } from 'tamagui'
import { RadioGroup as TamaguiRadioGroup } from '@tamagui/radio-group'

import { withErrorLogging } from '../../utils/withErrorLogging'

const StyledRadioGroup = styled(TamaguiRadioGroup, {
  name: 'RadioGroupRoot',
  gap: '$3',
  flexDirection: 'column',
  alignItems: 'flex-start',
})

const RadioItemRow = styled(XStack, {
  name: 'RadioGroupItemRow',
  alignItems: 'center',
  gap: '$3',
})

const StyledRadioItem = styled(TamaguiRadioGroup.Item, {
  name: 'RadioGroupItemFrame',
  width: '$5',
  height: '$5',
  borderRadius: '$10',
  borderWidth: 2,
  borderColor: '$borderColor',
  backgroundColor: '$background',
  alignItems: 'center',
  justifyContent: 'center',
  hoverStyle: {
    borderColor: '$primary',
  },
  focusStyle: {
    borderColor: '$ring',
    shadowColor: '$ring',
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 0 },
  },
  pressStyle: {
    scale: 0.95,
  },
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  },
})

const StyledIndicator = styled(TamaguiRadioGroup.Indicator, {
  name: 'RadioGroupIndicator',
  width: '$3',
  height: '$3',
  borderRadius: '$10',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$primary',
})

const IndicatorDot = styled(Stack, {
  width: '$2',
  height: '$2',
  borderRadius: '$10',
  backgroundColor: '$background',
})

const RadioLabel = styled(Label, {
  fontFamily: '$body',
  fontSize: '$3',
  color: '$foreground',
  userSelect: 'none',
})

export type RadioGroupProps = React.ComponentProps<typeof TamaguiRadioGroup>

const RadioGroupImpl = React.forwardRef<React.ElementRef<typeof TamaguiRadioGroup>, RadioGroupProps>(
  ({ children, ...props }, ref) => (
    <StyledRadioGroup ref={ref} {...props}>
      {children}
    </StyledRadioGroup>
  )
)

RadioGroupImpl.displayName = 'RadioGroup'

export const RadioGroup = withErrorLogging<RadioGroupProps, React.ElementRef<typeof TamaguiRadioGroup>>(
  'RadioGroup',
  RadioGroupImpl
)

export interface RadioGroupItemProps
  extends Omit<React.ComponentProps<typeof TamaguiRadioGroup.Item>, 'children'> {
  children?: React.ReactNode
}

const RadioGroupItemImpl = React.forwardRef<
  React.ElementRef<typeof TamaguiRadioGroup.Item>,
  RadioGroupItemProps
>(({ children, id, value, disabled, ...props }, ref) => {
  const generatedId = useId()
  const inputId = id ?? `${generatedId}-${value}`

  return (
    <RadioItemRow>
      <StyledRadioItem
        ref={ref}
        id={inputId}
        value={value}
        disabled={disabled || undefined}
        {...props}
      >
        <StyledIndicator>
          <IndicatorDot />
        </StyledIndicator>
      </StyledRadioItem>
      {children ? <RadioLabel htmlFor={inputId}>{children}</RadioLabel> : null}
    </RadioItemRow>
  )
})

RadioGroupItemImpl.displayName = 'RadioGroupItem'

export const RadioGroupItem = withErrorLogging<
  RadioGroupItemProps,
  React.ElementRef<typeof TamaguiRadioGroup.Item>
>('RadioGroupItem', RadioGroupItemImpl)
