import '../../test-setup' // Import global mocks including IntersectionObserver
import { render, screen } from '../test-utils'
import { Slider } from './Slider'

describe('Slider', () => {
  it('renders', () => {
    render(<Slider defaultValue={[50]} max={100} step={1} />)
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })
})

