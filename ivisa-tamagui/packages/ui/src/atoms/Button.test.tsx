import { render } from '../../vitest.setup';
import { describe, it, expect } from 'vitest';
import { IvisaButton } from './Button';

describe('IvisaButton', () => {
  it('should render correctly and match snapshot', () => {
    const { asFragment } = render(
      <IvisaButton>Click me</IvisaButton>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
