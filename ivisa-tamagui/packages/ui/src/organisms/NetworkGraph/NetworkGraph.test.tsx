// @ts-nocheck
import { render, screen } from '@testing-library/react'
import { NetworkGraph } from './NetworkGraph'
import { AppProviders } from '../../providers/AppProviders'
import React from 'react'

jest.mock('../../atoms/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}))

describe('NetworkGraph', () => {
  const mockData = {
    nodes: [
      { id: '1', label: 'Node 1' },
      { id: '2', label: 'Node 2' },
    ],
    links: [
      { source: '1', target: '2' }
    ]
  }

  it('renders the chart correctly with data', () => {
    render(
      <AppProviders>
        <NetworkGraph data={mockData} />
      </AppProviders>
    )
    expect(screen.getByText('Node 1')).toBeInTheDocument()
    expect(screen.getByText('Node 2')).toBeInTheDocument()
  })

  it('renders the loading skeleton when isLoading is true', () => {
    render(
      <AppProviders>
        <NetworkGraph data={mockData} isLoading />
      </AppProviders>
    )
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('renders the empty state when no data is provided', () => {
    render(
      <AppProviders>
        <NetworkGraph data={{ nodes: [], links: [] }} />
      </AppProviders>
    )
    expect(screen.getByText('Não há dados para exibir.')).toBeInTheDocument()
  })
})
