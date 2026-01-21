// @ts-nocheck
// @vitest-environment jsdom
import React from 'react'
import { render, screen } from '../../test-utils'

import { ContextMenu, ContextMenuItemDef } from './ContextMenu'

describe('ContextMenu', () => {
  it('renders context menu on right click', async () => {
    const menuItems: ContextMenuItemDef[] = [
      {
        label: 'Profile',
      },
      {
        label: 'Billing',
      },
    ]

    // @ts-expect-error Tamagui types are not correctly picked up in test env
    const { user } = render(
      <ContextMenu items={menuItems}>
        <div style={{ padding: 50, border: '1px solid black' }}>Right click me</div>
      </ContextMenu>
    )

    const trigger = screen.getByText('Right click me')

    // Right click
    await user.pointer({ keys: '[MouseRight]', target: trigger })

    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('Billing')).toBeInTheDocument()
  })
})

