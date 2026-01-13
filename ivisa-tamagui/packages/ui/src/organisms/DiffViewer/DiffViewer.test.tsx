// @ts-nocheck
import { render, screen } from '../../test-utils'
import { DiffViewer } from './DiffViewer'
import React from 'react'

describe('DiffViewer', () => {
  const oldText = 'Line 1\nLine 2\nLine 3'
  const newText = 'Line 1\nLine 2 Modified\nLine 4 Added'

  it('renders titles', () => {
    render(<DiffViewer oldText={oldText} newText={newText} />)
    expect(screen.getByText('Original')).toBeInTheDocument()
    expect(screen.getByText('Modificado')).toBeInTheDocument()
  })

  it('renders content', () => {
    render(<DiffViewer oldText={oldText} newText={newText} />)
    expect(screen.getAllByText('Line 1')).toHaveLength(2) // One in each pane
    expect(screen.getByText('Line 2')).toBeInTheDocument() // Old
    expect(screen.getByText('Line 2 Modified')).toBeInTheDocument() // New
  })
})
