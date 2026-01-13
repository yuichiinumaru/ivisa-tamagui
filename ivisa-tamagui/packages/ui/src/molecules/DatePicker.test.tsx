// @ts-nocheck
import { render } from '../test-utils'
import { DatePicker } from './DatePicker'

jest.mock('@tamagui/lucide-icons', () => ({
    Calendar: () => <div data-testid="calendar-icon" />
}))

describe('DatePicker', () => {
    it('renders correctly', () => {
        const { getByPlaceholderText } = render(<DatePicker placeholder="Pick a date" />)
        expect(getByPlaceholderText('Pick a date')).toBeInTheDocument()
    })
})
