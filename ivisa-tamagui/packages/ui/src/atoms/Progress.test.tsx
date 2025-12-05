import { render, screen } from '../test-utils'
import { Progress } from './Progress'

describe('Progress', () => {
  it('renders with value', () => {
    render(<Progress value={50} />)
    const progress = screen.getByRole('progressbar')
    // With mocked Tamagui, we check if value prop is passed to the underlying element (progress tag)
    expect(progress).toHaveAttribute('value', '50')
  })
})
