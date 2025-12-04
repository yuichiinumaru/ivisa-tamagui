import React, { useContext } from 'react';
import { Input as TamaguiInput, styled, GetProps, XStack, View, TamaguiElement } from 'tamagui';
import { Button } from '../Button';

// Context to share props like size to subcomponents
const InputContext = React.createContext<{ size?: StyledInputProps['size'] } | null>(null);

const useInputContext = () => {
  const context = useContext(InputContext);
  // Default to undefined size if no context (standalone field usage)
  return context || {};
}

// Common variants
const inputVariants = {
  variant: {
    default: {
      borderWidth: 1,
      borderColor: '$borderColor',
      backgroundColor: '$background',
      focusStyle: {
        borderColor: '$ring',
        // avoiding layout shift by keeping border width same, relying on outline/ring color
        outlineColor: '$ring',
        outlineStyle: 'solid',
        outlineWidth: 2,
      },
      focusWithinStyle: {
        borderColor: '$ring',
        outlineColor: '$ring',
        outlineStyle: 'solid',
        outlineWidth: 2,
      }
    },
    filled: {
      borderWidth: 1,
      borderColor: 'transparent',
      backgroundColor: '$muted',
      focusStyle: {
        borderColor: '$ring',
        borderWidth: 1,
      },
      focusWithinStyle: {
        borderColor: '$ring',
        borderWidth: 1,
      }
    }
  },
  size: {
    sm: {
      height: '$8',
      px: '$3',
    },
    default: {
      height: '$10',
      px: '$3',
    },
    lg: {
      height: '$12',
      px: '$4',
    }
  }
} as const;

// 1. The original Input (for backward compatibility)
const StyledInput = styled(TamaguiInput, {
  name: 'Input',
  color: '$foreground',
  placeholderTextColor: '$color.gray10',
  ...inputVariants,
  variants: {
    ...inputVariants.variant,
    size: {
      sm: { ...inputVariants.size.sm, fontSize: '$2' },
      default: { ...inputVariants.size.default, fontSize: '$3' },
      lg: { ...inputVariants.size.lg, fontSize: '$4' }
    }
  } as const,
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

// 2. The Input Frame
const InputFrame = styled(XStack, {
  name: 'InputFrame',
  alignItems: 'center',
  borderRadius: '$4',
  overflow: 'hidden',
  ...inputVariants,
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

// 3. The Unframed Input (Field)
const UnframedInputStyled = styled(TamaguiInput, {
  name: 'InputField',
  flex: 1,
  backgroundColor: 'transparent',
  borderWidth: 0,
  outlineWidth: 0,
  color: '$foreground',
  placeholderTextColor: '$color.gray10',
  height: '100%',
  paddingHorizontal: 0,
  hoverStyle: {
    borderColor: 'transparent',
    borderWidth: 0,
  },
  focusStyle: {
    borderColor: 'transparent',
    borderWidth: 0,
    outlineWidth: 0,
  },
  variants: {
    size: {
      sm: { fontSize: '$2' },
      default: { fontSize: '$3' },
      lg: { fontSize: '$4' }
    }
  } as const
})

const InputField = React.forwardRef<TamaguiElement, GetProps<typeof UnframedInputStyled>>((props, ref) => {
  const { size } = useInputContext()
  return <UnframedInputStyled ref={ref} size={size} {...props} />
})

// 4. Input Icon
const InputIcon = styled(View, {
  name: 'InputIcon',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  paddingHorizontal: '$2',
})

// 5. Input Button
const InputButton = styled(Button, {
  name: 'InputButton',
  borderRadius: 0,
  height: '100%',
  borderWidth: 0,
})

type StyledInputProps = GetProps<typeof StyledInput>

export interface InputProps extends Omit<StyledInputProps, 'variant' | 'size'> {
  variant?: StyledInputProps['variant']
  size?: StyledInputProps['size']
  children?: React.ReactNode
}

// 💀 Resurrection: Strict typing for Ref (TamaguiElement covers both Input and View)
const InputImpl = React.forwardRef<TamaguiElement, InputProps>(
  ({ variant = 'default', size = 'default', children, ...props }, ref) => {
    if (children) {
      return (
        <InputContext.Provider value={{ size }}>
          <InputFrame ref={ref} variant={variant} size={size}>
            {children}
          </InputFrame>
        </InputContext.Provider>
      )
    }
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

export const Input = Object.assign(InputImpl, {
  Field: InputField,
  Icon: InputIcon,
  Button: InputButton,
})
