// @vitest-environment jsdom
import React from 'react'
import { render, screen, waitFor } from '../../../vitest.setup'
import { afterEach, vi, describe, it, expect } from 'vitest'

import { Tooltip } from './Tooltip'
import { Button, Text } from 'tamagui'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('Tooltip', () => {
  it('renders trigger with tooltip content and describedby wiring', async () => {
    const { getByText, user } = render(
      <Tooltip content={<Text>Tooltip Content</Text>}>
        <Button>Hover me</Button>
      </Tooltip>
    )

    const trigger = getByText('Hover me')
    expect(trigger).toBeTruthy()

    await user.hover(trigger)
    // Wait for tooltip to open
    await screen.findByText('Tooltip Content')

    await waitFor(() => {
      // Re-query in case of DOM updates
      const currentTrigger = screen.getByRole('button', { name: 'Hover me' })
      expect(currentTrigger).toHaveAttribute('aria-describedby')
    })
  })

  // it('applies a default hover delay on desktop environments', () => {
  //   const { UNSAFE_getByType } = render(
  //     <Tooltip touchDeviceOverride={false} content={<Text>Tooltip Content</Text>}>
  //       <Button>Hover me</Button>
  //     </Tooltip>
  //   )

  //   const tooltip = UNSAFE_getByType(TamaguiTooltip)
  //   expect(tooltip.props.delay).toEqual({ open: 700, close: 150 })
  // })

  // it('removes hover delay on touch environments', () => {
  //   const { UNSAFE_getByType } = render(
  //     <Tooltip touchDeviceOverride content={<Text>Tooltip Content</Text>}>
  //       <Button>Tap me</Button>
  //     </Tooltip>
  //   )

  //   const tooltip = UNSAFE_getByType(TamaguiTooltip)
  //   expect(tooltip.props.delay).toEqual({ open: 0, close: 150 })
  // })

})
