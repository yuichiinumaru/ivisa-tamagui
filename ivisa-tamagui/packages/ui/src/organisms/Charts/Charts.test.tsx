import { render, screen } from '@testing-library/react'
import { Charts } from './Charts'
import { AppProviders } from '../../providers/AppProviders'
import React from 'react'

jest.mock('../../atoms/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}))

describe('Charts', () => {
  const mockData = [
    { mes: 'Jan', valor: 180 },
    { mes: 'Fev', valor: 250 },
  ]

  it('renders the chart correctly with data', () => {
    const { container } = render(
      <AppProviders>
        <Charts data={mockData} xKey="mes" yKey="valor" />
      </AppProviders>
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders the loading skeleton when isLoading is true', () => {
    render(
      <AppProviders>
        <Charts data={mockData} xKey="mes" yKey="valor" isLoading />
      </AppProviders>
    )
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('renders the empty state when no data is provided', () => {
    render(
      <AppProviders>
        <Charts data={[]} xKey="mes" yKey="valor" />
      </AppProviders>
    )
    expect(screen.getByText('Não há dados para exibir.')).toBeInTheDocument()
  })

  it('renders the error state when an error is provided', () => {
    render(
      <AppProviders>
        <Charts data={mockData} xKey="mes" yKey="valor" error={new Error('Test Error')} />
      </AppProviders>
    )
    expect(screen.getByText('Ocorreu um erro ao carregar os dados.')).toBeInTheDocument()
  })

  it('renders header content when provided', () => {
    render(
      <AppProviders>
        <Charts data={mockData} xKey="mes" yKey="valor" headerContent={<h1>Test Header</h1>} />
      </AppProviders>
    )
    expect(screen.getByText('Test Header')).toBeInTheDocument()
  })
})
