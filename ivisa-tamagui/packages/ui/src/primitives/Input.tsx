import React, { ComponentProps, ForwardedRef } from 'react';
import { TextInput } from 'react-native';
import { styled, Input as TamaguiInput, View, XStack, Button } from 'tamagui';

const InputFrame = styled(XStack, {
  name: 'IvisaInputFrame',
  backgroundColor: '$background',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$sm',
  overflow: 'hidden',
  focusStyle: {
    borderColor: '$borderColorFocus',
    borderWidth: 2,
  },
});

const UnframedInput = styled(TamaguiInput, {
  name: 'IvisaUnframedInput',
  backgroundColor: '$colorTransparent',
  borderColor: '$colorTransparent',
  borderWidth: 0,
  flex: 1,
  focusStyle: {
    outlineWidth: 0,
  },
});

const InputButton = styled(Button, {
  borderRadius: 0,
});

const BaseInput = React.forwardRef((props: ComponentProps<typeof TamaguiInput>, ref: ForwardedRef<TextInput>) => {
  const { children, ...rest } = props;

  return children ? (
    <InputFrame>{children}</InputFrame>
  ) : (
    <InputFrame>
      <UnframedInput ref={ref} {...rest} />
    </InputFrame>
  );
});

export const IvisaInput = Object.assign(BaseInput, {
  Field: UnframedInput,
  Button: InputButton,
});
