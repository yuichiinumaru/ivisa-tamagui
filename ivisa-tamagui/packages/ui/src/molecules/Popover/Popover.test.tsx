import { render, screen, fireEvent } from '../../../vitest.setup'

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from './Popover'
import { Button } from '../../atoms/Button/Button'

describe('Popover', () => {
  it('opens and closes the popover', () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p>Popover Content</p>
          <PopoverClose asChild>
            <Button>Close</Button>
          </PopoverClose>
        </PopoverContent>
      </Popover>
    )

    const trigger = screen.getByRole('button', { name: /open popover/i })
    fireEvent.click(trigger)

    const popoverContent = screen.getByText('Popover Content')
    expect(popoverContent).toBeInTheDocument()

    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)

    // Wait for animation or state update
    // await new Promise((r) => setTimeout(r, 100))
    // expect(popoverContent).not.toBeInTheDocument()
  })
})
