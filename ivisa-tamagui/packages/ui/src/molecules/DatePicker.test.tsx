import { render } from '../test-utils'
import { DatePicker } from './DatePicker'

jest.mock('@tamagui/lucide-icons', () => ({
    Calendar: () => <div data-testid="calendar-icon" />
}))

describe('DatePicker', () => {
    it('renders correctly', () => {
        const { getByText } = render(<DatePicker placeholder="Pick a date" />)
        expect(getByText('Pick a date')).toBeDefined()
    })
})
