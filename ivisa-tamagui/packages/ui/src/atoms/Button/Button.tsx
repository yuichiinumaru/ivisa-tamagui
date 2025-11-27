import React from 'react'
import { Button as TamaguiButton, ButtonProps as TamaguiButtonProps, styled, GetProps } from 'tamagui'

import { withErrorLogging } from '../../utils/withErrorLogging'

// Button variants using Tamagui's variant system
const StyledButton = styled(TamaguiButton, {
  name: 'Button',
  variants: {
    variant: {
      default: {
        backgroundColor: '$primary',
        color: '$background',
        hoverStyle: {
          backgroundColor: '$primaryHover',
        }
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$background',
        hoverStyle: {
          backgroundColor: '$secondaryHover',
        }
      },
      destructive: {
        backgroundColor: '$destructive',
        color: '$background',
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
        height: '$5',
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

const ButtonImpl = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        {...props}
      />
    )
  }
)

ButtonImpl.displayName = 'Button'

export const Button = withErrorLogging<ButtonProps, HTMLButtonElement>('Button', ButtonImpl)
