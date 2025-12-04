import type { Meta, StoryObj } from '@storybook/react'
import { NativeSelect } from './NativeSelect'

const meta: Meta<typeof NativeSelect> = {
  title: 'Molecules/NativeSelect',
  component: NativeSelect,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NativeSelect>

export const Default: Story = {
  render: () => (
    <NativeSelect width={200}>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
    </NativeSelect>
  ),
}
