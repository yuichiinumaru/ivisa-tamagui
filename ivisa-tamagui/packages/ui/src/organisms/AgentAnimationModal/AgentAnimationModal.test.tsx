// Removed ts-nocheck
import React from 'react'
import { render, screen, fireEvent } from '../../test-utils'
import { AgentAnimationModal } from './AgentAnimationModal'

describe('AgentAnimationModal', () => {
  const events = [
    {
      id: '1',
      timestamp: '2023-10-27T10:00:00',
      message: 'Agent started',
      type: 'info' as const,
    },
  ]

  it('renders modal content when open', () => {
    render(
      <AgentAnimationModal
        open={true}
        onOpenChange={jest.fn()}
        agentName="Agent Smith"
        agentStatus="working"
        events={events}
      />
    )

    expect(screen.getByText('Agent Smith')).toBeTruthy()
    expect(screen.getByText('Agent started')).toBeTruthy()
  })

  it('calls onOpenChange when closed', () => {
    const onOpenChange = jest.fn()
    render(
      <AgentAnimationModal
        open={true}
        onOpenChange={onOpenChange}
        agentName="Agent Smith"
        agentStatus="working"
        events={events}
      />
    )

    // Find the close button (assuming it has aria-label="Fechar" from DialogContent)
    const closeButton = screen.getByLabelText('Fechar')
    fireEvent.click(closeButton)

    expect(onOpenChange).toHaveBeenCalledWith(false)
  })
})

