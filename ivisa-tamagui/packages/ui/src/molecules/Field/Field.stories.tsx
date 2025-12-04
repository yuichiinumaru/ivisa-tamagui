import type { Meta, StoryObj } from '@storybook/react'
import { Field, FieldLabel, FieldControl, FieldError } from './Field'
import { Input } from '../../atoms/Input'

const meta: Meta<typeof Field> = {
  title: 'Molecules/Field',
  component: Field,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Field>

export const Default: Story = {
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
