import '@testing-library/jest-dom';
import { render as baseRender } from '@testing-library/react';
import { TamaguiProvider } from 'tamagui';
import config from './src/tamagui.config';
import { vi } from 'vitest';

vi.mock('react-native', () => ({
  StyleSheet: {
    create: (style) => style,
  },
}));

export function render(ui) {
  return baseRender(ui, {
    wrapper: ({ children }) => (
      <TamaguiProvider config={config}>{children}</TamaguiProvider>
    ),
  });
}

export * from '@testing-library/react';
