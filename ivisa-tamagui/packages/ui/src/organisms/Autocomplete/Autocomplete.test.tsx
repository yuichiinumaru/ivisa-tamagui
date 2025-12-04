import { render, screen } from '../../../vitest.setup';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

vi.mock('tamagui', async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tamagui = await vi.importActual('tamagui');
  return {
    ...tamagui,
    /* eslint-disable @typescript-eslint/no-explicit-any */
    Text: (props: any) => <span {...props} />,
    YStack: (props: any) => <div {...props} />,
    XStack: (props: any) => <div {...props} />,
    ScrollView: (props: any) => <div {...props} />,
    ListItem: (props: any) => <div {...props} />,
    YGroup: (props: any) => <div {...props} />,
    YGroupItem: (props: any) => <div {...props} />,
    /* eslint-enable @typescript-eslint/no-explicit-any */
    // Add other primitives used in Autocomplete
  };
});

// Also mock lucide icons
vi.mock('@tamagui/lucide-icons', () => ({
    Check: () => <span>Check</span>,
    ChevronDown: () => <span>ChevronDown</span>,
}));

import { Autocomplete, AutocompleteOption } from './Autocomplete';

const options: AutocompleteOption[] = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
];

describe('Autocomplete', () => {
    it('renders', () => {
        render(<Autocomplete options={options} />);
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
});
