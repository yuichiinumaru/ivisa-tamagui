// @ts-nocheck
import { render, screen } from '../../test-utils'
import { BoxPlotChart } from './BoxPlotChart'
import { boxPlotData } from './BoxPlotChart.mocks'
import React from 'react'

// Mock Victory components
jest.mock('victory', () => ({
  VictoryChart: ({ children }: any) => <div data-testid="victory-chart">{children}</div>,
  VictoryAxis: () => <div data-testid="victory-axis" />,
  VictoryBoxPlot: () => <div data-testid="victory-boxplot" />,
  VictoryContainer: ({ children }: any) => <div>{children}</div>,
}))

describe('BoxPlotChart', () => {
  it('renders correctly with data', () => {
    render(<BoxPlotChart data={boxPlotData} />)
    expect(screen.getByTestId('victory-chart')).toBeInTheDocument()
    expect(screen.getByTestId('victory-boxplot')).toBeInTheDocument()
  })

  it('renders loading state', () => {
    render(<BoxPlotChart isLoading={true} />)
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('renders error state', () => {
    render(<BoxPlotChart error={new Error('Error')} />)
    expect(screen.getByText('Ocorreu um erro ao carregar os dados.')).toBeInTheDocument()
  })

  it('renders empty state', () => {
    render(<BoxPlotChart data={[]} />)
    expect(screen.getByText('Não há dados para exibir.')).toBeInTheDocument()
  })
})

