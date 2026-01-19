// @jest-environment jsdom
import React from 'react';
import { render } from '@testing-library/react';
import { Navbar } from './Navbar';

jest.mock('tamagui', () => {
  const React = require('react');
  return {
    styled: (Comp, opts) => {
      const StyledComp = (props) => React.createElement(Comp, props);
      StyledComp.styleable = (fn) => fn;
      return StyledComp;
    },
    Text: (props) => React.createElement('div', props),
    YStack: (props) => React.createElement('div', props),
    XStack: (props) => React.createElement('div', props),
    Theme: ({ children }) => children,
    TamaguiProvider: ({ children }) => children,
  };
});

jest.mock('../../atoms/Logo/Logo', () => ({ Logo: (props) => React.createElement('div', { 'data-testid': 'logo' }, 'LOGO') }));
jest.mock('../../atoms/Avatar', () => ({ Avatar: (props) => React.createElement('div', { 'data-testid': 'avatar' }, 'AVATAR') }));
jest.mock('../../atoms/Button', () => ({ Button: (props) => React.createElement('button', props, props.children) }));

describe('Navbar', () => {
  it('renders logo, center and user', () => {
    const { getByTestId, getByText } = render(
      <Navbar
        logo={<div data-testid="logo">LOGO</div>}
        center={<div>Central</div>}
        user={{ name: 'Júlia', role: 'Admin', avatarUrl: '' }}
      />
    );

    expect(getByTestId('logo')).toBeTruthy();
    expect(getByText('Central')).toBeTruthy();
    expect(getByText('Júlia')).toBeTruthy();
    expect(getByText('Admin')).toBeTruthy();
  });
});

