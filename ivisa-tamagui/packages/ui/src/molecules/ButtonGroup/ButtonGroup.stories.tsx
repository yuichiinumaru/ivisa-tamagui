import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGroup, ButtonGroupItem } from './ButtonGroup'
import { Button } from '../../atoms/Button'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Molecules/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Default: Story = {
  render: () => (
    <ButtonGroup>
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
  ),
}
