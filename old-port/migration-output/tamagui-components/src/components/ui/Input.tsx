import React from 'react'
import { Input as TamaguiInput, InputProps as TamaguiInputProps } from 'tamagui'
import styled from '@tamagui/styled-components'

const StyledInput = styled(TamaguiInput, {
  name: 'Input',
  variants: {
    variant: {
      default: {
        borderWidth: 1,
        borderColor: '$borderColor',
        backgroundColor: '$background',
        color: '$foreground',
        focusStyle: {
          borderColor: '$ring',
          borderWidth: 2,
        }
      },
      filled: {
        borderWidth: 1,
        borderColor: 'transparent',
        backgroundColor: '$muted',
        color: '$foreground',
        focusStyle: {
          borderColor: '$ring',
          borderWidth: 1,
        }
      }
    },
    size: {
      sm: {
        height: '$8',
        px: '$3',
        fontSize: '$2'
      },
      default: {
        height: '$10',
        px: '$3',
        fontSize: '$3'
      },
      lg: {
        height: '$12',
        px: '$4',
        fontSize: '$4'
      }
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

export interface InputProps extends Omit<TamaguiInputProps, 'variant' | 'size'> {
  variant?: 'default' | 'filled'
  size?: 'sm' | 'default' | 'lg'
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <StyledInput
        ref={ref}
        variant={variant}
        size={size}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
