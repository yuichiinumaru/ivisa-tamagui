// @ts-nocheck
import { render, screen } from '../../test-utils'
import { OTPInput } from './OTPInput'
import userEvent from '@testing-library/user-event'

describe('OTPInput', () => {
  it('renders correctly with given length', () => {
    render(<OTPInput length={4} />)
    const inputs = screen.getAllByRole('textbox') // type="text"
    expect(inputs).toHaveLength(4)
  })

  it('handles input and focus change', async () => {
    const user = userEvent.setup()
    render(<OTPInput length={4} />)
    const inputs = screen.getAllByRole('textbox')

    await user.type(inputs[0], '1')
    expect(inputs[0]).toHaveValue('1')
    // Should focus next input? JSDOM focus management might work
    expect(inputs[1]).toHaveFocus()
  })

  it('calls onComplete when filled', async () => {
    const user = userEvent.setup()
    const onComplete = jest.fn()
    render(<OTPInput length={3} onComplete={onComplete} />)
    const inputs = screen.getAllByRole('textbox')

    await user.type(inputs[0], '1')
    await user.type(inputs[1], '2')
    await user.type(inputs[2], '3')

    expect(onComplete).toHaveBeenCalledWith('123')
  })
})
