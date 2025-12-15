import { render, screen } from '../../test-utils'
import { Calendar } from './Calendar'

describe('Calendar', () => {
  it('renders', () => {
    render(<Calendar />)
    const date = new Date()
    const year = date.getFullYear()
    // Check roughly for month and year. Text might be split or nested.
    // Use findByText with loose matching or check for existence
    const headerText = screen.getByText((content) => content.includes(String(year)))
    expect(headerText).toBeInTheDocument()
  })

  it('renders the skeleton when isLoading is true', () => {
    render(<Calendar isLoading />)
    expect(screen.getByTestId('calendar-skeleton')).toBeInTheDocument()
    expect(screen.queryByTestId('calendar-grid')).not.toBeInTheDocument()
  })

  it('is disabled when isDisabled is true', () => {
    render(<Calendar isDisabled />)
    expect(screen.getByTestId('calendar-container')).toHaveStyle('opacity: 0.5')
  })

  it('has an error style when hasError is true', () => {
    render(<Calendar hasError />)
    const container = screen.getByTestId('calendar-container')
    expect(container).toHaveAttribute('data-has-error', 'true')
  })
})
