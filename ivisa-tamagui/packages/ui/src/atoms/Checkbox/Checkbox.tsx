import React from 'react'
import { Checkbox as TamaguiCheckbox, styled, GetProps, View, Label, XStack, SizeTokens } from 'tamagui'
import { withErrorLogging } from '../../utils/withErrorLogging'
import { Check, Minus } from '@tamagui/lucide-icons'

const StyledCheckbox = styled(TamaguiCheckbox, {
  name: 'Checkbox',
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
    borderColor: '$blue10',
    outlineColor: '$blue10',
    outlineWidth: 2,
    outlineStyle: 'solid',
  },

  variants: {
    size: {
      '...size': (val: SizeTokens, { props }) => {
        return {
          width: val,
          height: val,
        }
      },
    },

    checked: {
      true: {
        backgroundColor: '$primary',
        borderColor: '$primary',
      },
      indeterminate: {
        backgroundColor: '$primary',
        borderColor: '$primary',
      },
      false: {
        backgroundColor: 'transparent',
      }
    },

    error: {
      true: {
        borderColor: '$red10',
        focusStyle: {
          borderColor: '$red10',
          outlineColor: '$red10',
        }
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

  defaultVariants: {
    size: '$4',
  }
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
   * The state of the checkbox. Can be true, false, or "indeterminate".
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
  /**
   * Sets the checkbox to an error state.
   */
  error?: boolean;
  /**
   * The size of the checkbox.
   */
  size?: SizeTokens;
}

const CheckboxImpl = React.forwardRef<React.ElementRef<typeof TamaguiCheckbox>, CheckboxProps>(
  ({ checked, onCheckedChange, id, label, disabled, error, size, ...props }, ref) => {
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
          error={error}
          size={size}
          role="checkbox"
          aria-checked={checked === 'indeterminate' ? 'mixed' : !!checked}
          aria-label={label ? undefined : 'checkbox'} // Provide aria-label if no visible label
          {...props}
        >
          <StyledIndicator>
            {checked === 'indeterminate' ? (
                <Minus size={16} color="$background" />
            ) : (
                <Check size={16} color="$background" />
            )}
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
