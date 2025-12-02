import '@testing-library/jest-dom';
import React from 'react';
import { render as baseRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { AppProviders } from './src/providers/AppProviders';

vi.mock('react-native', () => ({
  StyleSheet: {
    create: (style) => style,
  },
}));

export function render(ui, options = {}) {
  const { theme = 'dark', ...renderOptions } = options;
  return {
    user: userEvent.setup(),
    ...baseRender(ui, {
      wrapper: ({ children }) => (
        <AppProviders theme={theme}>{children}</AppProviders>
      ),
      ...renderOptions,
    }),
  };
}

export * from '@testing-library/react';
