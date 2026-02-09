// Removed @ts-nocheck — enabling type checking
import { render, screen } from '../../test-utils'
import { Timeline } from './Timeline'
import React from 'react'

describe('Timeline', () => {
  const mockItems = [
    {
      title: 'Pedido Recebido',
      description: 'Seu pedido #12345 foi recebido e está aguardando processamento.',
      time: '25 de Jul, 10:30',
    },
    {
      title: 'Pagamento Aprovado',
      description: 'O pagamento foi aprovado com sucesso.',
      time: '25 de Jul, 10:35',
    },
  ]

  it('renders timeline items', () => {
    render(<Timeline items={mockItems} />)
    expect(screen.getByText('Pedido Recebido')).toBeInTheDocument()
    expect(screen.getByText('Pagamento Aprovado')).toBeInTheDocument()
  })

  it('renders loading state', () => {
    render(<Timeline isLoading />)
    expect(screen.getByTestId('timeline-skeleton')).toBeInTheDocument()
  })

  it('renders empty state', () => {
    render(<Timeline isEmpty />)
    expect(screen.getByText('Nenhum item encontrado')).toBeInTheDocument()
  })

  it('renders error state', () => {
    render(<Timeline hasError />)
    expect(screen.getByText('Erro')).toBeInTheDocument()
    expect(screen.getByText('Ocorreu um erro ao carregar os dados. Por favor, tente novamente.')).toBeInTheDocument()
  })
})

