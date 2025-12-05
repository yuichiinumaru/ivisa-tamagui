import { render, screen } from '../../test-utils'
import { Toaster } from './Sonner'
import { toast } from 'sonner'
import { Button } from '../../atoms/Button'

jest.mock('sonner', () => ({
  Toaster: () => <div data-testid="toaster" />,
  toast: jest.fn(),
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
