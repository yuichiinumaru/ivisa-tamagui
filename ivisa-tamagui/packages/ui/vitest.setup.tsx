import '@testing-library/jest-dom'
import React from 'react'
import { render as baseRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { AppProviders } from './src/providers/AppProviders'

vi.mock('react-native', () => ({
  StyleSheet: {
    create: (style) => style,
  },
}))

vi.mock('tamagui', async (importOriginal) => {
  const tamagui = await importOriginal()
  const react = await import('react')

  const mockComponent = (tag) =>
    react.forwardRef(({ children, ...props }, ref) => {
      // Filter out props that are not valid for the underlying DOM element
      const {
        // Tamagui-specific style props
        animation,
        animateOnly,
        debug,
        gap,
        // etc.
        // Also filter out any props starting with '$'
        ...rest
      } = props

      const validProps = Object.keys(rest).reduce((acc, key) => {
        if (!key.startsWith('$')) {
          acc[key] = rest[key]
        }
        return acc
      }, {})

      return React.createElement(tag, { ...validProps, ref }, children)
    })

  return {
    ...tamagui,
    styled: (Component) => Component,
    Stack: mockComponent('div'),
    XStack: mockComponent('div'),
    Text: mockComponent('span'),
    Image: mockComponent('img'),
    View: mockComponent('div'),
  }
})

vi.mock('@tamagui/lucide-icons', () => ({
  Ban: (props) => <div data-testid={props['data-testid'] || 'ban-icon'} />,
  User: (props) => <div data-testid={props['data-testid'] || 'user-icon'} />,
}))

export function render(ui, options = {}) {
  const { theme = 'dark', ...renderOptions } = options
  return {
    user: userEvent.setup(),
    ...baseRender(ui, {
      wrapper: ({ children }) => (
        <AppProviders theme={theme}>{children}</AppProviders>
      ),
      ...renderOptions,
    }),
  }
}

export * from '@testing-library/react'
