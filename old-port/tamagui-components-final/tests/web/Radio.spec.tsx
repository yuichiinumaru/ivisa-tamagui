import { fireEvent, render, screen } from '../../vitest.setup'
import { vi } from 'vitest'

import { RadioGroup, RadioGroupItem } from '../../src/components/forms/Radio'

describe('RadioGroup', () => {
  it('renders items and allows changing the selection', () => {
    render(
      <RadioGroup defaultValue="option-1">
        <RadioGroupItem value="option-1">Option 1</RadioGroupItem>
        <RadioGroupItem value="option-2">Option 2</RadioGroupItem>
      </RadioGroup>
    )

    const radios = screen.getAllByRole('radio')
    expect(radios).toHaveLength(2)
    expect(radios[0]).toHaveAttribute('aria-checked', 'true')

    fireEvent.click(screen.getByLabelText('Option 2'))

    expect(radios[0]).toHaveAttribute('aria-checked', 'false')
    expect(radios[1]).toHaveAttribute('aria-checked', 'true')
  })

  it('invokes onValueChange when the value changes', () => {
    const handleValueChange = vi.fn()

    render(
      <RadioGroup value="option-1" onValueChange={handleValueChange}>
        <RadioGroupItem value="option-1">Option 1</RadioGroupItem>
        <RadioGroupItem value="option-2">Option 2</RadioGroupItem>
      </RadioGroup>
    )

    fireEvent.click(screen.getByLabelText('Option 2'))

    expect(handleValueChange).toHaveBeenCalledWith('option-2')
  })

  it('logs a warning when rendered without a visible label', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    render(
      <RadioGroup defaultValue="a">
        <RadioGroupItem value="a" aria-label="Alpha" />
      </RadioGroup>
    )

    expect(warnSpy).not.toHaveBeenCalledWith(expect.stringContaining('[RadioGroupItem] missing label'))

    warnSpy.mockRestore()
  })

  it('navigates and selects with keyboard arrows', () => {
    render(
      <RadioGroup defaultValue="option-1">
        <RadioGroupItem value="option-1">Option 1</RadioGroupItem>
        <RadioGroupItem value="option-2">Option 2</RadioGroupItem>
        <RadioGroupItem value="option-3">Option 3</RadioGroupItem>
      </RadioGroup>
    )

    const radios = screen.getAllByRole('radio')
    expect(radios[0]).toHaveAttribute('aria-checked', 'true')

    // Focus the first radio button
    fireEvent.focus(radios[0])

    // Navigate down
    fireEvent.keyDown(radios[0], { key: 'ArrowDown' })

    expect(radios[0]).toHaveAttribute('aria-checked', 'false')
    expect(radios[1]).toHaveAttribute('aria-checked', 'true')
    expect(radios[2]).toHaveAttribute('aria-checked', 'false')

    // Navigate down again
    fireEvent.keyDown(radios[1], { key: 'ArrowDown' })

    expect(radios[0]).toHaveAttribute('aria-checked', 'false')
    expect(radios[1]).toHaveAttribute('aria-checked', 'false')
    expect(radios[2]).toHaveAttribute('aria-checked', 'true')

    // Navigate up
    fireEvent.keyDown(radios[2], { key: 'ArrowUp' })

    expect(radios[0]).toHaveAttribute('aria-checked', 'false')
    expect(radios[1]).toHaveAttribute('aria-checked', 'true')
    expect(radios[2]).toHaveAttribute('aria-checked', 'false')
  })
})
