import { render, screen, fireEvent } from '../../test-utils'
import { AnimatedSegmentedControl } from './AnimatedSegmentedControl'

describe('AnimatedSegmentedControl', () => {
    const items = [
        { value: 'tab1', label: 'Tab 1' },
        { value: 'tab2', label: 'Tab 2' },
        { value: 'tab3', label: 'Tab 3' },
    ]

    it('renders all options', () => {
        render(<AnimatedSegmentedControl value="tab1" onValueChange={() => {}} items={items} />)
        expect(screen.getByText('Tab 1')).toBeInTheDocument()
        expect(screen.getByText('Tab 2')).toBeInTheDocument()
        expect(screen.getByText('Tab 3')).toBeInTheDocument()
    })

    it('calls onValueChange when clicked', () => {
        const onChange = jest.fn()
        render(<AnimatedSegmentedControl value="tab1" onValueChange={onChange} items={items} />)

        fireEvent.click(screen.getByText('Tab 2'))
        expect(onChange).toHaveBeenCalledWith('tab2')
    })
})
