import { render, screen } from '@testing-library/react'
import { PieChart } from './PieChart'
import { AppProviders } from '../../providers/AppProviders'
import React from 'react'

jest.mock('../../atoms/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}))

jest.mock('victory', () => ({
  VictoryPie: () => <div data-testid="victory-pie" />,
  VictoryTooltip: () => <div data-testid="victory-tooltip" />,
  VictoryContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

describe('PieChart', () => {
  const mockData = [
    { label: 'A', value: 30 },
    { label: 'B', value: 70 },
  ]

  it('renders the chart correctly with data', () => {
    render(
      <AppProviders>
        <PieChart data={mockData} xKey="label" yKey="value" />
      </AppProviders>
    )
    expect(screen.getByTestId('victory-pie')).toBeInTheDocument()
  })

  it('renders the loading skeleton when isLoading is true', () => {
    render(
      <AppProviders>
        <PieChart data={mockData} xKey="label" yKey="value" isLoading />
      </AppProviders>
    )
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('renders the empty state when no data is provided', () => {
    render(
      <AppProviders>
        <PieChart data={[]} xKey="label" yKey="value" />
      </AppProviders>
    )
    expect(screen.getByText('Sem dados para exibir')).toBeInTheDocument()
  })

  it('renders title when provided', () => {
    render(
      <AppProviders>
        <PieChart data={mockData} xKey="label" yKey="value" title="Test Title" />
      </AppProviders>
    )
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })
})
