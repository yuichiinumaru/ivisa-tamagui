import { render, screen } from '../test-utils'
import { Switch } from './Switch'

describe('Switch', () => {
  it('renders', () => {
    render(<Switch id="mode" />)
    expect(screen.getByRole('switch')).toBeInTheDocument()
  })
})

