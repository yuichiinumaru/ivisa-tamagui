// @ts-nocheck
import { render, screen, fireEvent } from '../../test-utils'
import { NotificationCard } from './NotificationCard'

jest.mock('@tamagui/lucide-icons', () => ({
    Bell: () => <div data-testid="bell-icon" />,
    X: () => <div data-testid="x-icon" />
}))

describe('NotificationCard', () => {
    it('renders title and description', () => {
        render(<NotificationCard title="Notification" description="Details" />)
        expect(screen.getByText('Notification')).toBeInTheDocument()
        expect(screen.getByText('Details')).toBeInTheDocument()
    })

    it('renders avatar fallback if no image', () => {
        render(<NotificationCard title="Notification" description="Details" />)
        expect(screen.getByTestId('bell-icon')).toBeInTheDocument()
    })

    it('calls onDismiss when dismiss button is clicked', () => {
        const onDismiss = jest.fn()
        render(<NotificationCard title="Notification" description="Details" onDismiss={onDismiss} />)
        fireEvent.click(screen.getByTestId('x-icon').parentElement!)
        expect(onDismiss).toHaveBeenCalled()
    })
})
