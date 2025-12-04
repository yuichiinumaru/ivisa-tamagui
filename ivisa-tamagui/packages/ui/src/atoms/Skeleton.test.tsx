import { render, screen } from '../../vitest.setup'
import { Skeleton } from './Skeleton'

describe('Skeleton', () => {
  it('renders', () => {
    const { container } = render(<Skeleton />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
