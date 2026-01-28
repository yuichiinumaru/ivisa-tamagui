import { render, screen, fireEvent } from '../../test-utils'
import { SignaturePad } from './SignaturePad'
import React from 'react'

describe('SignaturePad', () => {
  it('renders correctly', () => {
    render(<SignaturePad />)
    expect(screen.getByText('Assine aqui')).toBeInTheDocument()
    expect(screen.getByText('Limpar')).toBeInTheDocument()
    expect(screen.getByText('Salvar')).toBeInTheDocument()
  })

  it('calls onClear', () => {
    const onClear = jest.fn()
    render(<SignaturePad onClear={onClear} />)
    const clearBtn = screen.getByText('Limpar')
    fireEvent.click(clearBtn)
    expect(onClear).toHaveBeenCalled()
  })

  it('calls onSave', () => {
    const onSave = jest.fn()
    render(<SignaturePad onSave={onSave} />)
    const saveBtn = screen.getByText('Salvar')
    fireEvent.click(saveBtn)
    expect(onSave).toHaveBeenCalled()
  })

  // Basic interaction test (mocking drawing is hard in JSDOM without pointer events support)
  // We trust the component logic for now and verify props wiring.
})

