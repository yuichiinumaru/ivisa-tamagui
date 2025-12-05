import { render, screen } from '../../test-utils'
import { Toggle } from './Toggle'

describe('Toggle', () => {
  it('renders', () => {
    render(<Toggle>B</Toggle>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
