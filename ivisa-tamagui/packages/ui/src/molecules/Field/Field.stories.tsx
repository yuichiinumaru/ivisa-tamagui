import type { Meta, StoryObj } from '@storybook/react'
import { Field, FieldLabel, FieldControl, FieldError } from './Field'
import { Input } from '../../atoms/Input'

const meta: Meta<typeof Field> = {
  title: 'Molecules/Field',
  component: Field,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A Field component is a wrapper for a label, input, and error message.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Field>

export const WithError: Story = {
  render: () => (
    <Field width={300}>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <FieldControl>
        <Input id="email" placeholder="hello@example.com" />
      </FieldControl>
      <FieldError>Invalid email address</FieldError>
    </Field>
  ),
}

export const WithoutError: Story = {
    render: () => (
      <Field width={300}>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <FieldControl>
          <Input id="email" placeholder="hello@example.com" />
        </FieldControl>
      </Field>
    ),
  }
