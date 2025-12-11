import { render, screen } from '../../test-utils'
import { Field } from './Field'
import { Input } from '../../atoms/Input'

describe('Field', () => {
  it('renders label, input and error', () => {
    render(
      <Field>
        <Field.Label htmlFor="email">Email</Field.Label>
        <Field.Control>
          <Input id="email" />
        </Field.Control>
        <Field.Error>Error message</Field.Error>
      </Field>
    )
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Error message')).toBeInTheDocument()
  })

  it('associates the label with the input', () => {
    render(
      <Field>
        <Field.Label htmlFor="email">Email</Field.Label>
        <Field.Control>
          <Input id="email" />
        </Field.Control>
      </Field>
    )
    const label = screen.getByText('Email')
    const input = screen.getByLabelText('Email')
    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })
})
