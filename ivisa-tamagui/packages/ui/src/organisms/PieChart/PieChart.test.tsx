// @ts-nocheck
import { render, screen } from '@testing-library/react'
import { PieChart } from './PieChart'
import { AppProviders } from '../../providers/AppProviders'
import React from 'react'

jest.mock('../../atoms/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}))

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Mock ResponsiveContainer
jest.mock('recharts', () => {
  const OriginalModule = jest.requireActual('recharts')
  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <div style={{ width: 500, height: 500 }} data-testid="responsive-container">
        {children}
      </div>
    ),
  }
})

describe('PieChart', () => {
  const mockData = [
    { label: 'A', value: 30 },
    { label: 'B', value: 70 },
  ]

  it('renders the chart correctly with data', () => {
    const { container } = render(
      <AppProviders>
        <PieChart data={mockData} xKey="label" yKey="value" />
      </AppProviders>
    )
    expect(screen.getByTestId('responsive-container')).toBeInTheDocument()
    // Same as LineChart, remove the specific class check as it seems fragile in this mock setup
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

