import { render, screen } from '../../../vitest.setup'
import { Kbd } from './Kbd'

describe('Kbd', () => {
  it('renders correctly', () => {
    render(<Kbd>⌘K</Kbd>)
    const kbd = screen.getByText('⌘K')
    expect(kbd).toBeInTheDocument()
    expect(kbd.tagName).toBe('KBD')
  })
})
