import { render, screen } from '../../../vitest.setup'
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
    // Icon is mocked as div with testid
    expect(screen.getByTestId('chevron-down-icon')).toBeInTheDocument()
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
