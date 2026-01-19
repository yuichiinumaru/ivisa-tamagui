import { render, screen } from '../../test-utils'
import { ToggleGroup } from './ToggleGroup'

describe('ToggleGroup', () => {
  it('renders items', () => {
    render(
        <ToggleGroup type="single">
            <ToggleGroup.Item value="a">A</ToggleGroup.Item>
            <ToggleGroup.Item value="b">B</ToggleGroup.Item>
        </ToggleGroup>
    )
    expect(screen.getByText('A')).toBeInTheDocument()
  })
})

