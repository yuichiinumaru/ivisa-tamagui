import { render, screen } from '../../vitest.setup'
import { Slider } from './Slider'

describe('Slider', () => {
  it('renders', () => {
    render(<Slider defaultValue={[50]} max={100} step={1} />)
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })
})
