import React from 'react'
import { render, type RenderOptions } from '@testing-library/react-native'

import { AppProviders, type AppProvidersProps } from '../../src/providers'

type NativeRenderOptions = RenderOptions & {
  theme?: AppProvidersProps['theme']
}

const withProviders = (theme: AppProvidersProps['theme']) =>
  function AllTheProviders({ children }: { children: React.ReactNode }) {
    return <AppProviders theme={theme}>{children}</AppProviders>
  }

export const renderWithTamaguiProviders = (
  ui: React.ReactElement,
  options?: NativeRenderOptions
) => {
  const { theme = 'dark', ...renderOptions } = options ?? {}

  return render(ui, {
    wrapper: withProviders(theme),
    ...renderOptions,
  })
}

export * from '@testing-library/react-native'
export { renderWithTamaguiProviders as render }
