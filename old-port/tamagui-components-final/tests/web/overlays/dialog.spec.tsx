import { render, screen, fireEvent } from '../../../vitest.setup'
import { vi } from 'vitest'

import { Dialog } from '../../../src/components/overlays/Dialog'
import { Button } from '../../../src/components/primitives/Button'

const DialogTestComponent = ({ onOpenChange }: { onOpenChange: (open: boolean) => void }) => (
  <Dialog
    open={true}
    onOpenChange={onOpenChange}
    title="Dialog Title"
    description="Dialog Description"
    footer={<Button>Close</Button>}
  >
    <p>Dialog Content</p>
  </Dialog>
)

describe('Dialog', () => {
  it('renders dialog content correctly', () => {
    const onOpenChange = vi.fn()
    render(<DialogTestComponent onOpenChange={onOpenChange} />)

    expect(screen.getByText('Dialog Title')).toBeInTheDocument()
    expect(screen.getByText('Dialog Description')).toBeInTheDocument()
    expect(screen.getByText('Dialog Content')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
  })

  it('calls onOpenChange when overlay is clicked', () => {
    const onOpenChange = vi.fn()
    render(<DialogTestComponent onOpenChange={onOpenChange} />)

    // The overlay is the backdrop, let's find it by its name
    const overlay = screen.getByRole('generic', { name: /DialogOverlay/i })
    fireEvent.click(overlay)

    expect(onOpenChange).toHaveBeenCalledWith(false)
  })
})
