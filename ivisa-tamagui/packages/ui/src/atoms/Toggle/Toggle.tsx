import { styled, GetProps, Button } from 'tamagui'
import React from 'react'

const ToggleFrame = styled(Button, {
  name: 'Toggle',
  backgroundColor: 'transparent',
  borderRadius: '$4',
  paddingHorizontal: '$3',
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 0,

  hoverStyle: {
    backgroundColor: '$muted',
    color: '$mutedForeground',
  },

  variants: {
    pressed: {
      true: {
        backgroundColor: '$accent',
        color: '$accentForeground',
      },
    },
  } as const,
})

export interface ToggleProps extends Omit<GetProps<typeof ToggleFrame>, 'icon' | 'iconAfter'> {
  /**
   * Whether the toggle is pressed or not.
   * @default false
   */
  pressed?: boolean

  /**
   * The initial pressed state of the toggle when in uncontrolled mode.
   * @default false
   */
  defaultPressed?: boolean

  /**
   * Callback function called when the pressed state of the toggle changes.
   */
  onPressedChange?: (pressed: boolean) => void

  /**
   * An optional accessible label for the toggle.
   */
  'aria-label'?: string

  /**
   * An optional icon to display on the left side of the toggle.
   */
  leftIcon?: React.ReactNode

  /**
   * An optional icon to display on the right side of the toggle.
   */
  rightIcon?: React.ReactNode
}

export const Toggle = React.forwardRef<React.ElementRef<typeof ToggleFrame>, ToggleProps>(
  (props, ref) => {
    const { pressed: pressedProp, onPressedChange, onPress, leftIcon, rightIcon, defaultPressed = false, ...rest } = props
    const [isPressed, setIsPressed] = React.useState(defaultPressed)

    // Handle both controlled and uncontrolled states
    const pressed = pressedProp !== undefined ? pressedProp : isPressed

    return (
      <ToggleFrame
        ref={ref}
        aria-pressed={pressed}
        pressed={pressed}
        onPress={(e) => {
          onPress?.(e)
          const next = !pressed
          if (pressedProp === undefined) {
            setIsPressed(next)
          }
          onPressedChange?.(next)
        }}
        icon={leftIcon}
        iconAfter={rightIcon}
        {...rest}
      />
    )
  },
)
Toggle.displayName = 'Toggle'

