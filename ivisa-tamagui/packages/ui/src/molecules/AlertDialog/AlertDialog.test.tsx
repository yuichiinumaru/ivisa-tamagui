import { render, screen } from '../../../vitest.setup'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle } from './AlertDialog'

describe('AlertDialog', () => {
  it('renders trigger', () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogTitle>Title</AlertDialogTitle>
        </AlertDialogContent>
      </AlertDialog>
    )
    expect(screen.getByText('Open')).toBeInTheDocument()
  })
})
