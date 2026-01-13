// @ts-nocheck
import { render, screen } from '../../test-utils'
import { PDFPreview } from './PDFPreview'
import React from 'react'

describe('PDFPreview', () => {
  it('renders placeholder when no url', () => {
    render(<PDFPreview />)
    expect(screen.getByText('Nenhum documento selecionado')).toBeInTheDocument()
  })

  it('renders error state', () => {
    render(<PDFPreview error="Falha ao carregar" />)
    expect(screen.getByText('Falha ao carregar')).toBeInTheDocument()
  })

  it('renders iframe when url provided', () => {
    render(<PDFPreview fileUrl="https://example.com/test.pdf" />)
    // iframe might be rendered as YStack (div) in test environment if tag prop isn't respected by JSDOM/Tamagui mock
    // But we passed tag='iframe', let's check for title
    const iframe = screen.getByTitle('PDF Document')
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute('src', 'https://example.com/test.pdf#toolbar=0')
  })
})
