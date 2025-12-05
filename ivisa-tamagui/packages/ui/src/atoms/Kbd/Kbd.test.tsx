import { render, screen } from '../../test-utils'
import { Kbd } from './Kbd'

describe('Kbd', () => {
  it('renders correctly', () => {
    render(<Kbd>⌘K</Kbd>)
    const kbd = screen.getByText('⌘K')
    expect(kbd).toBeInTheDocument()
    expect(kbd.tagName).toBe('KBD')
  })
})
