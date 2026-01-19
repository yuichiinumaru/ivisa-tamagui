import React from 'react'
import { render, screen } from '../../test-utils'
import { Meter } from './Meter'

describe('Meter', () => {
  it('renders correctly with label', () => {
    render(<Meter value={50} label="Armazenamento" />)
    expect(screen.getByText('Armazenamento')).toBeTruthy()
  })

  it('renders value label', () => {
    render(<Meter value={75} valueLabel="75%" />)
    expect(screen.getByText('75%')).toBeTruthy()
  })
})

