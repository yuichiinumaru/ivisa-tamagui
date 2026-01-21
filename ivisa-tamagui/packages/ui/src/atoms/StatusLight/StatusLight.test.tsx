// @ts-nocheck
import React from 'react'
import { render, screen } from '../../test-utils'
import { StatusLight } from './StatusLight'

describe('StatusLight', () => {
  it('renders children correctly', () => {
    render(<StatusLight>Online</StatusLight>)
    expect(screen.getByText('Online')).toBeTruthy()
  })

  it('renders different variants', () => {
    const { rerender } = render(<StatusLight variant="positive">Approved</StatusLight>)
    expect(screen.getByText('Approved')).toBeTruthy()

    rerender(<StatusLight variant="negative">Rejected</StatusLight>)
    expect(screen.getByText('Rejected')).toBeTruthy()
  })
})

