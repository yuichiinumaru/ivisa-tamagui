import { render, screen } from '../test-utils';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders title and description', () => {
    render(<Alert title="Error" description="Something went wrong." />);
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
  });
});
