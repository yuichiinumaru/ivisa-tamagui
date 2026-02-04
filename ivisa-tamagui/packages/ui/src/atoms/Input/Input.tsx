import { Eye, EyeOff } from '@tamagui/lucide-icons';
import React, { useContext, useState } from 'react';
import { 
  Input as TamaguiInput, 
  styled, 
  GetProps, 
  XStack,
  YStack,
  View, 
  TamaguiElement, 
  Text,
  Spinner,
  TextInput
} from 'tamagui';
import { Button } from '../Button';

// --- Contexto ---
type InputContextValue = {
  size: 'sm' | 'default' | 'lg';
  loading?: boolean;
}
const InputContext = React.createContext<InputContextValue | null>(null);

// --- Variantes de Estilo ---
const inputVariants = {
  variant: {
    default: {
      borderWidth: 1,
      borderColor: '$borderColor',
      backgroundColor: '$background',
      focusStyle: { borderColor: '$ring', outlineColor: '$ring', outlineWidth: 2, outlineStyle: 'solid' },
    },
    filled: {
      borderWidth: 0,
      backgroundColor: '$muted',
      focusStyle: { backgroundColor: '$background', borderColor: '$ring', borderWidth: 1 },
    },
  },
  size: {
    sm: { height: '$8', px: '$2' },
    default: { height: '$10', px: '$3' },
    lg: { height: '$12', px: '$4' },
  },
} as const;

// --- Styled Components ---

const InputFrame = styled(XStack, {
  name: 'InputFrame',
  alignItems: 'center',
  borderRadius: '$md',
  overflow: 'hidden',
  variants: {
    ...inputVariants,
    state: {
      error: { borderColor: '$red10', borderWidth: 2 },
      success: { borderColor: '$green10', borderWidth: 2 },
    },
    loading: {
      true: { opacity: 0.7, pointerEvents: 'none' }
    }
  } as const,
  defaultVariants: { variant: 'default', size: 'default' },
});

const UnframedInput = styled(TamaguiInput, {
  name: 'InputField',
  flex: 1,
  backgroundColor: 'transparent',
  borderWidth: 0,
  outlineWidth: 0,
  color: '$foreground',
  height: '100%',
  focusStyle: { borderWidth: 0, outlineWidth: 0 },
});

// --- Sub-componentes ---

const InputField = React.forwardRef<TextInput, GetProps<typeof UnframedInput>>((props, ref) => {
  const context = useContext(InputContext);
  const size = props.size || context?.size || 'default';
  return <UnframedInput ref={ref} size={size as any} {...props} />;
});

const InputIcon = styled(View, {
  name: 'InputIcon',
  justifyContent: 'center',
  alignItems: 'center',
  px: '$2',
});

const InputHint = styled(Text, {
  name: 'InputHint',
  fontSize: '$2',
  color: '$mutedForeground',
  marginTop: '$2',
});

// --- Componente Principal ---

export type InputProps = GetProps<typeof InputFrame> & {
  loading?: boolean;
  type?: 'text' | 'password';
  children?: React.ReactNode;
}

const InputMain = React.forwardRef<TamaguiElement, InputProps>(
  ({ children, loading, type, variant, size = 'default', state, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const isPassword = type === 'password';

    return (
      <InputContext.Provider value={{ size, loading }}>
        <YStack width="100%">
          <InputFrame 
            ref={ref} 
            variant={variant} 
            size={size} 
            loading={loading} 
            state={state}
          >
            {children ? (
              children
            ) : (
              <>
                <InputField 
                  {...props} 
                  secureTextEntry={isPassword && !isPasswordVisible}
                />
                {isPassword && (
                  <InputIcon>
                    <Button
                      chromeless
                      size="sm"
                      icon={isPasswordVisible ? EyeOff : Eye}
                      onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    />
                  </InputIcon>
                )}
              </>
            )}
            {loading && <InputIcon><Spinner /></InputIcon>}
          </InputFrame>
        </YStack>
      </InputContext.Provider>
    );
  }
);

export const Input = Object.assign(InputMain, {
  Frame: InputFrame,
  Field: InputField,
  Icon: InputIcon,
  Hint: InputHint,
  Button: Button,
});