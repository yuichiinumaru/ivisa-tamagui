import type { Meta, StoryObj } from '@storybook/react'
import { NativeSelect } from './NativeSelect'

const meta: Meta<typeof NativeSelect> = {
  title: 'Molecules/NativeSelect',
  component: NativeSelect,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A native select component that uses the browser\'s native select element.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof NativeSelect>

export const Default: Story = {
  render: () => (
    <NativeSelect width={200}>
      <option>-- Please select --</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </NativeSelect>
  ),
}

export const Disabled: Story = {
  render: () => (
    <NativeSelect width={200} disabled>
      <option>-- Please select --</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </NativeSelect>
  ),
}
