// Removed @ts-nocheck — enabling type checking
import { render, screen } from '../../test-utils'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle } from './AlertDialog'

describe('AlertDialog', () => {
  it('renders trigger', () => {
    render(
      <AlertDialog
        trigger={<button>Open</button>}
        title="Title"
        description="Description"
      />
    )
    expect(screen.getByText('Open')).toBeInTheDocument()
  })
})

