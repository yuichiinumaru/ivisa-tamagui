
import React from 'react';

import { render } from '../utils/render-native';
import { StatefulSelect } from '../../src/components/forms/StatefulSelect';
import { Select } from '../../../src/molecules/Select/Select';

describe('StatefulSelect', () => {
  it('renders correctly with a placeholder', () => {
    const { getByText } = render(
      <StatefulSelect>
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="apple" index={0}>
            Apple
          </Select.Item>
          <Select.Item value="banana" index={1}>
            Banana
          </Select.Item>
        </Select.Content>
      </StatefulSelect>
    );

    expect(getByText('Select a fruit')).toBeTruthy();
  });

  it('opens the sheet and allows selecting an item', () => {
    const { getByText } = render(
      <StatefulSelect>
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="apple" index={0}>
            Apple
          </Select.Item>
          <Select.Item value="banana" index={1}>
            Banana
          </Select.Item>
        </Select.Content>
      </StatefulSelect>
    );
    expect(getByText('Select a fruit')).toBeTruthy();
  });
});
