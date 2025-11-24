import type { Meta, StoryObj } from '@storybook/react';
import { IvisaButton } from './Button';

const meta: Meta<typeof IvisaButton> = {
  title: 'Primitives/IvisaButton',
  component: IvisaButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    theme: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
  },
};
