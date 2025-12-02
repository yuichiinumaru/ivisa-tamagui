import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../../../vitest.setup';
import { Sidebar } from './Sidebar';
import { vi } from 'vitest';

vi.mock('tamagui', async () => {
  const tamagui = await vi.importActual('tamagui');
  return {
    ...tamagui,
    Text: (props) => <div {...props} />,
    YStack: (props) => <div {...props} />,
    AnimatePresence: ({ children }) => <>{children}</>,
    useMedia: () => ({ sm: false }),
  };
});

vi.mock('../../molecules/Sheet', () => ({
    Sheet: ({ children }) => <>{children}</>,
    SheetTrigger: ({ children }) => <>{children}</>,
    SheetContent: ({ children }) => <>{children}</>,
}));

vi.mock('../../atoms/Button', () => ({
    Button: React.forwardRef(({ icon: Icon, onPress, ...props }, ref) => (
      <button ref={ref} onClick={onPress} {...props}>
        {Icon && <Icon />}
      </button>
    )),
}));

vi.mock('@tamagui/lucide-icons', () => ({
    ChevronLeft: () => 'ChevronLeft',
    ChevronRight: () => 'ChevronRight',
    Menu: () => 'Menu',
}));


describe('Sidebar', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(
      <Sidebar>
        <div>Test Child</div>
      </Sidebar>
    );
    expect(getByText('Test Child')).toBeTruthy();
  });

  it('toggles when in collapsible mode', async () => {
    const { getByText, getByRole, queryByText } = render(
      <Sidebar variant="collapsible">
        <div>Test Child</div>
      </Sidebar>
    );

    const toggleButton = getByRole('button');

    // Initially, the sidebar is not collapsed, so the ChevronLeft icon should be visible.
    expect(getByText('ChevronLeft')).toBeTruthy();
    expect(queryByText('ChevronRight')).toBeFalsy();

    fireEvent.click(toggleButton);

    // After clicking the button, the sidebar should be collapsed, and the ChevronRight icon should be visible.
    expect(getByText('ChevronRight')).toBeTruthy();
    expect(queryByText('ChevronLeft')).toBeFalsy();
  });
});
