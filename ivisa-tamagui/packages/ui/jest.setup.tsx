import '@testing-library/jest-dom'
import { render as rtlRender } from '@testing-library/react'
import { TamaguiProvider } from 'tamagui'
import config from './src/tamagui.config'
import React from 'react'

// Mock Pointer Capture for Radix UI
if (typeof Element !== 'undefined') {
  Element.prototype.hasPointerCapture = () => false
  Element.prototype.setPointerCapture = () => {}
  Element.prototype.releasePointerCapture = () => {}
}

const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <TamaguiProvider config={config} defaultTheme="light">
    {children}
  </TamaguiProvider>
)

export const render = (ui: React.ReactElement, options?: any) =>
  rtlRender(ui, { wrapper: AppProviders, ...options })

export * from '@testing-library/react'
