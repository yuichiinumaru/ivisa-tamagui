import { render, screen } from '../../test-utils';
import { InputGroup } from './InputGroup';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { Search } from '@tamagui/lucide-icons';
import React from 'react';

describe('InputGroup', () => {
  it('renders input and button together', () => {
    render(
      <InputGroup>
        <Input placeholder="Enter text" />
        <Button>Go</Button>
      </InputGroup>
    );
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    expect(screen.getByText('Go')).toBeInTheDocument();
  });

  it('renders input and icon button together', () => {
    render(
      <InputGroup>
        <Input placeholder="Search..." />
        <Button icon={Search} />
      </InputGroup>
    );
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
