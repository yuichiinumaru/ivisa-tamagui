import React from 'react'
import { render, screen, fireEvent } from '../../../jest.setup'
import { Kbd } from './Kbd'

describe('Kbd', () => {
  it('renders correctly with default props', () => {
    render(<Kbd>⌘K</Kbd>)
    const kbdElement = screen.getByText('⌘K').parentElement
    expect(kbdElement).toBeInTheDocument()
    expect(kbdElement?.tagName).toBe('KBD')
  })

  it('applies the correct styles for each size variant', () => {
    const { rerender } = render(<Kbd size="sm">A</Kbd>)
    expect(screen.getByText('A')).toHaveStyle({ fontSize: 10 })

    rerender(<Kbd size="default">B</Kbd>)
    expect(screen.getByText('B')).toHaveStyle({ fontSize: 12 })

    rerender(<Kbd size="lg">C</Kbd>)
    expect(screen.getByText('C')).toHaveStyle({ fontSize: 14 })
  })

  it('forwards the ref correctly', () => {
    const ref = React.createRef<HTMLUnknownElement>()
    render(<Kbd ref={ref}>Ref Test</Kbd>)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('KBD')
  })

  it('handles onClick events', () => {
    const handleClick = jest.fn()
    render(<Kbd onClick={handleClick}>Click Me</Kbd>)
    const kbdElement = screen.getByText('Click Me')
    fireEvent.click(kbdElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
