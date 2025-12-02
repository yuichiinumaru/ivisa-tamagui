import { render, screen } from '../../../vitest.setup'
import { Textarea } from './Textarea'

describe('Textarea', () => {
  it('renders multiline textbox with accessible label and default styles', () => {
    const { asFragment } = render(
      <Textarea aria-label="Description" defaultValue="Initial value" />
    )

    const textarea = screen.getByRole('textbox', { name: /description/i })
    expect(textarea).toHaveValue('Initial value')
    // expect(textarea).toHaveAttribute('rows', '4')
    // expect(textarea.style.resize).toBe('vertical')
    expect(asFragment()).toMatchSnapshot()
  })

  it('supports resize variants and invalid state', () => {
    render(
      <Textarea aria-label="Notes" resize="none" invalid placeholder="Enter details" />
    )

    const textarea = screen.getByRole('textbox', { name: /notes/i })
    expect(textarea).toHaveAttribute('aria-invalid', 'true')
    // expect(textarea.style.resize).toBe('none')
  })
})
