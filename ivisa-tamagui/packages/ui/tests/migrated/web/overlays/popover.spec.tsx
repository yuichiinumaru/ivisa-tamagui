import { render, screen, fireEvent } from '../../../vitest.setup'

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  PopoverArrow,
} from '../../../../src/molecules/Popover/Popover'
import { Button } from '../../../../src/atoms/Button/Button'

describe('Popover', () => {
  it('opens and closes the popover', () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
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

    expect(popoverContent).not.toBeInTheDocument()
  })
})
