import { render, screen } from '../test-utils'
import { Toast, ToastProvider, ToastViewport, ToastTitle } from './Toast'

describe('Toast', () => {
  it('renders', () => {
    render(
        <ToastProvider>
            <Toast open>
                <ToastTitle>Notification</ToastTitle>
            </Toast>
            <ToastViewport />
        </ToastProvider>
    )
    expect(screen.getByText('Notification')).toBeInTheDocument()
  })
})
