// @ts-nocheck
import { render, screen } from '../../test-utils'
import { RidgelinePlot } from './RidgelinePlot'
import React from 'react'

jest.mock('../../atoms/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}))

// Mock victory
jest.mock('victory', () => ({
  VictoryChart: ({ children, ...props }: any) => <div data-testid="victory-chart" {...props}>{children}</div>,
  VictoryAxis: (props: any) => <div data-testid="victory-axis" {...props} />,
  VictoryArea: (props: any) => <div data-testid="victory-area" {...props} />,
  VictoryGroup: ({ children, ...props }: any) => <div data-testid="victory-group" {...props}>{children}</div>,
}))

describe('RidgelinePlot', () => {
  const mockData = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
  ]
  const series = [
      { id: 's1', data: mockData },
      { id: 's2', data: mockData }
  ]

  it('renders the chart correctly with data', () => {
    render(
      <RidgelinePlot series={series} />
    )
    expect(screen.getByTestId('victory-chart')).toBeInTheDocument()
    expect(screen.getAllByTestId('victory-area').length).toBe(2)
  })

  it('renders the loading skeleton when isLoading is true', () => {
    render(
      <RidgelinePlot series={series} isLoading />
    )
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('renders the empty state when no data is provided', () => {
    render(
      <RidgelinePlot series={[]} />
    )
    expect(screen.getByText('Não há dados para exibir.')).toBeInTheDocument()
  })
})

