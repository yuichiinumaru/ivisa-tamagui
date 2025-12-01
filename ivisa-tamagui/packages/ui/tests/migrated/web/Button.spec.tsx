import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '../utils/render'

import { Button } from '../../../src/atoms/Button/Button'

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

  it('responds to hover and focus interactions', async () => {
    const { user } = render(<Button>Hover me</Button>)
    const buttonElement = screen.getByRole('button', { name: /hover me/i })

    await user.hover(buttonElement)
    await user.tab()
    expect(buttonElement).toHaveFocus()

    await user.tab()
    expect(buttonElement).not.toHaveFocus()
  })
})
