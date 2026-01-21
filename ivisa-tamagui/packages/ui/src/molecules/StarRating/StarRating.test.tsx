// @ts-nocheck
import { render } from '../../test-utils'
import { StarRating } from './StarRating'

jest.mock('@tamagui/lucide-icons', () => ({
  Star: () => <div data-testid="star-icon" />
}))

describe('StarRating', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<StarRating count={5} />)
    expect(getByTestId('star-1')).toBeDefined()
    expect(getByTestId('star-5')).toBeDefined()
  })
})

