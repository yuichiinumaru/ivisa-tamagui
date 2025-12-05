import { render } from '../../test-utils';
import { Input } from './Input';

describe('Input', () => {
  it('renders standard input', () => {
    const { getByPlaceholderText } = render(<Input placeholder="test" />);
    expect(getByPlaceholderText('test')).toBeDefined();
  });

  it('renders composed input', () => {
    const { getByPlaceholderText, getByText } = render(
      <Input>
        <Input.Field placeholder="composed" />
        <Input.Button>Submit</Input.Button>
      </Input>
    );
    expect(getByPlaceholderText('composed')).toBeDefined();
    expect(getByText('Submit')).toBeDefined();
  });
});
