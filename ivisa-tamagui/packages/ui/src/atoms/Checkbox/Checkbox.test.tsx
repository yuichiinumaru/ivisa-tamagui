import { render, screen } from '../../../vitest.setup'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('renders', async () => {
    render(<Checkbox id="term" />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
  })
})
