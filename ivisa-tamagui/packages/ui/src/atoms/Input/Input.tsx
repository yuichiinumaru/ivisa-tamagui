import { Eye, EyeOff } from '@tamagui/lucide-icons';
import React, { useState } from 'react';
import { Input as TamaguiInput, styled, GetProps, XStack, YStack, View, Text, Spinner, createStyledContext,} from 'tamagui';
import { Button } from '../Button';

export const InputContext = createStyledContext({
  size: '$default',
});

const InputFrame = styled(XStack, {
  name: 'InputFrame',
  context: InputContext,
  alignItems: 'center',
  borderRadius: '$md',
  overflow: 'hidden',
  backgroundColor: '$background',
  borderWidth: 1,
  borderColor: '$borderColor',
  
  variants: {
    variant: {
      default: { backgroundColor: '$background' },
      filled: { backgroundColor: '$backgroundStrong', borderWidth: 0 },
    },
    size: {
      sm: { height: '$8', paddingHorizontal: '$2' },
      default: { height: '$10', paddingHorizontal: '$3' },
      lg: { height: '$12', paddingHorizontal: '$4' },
    },    
    state: {
      error: { borderColor: '$destructive', borderWidth: 1 },
      success: { borderColor: '$green10', borderWidth: 1 },
    }
  },
  defaultVariants: { variant: 'default', size: 'default' },
});

const InputField = styled(TamaguiInput, {
  name: 'InputField',
  context: InputContext,
  flex: 1,
  backgroundColor: 'transparent',
  borderWidth: 0,
  color: '$foreground',
  focusStyle: { borderWidth: 0, outlineWidth: 0 },
});

const InputIcon = styled(View, {
  name: 'InputIcon',
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: '$2',
});

const InputHint = styled(Text, {
  name: 'InputHint',
  fontSize: '$2',
  color: '$mutedForeground',
  marginTop: '$2',
});

export interface InputProps extends GetProps<typeof InputFrame> {
  loading?: boolean;
  type?: 'text' | 'password';
  placeholder?: string;
  defaultValue?: string; 
  value?: string;        
  onChangeText?: (text: string) => void; 
}

const InputMain = InputFrame.styleable<InputProps>(
  ({ children, loading, type, variant, size, state, placeholder, defaultValue, value, onChangeText, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
    return (
      <YStack width="100%">
        <InputFrame ref={ref} variant={variant} size={size} state={state} {...props}>
          {children || (
            <InputField 
              placeholder={placeholder}
              defaultValue={defaultValue}
              value={value}
              onChangeText={onChangeText}
              secureTextEntry={type === 'password' && !isPasswordVisible} 
            />
          )}
          
          {type === 'password' && (
            <InputIcon>
              <Button 
                variant="ghost"
                size="sm" 
                circular
                leftIcon={isPasswordVisible ? <EyeOff size={16} /> : <Eye size={16} />} 
                onPress={() => setIsPasswordVisible(!isPasswordVisible)} 
              />
            </InputIcon>
          )}
          
          {loading && <Spinner marginHorizontal="$2" />}
        </InputFrame>
      </YStack>
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