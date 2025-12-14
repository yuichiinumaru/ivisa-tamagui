import { render, screen } from '@testing-library/react'
import { AreaChart } from './AreaChart'
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

describe('AreaChart', () => {
  const mockData = [
    { x: 'A', y: 10 },
    { x: 'B', y: 20 },
  ]

  it('renders correctly', () => {
    const { container } = render(
      <AppProviders>
        <AreaChart data={mockData} xKey="x" yKey="y" />
      </AppProviders>
    )
    expect(screen.getByTestId('responsive-container')).toBeInTheDocument()
  })

  it('renders loading state', () => {
    render(
      <AppProviders>
        <AreaChart data={[]} xKey="x" yKey="y" isLoading />
      </AppProviders>
    )
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('renders empty state', () => {
    render(
      <AppProviders>
        <AreaChart data={[]} xKey="x" yKey="y" />
      </AppProviders>
    )
    expect(screen.getByText('Sem dados para exibir')).toBeInTheDocument()
  })
})
