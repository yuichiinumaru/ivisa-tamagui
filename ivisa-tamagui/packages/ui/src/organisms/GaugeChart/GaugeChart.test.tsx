import React from 'react'
import { render, screen } from '@testing-library/react'
import { GaugeChart } from './GaugeChart'
import { TamaguiProvider } from 'tamagui'
import config from '../../../../tamagui.config'

describe('GaugeChart', () => {
  it('renders the title and value', () => {
    render(
        <TamaguiProvider config={config}>
            <GaugeChart title="Test Chart" value={50} />
        </TamaguiProvider>
    )
    expect(screen.getByText('Test Chart')).toBeInTheDocument()
    expect(screen.getByText('50%')).toBeInTheDocument()
  })

  it('renders the loading state', () => {
    const { container } = render(
        <TamaguiProvider config={config}>
            <GaugeChart title="Test Chart" value={50} isLoading />
        </TamaguiProvider>
    )
    expect(container.querySelector('.tamagui-skeleton')).toBeInTheDocument()
  })

  it('renders the error state', () => {
    render(
        <TamaguiProvider config={config}>
            <GaugeChart title="Test Chart" value={50} error="Test Error" />
        </TamaguiProvider>
    )
    expect(screen.getByText('Erro ao carregar dados: Test Error')).toBeInTheDocument()
  })

  it('renders the empty state', () => {
    render(
        <TamaguiProvider config={config}>
            <GaugeChart title="Test Chart" value={0} />
        </TamaguiProvider>
    )
    expect(screen.getByText('Sem dados para exibir.')).toBeInTheDocument()
  })
})
