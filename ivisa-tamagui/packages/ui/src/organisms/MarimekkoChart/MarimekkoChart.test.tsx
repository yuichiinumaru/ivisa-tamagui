import { render, screen } from '../../test-utils'
import { MarimekkoChart } from './MarimekkoChart'
import React from 'react'

jest.mock('../../atoms/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}))

// Mock victory
jest.mock('victory', () => ({
  VictoryChart: ({ children, ...props }: any) => <div data-testid="victory-chart" {...props}>{children}</div>,
  VictoryAxis: (props: any) => <div data-testid="victory-axis" {...props} />,
  VictoryBar: (props: any) => <div data-testid="victory-bar" {...props} />,
  VictoryContainer: ({ children, ...props }: any) => <div data-testid="victory-container" {...props}>{children}</div>,
  VictoryTheme: { material: {} },
}))

describe('MarimekkoChart', () => {
  const mockData = [
    { label: 'A', value: 10, width: 20 },
    { label: 'B', value: 20, width: 30 },
  ]

  it('renders the chart correctly with data', () => {
    render(
      <MarimekkoChart data={mockData} xKey="label" yKey="value" widthKey="width" />
    )
    expect(screen.getByTestId('victory-chart')).toBeInTheDocument()
    expect(screen.getByTestId('victory-bar')).toBeInTheDocument()
  })

  it('renders the loading skeleton when isLoading is true', () => {
    render(
      <MarimekkoChart data={mockData} xKey="label" yKey="value" widthKey="width" isLoading />
    )
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('renders the empty state when no data is provided', () => {
    render(
      <MarimekkoChart data={[]} xKey="label" yKey="value" widthKey="width" />
    )
    expect(screen.getByText('Não há dados para exibir.')).toBeInTheDocument()
  })

  it('renders the error state when an error is provided', () => {
    render(
      <MarimekkoChart data={mockData} xKey="label" yKey="value" widthKey="width" error={new Error('Test Error')} />
    )
    expect(screen.getByText('Ocorreu um erro ao carregar os dados.')).toBeInTheDocument()
  })
})

