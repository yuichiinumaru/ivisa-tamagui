import { render } from '../../../vitest.setup'
import { describe, it, expect } from 'vitest'
import { MonthsPicker } from './MonthsPicker'

describe('MonthsPicker', () => {
    it('renders correctly', () => {
        const { getByText } = render(<MonthsPicker placeholder="Select Month" />)
        expect(getByText('Select Month')).toBeDefined()
    })
})
