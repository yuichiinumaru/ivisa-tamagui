import { render, screen } from '../test-utils'
import { RadioGroup, RadioGroupItem } from './RadioGroup'

describe('RadioGroup', () => {
  it('renders items', () => {
    render(
      <RadioGroup defaultValue="option-1">
        <RadioGroupItem value="option-1" id="r1" />
      </RadioGroup>
    )
    expect(screen.getByRole('radio')).toBeInTheDocument()
  })
})
