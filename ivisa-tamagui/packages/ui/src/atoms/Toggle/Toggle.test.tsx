import { render, screen } from '../../../vitest.setup'
import { Toggle } from './Toggle'

describe('Toggle', () => {
  it('renders', () => {
    render(<Toggle>B</Toggle>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
