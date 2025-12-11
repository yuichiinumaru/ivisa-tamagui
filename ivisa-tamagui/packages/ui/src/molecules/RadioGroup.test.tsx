import { render, screen } from '../test-utils'
import { RadioGroup } from './RadioGroup'

const OPTIONS = [
  { value: 'option-1', label: 'Option 1' },
  { value: 'option-2', label: 'Option 2' },
]

describe('RadioGroup', () => {
  it('renders items with labels', () => {
    render(<RadioGroup options={OPTIONS} defaultValue="option-1" />)

    const radioButtons = screen.getAllByRole('radio')
    expect(radioButtons).toHaveLength(OPTIONS.length)

    expect(screen.getByLabelText('Option 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument()
  })

  it('renders skeleton when isLoading is true', () => {
    const { container } = render(<RadioGroup options={OPTIONS} isLoading />)

    // Check for elements with aria-busy attribute, which is set on the container.
    expect(container.querySelector('[aria-busy="true"]')).toBeInTheDocument()
  })
})
