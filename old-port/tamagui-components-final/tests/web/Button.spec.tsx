import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '../utils/render'

import { Button } from '../../src/components/primitives/Button'

describe('Button (Web)', () => {
  it('renders default variant with Tamagui providers', () => {
    render(<Button>Click Me</Button>)

    const buttonElement = screen.getByRole('button', { name: /click me/i })
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveAttribute('type', 'button')
  })

  it('applies size + variant styles', () => {
    render(
      <Button variant="secondary" size="sm">
        Call To Action
      </Button>
    )

    const buttonElement = screen.getByRole('button', { name: /call to action/i })
    const styleAttr = buttonElement.getAttribute('style') ?? ''

    expect(styleAttr).toContain('background-color')
    expect(styleAttr.toLowerCase()).toContain('height')
  })

  it('responds to hover and focus interactions', () => {
    render(<Button>Hover me</Button>)
    const buttonElement = screen.getByRole('button', { name: /hover me/i })

    fireEvent.mouseEnter(buttonElement)
    fireEvent.focus(buttonElement)
    expect(buttonElement).toHaveFocus()

    fireEvent.blur(buttonElement)
    fireEvent.mouseLeave(buttonElement)
    expect(buttonElement).not.toHaveFocus()
  })
})
