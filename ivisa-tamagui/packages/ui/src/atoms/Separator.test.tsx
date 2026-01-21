// @ts-nocheck
import { render } from '../test-utils'
import { Separator } from './Separator'

describe('Separator', () => {
  it('renders', () => {
    const { container } = render(<Separator />)
    expect(container.firstChild).toBeInTheDocument()
  })
})

