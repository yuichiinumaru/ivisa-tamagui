import { render, screen } from '@testing-library/react'
import { LineChart } from './LineChart'
import { AppProviders } from '../../providers/AppProviders'
import React from 'react'

jest.mock('../../atoms/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}))

describe('LineChart', () => {
  const mockData = [
    { mes: 'Jan', valor: 180 },
    { mes: 'Fev', valor: 250 },
  ]

  it('renders the chart correctly with data', () => {
    const { container } = render(
      <AppProviders>
        <LineChart data={mockData} xKey="mes" yKey="valor" />
      </AppProviders>
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders the loading skeleton when isLoading is true', () => {
    render(
      <AppProviders>
        <LineChart data={mockData} xKey="mes" yKey="valor" isLoading />
      </AppProviders>
    )
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('renders the empty state when no data is provided', () => {
    render(
      <AppProviders>
        <LineChart data={[]} xKey="mes" yKey="valor" />
      </AppProviders>
    )
    expect(screen.getByText('Sem dados para exibir')).toBeInTheDocument()
  })

  it('renders the error state when an error is provided', () => {
    render(
      <AppProviders>
        <LineChart data={mockData} xKey="mes" yKey="valor" error="Test Error" />
      </AppProviders>
    )
    expect(screen.getByText('Erro ao carregar os dados.')).toBeInTheDocument()
  })

  it('renders title when provided', () => {
    render(
      <AppProviders>
        <LineChart data={mockData} xKey="mes" yKey="valor" title="Test Title" />
      </AppProviders>
    )
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })
})
