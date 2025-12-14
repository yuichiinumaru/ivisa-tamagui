import { render, screen } from '../../test-utils'
import { LocationStatus } from './LocationStatus'
import React from 'react'

describe('LocationStatus', () => {
  it('renders correctly with data', () => {
    const date = new Date('2023-10-25T10:00:00')
    render(
      <LocationStatus
        latitude={-22.9068}
        longitude={-43.1729}
        accuracy={5}
        timestamp={date}
      />
    )
    expect(screen.getByText('Status da Localização')).toBeInTheDocument()
    expect(screen.getByText('Precisão: Alta (5m)')).toBeInTheDocument()
    expect(screen.getByText('-22.906800, -43.172900')).toBeInTheDocument()
  })

  it('renders searching state', () => {
    render(<LocationStatus isSearching />)
    expect(screen.getByText('Buscando...')).toBeInTheDocument()
  })

  it('renders error state', () => {
    render(<LocationStatus error="Permissão negada" />)
    expect(screen.getByText('Erro')).toBeInTheDocument()
    expect(screen.getByText('Permissão negada')).toBeInTheDocument()
  })
})
