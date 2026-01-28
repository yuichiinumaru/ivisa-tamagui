// Removed @ts-nocheck — enabling type checking
import { render, screen } from '../../test-utils'

import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogClose } from './Dialog'
import { Button } from '../../atoms/Button/Button'

const DialogTestComponent = ({ onOpenChange }: { onOpenChange: (open: boolean) => void }) => (
  <Dialog open onOpenChange={onOpenChange}>
    <DialogContent>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog Description</DialogDescription>
      <p>Dialog Content</p>
      <DialogFooter>
        <DialogClose asChild>
          <Button>Close</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)

describe('Dialog', () => {
  it('renders dialog content correctly', () => {
    const onOpenChange = jest.fn()
    render(<DialogTestComponent onOpenChange={onOpenChange} />)

    expect(screen.getByText('Dialog Title')).toBeInTheDocument()
    expect(screen.getByText('Dialog Description')).toBeInTheDocument()
    expect(screen.getByText('Dialog Content')).toBeInTheDocument()
    const closeButtons = screen.getAllByRole('button', { name: /close/i })
    expect(closeButtons.length).toBeGreaterThan(0)
  })

  // it('calls onOpenChange when overlay is clicked', () => {
  //   const onOpenChange = jest.fn()
  //   render(<DialogTestComponent onOpenChange={onOpenChange} />)

  //   // The overlay is the backdrop, let's find it by its name
  //   const overlay = screen.getByRole('generic', { name: /DialogOverlay/i })
  //   fireEvent.click(overlay)

  //   expect(onOpenChange).toHaveBeenCalledWith(false)
  // })
})

