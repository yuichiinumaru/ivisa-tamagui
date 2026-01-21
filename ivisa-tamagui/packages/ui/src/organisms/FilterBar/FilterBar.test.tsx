// @ts-nocheck
import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { FilterBar } from './FilterBar'
import { TamaguiProvider } from 'tamagui'
import config from '../../tamagui.config'

// Wrapper to provide Tamagui context
const renderWithTheme = (component: React.ReactNode) => {
  return render(<TamaguiProvider config={config}>{component}</TamaguiProvider>)
}

describe('FilterBar', () => {
  const filters = [
    {
      id: 'search',
      type: 'text' as const,
      placeholder: 'Buscar...',
      label: 'Busca',
    },
    {
      id: 'status',
      type: 'select' as const,
      label: 'Status',
      options: [
        { label: 'Ativo', value: 'active' },
        { label: 'Inativo', value: 'inactive' },
      ],
    },
    {
        id: 'date',
        type: 'date' as const,
        label: 'Data',
        placeholder: 'Selecione uma data'
    }
  ]

  it('renders filter inputs correctly', () => {
    renderWithTheme(<FilterBar filters={filters} onFilterChange={jest.fn()} />)

    expect(screen.getByPlaceholderText('Buscar...')).toBeTruthy()
    // Select placeholder is usually rendered in a trigger or button
    expect(screen.getAllByText('Status').length).toBeGreaterThan(0)
    expect(screen.getByText('Data')).toBeTruthy()
  })

  it('triggers onFilterChange when text input changes', () => {
    const handleFilterChange = jest.fn()
    renderWithTheme(<FilterBar filters={filters} onFilterChange={handleFilterChange} />)

    const searchInput = screen.getByPlaceholderText('Buscar...')
    fireEvent.change(searchInput, { target: { value: 'test query' } })

    // Debounce might be involved, but for simple test we expect call
    // If debounce is implemented, we might need waitFor or fake timers
    expect(handleFilterChange).toHaveBeenCalledWith(expect.objectContaining({ search: 'test query' }))
  })

//   it('triggers onFilterChange when select changes', async () => {
//     const handleFilterChange = jest.fn()
//     renderWithTheme(<FilterBar filters={filters} onFilterChange={handleFilterChange} />)

//     // Open Select
//     // Note: Testing Tamagui Select might be tricky in JSDOM due to Portal
//     // We might need to mock Select or rely on integration tests for complex interactions
//   })
})

