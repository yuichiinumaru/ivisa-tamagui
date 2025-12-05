import '@testing-library/jest-dom'
import React from 'react'
import { render as baseRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { AppProviders } from './src/providers/AppProviders'

vi.mock('react-native', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const React = require('react')
  const View = React.forwardRef(({ accessibilityRole, ...props }: any, ref: any) => {
    return React.createElement('div', { ...props, role: accessibilityRole, ref }, props.children)
  })
  const Text = React.forwardRef(({ accessibilityRole, ...props }: any, ref: any) => {
    return React.createElement('span', { ...props, role: accessibilityRole, ref }, props.children)
  })
  const Image = React.forwardRef(({ source, ...props }: any, ref: any) => {
    return React.createElement('img', { ...props, src: source?.uri || props.src, ref, role: 'img' })
  })
  const Switch = React.forwardRef(({ ...props }: any, ref: any) => {
    return React.createElement('input', { type: 'checkbox', role: 'switch', ...props, ref })
  })

  return {
    StyleSheet: {
      create: (style: any) => style,
      flatten: (style: any) => style,
    },
    View,
    Text,
    Image,
    Switch,
    ScrollView: View,
    TouchableOpacity: View,
    Pressable: View,
    Platform: { OS: 'web', select: (obj: any) => obj.web || obj.default },
    Appearance: { getColorScheme: () => 'light', addChangeListener: () => {} },
    AccessibilityInfo: { isScreenReaderEnabled: () => Promise.resolve(false) },
    I18nManager: { isRTL: false },
    InteractionManager: { runAfterInteractions: (fn: any) => { fn(); return { cancel: () => {} } } },
  }
})

vi.mock('tamagui', async (importOriginal) => {
  const tamagui = await importOriginal()
  const react = await import('react')

  // 💀 Resurrection: Fixed scope error. Passed options to mockComponent factory.
  const mockComponent = (tag, componentOptions = {}) =>
    react.forwardRef(({ children, ...props }, ref) => {
      const { asChild, ...rest } = props

      if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, { ...rest, ref })
      }

      // Filter out props that are not valid for the underlying DOM element
      const {
        // Tamagui-specific style props
        animation: _animation,
        animateOnly: _animateOnly,
        debug: _debug,
        gap: _gap,
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
      } else if (componentOptions?.role) {
        validProps.role = componentOptions.role
      } else if (tag === 'button' || (componentOptions?.name === 'Button')) {
        validProps.role = 'button'
      }

      return React.createElement(tag, { ...validProps, ref }, children)
    })

  return {
    ...tamagui,
    styled: (Component, options) => {
      if (options?.name) {
        let tag = options.tag || 'div'
        const extraOptions = { ...options }

        if (options.name === 'AvatarImage') {
          tag = 'img'
        }
        if (options.name === 'Switch') {
          tag = 'button'
          extraOptions.role = 'switch'
        }
        if (options.name === 'Progress') {
          extraOptions.role = 'progressbar'
        }

        // Pass options to the mock factory
        const Comp = mockComponent(tag, extraOptions)
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
    Avatar: Object.assign(mockComponent('div'), {
      Image: mockComponent('img'),
      Fallback: mockComponent('div'),
    }),
    Switch: mockComponent('button', { role: 'switch' }),
    Progress: Object.assign(mockComponent('div', { role: 'progressbar' }), {
      Indicator: mockComponent('div'),
    }),
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
