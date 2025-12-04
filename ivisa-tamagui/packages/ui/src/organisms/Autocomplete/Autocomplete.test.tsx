import { render, screen } from '../../../vitest.setup';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

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
