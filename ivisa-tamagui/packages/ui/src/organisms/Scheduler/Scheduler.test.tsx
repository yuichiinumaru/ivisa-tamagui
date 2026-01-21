// @ts-nocheck
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

      // Button text was changed to "Novo"
      const btn = screen.getByRole('button', { name: /Novo/i })
      fireEvent.click(btn)
      expect(onAdd).toHaveBeenCalled()
  })

  it('toggles view to month', () => {
      render(<Scheduler />)
      const toggleBtn = screen.getByRole('button', { name: /Mês/i })
      fireEvent.click(toggleBtn)
      // In month view, we expect to see 'Dom', 'Seg', etc. and 'Semana' button
      expect(screen.getByRole('button', { name: /Semana/i })).toBeInTheDocument()
  })
})

