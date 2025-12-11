import { render, screen } from '../../test-utils'
import { Item } from './Item'
import { User } from '@tamagui/lucide-icons'
import { Button } from '../../atoms/Button'

describe('Item', () => {
  it('renders text and value from the item prop', () => {
    render(<Item item={{ text: 'Label', value: 'Value' }} />)
    expect(screen.getByText('Label')).toBeInTheDocument()
    expect(screen.getByText('Value')).toBeInTheDocument()
  })

  it('renders a subtitle when provided', () => {
    render(<Item item={{ text: 'Main Text', subtitle: 'Subtitle here' }} />)
    expect(screen.getByText('Main Text')).toBeInTheDocument()
    expect(screen.getByText('Subtitle here')).toBeInTheDocument()
  })

  it('renders an icon', () => {
    render(<Item item={{ icon: <User data-testid="icon" /> }} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('renders content in the right slot', () => {
    render(<Item rightSlot={<Button>Action</Button>} />)
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument()
  })

  it('renders a skeleton when isLoading is true', () => {
    const { container } = render(<Item item={{ text: 'Not visible' }} isLoading />)
    expect(screen.queryByText('Not visible')).not.toBeInTheDocument()
    // The Skeleton component is rendered inside, so a snapshot is a good way to verify this.
    expect(container.firstChild).toMatchSnapshot()
  })

  it('applies error styles when hasError is true', () => {
    const { container } = render(<Item item={{ text: 'Error' }} hasError />)
    // Using a snapshot to verify the visual state is more robust
    // than checking for specific classes or styles from Tamagui.
    expect(container.firstChild).toMatchSnapshot()
  })

  it('applies disabled styles when isDisabled is true', () => {
    const { container } = render(<Item item={{ text: 'Disabled' }} isDisabled />)
    // Using a snapshot to verify the visual state.
    expect(container.firstChild).toMatchSnapshot()
  })
})
