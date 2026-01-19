import { render } from '../../test-utils'
import { MonthsPicker } from './MonthsPicker'

describe('MonthsPicker', () => {
    it('renders correctly', () => {
        const { getByText } = render(<MonthsPicker placeholder="Select Month" />)
        expect(getByText('Select Month')).toBeDefined()
    })
})

