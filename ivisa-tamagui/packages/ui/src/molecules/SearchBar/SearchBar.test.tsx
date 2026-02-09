import { render, screen } from '@testing-library/react'
import { TamaguiProvider } from 'tamagui'
import config from '../../tamagui.config'
import { SearchBar } from './SearchBar'

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <TamaguiProvider config={config}>{children}</TamaguiProvider>
)

describe('SearchBar', () => {
  it('should render with placeholder', () => {
    render(<SearchBar placeholder="Buscar no sistema" />, { wrapper })
    expect(screen.getByPlaceholderText('Buscar no sistema')).toBeInTheDocument()
  })

  it('should render with shortcut', () => {
    render(<SearchBar shortcut="⌘K" />, { wrapper })
    expect(screen.getByText('⌘K')).toBeInTheDocument()
  })

  it('should render error message', () => {
    render(<SearchBar error="Campo obrigatório" />, { wrapper })
    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument()
  })

  it('should render with default placeholder when not provided', () => {
    render(<SearchBar />, { wrapper })
    expect(screen.getByPlaceholderText('Buscar...')).toBeInTheDocument()
  })

  it('should call onChangeText when input changes', () => {
    const mockOnChange = jest.fn()
    render(<SearchBar onChangeText={mockOnChange} />, { wrapper })
    const input = screen.getByPlaceholderText('Buscar...')
    
    // Simula digitação
    input.setAttribute('value', 'teste')
    const event = new Event('change', { bubbles: true })
    Object.defineProperty(event, 'target', { value: input, writable: false })
    input.dispatchEvent(event)
    
    expect(mockOnChange).toHaveBeenCalled()
  })
})
