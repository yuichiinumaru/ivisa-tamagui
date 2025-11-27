import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type something...',
    width: 300,
    variant: 'default',
  },
};

export const Filled: Story = {
  args: {
    placeholder: 'Filled input...',
    width: 300,
    variant: 'filled',
  },
};

export const Small: Story = {
  args: {
    placeholder: 'Small input',
    width: 200,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    placeholder: 'Large input',
    width: 350,
    size: 'lg',
  },
};
