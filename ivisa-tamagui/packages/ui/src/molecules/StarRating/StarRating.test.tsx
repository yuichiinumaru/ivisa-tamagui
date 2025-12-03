import { render } from '../../../vitest.setup'
import { describe, it, expect, vi } from 'vitest'
import { StarRating } from './StarRating'

vi.mock('@tamagui/lucide-icons', () => ({
  Star: () => <div data-testid="star-icon" />
}))

describe('StarRating', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<StarRating count={5} />)
    expect(getByTestId('star-1')).toBeDefined()
    expect(getByTestId('star-5')).toBeDefined()
  })
})
