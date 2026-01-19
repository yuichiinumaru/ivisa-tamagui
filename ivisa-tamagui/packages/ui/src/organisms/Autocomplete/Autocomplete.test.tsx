import { render, screen } from '../../test-utils';
import React from 'react';
import { Autocomplete, AutocompleteOption } from './Autocomplete';
import userEvent from '@testing-library/user-event';

const options: AutocompleteOption[] = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
];

describe.skip('Autocomplete', () => {
  it('renders with placeholder', () => {
    render(<Autocomplete options={options} placeholder="Select a framework" />);
    expect(screen.getByText('Select a framework')).toBeInTheDocument();
  });

  it('opens the popover on click', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} />);
    const trigger = screen.getByRole('combobox');
    await user.click(trigger);
    expect(await screen.findByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('filters options based on search input', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} />);
    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    const searchInput = await screen.findByPlaceholderText('Search...');
    await user.type(searchInput, 'React');

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.queryByText('Vue')).not.toBeInTheDocument();
  });

  it('calls onValueChange with the selected option', async () => {
    const user = userEvent.setup();
    const onValueChange = jest.fn();
    render(<Autocomplete options={options} onValueChange={onValueChange} />);
    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    await user.click(await screen.findByText('Vue'));
    expect(onValueChange).toHaveBeenCalledWith({ label: 'Vue', value: 'vue' });
  });

  it('displays the selected value', () => {
    const selectedOption = { label: 'Svelte', value: 'svelte' };
    render(<Autocomplete options={options} value={selectedOption} />);
    expect(screen.getByText('Svelte')).toBeInTheDocument();
  });
});

