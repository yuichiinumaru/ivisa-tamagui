import { describe, expect, it } from 'vitest'
import { render, screen } from '../utils/render'

import { Button } from '../../../src/atoms/Button/Button'

describe('Button (legacy smoke)', () => {
  it('renders primary variant via shared helper', () => {
    render(<Button>Send</Button>)

    const button = screen.getByRole('button', { name: /send/i })
    expect(button).toBeInTheDocument()
  })
})
