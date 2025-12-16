import React from 'react';
import { styled, YStack, YStackProps } from 'tamagui';
import { Text } from 'tamagui';
import { Avatar } from './Avatar';

// --- Componente AvatarGroup ---

const AvatarGroupFrame = styled(YStack, {
  name: 'AvatarGroup',
  flexDirection: 'row-reverse',
  alignItems: 'center',

  // Adiciona sobreposição negativa para empilhar os avatares
  variants: {
    overlap: {
      true: {
        '& > *': {
          marginLeft: '-$2',
          borderWidth: 2,
          borderColor: '$background',
        },
      },
    },
  },

  defaultVariants: {
    overlap: true,
  },
});

const MoreIndicator = styled(YStack, {
    name: 'MoreIndicator',
    circular: true,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$background',
    borderWidth: 2,
    borderColor: '$borderColor',
    width: 40,
    height: 40,
});


export type AvatarGroupProps = YStackProps & {
  /**
   * O número máximo de avatares a serem exibidos.
   */
  max?: number;
  /**
   * Os componentes Avatar a serem renderizados.
   */
  children: React.ReactNode;
};

/**
 * AvatarGroup empilha e gerencia múltiplos componentes Avatar.
 */
export const AvatarGroup = ({ max = 3, children, ...props }: AvatarGroupProps) => {
  const avatars = React.Children.toArray(children);
  const visibleAvatars = avatars.slice(0, max);
  const hiddenCount = avatars.length - max;

  return (
    <AvatarGroupFrame {...props}>
      {hiddenCount > 0 && (
        <MoreIndicator>
          <Text>+{hiddenCount}</Text>
        </MoreIndicator>
      )}
      {visibleAvatars.reverse()}
    </AvatarGroupFrame>
  );
};
