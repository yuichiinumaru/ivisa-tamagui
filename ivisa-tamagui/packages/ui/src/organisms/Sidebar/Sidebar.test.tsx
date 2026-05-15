// @vitest-environment jsdom
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Sidebar } from './Sidebar';

jest.mock('tamagui', () => {
  const React = require('react');
  // Partial mock to avoid circular dep in config
  return {
    // ...jest.requireActual('tamagui'), // Avoid actual import if it triggers config
    styled: (Comp, opts) => {
      const StyledComp = (props) => React.createElement(Comp, props);
      StyledComp.styleable = (fn) => fn;
      return StyledComp;
    },
    Text: (props) => React.createElement('div', props),
    YStack: (props) => React.createElement('div', props),
    AnimatePresence: ({ children }) => React.createElement(React.Fragment, null, children),
    useMedia: () => ({ sm: false }),
    View: (props) => React.createElement('div', props),
    Stack: (props) => React.createElement('div', props),
    Spacer: (props) => React.createElement('div', props),
    Theme: ({ children }) => children,
    TamaguiProvider: ({ children }) => children,
    Separator: (props) => React.createElement('div', props),
    ScrollView: ({ children }) => React.createElement('div', {}, children),
    createTokens: (tokens) => tokens, // Mock createTokens to satisfy other imports
    createTamagui: () => ({}),
    createTheme: (theme) => theme,
    createFont: (font) => font,
  };
});

jest.mock('../../molecules/Sheet', () => {
  const React = require('react');
  const MockComponent = ({ children }) => React.createElement('div', {}, children);
  return {
    Sheet: Object.assign(MockComponent, {
      Frame: MockComponent,
      Overlay: MockComponent,
      Handle: MockComponent,
      Content: MockComponent,
      Header: MockComponent,
      Footer: MockComponent,
      Title: MockComponent,
      Description: MockComponent,
      Close: MockComponent,
      Trigger: MockComponent,
      ScrollView: MockComponent,
      Portal: MockComponent,
    }),
    SheetTrigger: MockComponent,
    SheetContent: MockComponent,
  };
});

jest.mock('../../atoms/Button', () => ({
  Button: React.forwardRef(({ icon: Icon, onPress, children, circular, size, position, top, right, zIndex, chromeless, ...props }, ref) => (
    <button ref={ref} onClick={onPress} {...props}>
      {Icon && <Icon />}
      {children}
    </button>
  )),
}));

jest.mock('@tamagui/lucide-icons', () => ({
  ChevronLeft: () => <span>ChevronLeft</span>,
  ChevronRight: () => <span>ChevronRight</span>,
  Menu: () => <span>Menu</span>,
  MenuSquare: () => <span>MenuSquare</span>,
  AlertCircle: () => <span>AlertCircle</span>,
  Inbox: () => <span>Inbox</span>,
}));


describe('Sidebar', () => {
  it('renders correctly with default props', () => {
    const { getAllByText } = render(
      <Sidebar>
        <div>Test Child</div>
      </Sidebar>
    );
    // Since sidebar renders both mobile and desktop versions (hidden via CSS), we might find multiple children.
    expect(getAllByText('Test Child').length).toBeGreaterThan(0);
  });

  it('toggles when in collapsible mode', async () => {
    const { getAllByText, getAllByRole, queryByText } = render(
      <Sidebar variant="collapsible">
        <div>Test Child</div>
      </Sidebar>
    );

    // Filter to find the toggle button specifically. It should contain ChevronLeft initially.
    const buttons = getAllByRole('button');
    const toggleButton = buttons.find(btn => btn.textContent === 'ChevronLeft');

    if (!toggleButton) throw new Error('Toggle button not found');

    // Initially, the sidebar is not collapsed, so the ChevronLeft icon should be visible.
    expect(toggleButton).toBeTruthy();

    // Check if ChevronRight is NOT present
    const rights = queryByText('ChevronRight');
    expect(rights).toBeFalsy();

    fireEvent.click(toggleButton);

    // After clicking the button, the sidebar should be collapsed, and the ChevronRight icon should be visible.
    const newRights = getAllByText('ChevronRight').filter(el => el.tagName === 'SPAN');
    expect(newRights.length).toBeGreaterThan(0);
  });
});

