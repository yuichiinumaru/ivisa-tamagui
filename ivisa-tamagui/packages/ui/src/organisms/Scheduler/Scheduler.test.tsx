import { render, screen, fireEvent } from '../../test-utils'
import { Scheduler } from './Scheduler'

describe('Scheduler', () => {
  it('renders correctly', () => {
    render(<Scheduler />)
    // Check for days of week header
    expect(screen.getByText(/Seg/i)).toBeInTheDocument() // Assuming current week has Mon
  })

  it('renders events', () => {
      const today = new Date()
      const events = [{
          id: '1',
          title: 'Test Event',
          start: today,
          end: today
      }]

      render(<Scheduler events={events} />)
      expect(screen.getByText('Test Event')).toBeInTheDocument()
  })

  it('calls onAddEvent when add button is clicked', () => {
      const onAdd = jest.fn()
      render(<Scheduler onAddEvent={onAdd} />)

      const btn = screen.getByRole('button', { name: /novo evento/i })
      fireEvent.click(btn)
      expect(onAdd).toHaveBeenCalled()
  })
})
