import React from 'react'
import { Checkbox as TamaguiCheckbox, styled, GetProps, View, Label, XStack } from 'tamagui'
import { withErrorLogging } from '../../utils/withErrorLogging'
import { Check } from '@tamagui/lucide-icons'

const StyledCheckbox = styled(TamaguiCheckbox, {
  name: 'Checkbox',
  width: '$4',
  height: '$4',
  borderWidth: 2,
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
    outlineColor: '$ring',
    outlineWidth: 2,
    outlineStyle: 'solid',
  },

  variants: {
    checked: {
      true: {
        backgroundColor: '$primary',
        borderColor: '$primary',
      },
      false: {
        backgroundColor: 'transparent',
      }
    },
    disabled: {
      true: {
        opacity: 0.5,
        backgroundColor: '$background',
        borderColor: '$borderColor',
        hoverStyle: {
            borderColor: '$borderColor',
        }
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
  /**
   * The state of the checkbox.
   */
  checked?: boolean | 'indeterminate'
  /**
   * Event handler called when the checkbox state changes.
   */
  onCheckedChange?: (checked: boolean) => void
  /**
   * The unique identifier for the checkbox.
   */
  id?: string
  /**
   * The label text to be displayed next to the checkbox.
   */
  label?: string;
  /**
   * Disables the checkbox, preventing user interaction.
   */
  disabled?: boolean;
}

const CheckboxImpl = React.forwardRef<React.ElementRef<typeof TamaguiCheckbox>, CheckboxProps>(
  ({ checked, onCheckedChange, id, label, disabled, ...props }, ref) => {
    // Ensure a unique id for label association if not provided
    const realId = id || React.useId();

    return (
      <XStack alignItems="center" space="$2">
        <StyledCheckbox
          ref={ref}
          id={realId}
          checked={checked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          role="checkbox"
          aria-checked={checked === 'indeterminate' ? 'mixed' : !!checked}
          aria-label={label ? undefined : 'checkbox'} // Provide aria-label if no visible label
          {...props}
        >
          <StyledIndicator>
            <Check size={16} color="$background" />
          </StyledIndicator>
        </StyledCheckbox>
        {label && <Label htmlFor={realId} disabled={disabled}>{label}</Label>}
      </XStack>
    )
  }
)

CheckboxImpl.displayName = 'Checkbox'

export const Checkbox = withErrorLogging<CheckboxProps, React.ElementRef<typeof TamaguiCheckbox>>(
  'Checkbox',
  CheckboxImpl
)
