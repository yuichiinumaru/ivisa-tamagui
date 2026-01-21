// @ts-nocheck
import React from 'react'
import { render, screen } from '../../test-utils'
import { AgentAnimationPanel } from './AgentAnimationPanel'

describe('AgentAnimationPanel', () => {
  const events = [
    {
      id: '1',
      timestamp: '2023-10-27T10:00:00',
      message: 'Agent started',
      type: 'info' as const,
    },
    {
      id: '2',
      timestamp: '2023-10-27T10:01:00',
      message: 'Processing data',
      type: 'working' as const,
    },
  ]

  it('renders correctly with events', () => {
    render(
      <AgentAnimationPanel
        agentName="Agent Smith"
        agentStatus="working"
        events={events}
      />
    )

    expect(screen.getByText('Agent Smith')).toBeTruthy()
    expect(screen.getByText('Agent started')).toBeTruthy()
    expect(screen.getByText('Processing data')).toBeTruthy()
  })

  it('renders empty state when no events', () => {
    render(
      <AgentAnimationPanel
        agentName="Agent Smith"
        agentStatus="idle"
        events={[]}
      />
    )
    expect(screen.getByText('Nenhum evento registrado')).toBeTruthy()
  })
})

