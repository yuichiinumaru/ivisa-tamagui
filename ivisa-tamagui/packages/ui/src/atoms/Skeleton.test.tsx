// @ts-nocheck
import { render } from '../test-utils'
import { Skeleton } from './Skeleton'

describe('Skeleton', () => {
  it('renders', () => {
    const { container } = render(<Skeleton />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
