// @vitest-environment jsdom
import { fireEvent, render, screen } from '../../../vitest.setup'
import { vi } from 'vitest'

import { Select } from './Select'

describe('Select', () => {
  // TODO: Fix Radix Select interaction in JSDOM
  it.skip('renders and allows selecting an item', async () => {
    const { asFragment, user } = render(
      <Select>
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="apple"><Select.ItemText>Apple</Select.ItemText></Select.Item>
          <Select.Item value="banana"><Select.ItemText>Banana</Select.ItemText></Select.Item>
        </Select.Content>
      </Select>
    )

    // Check for placeholder
    expect(screen.getByText('Select a fruit')).toBeInTheDocument()

    // Open the select (Tamagui exposes a combobox trigger on web)
    const trigger = screen.getByRole('combobox')
    await user.click(trigger)

    // Snapshot after opening
    expect(asFragment()).toMatchSnapshot()

    // Choose banana
    await user.click(screen.getByText('Banana'))

    // Value should update in trigger
    expect(screen.getByRole('combobox')).toHaveTextContent('Banana')
  })

  describe('Keyboard Interactions', () => {
    // TODO: Fix Radix Select interaction in JSDOM
    it.skip('opens with Space, navigates with arrows, selects with Enter', () => {
      render(
        <Select>
          <Select.Trigger>
            <Select.Value placeholder="Select a fruit" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="apple"><Select.ItemText>Apple</Select.ItemText></Select.Item>
            <Select.Item value="banana"><Select.ItemText>Banana</Select.ItemText></Select.Item>
            <Select.Item value="cherry"><Select.ItemText>Cherry</Select.ItemText></Select.Item>
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
            <Select.Item value="apple"><Select.ItemText>Apple</Select.ItemText></Select.Item>
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
