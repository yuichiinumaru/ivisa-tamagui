import { cloneElement, forwardRef } from 'react';
import { GetProps, styled, Text, View } from 'tamagui';
import { Slot } from '@tamagui/core';

const badgeVariants = {
  variant: {
    default: {
      backgroundColor: '$primary',
      borderColor: 'transparent',
      color: '$primaryForeground',
    },
    secondary: {
      backgroundColor: '$secondary',
      borderColor: 'transparent',
      color: '$secondaryForeground',
    },
    destructive: {
      backgroundColor: '$destructive',
      borderColor: 'transparent',
      color: '$destructiveForeground',
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: '$borderColor',
      color: '$foreground',
    },
  },
} as const;

const BadgeFrame = styled(View, {
  name: 'Badge',
  tag: 'div',
  borderRadius: '$full',
  borderWidth: 1,
  paddingHorizontal: '$2.5',
  paddingVertical: '$0.5',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$1.5',

  // Interactive states
  hoverStyle: {
    opacity: 0.8,
  },
  focusStyle: {
    outlineColor: '$focusRingColor',
    outlineWidth: 2,
    outlineStyle: 'solid',
  },
  pressStyle: {
    opacity: 0.9,
  },

  variants: {
    variant: {
      ...Object.fromEntries(
        Object.entries(badgeVariants.variant).map(([key, value]) => [
          key,
          {
            backgroundColor: value.backgroundColor,
            borderColor: value.borderColor,
          },
        ])
      ),
    },
  } as const,

  defaultVariants: {
    variant: 'default',
  },
});

const BadgeText = styled(Text, {
  name: 'BadgeText',
  fontSize: '$1',
  fontWeight: '600',
  fontFamily: '$body',
  variants: {
    variant: {
      ...Object.fromEntries(
        Object.entries(badgeVariants.variant).map(([key, value]) => [
          key,
          {
            color: value.color,
          },
        ])
      ),
    },
  } as const,

  defaultVariants: {
    variant: 'default',
  },
});

type BadgeProps = GetProps<typeof BadgeFrame> & {
  /**
   * Se a Badge deve ser renderizada como um filho do elemento anterior.
   */
  asChild?: boolean;
  /**
   * O conteúdo a ser exibido dentro da Badge. Pode ser um texto ou um elemento React.
   */
  children?: React.ReactNode;
  /**
   * Ícone a ser exibido à esquerda do texto.
   */
  leftIcon?: React.ReactElement;
  /**
   * Ícone a ser exibido à direita do texto.
   */
  rightIcon?: React.ReactElement;
};

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, asChild, variant = 'default', leftIcon, rightIcon, ...props }, ref) => {
    const Component = asChild ? Slot : BadgeFrame;

    const renderIcon = (icon: React.ReactElement) => {
      if (!icon) return null;
      return cloneElement(icon, {
        size: 12, // Consistent icon size
      });
    };

    return (
      <Component {...props} variant={variant} ref={ref}>
        {renderIcon(leftIcon)}
        {asChild ? (
          children
        ) : typeof children === 'string' ? (
          <BadgeText variant={variant}>{children}</BadgeText>
        ) : (
          children
        )}
        {renderIcon(rightIcon)}
      </Component>
    );
  }
);

Badge.displayName = 'Badge';

export { BadgeText };
