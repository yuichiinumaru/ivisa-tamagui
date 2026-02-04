import React from 'react'
import { GestureResponderEvent } from 'react-native'
import { styled, TamaguiElement, View, Text, XStack, GetProps, FontSizeTokens } from 'tamagui'
import { Spinner } from '../Spinner'

// 1. STYLED COMPONENT (FRAME)

const StyledButtonFrame = styled(XStack, {
  name: 'Button',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  position: 'relative',
  pressStyle: { opacity: 0.8 },

  variants: {
    variant: {
      default: { backgroundColor: '$primary' },
      secondary: { backgroundColor: '$secondary' },
      destructive: { backgroundColor: '$destructive' },
      outline: { 
        backgroundColor: 'transparent', 
        borderWidth: 1, 
        borderColor: '$borderColor' 
      },
      ghost: { backgroundColor: 'transparent' },
    },
    size: {
      sm: { height: 32, paddingHorizontal: '$3' },
      default: { height: 44, paddingHorizontal: '$4' },
      lg: { height: 56, paddingHorizontal: '$5' },
    },
    circular: { 
      true: { borderRadius: 1000, aspectRatio: 1, paddingHorizontal: 0 } 
    },
    chromeless: { 
      true: { backgroundColor: 'transparent', borderWidth: 0, paddingHorizontal: 0 } 
    },
    disabled: {
      true: { opacity: 0.5, pointerEvents: 'none' }
    }
  },
  
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

// 2. TYPES

export type ButtonProps = GetProps<typeof StyledButtonFrame> & {
  children?: React.ReactNode
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  loading?: boolean
  onPress?: (event: GestureResponderEvent) => void 
}

// Mapeamento de cores de texto tipado com tokens do sistema
const TEXT_COLORS: Record<string, string> = {
  default: '$primaryForeground',
  secondary: '$secondaryForeground',
  destructive: '$destructiveForeground',
  outline: '$foreground',
  ghost: '$foreground',
}

// 3. MAIN COMPONENT
const Button = React.forwardRef<TamaguiElement, ButtonProps>((props, ref) => {
  const {
    variant = 'default',
    size = 'default',
    children,
    leftIcon,
    rightIcon,
    loading,
    disabled,
    ...rest
  } = props
  
  const textColor = TEXT_COLORS[variant] || '$foreground'
  const fontSize: FontSizeTokens = size === 'sm' ? '$3' : '$4'
  const isDisabled = disabled || loading

  return (
    <StyledButtonFrame
      ref={ref}
      variant={variant}
      size={size}
      disabled={isDisabled}
      {...rest}
    >
      {/* Conteúdo do botão - Oculto durante o loading mas mantém o espaço ocupado */}
      <XStack 
        alignItems="center" 
        justifyContent="center" 
        gap="$2" 
        opacity={loading ? 0 : 1}
      >
        {leftIcon && <View>{leftIcon}</View>}

        {typeof children === 'string' || typeof children === 'number' ? (
          <Text
            color={textColor}
            fontWeight="600"
            fontSize={fontSize}
          >
            {children}
          </Text>
        ) : (
          children
        )}

        {rightIcon && <View>{rightIcon}</View>}
      </XStack>

      {/* Spinner centralizado via Absolute Layout */}
      {loading && (
        <View
          position="absolute"
          alignItems="center"
          justifyContent="center"
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          <Spinner size="small" />
        </View>
      )}
    </StyledButtonFrame>
  )
})

Button.displayName = 'Button'

export { Button }