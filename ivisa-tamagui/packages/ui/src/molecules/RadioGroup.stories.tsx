import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from './RadioGroup'
import { XStack, YStack, Label } from 'tamagui'
import { useState } from 'react'

const meta: Meta<typeof RadioGroup> = {
  title: 'molecules/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'The controlled value of the radio group.',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the radio group.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio group is disabled.',
    },
  },
  render: (args) => {
    const [value, setValue] = useState(args.value || 'option1');

    const handleChange = (newValue: string) => {
      setValue(newValue);
      console.log('valueChange', newValue);
    };

    return (
      <RadioGroup {...args} value={value} onValueChange={handleChange}>
        <YStack gap="$2">
          <XStack alignItems="center" gap="$2">
            <RadioGroupItem value="option1" id="option1">
            </RadioGroupItem>
            <Label htmlFor="option1">Option One</Label>
          </XStack>

          <XStack alignItems="center" gap="$2">
            <RadioGroupItem value="option2" id="option2">
            </RadioGroupItem>
            <Label htmlFor="option2">Option Two</Label>
          </XStack>

          <XStack alignItems="center" gap="$2">
            <RadioGroupItem value="option3" id="option3">
            </RadioGroupItem>
            <Label htmlFor="option3">Option Three</Label>
          </XStack>
        </YStack>
      </RadioGroup>
    );
  },
}

export default meta

type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  args: {
    value: 'option1',
    orientation: 'vertical',
  },
}

export const Horizontal: Story = {
  args: {
    value: 'option2',
    orientation: 'horizontal',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value || 'option1');

    const handleChange = (newValue: string) => {
      setValue(newValue);
      console.log('valueChange', newValue);
    };
    return (
      <RadioGroup {...args} value={value} onValueChange={handleChange}>
        <XStack gap="$4" alignItems="center">
          <XStack alignItems="center" gap="$2">
            <RadioGroupItem value="option1" id="option1-h">
            </RadioGroupItem>
            <Label htmlFor="option1-h">Option One</Label>
          </XStack>

          <XStack alignItems="center" gap="$2">
            <RadioGroupItem value="option2" id="option2-h">
            </RadioGroupItem>
            <Label htmlFor="option2-h">Option Two</Label>
          </XStack>

          <XStack alignItems="center" gap="$2">
            <RadioGroupItem value="option3" id="option3-h">
            </RadioGroupItem>
            <Label htmlFor="option3-h">Option Three</Label>
          </XStack>
        </XStack>
      </RadioGroup>
    );
  },
}

export const Disabled: Story = {
  args: {
    value: 'option1',
    orientation: 'vertical',
    disabled: true,
  },
}
