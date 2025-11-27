
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button, TamaguiProvider } from 'tamagui'
import config from '../../src/tamagui.config'

describe('Simple Test', () => {
  it('should render a button', () => {
    render(
      <TamaguiProvider config={config}>
        <Button>Click Me</Button>
      </TamaguiProvider>
    )
    const buttonElement = screen.getByRole('button', { name: /click me/i })
    expect(buttonElement).toBeInTheDocument()
  })
})
