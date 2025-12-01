import { render } from '../../../vitest.setup';
import { describe, it, expect } from 'vitest';
import { Stepper } from './Stepper';
import { Text } from 'tamagui';

describe('Stepper', () => {
  it('renders', () => {
    const { getByText } = render(
      <Stepper height={100} width={100}>
        <Stepper.Page><Text>Page 1</Text></Stepper.Page>
      </Stepper>
    );
    expect(getByText('Page 1')).toBeDefined();
  });
});
