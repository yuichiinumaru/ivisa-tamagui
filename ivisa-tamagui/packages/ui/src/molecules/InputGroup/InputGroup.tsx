import React from 'react';
import { styled, XStack, YStack, Spinner, GetProps } from 'tamagui';

const InputGroupFrame = styled(XStack, {
  name: 'InputGroup',
  alignItems: 'center',
  borderWidth: 1,
  borderRadius: '$2',
  borderColor: '$borderColor',
  paddingHorizontal: '$1',
  backgroundColor: '$background',
  gap: '$2',
  variants: {
    hasError: { true: { borderColor: '$red10' } },
    disabled: { true: { opacity: 0.5, pointerEvents: 'none' } },
  } as const,
});

export type InputGroupProps = GetProps<typeof InputGroupFrame> & {
  isLoading?: boolean;
};

export const InputGroup = ({
  children,
  isLoading,
  hasError,
  disabled,
  ...props
}: InputGroupProps) => {
  return (
    <InputGroupFrame hasError={hasError} disabled={disabled || isLoading} {...props}>
      {children}
      {isLoading && (
        <YStack paddingHorizontal="$2">
          <Spinner size="small" />
        </YStack>
      )}
    </InputGroupFrame>
  );
};