import { render, screen, fireEvent } from '../../test-utils'
import { A11yToolbar } from './A11yToolbar'
import React from 'react'

describe('A11yToolbar', () => {
  it('renders correctly', () => {
    render(<A11yToolbar />)
    expect(screen.getByText('Acessibilidade:')).toBeInTheDocument()
    expect(screen.getByText('Alto Contraste')).toBeInTheDocument()
  })

  it('calls callbacks', () => {
    const onZoomIn = jest.fn()
    const onToggleTheme = jest.fn()
    render(<A11yToolbar onZoomIn={onZoomIn} onToggleTheme={onToggleTheme} />)

    // Zoom In button (using aria-label or icon if possible, but Button renders icon as component)
    const zoomInBtn = screen.getByLabelText('Aumentar fonte')
    fireEvent.click(zoomInBtn)
    expect(onZoomIn).toHaveBeenCalled()

    const themeBtn = screen.getByLabelText('Modo Escuro') // Default isDark=false
    fireEvent.click(themeBtn)
    expect(onToggleTheme).toHaveBeenCalled()
  })
})

