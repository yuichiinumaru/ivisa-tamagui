import React from 'react'
import { styled, Text, GetProps, TamaguiElement, Slot, XStack } from 'tamagui'

const StyledKbd = styled(XStack, {
  name: 'Kbd',
  tag: 'kbd',
  fontFamily: '$body',
  backgroundColor: '$background',
  color: '$color',
  borderRadius: '$2',
  borderWidth: 1,
  borderColor: '$borderColor',
  justifyContent: 'center',
  alignItems: 'center',

  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },

  pressStyle: {
    backgroundColor: '$backgroundPress',
  },

  variants: {
    variant: {
      default: {
        backgroundColor: '$background',
        color: '$color',
        borderColor: '$borderColor',
      },
      subtle: {
        backgroundColor: '$backgroundFocus',
        color: '$color',
        borderColor: '$backgroundFocus',
      },
    },
    size: {
      sm: {
        paddingHorizontal: 4,
        paddingVertical: 1,
        minWidth: 16,
        // Text styles moved here for asChild support
      },
      default: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        minWidth: 20,
        // Text styles moved here for asChild support
      },
      lg: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        minWidth: 24,
        // Text styles moved here for asChild support
      },
    },
  } as const,

  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
})

// Inner Text style to handle font sizes from main
const KbdText = styled(Text, {
  fontFamily: '$body',
  color: '$color',
  variants: {
    size: {
      sm: { fontSize: 10, fontWeight: '400' },
      default: { fontSize: 12, fontWeight: '500' },
      lg: { fontSize: 14, fontWeight: '600' },
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

type StyledKbdProps = GetProps<typeof StyledKbd>

export interface KbdProps extends Omit<StyledKbdProps, 'size' | 'variant'> {
  /**
   * The size of the component.
   * @default 'default'
   */
  size?: StyledKbdProps['size']
  /**
   * The visual style of the component.
   * @default 'default'
   */
  variant?: StyledKbdProps['variant']
  /**
   * The content to be displayed inside the component.
   */
  children?: React.ReactNode
  /**
   * Renders the component as a child of the parent component.
   * @default false
   */
  asChild?: boolean
  /**
   * An optional icon to display before the text.
   */
  iconBefore?: React.ReactNode
  /**
   * An optional icon to display after the text.
   */
  iconAfter?: React.ReactNode
}

/**
 * A component to display keyboard shortcuts.
 */
const Kbd = React.forwardRef<TamaguiElement, KbdProps>(
  (
    {
      size = 'default',
      variant = 'default',
      asChild = false,
      iconBefore,
      iconAfter,
      children,
      ...props
    },
    ref,
  ) => {
    // If asChild is true, we must assume the children is the single root element provided by the user.
    // We cannot wrap it in KbdText or add siblings like iconBefore/iconAfter because Slot (used by asChild)
    // expects a single child.
    if (asChild) {
      return (
        <StyledKbd ref={ref} size={size} variant={variant} {...props} asChild>
          {children}
        </StyledKbd>
      )
    }

    return (
      <StyledKbd ref={ref} size={size} variant={variant} {...props} tag="kbd">
        {iconBefore}
        <KbdText size={size}>{children}</KbdText>
        {iconAfter}
      </StyledKbd>
    )
  },
)

Kbd.displayName = 'Kbd'

export { Kbd }
export default Kbd

