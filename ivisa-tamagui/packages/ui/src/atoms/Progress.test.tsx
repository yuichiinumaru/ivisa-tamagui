import { render, screen } from '../../vitest.setup'
import { Progress } from './Progress'

describe('Progress', () => {
  it('renders with value', () => {
    render(<Progress value={50} />)
    const progress = screen.getByRole('progressbar')
    expect(progress).toHaveAttribute('aria-valuenow', '50')
  })
})
