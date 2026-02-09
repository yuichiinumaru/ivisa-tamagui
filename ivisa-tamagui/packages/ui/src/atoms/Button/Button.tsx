import React from 'react'
import { GestureResponderEvent } from 'react-native'
import { styled, TamaguiElement, View, Text, XStack, GetProps, FontSizeTokens,} from 'tamagui'
import { Spinner } from '../Spinner'

// 1. STYLED COMPONENT
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
      true: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        height: 'auto',
        paddingHorizontal: 0,
        pressStyle: { opacity: 0.7 }
      }
    },
    loading: {
      true: { opacity: 0.7 }
    }
  },
  
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

// 2. TYPES
export interface ButtonProps extends GetProps<typeof StyledButtonFrame> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onPress?: (event: GestureResponderEvent) => void
}

// 3. MAIN COMPONENT
export const Button = StyledButtonFrame.styleable<ButtonProps>((props, ref) => {
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
  
  const fontSize: FontSizeTokens = size === 'sm' ? '$3' : '$4'
  const isInteractionDisabled = disabled || loading

  return (
    <StyledButtonFrame
      ref={ref}
      variant={variant}
      size={size}
      loading={loading}
      disabled={isInteractionDisabled}
      {...rest}
    >
      <XStack 
        alignItems="center" 
        justifyContent="center" 
        gap="$2" 
        opacity={loading ? 0 : 1}
      >
        {leftIcon && <View>{leftIcon}</View>}

        {typeof children === 'string' || typeof children === 'number' ? (
          <Text
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