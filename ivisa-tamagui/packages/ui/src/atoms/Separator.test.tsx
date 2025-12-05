import { render } from '../../vitest.setup'
import { Separator } from './Separator'

describe('Separator', () => {
  it('renders', () => {
    const { container } = render(<Separator />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
