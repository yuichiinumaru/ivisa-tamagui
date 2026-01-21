// @ts-nocheck
import { render, screen, fireEvent } from '../../test-utils'
import { ImageAnnotator } from './ImageAnnotator'
import React from 'react'

describe('ImageAnnotator', () => {
  it('renders correctly', () => {
    render(<ImageAnnotator imageUrl="https://via.placeholder.com/400" />)
    expect(screen.getByText('Salvar')).toBeInTheDocument()
    expect(screen.getByText('Limpar')).toBeInTheDocument()
    // Image should be rendered - although native-testing-mocks might render it as View
    // We check for controls which implies SignaturePad is mounted.
  })

  it('calls onSave', () => {
    const onSave = jest.fn()
    render(<ImageAnnotator imageUrl="test.jpg" onSave={onSave} />)
    const saveBtn = screen.getByText('Salvar')
    fireEvent.click(saveBtn)
    expect(onSave).toHaveBeenCalled()
  })
})

