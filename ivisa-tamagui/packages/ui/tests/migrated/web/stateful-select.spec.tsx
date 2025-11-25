
import { render, screen, fireEvent, act } from '../../vitest.setup'
import { vi } from 'vitest'

import { StatefulSelect } from '../../src/components/forms/StatefulSelect'
import { Select } from '../../src/components/forms/Select'

describe('StatefulSelect', () => {
  it('renders and allows selecting an item', () => {
    const { asFragment } = render(
      <StatefulSelect>
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
        </Select.Content>
      </StatefulSelect>
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
      <StatefulSelect defaultOpen>
        <Select.Trigger>
          <Select.Value placeholder="Empty" />
        </Select.Trigger>
        <Select.Content />
      </StatefulSelect>
    )

    expect(warnSpy).toHaveBeenCalled()
    const [message] = warnSpy.mock.calls[0]
    expect(message).toContain('[Select.Content] empty option list')

    warnSpy.mockRestore()
  })
})
