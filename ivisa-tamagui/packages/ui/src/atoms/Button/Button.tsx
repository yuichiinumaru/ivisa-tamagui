import React from 'react'
import { styled, TamaguiElement, View, Text, XStack } from 'tamagui'
import { Spinner } from '../Spinner'

// Base de estilos separada da tipagem para reduzir inferências do Tamagui
const buttonStyles: Record<string, any> = {
  name: 'ButtonFrame',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  position: 'relative',
  variants: {
    variant: {
      default: { backgroundColor: '$primary' },
      secondary: { backgroundColor: '$secondary' },
      destructive: { backgroundColor: '$destructive' },
      outline: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '$borderColor' },
      ghost: { backgroundColor: 'transparent' },
    },
    size: {
      sm: { height: 32, px: '$3' },
      default: { height: 44, px: '$4' },
      lg: { height: 56, px: '$5' },
    },
    circular: { true: { borderRadius: 1000, aspectRatio: 1, px: 0 } },
    chromeless: { true: { backgroundColor: 'transparent', borderWidth: 0, px: 0 } },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
}

const StyledButtonFrame = styled(XStack as any, buttonStyles as any)

const TEXT_COLORS: Record<string, string> = {
  default: '$primaryForeground',
  secondary: '$secondaryForeground',
  destructive: '$destructiveForeground',
  outline: '$foreground',
  ghost: '$foreground',
}

export interface ButtonProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost'
  size?: 'sm' | 'default' | 'lg'
  children?: React.ReactNode
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  loading?: boolean
  circular?: boolean
  chromeless?: boolean
  disabled?: boolean
  onPress?: any
  id?: string
  [key: string]: any
}

const Button = React.forwardRef<TamaguiElement, ButtonProps>((props, ref) => {
  const {
    variant = 'default',
    size = 'default',
    children,
    leftIcon,
    rightIcon,
    loading,
    circular,
    chromeless,
    disabled,
    onPress,
    ...rest
  } = props

  const textColor = TEXT_COLORS[variant] || '$foreground'
  const isDisabled = Boolean(disabled) || Boolean(loading)

  return (
    <StyledButtonFrame
      ref={ref}
      variant={variant}
      size={size}
      circular={circular}
      chromeless={chromeless}
      disabled={isDisabled}
      onPress={onPress}
      opacity={isDisabled ? 0.5 : 1}
      {...(rest as any)}
    >
      <XStack
        ai="center"
        jc="center"
        gap="$2"
        opacity={loading ? 0 : 1}
        {...({} as any)}
      >
        {leftIcon && <View>{leftIcon}</View>}

        {typeof children === 'string' || typeof children === 'number' ? (
          <Text
            {...({} as any)}
            color={textColor as any}
            fontWeight="600"
            fontSize={size === 'sm' ? 14 : 16}
          >
            {String(children)}
          </Text>
        ) : (
          children
        )}

        {rightIcon && <View>{rightIcon}</View>}
      </XStack>

      {loading && (
        <View
          position="absolute"
          {...({ ai: 'center', jc: 'center', top: 0, left: 0, right: 0, bottom: 0 } as any)}
        >
          <Spinner {...({ size: 'small' } as any)} />
        </View>
      )}
    </StyledButtonFrame>
  )
})

Button.displayName = 'Button'

export { Button }

