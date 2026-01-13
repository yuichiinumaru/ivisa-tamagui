// @ts-nocheck
import { render, screen } from '../../test-utils'
import { BadgeCounter } from './BadgeCounter'
import { Button } from '../../atoms/Button'
import React from 'react'

describe('BadgeCounter', () => {
  it('renders count correctly', () => {
    render(
      <BadgeCounter count={5}>
        <Button>Notifications</Button>
      </BadgeCounter>
    )
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('Notifications')).toBeInTheDocument()
  })

  it('renders max+ when count exceeds max', () => {
    render(
      <BadgeCounter count={100} max={99}>
        <Button>Notifications</Button>
      </BadgeCounter>
    )
    expect(screen.getByText('99+')).toBeInTheDocument()
  })

  it('does not render badge when count is 0 and showZero is false', () => {
    render(
      <BadgeCounter count={0} showZero={false}>
        <Button>Notifications</Button>
      </BadgeCounter>
    )
    expect(screen.queryByText('0')).not.toBeInTheDocument()
  })

  it('renders badge when count is 0 and showZero is true', () => {
    render(
      <BadgeCounter count={0} showZero={true}>
        <Button>Notifications</Button>
      </BadgeCounter>
    )
    expect(screen.getByText('0')).toBeInTheDocument()
  })
})
