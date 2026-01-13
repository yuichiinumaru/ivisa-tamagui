// @ts-nocheck
import { render, screen } from '../../test-utils'
import { Calendar } from './Calendar'
import React from 'react'

describe('Booking Calendar', () => {
  it('renders booking calendar layout', () => {
    render(<Calendar />)
    expect(screen.getByText('Select Date')).toBeInTheDocument()
  })
})
