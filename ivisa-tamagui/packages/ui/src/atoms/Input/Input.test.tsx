import { render } from '../../test-utils';
import { Input } from './Input';

describe('Input', () => {
  it('renders standard input', () => {
    const { getByRole } = render(<Input placeholder="test" />);
    expect(getByRole('textbox')).toBeDefined();
  });

  it('renders composed input', () => {
    const { getByRole, getByText } = render(
      <Input>
        <Input.Field placeholder="composed" />
        <Input.Button>Submit</Input.Button>
      </Input>
    );
    expect(getByRole('textbox')).toBeDefined();
    expect(getByText('Submit')).toBeDefined();
  });

  it('renders loading state', () => {
    const { getByRole } = render(<Input loading />);
    expect(getByRole('textbox')).toBeDisabled();
  });
});
