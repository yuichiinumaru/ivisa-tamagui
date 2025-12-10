import { render, screen } from '../../test-utils';
import { AvatarGroup } from './AvatarGroup';
import { Avatar } from '../../atoms/Avatar';
import React from 'react';

describe('AvatarGroup', () => {
  it('renders children correctly', () => {
    render(
      <AvatarGroup>
        <Avatar fallback="A" />
      </AvatarGroup>
    );
    expect(screen.getByText('A')).toBeInTheDocument();
  });
});
