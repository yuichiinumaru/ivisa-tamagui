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

  // 💀 Resurrection: Fixed scope error. Passed options to mockComponent factory.
  const mockComponent = (tag, componentOptions = {}) => {
    const Comp = react.forwardRef(({ children, ...props }, ref) => {
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

      // Add role="button" if it's a Button, or if role is specified in options
      if (props.role) {
        validProps.role = props.role
      } else if (componentOptions?.role) {
        validProps.role = componentOptions.role
      } else if (tag === 'button' || (componentOptions?.name === 'Button')) {
        validProps.role = 'button'
      }

      return React.createElement(tag, { ...validProps, ref }, children)
    })
    // @ts-expect-error - Adding custom property to React component for mock identification
    Comp.__tag = tag
    // @ts-expect-error - Adding custom property
    Comp.__role = componentOptions?.role
    return Comp
  }

  return {
    ...tamagui,
    styled: (Component, options) => {
      // Determine tag from component if possible to preserve semantic HTML
      let tag = options?.tag
      if (!tag) {
        if (typeof Component === 'string') {
          tag = Component
        } else if (Component?.__tag) {
          tag = Component.__tag
        } else {
          tag = 'div'
        }
      }

      // Determine role inheritance
      let role = options?.role
      if (!role && Component?.__role) {
        role = Component.__role
      }

      // Pass options to the mock factory
      const Comp = mockComponent(tag, { ...options, role })
      if (options?.name) {
        Comp.displayName = options.name
      }
      return Comp
    },
    Stack: mockComponent('div'),
    XStack: mockComponent('div'),
    XGroup: Object.assign(mockComponent('div'), {
      Item: mockComponent('div'),
    }),
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
    Input: mockComponent('input'),
    TextArea: mockComponent('textarea'),
    Button: mockComponent('button', { name: 'Button' }),
    Checkbox: Object.assign(mockComponent('button', { role: 'checkbox' }), {
      Indicator: mockComponent('div'),
    }),
    Switch: Object.assign(mockComponent('button', { role: 'switch' }), {
      Thumb: mockComponent('div'),
    }),
    RadioGroup: Object.assign(mockComponent('div'), {
      Item: mockComponent('button', { role: 'radio' }),
      Indicator: mockComponent('div'),
    }),
    Slider: Object.assign(mockComponent('div', { role: 'slider' }), {
      Track: mockComponent('div'),
      Range: mockComponent('div'),
      Thumb: mockComponent('div'),
    }),
    Progress: Object.assign(mockComponent('progress', { role: 'progressbar' }), {
      Indicator: mockComponent('div'),
    }),
    Accordion: Object.assign(mockComponent('div'), {
      Item: mockComponent('div'),
      Header: mockComponent('div', { role: 'heading' }),
      Trigger: mockComponent('button'),
      Content: mockComponent('div'),
      HeightAnimator: mockComponent('div'),
    }),
    Label: mockComponent('label'),
    Avatar: Object.assign(mockComponent('div'), {
      Image: mockComponent('img'),
      Fallback: mockComponent('div'),
    }),
    Group: Object.assign(mockComponent('div'), {
      Item: mockComponent('div'),
    }),
    H1: mockComponent('h1'),
    H2: mockComponent('h2'),
    H3: mockComponent('h3'),
    H4: mockComponent('h4'),
    H5: mockComponent('h5'),
    H6: mockComponent('h6'),
    Paragraph: mockComponent('p'),
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
