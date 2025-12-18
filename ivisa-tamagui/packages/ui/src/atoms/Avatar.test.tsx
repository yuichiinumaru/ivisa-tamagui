import { render, screen, fireEvent } from '../test-utils'
import { Avatar } from './Avatar'
import React from 'react'

describe('Avatar', () => {
  it('renders image', () => {
    render(<Avatar src="https://github.com/shadcn.png" fallback="CN" />)
    const img = screen.getByTestId('avatar-image')
    expect(img).toBeInTheDocument()

    fireEvent.load(img)
  })

  it('renders fallback', () => {
    render(<Avatar fallback="CN" />)
    expect(screen.getByText('CN')).toBeInTheDocument()
  })
})
