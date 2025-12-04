import { render, screen } from '../../../vitest.setup'
import { Toaster } from './Sonner'
import { toast } from 'sonner'
import { Button } from '../../atoms/Button'

describe('Sonner', () => {
  it('renders toaster', async () => {
    const { user } = render(
        <>
            <Toaster />
            <Button onPress={() => toast('Hello World')}>Btn</Button>
        </>
    )
    await user.click(screen.getByText('Btn'))
    // Toast usually renders in portal, checking text presence
    expect(await screen.findByText('Hello World')).toBeInTheDocument()
  })
})
