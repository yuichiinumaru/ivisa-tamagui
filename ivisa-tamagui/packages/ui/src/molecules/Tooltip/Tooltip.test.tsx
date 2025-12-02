import React from 'react'
import { render } from '../../../vitest.setup'
import { afterEach, vi, describe, it, expect } from 'vitest'

import { Tooltip } from './Tooltip'
import { Button, Text } from 'tamagui'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('Tooltip', () => {
  it('renders trigger with tooltip content and describedby wiring', () => {
    const { getByText } = render(
      <Tooltip content={<Text>Tooltip Content</Text>}>
        <Button>Hover me</Button>
      </Tooltip>
    )

    const trigger = getByText('Hover me')
    expect(trigger).toBeTruthy()
    // expect(trigger.props['aria-describedby']).toBeTruthy() // RTL element checking
    expect(trigger).toHaveAttribute('aria-describedby')
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

  it('logs a warning when align prop could misalign the arrow', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    render(
      <Tooltip align="start" touchDeviceOverride={false} content={<Text>Tooltip Content</Text>}>
        <Button>Hover me</Button>
      </Tooltip>
    )

    expect(warnSpy).toHaveBeenCalled()
    expect(warnSpy.mock.calls[0]?.[0]).toContain('align "start" may misalign arrow')
  })
})
