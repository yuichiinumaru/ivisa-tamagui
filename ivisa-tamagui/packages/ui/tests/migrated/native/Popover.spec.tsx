
import React from 'react';

import { render } from '../utils/render-native';
import { Popover } from '@/components/overlays/Popover';
import { Button } from 'tamagui';

describe('Popover', () => {
  it('renders correctly with a trigger and content', () => {
    const { getByText } = render(
      <Popover trigger={<Button>Open</Button>}>
        Popover Content
      </Popover>
    );

    expect(getByText('Open')).toBeTruthy();
  });
});
