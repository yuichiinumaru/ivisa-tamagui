import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { Label } from 'tamagui'; // We might need to port Label properly, but for now use Tamagui's or just Text
import { XStack } from 'tamagui';

const CheckboxWithLabel = (args: any) => {
  const [checked, setChecked] = useState(args.checked || false);
  return (
    <XStack alignItems="center" gap="$3">
      <Checkbox id="terms" checked={checked} onCheckedChange={setChecked} {...args} />
      <Label htmlFor="terms" color="$foreground">Accept terms and conditions</Label>
    </XStack>
  );
};

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <CheckboxWithLabel {...args} />,
  args: {},
};

export const Checked: Story = {
  render: (args) => <CheckboxWithLabel {...args} />,
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  render: (args) => <CheckboxWithLabel {...args} />,
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  render: (args) => <CheckboxWithLabel {...args} />,
  args: {
    disabled: true,
    checked: true,
  },
};
