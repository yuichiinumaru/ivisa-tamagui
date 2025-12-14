import React from 'react'
import { render, screen } from '@testing-library/react'
import { GaugeChart } from './GaugeChart'
import { AppProviders } from '../../providers/AppProviders'

describe('GaugeChart', () => {
  it('renders the title and value', () => {
    render(<GaugeChart title="Test Chart" value={50} />, { wrapper: AppProviders })
    expect(screen.getByText('Test Chart')).toBeTruthy()
    expect(screen.getByText('50%')).toBeTruthy()
  })

  it('renders the loading state', () => {
    render(<GaugeChart title="Test Chart" value={50} isLoading />, { wrapper: AppProviders })
    expect(screen.getAllByTestId('skeleton').length).toBeGreaterThan(0)
  })

  it('renders the error state', () => {
    render(<GaugeChart title="Test Chart" value={50} error="Test Error" />, {
      wrapper: AppProviders,
    })
    expect(screen.getByText('Erro ao carregar dados: Test Error')).toBeTruthy()
  })

  it('renders the empty state', () => {
    render(<GaugeChart title="Test Chart" value={0} />, { wrapper: AppProviders })
    expect(screen.getByText('Sem dados para exibir.')).toBeTruthy()
  })
})
