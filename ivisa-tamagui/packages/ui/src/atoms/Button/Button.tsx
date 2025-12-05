import React from 'react'
import { Button as TamaguiButton, styled, GetProps, TamaguiElement } from 'tamagui'

// 💀 The Rite of Resurrection: Strict Typing & Token Usage
const StyledButton = styled(TamaguiButton, {
  name: 'Button',
  variants: {
    variant: {
      default: {
        backgroundColor: '$primary',
        color: '$primaryForeground', // Fixed: $background -> $primaryForeground for better contrast
        hoverStyle: {
          backgroundColor: '$primaryHover',
        }
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$secondaryForeground', // Fixed: $background -> $secondaryForeground
        hoverStyle: {
          backgroundColor: '$secondaryHover',
        }
      },
      destructive: {
        backgroundColor: '$destructive',
        color: '$destructiveForeground', // Fixed
        hoverStyle: {
          opacity: 0.9,
        }
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '$borderColor',
        color: '$foreground',
        hoverStyle: {
          backgroundColor: '$muted',
        }
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$foreground',
        hoverStyle: {
          backgroundColor: '$muted',
        }
      }
    },
    size: {
      sm: {
        height: '$8', // Adjusted from $5 (too small) to standard
        px: '$3',
        fontSize: '$2'
      },
      default: {
        height: '$10',
        px: '$4',
        fontSize: '$3'
      },
      lg: {
        height: '$12',
        px: '$6',
        fontSize: '$4'
      }
    }
  } as const,
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

type StyledButtonProps = GetProps<typeof StyledButton>

export interface ButtonProps extends Omit<StyledButtonProps, 'variant' | 'size'> {
  variant?: StyledButtonProps['variant']
  size?: StyledButtonProps['size']
  children?: React.ReactNode
}

const Button = React.forwardRef<TamaguiElement, ButtonProps>(
  ({ variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        // 💀 Security: Explicitly disable submit default unless requested
        // This prevents accidental form submissions when using buttons for UI
        type={props.type || 'button'}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
