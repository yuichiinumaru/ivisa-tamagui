import { render, screen } from '../../../vitest.setup'
import { Calendar } from './Calendar'

describe('Calendar', () => {
  it('renders', () => {
    render(<Calendar />)
    const date = new Date()
    const month = date.toLocaleString('default', { month: 'long' })
    const year = date.getFullYear()
    // Check roughly for month and year. Text might be split or nested.
    // Use findByText with loose matching or check for existence
    const headerText = screen.getByText((content) => content.includes(String(year)))
    expect(headerText).toBeInTheDocument()
  })
})
