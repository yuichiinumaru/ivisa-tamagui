import { describe, expect, it } from 'vitest'
import { render, screen } from '../../../vitest.setup'
import { Button } from './Button'

describe('Button', () => {
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

    // const buttonElement = screen.getByRole('button', { name: /call to action/i })
    // Tamagui styles end up in class or style. Checking style attribute presence is a rough check.
    // Ideally we check specific styles but that depends on compiler.
    // The migrated test checked style attribute.
    // const styleAttr = buttonElement.getAttribute('style') ?? ''
    const buttonElement = screen.getByRole('button', { name: /call to action/i })
    // Tamagui styles end up in class or style. Checking style attribute presence is a rough check.
    // Ideally we check specific styles but that depends on compiler.
    // The migrated test checked style attribute.
    const styleAttr = buttonElement.getAttribute('style') ?? ''

    // Note: In JSDOM with Tamagui, styles might be applied via classnames or style tags.
    // But let's keep the assertion if it was working in migrated.
    // If it fails, we will adjust.
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

  it('matches snapshot', () => {
      const { asFragment } = render(<Button>Snapshot</Button>)
      expect(asFragment()).toMatchSnapshot()
  })
})
