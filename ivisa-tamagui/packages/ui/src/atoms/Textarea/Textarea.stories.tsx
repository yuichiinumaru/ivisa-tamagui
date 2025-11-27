import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    invalid: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
    width: 300,
  },
};

export const Filled: Story = {
  args: {
    placeholder: 'Filled textarea...',
    width: 300,
    variant: 'filled',
  },
};

export const Invalid: Story = {
  args: {
    placeholder: 'Invalid input...',
    width: 300,
    invalid: true,
    defaultValue: 'Some invalid content',
  },
};

export const Large: Story = {
  args: {
    placeholder: 'Large textarea',
    width: 400,
    size: 'lg',
  },
};
