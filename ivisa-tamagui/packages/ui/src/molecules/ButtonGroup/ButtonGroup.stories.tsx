import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGroup, ButtonGroupItem } from './ButtonGroup'
import { Button } from '../../atoms/Button'
import { SizableStackProps } from 'tamagui'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Molecules/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A ButtonGroup is used to group related buttons together. It uses Tamagui`s XGroup.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['$2', '$3', '$4', '$5', '$6'],
      description: 'The size of the buttons in the group.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables all buttons in the group.',
    },
    bordered: {
      control: 'boolean',
      description: 'Adds a border around the entire group.',
    },
  },
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

const renderButtons = (args: SizableStackProps) => (
  <ButtonGroup {...args}>
    <ButtonGroupItem>
      <Button>One</Button>
    </ButtonGroupItem>
    <ButtonGroupItem>
      <Button>Two</Button>
    </ButtonGroupItem>
    <ButtonGroupItem>
      <Button>Three</Button>
    </ButtonGroupItem>
  </ButtonGroup>
)

export const Default: Story = {
  args: {
    size: '$4',
    disabled: false,
    bordered: true,
  },
  render: renderButtons,
}

export const Variants: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupItem>
        <Button>Default</Button>
      </ButtonGroupItem>
      <ButtonGroupItem>
        <Button variant="outline">Outline</Button>
      </ButtonGroupItem>
      <ButtonGroupItem>
        <Button variant="ghost">Ghost</Button>
      </ButtonGroupItem>
    </ButtonGroup>
  ),
}

export const Sizes: Story = {
  render: () => (
    <>
      <ButtonGroup size="$3" marginBottom="$2">
        <ButtonGroupItem>
          <Button>Small</Button>
        </ButtonGroupItem>
        <ButtonGroupItem>
          <Button>Small</Button>
        </ButtonGroupItem>
      </ButtonGroup>
      <ButtonGroup size="$4">
        <ButtonGroupItem>
          <Button>Medium</Button>
        </ButtonGroupItem>
        <ButtonGroupItem>
          <Button>Medium</Button>
        </ButtonGroupItem>
      </ButtonGroup>
    </>
  ),
}
