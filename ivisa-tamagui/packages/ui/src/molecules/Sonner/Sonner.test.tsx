import { render, screen } from '../../../vitest.setup'
import { Toaster } from './Sonner'
import { toast } from 'sonner'
import { Button } from '../../atoms/Button'
import { vi, describe, it, expect } from 'vitest'

vi.mock('sonner', () => ({
  Toaster: () => <div data-testid="toaster" />,
  toast: vi.fn(),
}))

describe('Sonner', () => {
  it('renders toaster', async () => {
    const { user } = render(
      <>
        <Toaster />
        <Button onPress={() => toast('Hello World')}>Btn</Button>
      </>
    )
    await user.click(screen.getByText('Btn'))
    expect(toast).toHaveBeenCalledWith('Hello World')
  })
})
