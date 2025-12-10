import React from 'react';
import { Avatar as TamaguiAvatar, styled, GetProps } from 'tamagui';
import { Text } from 'tamagui';

/**
 * Componente de Frame do Avatar
 * Estilizado a partir do TamaguiAvatar com propriedades padrão.
 */
const AvatarFrame = styled(TamaguiAvatar, {
  name: 'Avatar',
  circular: true,
  size: '$10',
  borderWidth: 0,
  overflow: 'hidden',
  jc: 'center',
  ai: 'center',
});

/**
 * Componente de Imagem do Avatar
 * Exibe a imagem dentro do frame do avatar.
 */
const AvatarImage = styled(TamaguiAvatar.Image, {
  name: 'AvatarImage',
  width: '100%',
  height: '100%',
});

/**
 * Componente de Fallback do Avatar
 * Exibido se a imagem não carregar ou não for fornecida.
 */
const AvatarFallback = styled(TamaguiAvatar.Fallback, {
  name: 'AvatarFallback',
  backgroundColor: '$background',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  borderWidth: 1,
  borderColor: '$borderColor',
});

export type AvatarProps = GetProps<typeof AvatarFrame> & {
  /**
   * O texto a ser usado para acessibilidade.
   */
  accessibilityLabel?: string;
};

// --- Componente Principal ---

/**
 * O componente Avatar exibe uma imagem ou um fallback de texto.
 * É construído de forma a ser totalmente personalizável.
 */
const AvatarRoot = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ accessibilityLabel, ...props }, ref) => {
    return (
      <AvatarFrame
        ref={ref}
        {...props}
        aria-label={accessibilityLabel}
      >
        {props.children}
      </AvatarFrame>
    );
  }
);

AvatarRoot.displayName = 'Avatar';

const AvatarFallbackText = ({ children }: { children: React.ReactNode }) => (
  <AvatarFallback>
    <Text>{children}</Text>
  </AvatarFallback>
);

export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallbackText,
});
