import { render, screen } from '../../../vitest.setup'
import { Item } from './Item'
import { User } from '@tamagui/lucide-icons'

describe('Item', () => {
  it('renders text and value from props', () => {
    render(<Item text="Label" value="Value" />)
    expect(screen.getByText('Label')).toBeInTheDocument()
    expect(screen.getByText('Value')).toBeInTheDocument()
  })

  it('renders an icon', () => {
    render(<Item icon={<User data-testid="icon" />} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('renders only text', () => {
    render(<Item text="Just Text" />)
    expect(screen.getByText('Just Text')).toBeInTheDocument()
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument()
    expect(screen.queryByText('Value')).not.toBeInTheDocument()
  })
})
