import { render, screen } from '../../vitest.setup'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders content', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })
})
