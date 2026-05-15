// Removed ts-nocheck
import { render } from '../../test-utils'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders', () => {
    // Spinner usually renders an SVG or a view with specific styling.
    // We check for existence.
    const { container } = render(<Spinner />)
    expect(container.firstChild).toBeInTheDocument()
  })
})

