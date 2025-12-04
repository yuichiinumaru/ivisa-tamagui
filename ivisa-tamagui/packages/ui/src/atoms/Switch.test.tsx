import { render, screen } from '../../vitest.setup'
import { Switch } from './Switch'

describe('Switch', () => {
  it('renders', () => {
    render(<Switch id="mode" />)
    expect(screen.getByRole('switch')).toBeInTheDocument()
  })
})
