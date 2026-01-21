// @ts-nocheck
import { render, screen } from '@testing-library/react'
import { AreaChart } from './AreaChart'
import { AppProviders } from '../../providers/AppProviders'
import React from 'react'

jest.mock('../../atoms/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}))

global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

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
    { mes: 'Jan', valor: 180 },
    { mes: 'Fev', valor: 250 },
  ]

  it('renders correctly with data', () => {
    render(
      <AppProviders>
        <AreaChart data={mockData} xKey="mes" yKey="valor" />
      </AppProviders>
    )
    expect(screen.getByTestId('responsive-container')).toBeInTheDocument()
  })

  it('renders loading', () => {
    render(
        <AppProviders>
            <AreaChart data={[]} xKey="mes" yKey="valor" isLoading />
        </AppProviders>
    )
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })
})

