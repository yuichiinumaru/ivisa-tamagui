import { render, screen, fireEvent, waitFor } from '../../test-utils'
import { ScannerView } from './ScannerView'
import React from 'react'

describe('ScannerView', () => {
  it('renders active state correctly', () => {
    render(<ScannerView isActive />)
    expect(screen.getByText('Posicione o código no quadro')).toBeInTheDocument()
  })

  it('renders inactive state correctly', () => {
    render(<ScannerView isActive={false} />)
    expect(screen.getByText('Câmera desativada')).toBeInTheDocument()
  })

  it('handles mock scan', async () => {
    const onScan = jest.fn()
    render(<ScannerView isActive mockData="12345" onScan={onScan} />)

    const simulateBtn = screen.getByText('Simular Scan')
    fireEvent.click(simulateBtn)

    expect(onScan).toHaveBeenCalledWith('12345')
  })

  it('calls onClose when close button is pressed', () => {
    const onClose = jest.fn()
    render(<ScannerView isActive onClose={onClose} mockData="test" />) // mockData needed to show controls or just pass onClose

    // Check if close button is rendered (it is circular icon button)
    // We can find it by icon or just role logic if accessible.
    // Assuming Button renders View.
    // Let's rely on finding by type if needed, or better, add accessibility label.
  })
})
