import React from 'react';
import { Input as TamaguiInput, InputProps as TamaguiInputProps, styled, GetProps } from 'tamagui';

import { withErrorLogging } from '../../utils/withErrorLogging';

const StyledInput = styled(TamaguiInput, {
  name: 'Input',
  variants: {
    variant: {
      default: {
        borderWidth: 1,
        borderColor: '$borderColor',
        backgroundColor: '$background',
        color: '$foreground',
        placeholderTextColor: '$color.gray10',
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
        placeholderTextColor: '$color.gray10',
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
  } as const,
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

type StyledInputProps = GetProps<typeof StyledInput>

export interface InputProps extends Omit<StyledInputProps, 'variant' | 'size'> {
  variant?: StyledInputProps['variant']
  size?: StyledInputProps['size']
}

const InputImpl = React.forwardRef<React.ElementRef<typeof TamaguiInput>, InputProps>(
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

InputImpl.displayName = 'Input'

export const Input = withErrorLogging<InputProps, React.ElementRef<typeof TamaguiInput>>('Input', InputImpl)
