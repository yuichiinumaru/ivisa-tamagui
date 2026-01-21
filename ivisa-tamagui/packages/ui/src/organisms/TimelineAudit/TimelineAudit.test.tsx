// @ts-nocheck
import { render, screen } from '../../test-utils'
import { TimelineAudit } from './TimelineAudit'
import React from 'react'

describe('TimelineAudit', () => {
  const events = [
    {
      id: '1',
      user: 'Alice',
      action: 'created document',
      timestamp: '2023-01-01T10:00:00Z',
    },
    {
      id: '2',
      user: 'Bob',
      action: 'edited document',
      timestamp: '2023-01-01T11:00:00Z',
      diff: '- old\n+ new',
    },
  ]

  it('renders events', () => {
    render(<TimelineAudit events={events} />)
    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText('created document')).toBeInTheDocument()
    expect(screen.getByText('Bob')).toBeInTheDocument()
    // Using a more flexible matcher for text with newlines
    expect(screen.getByText((content) => content.includes('- old') && content.includes('+ new'))).toBeInTheDocument()
  })
})

