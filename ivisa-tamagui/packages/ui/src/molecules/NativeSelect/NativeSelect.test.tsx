import { render, screen } from '../../../vitest.setup'
import { NativeSelect } from './NativeSelect'

describe('NativeSelect', () => {
  it('renders select element', () => {
    render(
      <NativeSelect data-testid="select">
        <option value="1">Option 1</option>
      </NativeSelect>
    )
    // Check for option text which implies select is rendered (since it's a child)
    // Or try getting by role 'combobox' or 'listbox' if browser supports it for select
    // But basic test:
    expect(screen.getByText('Option 1')).toBeInTheDocument()
  })
})
