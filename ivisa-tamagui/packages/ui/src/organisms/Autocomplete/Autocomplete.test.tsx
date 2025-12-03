import React from 'react';
import { render, fireEvent, screen } from '../../../vitest.setup';
import { Autocomplete, AutocompleteOption } from './Autocomplete';

const options: AutocompleteOption[] = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
];

describe('Autocomplete', () => {
  it('renders with placeholder', () => {
    render(<Autocomplete options={options} placeholder="Select a framework" />);
    expect(screen.getByText('Select a framework')).toBeDefined();
  });

  it('opens the popover on click', () => {
    render(<Autocomplete options={options} />);
    const trigger = screen.getByRole('combobox');
    fireEvent.press(trigger);
    expect(screen.getByPlaceholderText('Search...')).toBeDefined();
  });

  it('filters options based on search input', () => {
    render(<Autocomplete options={options} />);
    const trigger = screen.getByRole('combobox');
    fireEvent.press(trigger);

    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.changeText(searchInput, 'React');

    expect(screen.getByText('React')).toBeDefined();
    expect(screen.queryByText('Vue')).toBeNull();
    expect(screen.queryByText('Svelte')).toBeNull();
  });

  it('calls onValueChange with the selected option', () => {
    const onValueChange = vi.fn();
    render(<Autocomplete options={options} onValueChange={onValueChange} />);
    const trigger = screen.getByRole('combobox');
    fireEvent.press(trigger);

    const option = screen.getByText('Vue');
    fireEvent.press(option);

    expect(onValueChange).toHaveBeenCalledWith({ label: 'Vue', value: 'vue' });
  });

  it('displays the selected value', () => {
    const selectedOption = { label: 'Svelte', value: 'svelte' };
    render(<Autocomplete options={options} value={selectedOption} />);
    expect(screen.getByText('Svelte')).toBeDefined();
  });

  it('shows empty message when no options match', () => {
    render(<Autocomplete options={options} emptyMessage="No frameworks found" />);
    const trigger = screen.getByRole('combobox');
    fireEvent.press(trigger);

    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.changeText(searchInput, 'Angular');

    expect(screen.getByText('No frameworks found')).toBeDefined();
  });
});
