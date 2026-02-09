import { render, screen } from '@testing-library/react'
import { TreemapChart } from './TreemapChart'
import { AppProviders } from '../../providers/AppProviders'
import React from 'react'

jest.mock('../../atoms/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}))

describe('TreemapChart', () => {
  const mockData = [
    { label: 'A', value: 100 },
    { label: 'B', value: 50 },
    { label: 'C', value: 30 },
  ]

  it('renders the chart correctly with data', () => {
    render(
      <AppProviders>
        <TreemapChart data={mockData} labelKey="label" valueKey="value" />
      </AppProviders>
    )
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
    expect(screen.getByText('C')).toBeInTheDocument()
  })

  it('renders the loading skeleton when isLoading is true', () => {
    render(
      <AppProviders>
        <TreemapChart data={mockData} labelKey="label" valueKey="value" isLoading />
      </AppProviders>
    )
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('renders the empty state when no data is provided', () => {
    render(
      <AppProviders>
        <TreemapChart data={[]} labelKey="label" valueKey="value" />
      </AppProviders>
    )
    expect(screen.getByText('Não há dados para exibir.')).toBeInTheDocument()
  })
})

