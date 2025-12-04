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
      const { asChild, ...rest } = props

      if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, { ...rest, ref })
      }

      // Filter out props that are not valid for the underlying DOM element
      const {
        // Tamagui-specific style props
        animation,
        animateOnly,
        debug,
        gap,
        // etc.
        // Also filter out any props starting with '$'
        ...otherProps
      } = rest

      const validProps = Object.keys(otherProps).reduce((acc, key) => {
        if (!key.startsWith('$') && key !== 'onPress') {
          acc[key] = otherProps[key]
        }
        return acc
      }, {})

      // Map onPress to onClick
      if (props.onPress) {
        validProps.onClick = props.onPress
      }

      // Add role="button" if it's a Button
      if (props.role) {
        validProps.role = props.role
      } else if (tag === 'button' || (options?.name === 'Button')) {
        validProps.role = 'button'
      }

      return React.createElement(tag, { ...validProps, ref }, children)
    })

  return {
    ...tamagui,
    styled: (Component, options) => {
      if (options?.name) {
        const Comp = mockComponent(options.tag || 'div')
        Comp.displayName = options.name
        return Comp
      }
      return Component
    },
    Stack: mockComponent('div'),
    XStack: mockComponent('div'),
    Text: mockComponent('span'),
    Image: mockComponent('img'),
    View: mockComponent('div'),
    Popover: Object.assign(mockComponent('div'), {
      Trigger: mockComponent('div'),
      Content: mockComponent('div'),
      Anchor: mockComponent('div'),
      Close: mockComponent('div'),
      Arrow: mockComponent('div'),
      Adapt: mockComponent('div'),
    }),
    YGroup: Object.assign(mockComponent('div'), {
      Item: mockComponent('div'),
    }),
    ListItem: mockComponent('div'),
    ScrollView: mockComponent('div'),
    YStack: mockComponent('div'),
  }
})

vi.mock('@tamagui/lucide-icons', () => {
  const MockIcon = (name) => (props) => <div data-testid={props['data-testid'] || `${name}-icon`} />
  return {
    Ban: MockIcon('ban'),
    User: MockIcon('user'),
    ChevronDown: MockIcon('chevron-down'),
    Check: MockIcon('check'),
    X: MockIcon('x'),
    ChevronRight: MockIcon('chevron-right'),
    ChevronLeft: MockIcon('chevron-left'),
    Search: MockIcon('search'),
    Menu: MockIcon('menu'),
    Moon: MockIcon('moon'),
    Sun: MockIcon('sun'),
  }
})

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
