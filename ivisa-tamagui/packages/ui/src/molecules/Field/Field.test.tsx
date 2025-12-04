import { render, screen } from '../../../vitest.setup'
import { Field, FieldLabel, FieldControl, FieldError } from './Field'
import { Input } from '../../atoms/Input'

describe('Field', () => {
  it('renders label, input and error', () => {
    render(
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <FieldControl>
            <Input id="email" />
        </FieldControl>
        <FieldError>Error message</FieldError>
      </Field>
    )
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Error message')).toBeInTheDocument()
  })

  it('associates the label with the input', () => {
    render(
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <FieldControl>
            <Input id="email" />
        </FieldControl>
      </Field>
    )
    const label = screen.getByText('Email')
    const input = screen.getByLabelText('Email')
    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })
})
