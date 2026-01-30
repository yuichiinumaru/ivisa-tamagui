// @ts-nocheck
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Autocomplete } from './Autocomplete';
import { TamaguiProvider, createTamagui } from 'tamagui';
import { config } from '@tamagui/config/v3';

// Setup basic provider
const tamaguiConfig = createTamagui(config);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <TamaguiProvider config={tamaguiConfig}>
    {children}
  </TamaguiProvider>
);

// Mock Tamagui components to avoid issues in JSDOM
jest.mock('tamagui', () => {
    const Actual = jest.requireActual('tamagui');
    return {
        ...Actual,
        Popover: ({ children, open }: any) => <div data-testid="popover">{open ? children : null}</div>,
        PopoverTrigger: ({ children }: any) => <div data-testid="popover-trigger">{children}</div>,
        PopoverContent: ({ children }: any) => <div data-testid="popover-content">{children}</div>,
        Button: ({ children, onPress, ...props }: any) => (
            <button onClick={onPress} {...props}>
            {children}
            </button>
        ),
        Input: (props: any) => <input {...props} />,
        YStack: ({ children, ...props }: any) => <div {...props}>{children}</div>,
        XStack: ({ children, ...props }: any) => <div {...props}>{children}</div>,
        ScrollView: ({ children }: any) => <div>{children}</div>,
        ListItem: ({ children, onPress, ...props }: any) => (
            <div onClick={onPress} role="option" {...props}>
            {children}
            </div>
        ),
        Text: ({ children }: any) => <span>{children}</span>,
        YGroup: ({ children, ...props }: any) => <div role="listbox" {...props}>{children}</div>,
        'YGroup.Item': ({ children }: any) => <div>{children}</div>,
    };
});

// Mock the atoms/molecules used
jest.mock('../../atoms/Button', () => ({
  Button: ({ children, role, ...props }: any) => <button role={role} {...props}>{children}</button>,
}));
jest.mock('../../atoms/Input', () => ({
  Input: (props: any) => <input {...props} />,
}));
jest.mock('../../molecules/Popover', () => ({
  Popover: ({ children, open }: any) => <div>{open ? children : null}</div>,
  PopoverTrigger: ({ children }: any) => <div onClick={(children as any).props.onPress}>{children}</div>,
  PopoverContent: ({ children }: any) => <div>{children}</div>,
}));

// Mock useId since JSDOM might not support it consistently or simply
// to ensure stable IDs in tests
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useId: () => 'mock-id',
}));

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

describe.skip('Autocomplete', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider>
        <Autocomplete options={options} />
      </ThemeProvider>
    );
    // Since we mock Button, we expect a button element.
    // The role combobox is applied to the Button in the implementation.
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('opens and displays options when clicked', () => {
    render(
      <ThemeProvider>
        <Autocomplete options={options} />
      </ThemeProvider>
    );

    // Simulate opening the popover
    fireEvent.click(screen.getByRole('combobox'));

    // Check if input is present (meaning popover content is rendered)
    expect(screen.getByPlaceholderText('Buscar...')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('filters options', () => {
    render(
      <ThemeProvider>
        <Autocomplete options={options} />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByRole('combobox'));
    const input = screen.getByPlaceholderText('Buscar...');

    fireEvent.change(input, { target: { value: 'Option 1' } });

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.queryByText('Option 2')).not.toBeInTheDocument();
  });
});
