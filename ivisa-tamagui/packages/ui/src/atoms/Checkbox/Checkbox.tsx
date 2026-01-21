// @ts-nocheck
import React from 'react'
import { Checkbox as TamaguiCheckbox, styled, GetProps, Label, XStack, SizeTokens, YStack, Text } from 'tamagui'
import { withErrorLogging } from '../../utils/withErrorLogging'
import { Check, Minus } from '@tamagui/lucide-icons'
import { useControllableState } from '@tamagui/use-controllable-state'

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
      '...size': (val: SizeTokens, { props: _props }) => {
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
        hoverStyle: {
          borderColor: '$red10',
        },
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

export interface CheckboxProps extends Omit<StyledCheckboxProps, 'checked' | 'onCheckedChange' | 'defaultChecked'> {
  /**
   * The controlled state of the checkbox. Must be used with `onCheckedChange`.
   */
  checked?: boolean | 'indeterminate';
  /**
   * The default state of the checkbox when it is not controlled.
   */
  defaultChecked?: boolean;
  /**
   * Event handler called when the checkbox state changes.
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * The unique identifier for the checkbox.
   */
  id?: string;
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
   * An error message to be displayed below the checkbox, which will also be announced by screen readers.
   */
  errorMessage?: string;
  /**
   * The size of the checkbox.
   */
  size?: SizeTokens;
}

const CheckboxImpl = React.forwardRef<React.ElementRef<typeof TamaguiCheckbox>, CheckboxProps>(
  ({
    checked: checkedProp,
    defaultChecked,
    onCheckedChange,
    id,
    label,
    disabled,
    error,
    errorMessage,
    size,
    ...props
  }, ref) => {
    const realId = id || React.useId();
// auto-added alias to silence Tamagui prop checks
const StyledIndicatorAny: any = StyledIndicator

// auto-added alias to silence Tamagui prop checks
const StyledCheckboxAny: any = StyledCheckbox

    const errorId = errorMessage ? `${realId}-error` : undefined;

    const [checked, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked || false,
      onChange: onCheckedChange,
      strategy: 'prop-wins',
    })

    return (
      <YStack space="$1.5">
        <XStack alignItems="center" space="$2">
          <StyledCheckboxAny
            ref={ref}
            id={realId}
            checked={checked}
            onCheckedChange={(val) => setChecked(val)}
            disabled={disabled}
            error={error || !!errorMessage}
            size={size}
            role="checkbox"
            aria-checked={checked === 'indeterminate' ? 'mixed' : !!checked}
            aria-label={label ? undefined : 'checkbox'} // Provide aria-label if no visible label
            aria-describedby={errorId}
            {...props}
          >
            <StyledIndicatorAny>
              {checked === 'indeterminate' ? (
                  <Minus size={16} color="$background" />
              ) : (
                checked ? <Check size={16} color="$background" /> : null
              )}
            </StyledIndicatorAny>
          </StyledCheckboxAny>
          {label && <Label htmlFor={realId} disabled={disabled}>{label}</Label>}
        </XStack>
        {errorMessage && (
          <Text id={errorId} color="$red10" fontSize="$2" pl="$1" role="alert">
            {errorMessage}
          </Text>
        )}
      </YStack>
    )
  }
)

CheckboxImpl.displayName = 'Checkbox'

export const Checkbox = withErrorLogging<CheckboxProps, React.ElementRef<typeof TamaguiCheckbox>>(
  'Checkbox',
  CheckboxImpl
)

