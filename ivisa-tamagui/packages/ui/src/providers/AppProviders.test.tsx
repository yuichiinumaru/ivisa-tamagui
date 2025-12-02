// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { Text } from 'tamagui'
import { vi, describe, it, expect } from 'vitest'
import '../../vitest.setup'

import { AppProviders } from './AppProviders'

describe('AppProviders', () => {
  it('renders children with default theme', () => {
    render(
      <AppProviders>
        <div data-testid="provider-child">content</div>
      </AppProviders>
    )

    expect(screen.getByTestId('provider-child')).toBeInTheDocument()
  })

  it('renders a Tamagui component with theme', () => {
    render(
      <AppProviders>
        <Text color="$primary">Hello Tamagui</Text>
      </AppProviders>
    )
    expect(screen.getByText('Hello Tamagui')).toBeInTheDocument()
  })

  it('logs and rethrows component errors with timestamped metadata', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const Boom = () => {
      throw new Error('boom')
    }

    expect(() =>
      render(
        <AppProviders>
          <Boom />
        </AppProviders>
      )
    ).toThrow('boom')

    expect(errorSpy).toHaveBeenCalled()
    // Look for a log that starts with a timestamp bracket, which is our custom log
    const loggedCall = errorSpy.mock.calls.find((call) =>
      typeof call[0] === 'string' && /^\[\d{4}-\d{2}-\d{2}T/.test(call[0])
    )

    expect(loggedCall?.[0]).toBeDefined()
    expect(loggedCall?.[0]).toMatch(/\[AppProviders\]/)

    errorSpy.mockRestore()
  })
})
