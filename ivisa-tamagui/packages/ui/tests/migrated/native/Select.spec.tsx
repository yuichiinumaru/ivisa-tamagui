
import React from 'react';

import { render } from '../utils/render-native';
import { Select } from '../../../src/molecules/Select/Select';

describe('Select', () => {
  const items = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ];

  it('renders correctly with a placeholder', () => {
    const { getByText } = render(<Select items={items} placeholder="Select an option" />);

    expect(getByText('Select an option')).toBeTruthy();
  });
});
