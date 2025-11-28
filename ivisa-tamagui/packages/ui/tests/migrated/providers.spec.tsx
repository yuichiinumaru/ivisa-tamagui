import { render, screen } from '@testing-library/react'
import { Text } from 'tamagui'
import { vi, describe, it, expect } from 'vitest'

import { AppProviders } from '../../src/providers/AppProviders'

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
    const loggedCall = errorSpy.mock.calls.find((call) =>
      typeof call[0] === 'string' && call[0].includes('AppProvidersRoot')
    )

    expect(loggedCall?.[0]).toMatch(/\d{4}-\d{2}-\d{2}T/)

    errorSpy.mockRestore()
  })
})
