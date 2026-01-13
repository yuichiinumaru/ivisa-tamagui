// @ts-nocheck

import { render, screen, fireEvent } from '@testing-library/react'
import { Collapsible } from './Collapsible'
import React from 'react'
import { TamaguiProvider, Text } from 'tamagui'
import config from '../tamagui.config'

describe('Collapsible', () => {
  it('renders correctly with title and content, and toggles visibility', async () => {
    render(
      <TamaguiProvider config={config}>
        <Collapsible title="Trigger">
          <Text>Content</Text>
        </Collapsible>
      </TamaguiProvider>
    )
    const trigger = screen.getByText('Trigger')
    expect(trigger).toBeInTheDocument()

    // Content should not be in the document by default
    expect(screen.queryByText('Content')).not.toBeInTheDocument()

    // Click to open
    fireEvent.click(trigger)

    // Content should now be visible
    const visibleContent = await screen.findByText('Content')
    expect(visibleContent).toBeVisible()
  })

  it('shows skeleton when loading', () => {
    const { getByTestId } = render(
      <TamaguiProvider config={config}>
        <Collapsible title="Trigger" isLoading defaultOpen>
          <Text>Content</Text>
        </Collapsible>
      </TamaguiProvider>
    )
    expect(getByTestId('skeleton-container')).toBeInTheDocument()
  })

  it('applies error styles and aria-invalid', () => {
    const { container } = render(
      <TamaguiProvider config={config}>
        <Collapsible title="Trigger" hasError>
          <Text>Content</Text>
        </Collapsible>
      </TamaguiProvider>
    )
    const trigger = container.querySelector('[data-has-error="true"]')
    expect(trigger).toBeInTheDocument()
    expect(trigger).toHaveAttribute('aria-invalid', 'true')
  })
})
