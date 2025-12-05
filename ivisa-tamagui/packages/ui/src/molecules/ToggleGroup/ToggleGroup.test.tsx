import { render, screen } from '../../test-utils'
import { ToggleGroup, ToggleGroupItem } from './ToggleGroup'

describe('ToggleGroup', () => {
  it('renders items', () => {
    render(
        <ToggleGroup type="single">
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
        </ToggleGroup>
    )
    expect(screen.getByText('A')).toBeInTheDocument()
  })
})
