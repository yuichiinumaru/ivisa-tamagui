import { render, screen } from '../../test-utils'
import { ParallelCoordinates } from './ParallelCoordinates'
import React from 'react'

jest.mock('../../atoms/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}))

// Mock victory
jest.mock('victory', () => ({
  VictoryChart: ({ children, ...props }: any) => <div data-testid="victory-chart" {...props}>{children}</div>,
  VictoryAxis: (props: any) => <div data-testid="victory-axis" {...props} />,
  VictoryLine: (props: any) => <div data-testid="victory-line" {...props} />,
  VictoryGroup: ({ children, ...props }: any) => <div data-testid="victory-group" {...props}>{children}</div>,
  VictoryTheme: { material: {} },
}))

describe('ParallelCoordinates', () => {
  const mockData = [
    { a: 10, b: 20, c: 30 },
    { a: 20, b: 10, c: 40 },
  ]
  const attributes = ['a', 'b', 'c']

  it('renders the chart correctly with data', () => {
    render(
      <ParallelCoordinates data={mockData} attributes={attributes} />
    )
    expect(screen.getByTestId('victory-chart')).toBeInTheDocument()
    // Should have 1 axis per attribute + 1 (dependent axis?) or just axes.
    // In PC, we draw multiple axes.
    const axes = screen.getAllByTestId('victory-axis')
    expect(axes.length).toBeGreaterThanOrEqual(attributes.length)
  })

  it('renders the loading skeleton when isLoading is true', () => {
    render(
      <ParallelCoordinates data={mockData} attributes={attributes} isLoading />
    )
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('renders the empty state when no data is provided', () => {
    render(
      <ParallelCoordinates data={[]} attributes={attributes} />
    )
    expect(screen.getByText('Não há dados para exibir.')).toBeInTheDocument()
  })

  it('renders the error state when an error is provided', () => {
    render(
      <ParallelCoordinates data={mockData} attributes={attributes} error={new Error('Test Error')} />
    )
    expect(screen.getByText('Ocorreu um erro ao carregar os dados.')).toBeInTheDocument()
  })
})
