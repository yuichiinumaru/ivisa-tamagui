import React from 'react';
import { styled, XStack, GetProps, Text, Stack, TamaguiElement } from 'tamagui';

const AvatarGroupFrame = styled(XStack, {
  name: 'AvatarGroup',
  alignItems: 'center',  
  flexDirection: 'row', 
});

const MoreIndicator = styled(Stack, {
  name: 'MoreIndicator',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$backgroundHover',
  borderWidth: 2,
  borderColor: '$borderColor',
  borderRadius: '$round',
  width: 40,
  height: 40,
  marginLeft: -12,
});

export type AvatarGroupProps = GetProps<typeof AvatarGroupFrame> & {
  max?: number;
  children: React.ReactNode;
};

export const AvatarGroup = ({ max = 3, children, ...props }: AvatarGroupProps) => {
  const avatars = React.Children.toArray(children);
  const visibleAvatars = avatars.slice(0, max);
  const hiddenCount = avatars.length - max;

  return (
    <AvatarGroupFrame {...props}>
      {visibleAvatars.map((child, idx) => (
        <Stack 
          key={idx} 
          zIndex={max - idx} 
          marginLeft={idx === 0 ? 0 : -12}
        >
          {child}
        </Stack>
      ))}
      
      {hiddenCount > 0 && (
        <MoreIndicator zIndex={0}>
          <Text fontSize="$1" fontWeight="bold">+{hiddenCount}</Text>
        </MoreIndicator>
      )}
    </AvatarGroupFrame>
  );
};