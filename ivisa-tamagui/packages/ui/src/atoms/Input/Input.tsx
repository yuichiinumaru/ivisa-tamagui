import { Eye, EyeOff } from '@tamagui/lucide-icons';
import React, { useContext, useState } from 'react';
import { Input as TamaguiInput, styled, GetProps, XStack, View, TamaguiElement, Text } from 'tamagui';
import { Button } from '../Button';
import { Spinner } from '../Spinner';

// --- Types & Context ---

type InputContextValue = {
  size: InputProps['size'];
  loading?: boolean;
}

const InputContext = React.createContext<InputContextValue | null>(null);

const useInputContext = () => {
  return useContext(InputContext);
}

// --- Variants Definition ---

const inputVariants = {
  variant: {
    default: {
      borderWidth: 1,
      borderColor: '$borderColor',
      backgroundColor: '$background',
      focusStyle: {
        borderColor: '$ring',
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
  },
  state: {
    error: {
      borderColor: '$red10',
      borderWidth: 2,
    },
    success: {
      borderColor: '$green10',
      borderWidth: 2,
    }
  }
} as const;

// --- Styled Components ---

const StyledInput = styled(TamaguiInput, {
  name: 'Input',
  color: '$foreground',
  placeholderTextColor: '$mutedForeground',
  fontFamily: '$body',

  variants: {
    variant: inputVariants.variant,
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

const InputFrame = styled(XStack, {
  name: 'InputFrame',
  alignItems: 'center',
  borderRadius: '$md',
  overflow: 'hidden',

  variants: {
    variant: inputVariants.variant,
    size: inputVariants.size,
    state: inputVariants.state,
    loading: {
      true: {
        opacity: 0.7,
        pointerEvents: 'none',
      }
    }
  } as const,

  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

const SimpleInputFrame = styled(XStack, {
  name: 'SimpleInputFrame',
  alignItems: 'center',
  borderRadius: '$md',
  overflow: 'hidden',

  variants: {
    variant: inputVariants.variant,
    size: inputVariants.size,
    state: inputVariants.state,
    loading: {
      true: {
        opacity: 0.7,
        pointerEvents: 'none',
      }
    }
  } as const,

  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

const UnframedInputStyled = styled(TamaguiInput, {
  name: 'InputField',
  flex: 1,
  backgroundColor: 'transparent',
  borderWidth: 0,
  outlineWidth: 0,
  color: '$foreground',
  placeholderTextColor: '$mutedForeground',
  fontFamily: '$body',
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

// --- Components ---

const InputField = React.forwardRef<TamaguiElement, GetProps<typeof UnframedInputStyled>>((props, ref) => {
  const context = useInputContext()
  const size = props.size || context?.size || 'default'
  return <UnframedInputStyledAny ref={ref} size={size} {...props} />
})
InputField.displayName = 'Input.Field'

const InputIcon = styled(View, {
  name: 'InputIcon',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  paddingHorizontal: '$2',
})

const InputButton = styled(Button, {
  name: 'InputButton',
  borderRadius: 0,
  height: '100%',
  borderWidth: 0,
})

const InputHint = styled(Text, {
  name: 'InputHint',
  fontSize: '$2',
  color: '$mutedForeground',
  marginTop: '$2',
})

type StyledInputProps = GetProps<typeof StyledInput>

export interface InputProps extends Omit<StyledInputProps, 'variant' | 'size'> {
  /**
   * The visual style of the input.
   * @default 'default'
   */
  variant?: 'default' | 'filled'
  /**
   * The size of the input.
   * @default 'default'
   */
  size?: 'sm' | 'default' | 'lg'
  /**
 * If true, the input will be in a loading state.
 * @default false
 */
  loading?: boolean
  /**
   * The validation state of the input.
   * @default undefined
   */
  state?: 'error' | 'success'
  /**
   * @deprecated Passing children to Input is deprecated. Use <Input.Box> for composite layouts.
   */
  children?: React.ReactNode
}

/**
 * Input.Box (formerly implicit <Input>)
 * Explicit container for composite inputs.
 */
const InputBox = React.forwardRef<TamaguiElement, InputProps & { children: React.ReactNode }>(
  ({ variant = 'default', size = 'default', loading = false, state, children, ...props }, ref) => {
    return (
      <InputContext.Provider value={{ size, loading }}>
        <InputFrameAny ref={ref} variant={variant} size={size} loading={loading} state={state} {...props}>
          {children}
          {loading && (
            <InputIconAny>
              <Spinner />
            </InputIconAny>
          )}
        </InputFrameAny>
      </InputContext.Provider>
    )
  }
)
InputBox.displayName = 'Input.Box'


const InputMain = React.forwardRef<TamaguiElement, InputProps>(
  ({ variant = 'default', size = 'default', loading = false, state, children, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
// auto-added alias to silence Tamagui prop checks
const InputHintAny: any = InputHint

// auto-added alias to silence Tamagui prop checks
const InputButtonAny: any = InputButton

// auto-added alias to silence Tamagui prop checks
const InputIconAny: any = InputIcon

// auto-added alias to silence Tamagui prop checks
const UnframedInputStyledAny: any = UnframedInputStyled

// auto-added alias to silence Tamagui prop checks
const SimpleInputFrameAny: any = SimpleInputFrame

// auto-added alias to silence Tamagui prop checks
const InputFrameAny: any = InputFrame

// auto-added alias to silence Tamagui prop checks
const StyledInputAny: any = StyledInput

    const isPassword = props.type === 'password';

    // 🛡️ Necromancer Guard: Zero Ambiguity
    if (children) {
      if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
        console.warn("Input: Passing 'children' to <Input /> is deprecated. Use <Input.Box> for composite inputs.")
      }
      // Legacy support (Transition Phase)
      return (
        <InputBox ref={ref} variant={variant} size={size} loading={loading} state={state} {...props}>
          {children}
        </InputBox>
      )
    }

    const { value, defaultValue, ...restProps } = props;

    return (
      <SimpleInputFrameAny
        ref={ref}
        variant={variant}
        size={size}
        loading={loading}
        state={state}
      >
        <StyledInputAny
          flex={1}
          variant={variant}
          size={size}
          disabled={loading}
          value={value}
          defaultValue={value !== undefined ? undefined : defaultValue}
          {...restProps}
          type={isPassword && isPasswordVisible ? 'text' : props.type}
        />
        {loading && (
          <InputIconAny>
            <Spinner />
          </InputIconAny>
        )}
        {isPassword && (
          <InputIconAny>
            <Button
              icon={isPasswordVisible ? EyeOff : Eye}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              chromeless
              size="$2"
              p={0}
              w={30}
              h="100%"
              bg="transparent"
              hoverStyle={{ bg: 'transparent' }}
              pressStyle={{ bg: 'transparent', opacity: 0.5 }}
            />
          </InputIconAny>
        )}
      </SimpleInputFrameAny>
    );
  }
)
InputMain.displayName = 'Input'

// --- Export ---

export const Input = Object.assign(InputMain, {
  Box: InputBox,
  Field: InputField,
  Icon: InputIcon,
  Button: InputButton,
  Hint: InputHint,
})

