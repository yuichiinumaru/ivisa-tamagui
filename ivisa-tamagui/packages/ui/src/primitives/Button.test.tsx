import { render } from '@testing-library/react';
import { TamaguiProvider } from 'tamagui';
import { describe, it, expect } from 'vitest';
import config from '../tamagui.config';
import { IvisaButton } from './Button';

describe('IvisaButton', () => {
  it('should render correctly and match snapshot', () => {
    const { toJSON } = render(
      <TamaguiProvider config={config}>
        <IvisaButton>Click me</IvisaButton>
      </TamaguiProvider>
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
