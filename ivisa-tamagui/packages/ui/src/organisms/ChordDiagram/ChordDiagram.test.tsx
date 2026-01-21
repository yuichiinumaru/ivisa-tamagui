// @ts-nocheck
import { render, screen } from '@testing-library/react'
import { ChordDiagram } from './ChordDiagram'
import { AppProviders } from '../../providers/AppProviders'
import React from 'react'

jest.mock('../../atoms/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}))

describe('ChordDiagram', () => {
  const mockMatrix = [
    [10, 20],
    [30, 40]
  ]
  const mockLabels = ['A', 'B']

  it('renders the chart correctly with data', () => {
    render(
      <AppProviders>
        <ChordDiagram matrix={mockMatrix} labels={mockLabels} />
      </AppProviders>
    )
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
  })

  it('renders the loading skeleton when isLoading is true', () => {
    render(
      <AppProviders>
        <ChordDiagram matrix={mockMatrix} labels={mockLabels} isLoading />
      </AppProviders>
    )
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('renders the empty state when no data is provided', () => {
    render(
      <AppProviders>
        <ChordDiagram matrix={[]} labels={[]} />
      </AppProviders>
    )
    expect(screen.getByText('Não há dados para exibir.')).toBeInTheDocument()
  })
})

