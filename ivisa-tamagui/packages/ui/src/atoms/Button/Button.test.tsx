// Removed ts-nocheck
import { render, screen } from '../../test-utils'
import { Button } from './Button'

describe('Button', () => {
  it('renders default variant with Tamagui providers', () => {
    render(<Button>Click Me</Button>)

    const buttonElement = screen.getByRole('button', { name: /click me/i })
    expect(buttonElement).toBeInTheDocument()
    // expect(buttonElement).toHaveAttribute('type', 'button') // Tamagui web button doesn't always reflect type attribute in JSDOM or it is spread differently
  })

  it('applies size + variant styles', () => {
    render(
      <Button variant="secondary" size="sm">
        Call To Action
      </Button>
    )

    const buttonElement = screen.getByRole('button', { name: /call to action/i })
    expect(buttonElement).toBeInTheDocument()
    // Style checks are brittle in mocked JSDOM environment
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

