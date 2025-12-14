import { render, screen } from '@testing-library/react'
import { AreaChart } from './AreaChart'
import { AppProviders } from '../../providers/AppProviders'
import React from 'react'

jest.mock('../../atoms/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}))

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
    expect(container.querySelector('svg')).toBeInTheDocument()
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
