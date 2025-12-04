import type { Meta, StoryObj } from '@storybook/react'
import { InputGroup, InputGroupItem } from './InputGroup'
import { Input } from '../../atoms/Input'
import { Button } from '../../atoms/Button'
import { Search } from '@tamagui/lucide-icons'

const meta: Meta<typeof InputGroup> = {
  title: 'Molecules/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InputGroup>

export const WithButton: Story = {
  render: () => (
    <InputGroup width={300}>
        <InputGroupItem>
            <Input flex={1} placeholder="Search..." />
        </InputGroupItem>
        <InputGroupItem>
            <Button icon={Search} />
        </InputGroupItem>
    </InputGroup>
  ),
}
