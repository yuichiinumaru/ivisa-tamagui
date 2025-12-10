import React from 'react'
import { styled, Text, GetProps, TamaguiElement } from 'tamagui'

const StyledKbd = styled(Text, {
  name: 'Kbd',
  tag: 'kbd',
  fontFamily: '$body',
  backgroundColor: '$background',
  color: '$color',
  borderRadius: '$2',
  borderWidth: 1,
  borderColor: '$borderColor',
  textAlign: 'center',

  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },

  pressStyle: {
    backgroundColor: '$backgroundPress',
  },

  variants: {
    size: {
      sm: {
        fontSize: 10,
        fontWeight: '400',
        paddingHorizontal: 4,
        paddingVertical: 1,
        minWidth: 16,
      },
      default: {
        fontSize: 12,
        fontWeight: '500',
        paddingHorizontal: 6,
        paddingVertical: 2,
        minWidth: 20,
      },
      lg: {
        fontSize: 14,
        fontWeight: '600',
        paddingHorizontal: 8,
        paddingVertical: 3,
        minWidth: 24,
      },
    },
  } as const,

  defaultVariants: {
    size: 'default',
  },
})

type StyledKbdProps = GetProps<typeof StyledKbd>

export interface KbdProps extends Omit<StyledKbdProps, 'size'> {
  /**
   * The size of the component.
   * @default 'default'
   */
  size?: StyledKbdProps['size']
  /**
   * The content to be displayed inside the component.
   */
  children?: React.ReactNode
}

/**
 * A component to display keyboard shortcuts.
 */
const Kbd = React.forwardRef<TamaguiElement, KbdProps>(({ size = 'default', ...props }, ref) => {
  return <StyledKbd ref={ref} size={size} {...props} />
})

Kbd.displayName = 'Kbd'

export { Kbd }
