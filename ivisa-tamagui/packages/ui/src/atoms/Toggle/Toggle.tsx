// @ts-nocheck
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
    const { pressed, onPressedChange, onPress, leftIcon, rightIcon, ...rest } = props

    return (
      <ToggleFrame
        ref={ref}
        aria-pressed={pressed}
        pressed={pressed}
        onPress={(e) => {
          onPress?.(e)
          onPressedChange?.(!pressed)
        }}
        icon={leftIcon}
        iconAfter={rightIcon}
        {...rest}
      />
    )
  },
)
Toggle.displayName = 'Toggle'
