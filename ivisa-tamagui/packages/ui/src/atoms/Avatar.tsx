import React from 'react';
import { Avatar as TamaguiAvatar, styled, GetProps, Text } from 'tamagui';

import React, { useState } from 'react';
import { Avatar as TamaguiAvatar, styled, GetProps } from 'tamagui';
import { Text } from 'tamagui';

import { Skeleton } from './Skeleton';

// --- Funções de Utilitário ---

/**
 * Gera uma cor de fundo consistente baseada no hash de uma string.
 * @param {string} str - A string para gerar a cor.
 * @returns {string} Uma cor HSL.
 */
const stringToColor = (str: string): string => {
  if (!str) return '#ccc'; // Cor padrão
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = hash % 360;
  return `hsl(${h}, 70%, 80%)`;
};


// --- Componentes do Avatar ---

/**
 * Componente de Frame do Avatar
 * Estilizado a partir do TamaguiAvatar com propriedades padrão.
 */
const AvatarFrame = styled(TamaguiAvatar, {
  name: 'Avatar',
  size: '$10',
});

const AvatarImage = styled(TamaguiAvatar.Image, {
  name: 'AvatarImage',
  width: '100%',
  height: '100%',
});
  borderWidth: 0,
  overflow: 'hidden',
  jc: 'center',
  ai: 'center',
  position: 'relative',
  variants: {
    shape: {
      circle: {
        circular: true,
      },
      square: {
        borderRadius: 0,
      },
      rounded: {
        borderRadius: '$4',
      },
    },
  },
  defaultVariants: {
    shape: 'circle',
  },
});

export type AvatarImageProps = GetProps<typeof TamaguiAvatar.Image> & {
  /**
   * O texto alternativo para a imagem, usado para acessibilidade.
   * Mapeia para o atributo `alt` na web.
   */
  accessibilityLabel: string;
};

const AvatarImageComponent = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ accessibilityLabel, src, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
      <>
        {isLoading && <Skeleton circular width="100%" height="100%" />}
        <TamaguiAvatar.Image
          ref={ref}
          src={src}
          {...props}
          accessibilityLabel={accessibilityLabel}
          onLoad={() => setIsLoading(false)}
          style={{ display: isLoading ? 'none' : 'flex' }}
        />
      </>
    );
  }
);
AvatarImageComponent.displayName = 'AvatarImage';

const AvatarFallbackView = styled(TamaguiAvatar.Fallback, {
  name: 'AvatarFallback',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  borderWidth: 1,
  borderColor: '$borderColor',
});

const AvatarIndicatorFrame = styled('div', {
  name: 'AvatarIndicator',
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '$4',
  height: '$4',
  borderRadius: '$round',
  backgroundColor: '$green10',
  borderWidth: 2,
  borderColor: '$background',
});

export type AvatarProps = GetProps<typeof AvatarFrame> & {
  /**
   * O texto a ser usado para acessibilidade geral do componente.
   */
  accessibilityLabel?: string;
  src?: string;
  fallback?: React.ReactNode;
};

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, fallback, accessibilityLabel, ...props }, ref) => {
    return (
      <AvatarFrame ref={ref} {...props} aria-label={accessibilityLabel}>
        <AvatarImage src={src} />
        <AvatarFallbackView>
          {typeof fallback === 'string' ? <Text>{fallback}</Text> : fallback}
        </AvatarFallbackView>
const AvatarRoot = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ accessibilityLabel, ...props }, ref) => {
    return (
      <AvatarFrame ref={ref} {...props} aria-label={accessibilityLabel}>
        {props.children}
      </AvatarFrame>
    );
  }
);

Avatar.displayName = 'Avatar';
AvatarRoot.displayName = 'Avatar';

const AvatarFallbackText = ({ children }: { children: React.ReactNode }) => {
  const backgroundColor = stringToColor(typeof children === 'string' ? children : '');

  return (
    <AvatarFallback style={{ backgroundColor }}>
      <Text>{children}</Text>
    </AvatarFallback>
  );
};

export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImageComponent,
  Fallback: AvatarFallbackText,
  Indicator: AvatarIndicatorFrame,
});
