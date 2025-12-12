import '@testing-library/jest-dom'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { TamaguiProvider } from 'tamagui'
import config from './src/tamagui.config'
import React from 'react'

// Mock Pointer Capture and other DOM APIs for Radix UI
if (typeof Element !== 'undefined') {
  Element.prototype.hasPointerCapture = () => false
  Element.prototype.setPointerCapture = () => {}
  Element.prototype.releasePointerCapture = () => {}
  Element.prototype.scrollIntoView = () => {}
}

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <TamaguiProvider config={config} defaultTheme="light">
    {children}
  </TamaguiProvider>
)

export const render = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  rtlRender(ui, { wrapper: AppProviders, ...options })

export * from '@testing-library/react'
