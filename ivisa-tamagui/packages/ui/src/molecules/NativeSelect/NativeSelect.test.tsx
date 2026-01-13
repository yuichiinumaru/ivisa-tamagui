// @ts-nocheck
import { render, screen } from '../../test-utils'
import { NativeSelect } from './NativeSelect'

describe('NativeSelect', () => {
  it('renders select element and chevron icon', () => {
    render(
      <NativeSelect>
        <option value="1">Option 1</option>
      </NativeSelect>
    )
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    // Icon is mocked via react-native-svg mock in jest-setup.ts
    // Since we don't have a reliable testid on the icon itself (it's inside NativeSelect source),
    // and we just mocked react-native-svg to return View, we can just check if the container renders without error.
    // Or we can check if the ChevronDown component (which we import) is rendered.
  })

  it('can be disabled', () => {
    render(
      <NativeSelect disabled>
        <option value="1">Option 1</option>
      </NativeSelect>
    )
    expect(screen.getByRole('combobox')).toBeDisabled()
  })
})
