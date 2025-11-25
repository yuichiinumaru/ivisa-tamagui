
import { fireEvent, render, screen } from '../utils/render'
import { vi } from 'vitest'

import { Select } from '../../src/components/forms/Select'

describe('Select', () => {
  it('renders and allows selecting an item', () => {
    const { asFragment } = render(
      <Select>
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
        </Select.Content>
      </Select>
    )

    // Check for placeholder
    expect(screen.getByText('Select a fruit')).toBeInTheDocument()

    // Open the select (Tamagui exposes a combobox trigger on web)
    const trigger = screen.getByRole('combobox')
    fireEvent.click(trigger)

    // Snapshot after opening
    expect(asFragment()).toMatchSnapshot()

    // Choose banana
    fireEvent.click(screen.getByText('Banana'))

    // Value should update in trigger
    expect(screen.getByRole('combobox')).toHaveTextContent('Banana')
  })

  it('logs a warning when Select.Content receives no options', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    render(
      <Select defaultOpen>
        <Select.Trigger>
          <Select.Value placeholder="Empty" />
        </Select.Trigger>
        <Select.Content />
      </Select>
    )

    expect(warnSpy).toHaveBeenCalled()
    const [message] = warnSpy.mock.calls[0]
    expect(message).toContain('[Select.Content] empty option list')

    warnSpy.mockRestore()
  })

  describe('Keyboard Interactions', () => {
    it('opens with Space, navigates with arrows, selects with Enter', () => {
      render(
        <Select>
          <Select.Trigger>
            <Select.Value placeholder="Select a fruit" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="cherry">Cherry</Select.Item>
          </Select.Content>
        </Select>
      )

      const trigger = screen.getByRole('combobox')
      trigger.focus()

      // Open with Space
      fireEvent.keyDown(trigger, { key: ' ' })
      expect(screen.getByText('Apple')).toBeVisible()

      // Navigate down to Banana
      fireEvent.keyDown(trigger, { key: 'ArrowDown' })
      // Navigate down to Cherry
      fireEvent.keyDown(trigger, { key: 'ArrowDown' })

      // Select Cherry with Enter
      fireEvent.keyDown(trigger, { key: 'Enter' })
      expect(screen.getByRole('combobox')).toHaveTextContent('Cherry')
    })

    it('returns focus to the trigger on close', () => {
      render(
        <Select>
          <Select.Trigger>
            <Select.Value placeholder="Select a fruit" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="apple">Apple</Select.Item>
          </Select.Content>
        </Select>
      )

      const trigger = screen.getByRole('combobox')
      trigger.focus()
      expect(trigger).toHaveFocus()

      // Open and close
      fireEvent.click(trigger)
      fireEvent.keyDown(trigger, { key: 'Escape' })

      expect(trigger).toHaveFocus()
    })
  })
})
