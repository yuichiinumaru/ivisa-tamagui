import { render } from '../../../vitest.setup';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('should render correctly and match snapshot', () => {
    const { asFragment } = render(
      <Button>Click me</Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
