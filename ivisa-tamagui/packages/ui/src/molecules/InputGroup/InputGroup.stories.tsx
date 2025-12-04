import type { Meta, StoryObj } from '@storybook/react'
import { InputGroup, InputGroupItem } from './InputGroup'
import { Input } from '../../atoms/Input'
import { Button } from '../../atoms/Button'
import { Search } from '@tamagui/lucide-icons'

const meta: Meta<typeof InputGroup> = {
  title: 'Molecules/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'An InputGroup component is a wrapper for an input and a button.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof InputGroup>

export const WithIconButton: Story = {
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

export const WithButton: Story = {
    render: () => (
      <InputGroup width={300}>
          <InputGroupItem>
              <Input flex={1} placeholder="Email..." />
          </InputGroupItem>
          <InputGroupItem>
              <Button>Subscribe</Button>
          </InputGroupItem>
      </InputGroup>
    ),
  }
