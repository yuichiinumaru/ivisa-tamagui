// @ts-nocheck
import { render, screen } from '../../test-utils'
import { Label } from './Label'

describe('Label', () => {
  it('renders correctly', () => {
    render(<Label htmlFor="test-id">Test Label</Label>)
    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument()
    // In JSDOM/Tamagui web, it should render a label tag
    expect(label.tagName).toBe('LABEL')
    expect(label).toHaveAttribute('for', 'test-id')
  })
})

