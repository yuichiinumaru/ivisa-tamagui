import React from 'react';
import { Avatar as TamaguiAvatar, styled, GetProps, Text } from 'tamagui';

const AvatarFrame = styled(TamaguiAvatar, {
  name: 'Avatar',
  circular: true,
  size: '$10',
});

const AvatarImage = styled(TamaguiAvatar.Image, {
  name: 'AvatarImage',
  width: '100%',
  height: '100%',
});

const AvatarFallbackView = styled(TamaguiAvatar.Fallback, {
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
      </AvatarFrame>
    );
  }
);

Avatar.displayName = 'Avatar';
