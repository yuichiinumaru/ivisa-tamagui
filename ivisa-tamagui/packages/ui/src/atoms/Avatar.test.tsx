import { render, screen } from '../test-utils'
import { Avatar } from './Avatar'
import React from 'react'

describe('Avatar', () => {
  it('renders image', () => {
    render(<Avatar src="https://github.com/shadcn.png" fallback="CN" />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', 'https://github.com/shadcn.png')
  })

  it('renders fallback', () => {
    render(<Avatar fallback="CN" />)
    expect(screen.getByText('CN')).toBeInTheDocument()
  })
})
