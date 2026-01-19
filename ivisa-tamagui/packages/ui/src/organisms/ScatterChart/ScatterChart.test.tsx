import { render, screen } from '@testing-library/react'
import { ScatterChart } from './ScatterChart'
import { AppProviders } from '../../providers/AppProviders'
import React from 'react'

jest.mock('../../atoms/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}))

describe('ScatterChart', () => {
  const mockData = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
  ]

  it('renders correctly', () => {
    const { container } = render(
      <AppProviders>
        <ScatterChart data={mockData} xKey="x" yKey="y" />
      </AppProviders>
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders loading state', () => {
    render(
      <AppProviders>
        <ScatterChart data={[]} xKey="x" yKey="y" isLoading />
      </AppProviders>
    )
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })
})

