import { fireEvent, render } from '../../test-utils';
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

  it('renders with hint', () => {
    const { getByText } = render(
      <>
        <Input />
        <Input.Hint>This is a hint</Input.Hint>
      </>
    );
    expect(getByText('This is a hint')).toBeDefined();
  });

  it('renders success state', () => {
    const { getByRole } = render(<Input state="success" />);
    expect(getByRole('textbox')).toBeDefined();
  });

  it('renders error state', () => {
    const { getByRole } = render(<Input state="error" />);
    expect(getByRole('textbox')).toBeDefined();
  });

  it('toggles password visibility', () => {
    const { getByRole } = render(<Input type="password" />);
    const input = getByRole('textbox');
    const button = getByRole('button');

    expect(input.getAttribute('type')).toBe('password');

    fireEvent.press(button);

    expect(input.getAttribute('type')).toBe('text');
  });
});
