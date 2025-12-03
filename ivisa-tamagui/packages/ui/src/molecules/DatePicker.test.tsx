import { render } from '../../vitest.setup'
import { describe, it, expect, vi } from 'vitest'
import { DatePicker } from './DatePicker'

vi.mock('@tamagui/lucide-icons', () => ({
    Calendar: () => <div data-testid="calendar-icon" />
}))

describe('DatePicker', () => {
    it('renders correctly', () => {
        const { getByText } = render(<DatePicker placeholder="Pick a date" />)
        expect(getByText('Pick a date')).toBeDefined()
    })
})
