// @ts-nocheck
import { render, screen } from '@testing-library/react'
import { HeatmapChart } from './HeatmapChart'
import { AppProviders } from '../../providers/AppProviders'
import React from 'react'

jest.mock('../../atoms/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}))

describe('HeatmapChart', () => {
  const mockData = [
    { x: 'A', y: '1', value: 10 },
    { x: 'A', y: '2', value: 20 },
    { x: 'B', y: '1', value: 30 },
    { x: 'B', y: '2', value: 40 },
  ]

  it('renders the chart correctly with data', () => {
    const { container } = render(
      <AppProviders>
        <HeatmapChart data={mockData} xKey="x" yKey="y" valueKey="value" />
      </AppProviders>
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders the loading skeleton when isLoading is true', () => {
    render(
      <AppProviders>
        <HeatmapChart data={mockData} xKey="x" yKey="y" valueKey="value" isLoading />
      </AppProviders>
    )
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('renders the empty state when no data is provided', () => {
    render(
      <AppProviders>
        <HeatmapChart data={[]} xKey="x" yKey="y" valueKey="value" />
      </AppProviders>
    )
    expect(screen.getByText('Não há dados para exibir.')).toBeInTheDocument()
  })

  it('renders the error state when an error is provided', () => {
    render(
      <AppProviders>
        <HeatmapChart data={mockData} xKey="x" yKey="y" valueKey="value" error={new Error('Test Error')} />
      </AppProviders>
    )
    expect(screen.getByText('Ocorreu um erro ao carregar os dados.')).toBeInTheDocument()
  })
})
