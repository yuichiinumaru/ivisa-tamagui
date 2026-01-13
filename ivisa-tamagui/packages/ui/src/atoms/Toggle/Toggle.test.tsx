// @ts-nocheck
import { render, screen } from '../../test-utils'
import { Toggle } from './Toggle'
import { Bold, Italic } from '@tamagui/lucide-icons'

describe('Toggle', () => {
  it('renders correctly with children', () => {
    render(<Toggle aria-label="Toggle Bold">B</Toggle>)
    const button = screen.getByRole('button', { name: /toggle bold/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('B')
  })

  it('handles the pressed state correctly', () => {
    const { rerender } = render(<Toggle aria-label="Toggle Bold" pressed />)
    let button = screen.getByRole('button', { name: /toggle bold/i })
    expect(button).toHaveAttribute('aria-pressed', 'true')

    rerender(<Toggle aria-label="Toggle Bold" pressed={false} />)
    button = screen.getByRole('button', { name: /toggle bold/i })
    expect(button).toHaveAttribute('aria-pressed', 'false')
  })

  it('renders with a leftIcon', () => {
    render(
      <Toggle aria-label="Toggle Italic" leftIcon={<Italic data-testid="left-icon" />}>
        Italic
      </Toggle>,
    )
    const button = screen.getByRole('button', { name: /toggle italic/i })
    expect(screen.getByTestId('left-icon')).toBeInTheDocument()
    expect(button).toHaveTextContent('Italic')
  })

  it('renders with a rightIcon', () => {
    render(
      <Toggle aria-label="Toggle Bold" rightIcon={<Bold data-testid="right-icon" />}>
        Bold
      </Toggle>,
    )
    const button = screen.getByRole('button', { name: /toggle bold/i })
    expect(screen.getByTestId('right-icon')).toBeInTheDocument()
    expect(button).toHaveTextContent('Bold')
  })

  it('is disabled when the disabled prop is true', () => {
    render(
      <Toggle aria-label="Toggle Bold" disabled>
        B
      </Toggle>,
    )
    const button = screen.getByRole('button', { name: /toggle bold/i })
    expect(button).toHaveAttribute('aria-disabled', 'true')
  })
})
