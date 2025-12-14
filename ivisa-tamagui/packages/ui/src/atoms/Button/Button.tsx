import React from 'react'
import { Button as TamaguiButton, styled, GetProps, TamaguiElement, View } from 'tamagui'
import { Spinner } from '../Spinner'

const StyledButton = styled(TamaguiButton, {
  name: 'Button',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$sm',
  // Force Cera Pro via body token
  fontFamily: '$body',
  variants: {
    variant: {
      default: {
        backgroundColor: '$primary',
        color: '$primaryForeground',
        hoverStyle: {
          backgroundColor: '$primaryHover',
        },
        pressStyle: {
          backgroundColor: '$primary',
          opacity: 0.8,
        },
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$secondaryForeground',
        hoverStyle: {
          backgroundColor: '$secondaryHover',
        },
        pressStyle: {
          backgroundColor: '$secondary',
          opacity: 0.8,
        },
      },
      destructive: {
        backgroundColor: '$destructive',
        color: '$destructiveForeground',
        hoverStyle: {
          opacity: 0.9,
        },
        pressStyle: {
          opacity: 0.8,
        },
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '$borderColor',
        color: '$foreground',
        hoverStyle: {
          backgroundColor: '$muted',
        },
        pressStyle: {
          backgroundColor: '$muted',
          opacity: 0.8,
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$foreground',
        hoverStyle: {
          backgroundColor: '$muted',
        },
        pressStyle: {
          backgroundColor: '$muted',
          opacity: 0.8,
        },
      },
    },
    size: {
      sm: {
        height: '$sm',
        px: '$md',
        // fontSize: '$2', // Removing explicit token to fallback to theme or prevent warning if token missing
      },
      default: {
        height: '$md',
        px: '$lg',
        // fontSize: '$3',
      },
      lg: {
        height: '$lg',
        px: '$xl',
        // fontSize: '$4',
      },
    },
  } as const,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

type StyledButtonProps = GetProps<typeof StyledButton>

export interface ButtonProps extends Omit<StyledButtonProps, 'variant' | 'size'> {
  /**
   * Define o estilo visual do botão.
   * @default 'default'
   */
  variant?: StyledButtonProps['variant']
  /**
   * Define o tamanho do botão.
   * @default 'default'
   */
  size?: StyledButtonProps['size']
  /**
   * O conteúdo a ser exibido dentro do botão.
   */
  children?: React.ReactNode
  /**
   * Um ícone a ser exibido à esquerda do texto do botão.
   */
  leftIcon?: React.ReactNode
  /**
   * Um ícone a ser exibido à direita do texto do botão.
   */
  rightIcon?: React.ReactNode
  /**
   * Se `true`, exibe um spinner de carregamento e desativa o botão.
   * @default false
   */
  loading?: boolean
  /**
   * Se `true`, permite que o botão assuma as propriedades de seu filho direto.
   * @default false
   */
  asChild?: boolean
}

const Button = React.forwardRef<TamaguiElement, ButtonProps>(
  (
    { variant = 'default', size = 'default', children, leftIcon, rightIcon, loading, asChild, ...props },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        disabled={loading || props.disabled}
        {...props}
        asChild={asChild}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', opacity: loading ? 0 : 1, gap: 8 }}>
            {leftIcon}
            {children}
            {rightIcon}
        </View>
        {loading && (
          <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
            <Spinner color="$current" />
          </View>
        )}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'

export { Button }
