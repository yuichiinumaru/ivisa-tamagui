// @ts-nocheck
import { render, screen } from '@testing-library/react'
import { SankeyDiagram } from './SankeyDiagram'
import { AppProviders } from '../../providers/AppProviders'
import React from 'react'

jest.mock('../../atoms/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}))

describe('SankeyDiagram', () => {
  const mockData = {
    nodes: [
      { id: 'A', label: 'Start' },
      { id: 'B', label: 'Middle' },
      { id: 'C', label: 'End' },
    ],
    links: [
      { source: 'A', target: 'B', value: 10 },
      { source: 'B', target: 'C', value: 10 },
    ]
  }

  it('renders the chart correctly with data', () => {
    render(
      <AppProviders>
        <SankeyDiagram data={mockData} />
      </AppProviders>
    )
    expect(screen.getByText('Start')).toBeInTheDocument()
    expect(screen.getByText('Middle')).toBeInTheDocument()
    expect(screen.getByText('End')).toBeInTheDocument()
  })

  it('renders the loading skeleton when isLoading is true', () => {
    render(
      <AppProviders>
        <SankeyDiagram data={mockData} isLoading />
      </AppProviders>
    )
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('renders the empty state when no data is provided', () => {
    render(
      <AppProviders>
        <SankeyDiagram data={{ nodes: [], links: [] }} />
      </AppProviders>
    )
    expect(screen.getByText('Não há dados para exibir.')).toBeInTheDocument()
  })
})

