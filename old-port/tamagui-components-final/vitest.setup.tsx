// Mock window.matchMedia
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = () => ({
    matches: false,
    media: '',
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

import '@testing-library/jest-dom/vitest'

export * from '@testing-library/react'
export {
  renderWithTamaguiProviders as render,
} from './tests/utils/render'