import { render } from '../../../vitest.setup'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders', () => {
    // Spinner usually renders an SVG or a view with specific styling.
    // We check for existence.
    const { container } = render(<Spinner />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
