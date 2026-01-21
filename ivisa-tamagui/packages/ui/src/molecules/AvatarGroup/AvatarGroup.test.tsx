// @ts-nocheck
import { render, screen } from '../../test-utils'
import { AvatarGroup } from './AvatarGroup'
import React from 'react'

const mockItems = [
  { fallback: 'A', alt: 'Avatar A' },
  { fallback: 'B', alt: 'Avatar B' },
  { fallback: 'C', alt: 'Avatar C' },
  { fallback: 'D', alt: 'Avatar D' },
]

describe('AvatarGroup', () => {
  it('renders the correct number of avatars based on items prop', () => {
    render(<AvatarGroup items={mockItems.slice(0, 2)} />)
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
    expect(screen.queryByText('C')).not.toBeInTheDocument()
  })

  it('renders a limited number of avatars and a remainder count', () => {
    render(<AvatarGroup items={mockItems} limit={2} />)
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
    expect(screen.queryByText('C')).not.toBeInTheDocument()
    expect(screen.getByText('+2')).toBeInTheDocument()
  })

  it('renders skeletons when in loading state', () => {
    render(<AvatarGroup items={mockItems} limit={3} isLoading={true} />)
    expect(screen.getByTestId('avatar-group-skeleton-0')).toBeInTheDocument()
    expect(screen.getByTestId('avatar-group-skeleton-1')).toBeInTheDocument()
    expect(screen.getByTestId('avatar-group-skeleton-2')).toBeInTheDocument()
  })

  it('does not render a remainder count if items length is within limit', () => {
    render(<AvatarGroup items={mockItems} limit={5} />)
    expect(screen.getByText('D')).toBeInTheDocument()
    expect(screen.queryByText('+1')).not.toBeInTheDocument()
  })

  it('renders nothing when items array is empty and not loading', () => {
    render(<AvatarGroup items={[]} />)
    expect(screen.queryByTestId('avatar-group-frame')).not.toBeInTheDocument()
  })

  it('applies an error state to avatars', () => {
    render(<AvatarGroup items={mockItems.slice(0, 2)} hasError={true} />)
    const avatarItem1 = screen.getByTestId('avatar-group-item-0')
    const avatarItem2 = screen.getByTestId('avatar-group-item-1')

    expect(avatarItem1).toHaveAttribute('data-haserror', 'true')
    expect(avatarItem2).toHaveAttribute('data-haserror', 'true')
  })
})

