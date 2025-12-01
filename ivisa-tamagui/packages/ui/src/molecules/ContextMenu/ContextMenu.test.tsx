import React from 'react'
import { render, screen } from '../../../tests/migrated/utils/render'
import userEvent from '@testing-library/user-event'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from './ContextMenu'

describe('ContextMenu', () => {
  it('renders context menu on right click', async () => {
    const user = userEvent.setup()
    render(
      <ContextMenu>
        <ContextMenuTrigger>
          <div style={{ padding: 50, border: '1px solid black' }}>Right click me</div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Profile</ContextMenuItem>
          <ContextMenuItem>Billing</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    const trigger = screen.getByText('Right click me')

    // Right click
    await user.pointer({ keys: '[MouseRight]', target: trigger })

    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('Billing')).toBeInTheDocument()
  })
})
