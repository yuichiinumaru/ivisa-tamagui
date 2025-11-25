import React from 'react'
import { Checkbox as TamaguiCheckbox, CheckboxProps as TamaguiCheckboxProps, styled, GetProps, View } from 'tamagui'
import { withErrorLogging } from '../utils/withErrorLogging'

// Custom CheckIcon using simple View/CSS for now since we don't have icons yet
const CheckIcon = () => (
  <View
    width={8}
    height={10}
    borderColor="$primaryForeground"
    borderBottomWidth={2}
    borderRightWidth={2}
    rotate="45deg"
    marginBottom={2}
  />
)

const StyledCheckbox = styled(TamaguiCheckbox, {
  name: 'IvisaCheckbox',
  width: '$5',
  height: '$5',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$sm',
  backgroundColor: '$background',
  alignItems: 'center',
  justifyContent: 'center',
  
  hoverStyle: {
    borderColor: '$primary',
  },

  focusStyle: {
    borderColor: '$ring',
    borderWidth: 2,
  },

  variants: {
    checked: {
      true: {
        backgroundColor: '$primary',
        borderColor: '$primary',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        backgroundColor: '$muted',
        borderColor: '$muted',
      },
    },
  } as const,
})

const StyledIndicator = styled(TamaguiCheckbox.Indicator, {
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
})

type StyledCheckboxProps = GetProps<typeof StyledCheckbox>

export interface CheckboxProps extends Omit<StyledCheckboxProps, 'checked' | 'onCheckedChange'> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  id?: string
}

const CheckboxImpl = React.forwardRef<React.ElementRef<typeof TamaguiCheckbox>, CheckboxProps>(
  ({ checked, onCheckedChange, ...props }, ref) => {
    return (
      <StyledCheckbox
        ref={ref}
        checked={checked}
        onCheckedChange={onCheckedChange}
        {...props}
      >
        <StyledIndicator>
          <CheckIcon />
        </StyledIndicator>
      </StyledCheckbox>
    )
  }
)

CheckboxImpl.displayName = 'IvisaCheckbox'

export const IvisaCheckbox = withErrorLogging<CheckboxProps, React.ElementRef<typeof TamaguiCheckbox>>(
  'IvisaCheckbox',
  CheckboxImpl
)
