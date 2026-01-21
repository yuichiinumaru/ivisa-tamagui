// @ts-nocheck
import { render, screen } from '../test-utils'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders content', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })
})

