import { render, screen, fireEvent } from '../../../vitest.setup'

import { RadioGroup, RadioGroupItem } from '../../../src/components/forms/Radio'

describe('RadioGroup', () => {
  it('renders with items and allows selection', () => {
    const { asFragment } = render(
      <RadioGroup defaultValue="apple">
        <RadioGroupItem value="apple">Apple</RadioGroupItem>
        <RadioGroupItem value="banana">Banana</RadioGroupItem>
      </RadioGroup>
    )

    const radioGroup = screen.getByRole('radiogroup')
    expect(radioGroup).toBeInTheDocument()

    const appleRadio = screen.getByRole('radio', { name: /apple/i })
    const bananaRadio = screen.getByRole('radio', { name: /banana/i })

    expect(appleRadio).toBeChecked()
    expect(bananaRadio).not.toBeChecked()

    fireEvent.click(bananaRadio)

    expect(appleRadio).not.toBeChecked()
    expect(bananaRadio).toBeChecked()
    expect(asFragment()).toMatchSnapshot()
  })

  it('navigates with arrow keys', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="apple">Apple</RadioGroupItem>
        <RadioGroupItem value="banana">Banana</RadioGroupItem>
        <RadioGroupItem value="cherry">Cherry</RadioGroupItem>
      </RadioGroup>
    )

    const appleRadio = screen.getByRole('radio', { name: /apple/i })
    const bananaRadio = screen.getByRole('radio', { name: /banana/i })
    const cherryRadio = screen.getByRole('radio', { name: /cherry/i })

    appleRadio.focus()
    fireEvent.keyDown(document.activeElement!, { key: 'ArrowDown' })
    expect(bananaRadio).toHaveFocus()

    fireEvent.keyDown(document.activeElement!, { key: 'ArrowDown' })
    expect(cherryRadio).toHaveFocus()

    fireEvent.keyDown(document.activeElement!, { key: 'ArrowUp' })
    expect(bananaRadio).toHaveFocus()
  })

  it('disables items correctly', () => {
    render(
      <RadioGroup defaultValue="apple">
        <RadioGroupItem value="apple">Apple</RadioGroupItem>
        <RadioGroupItem value="banana" disabled>
          Banana
        </RadioGroupItem>
      </RadioGroup>
    )

    const bananaRadio = screen.getByRole('radio', { name: /banana/i })
    expect(bananaRadio).toBeDisabled()
    fireEvent.click(bananaRadio)
    expect(bananaRadio).not.toBeChecked()
  })
})
