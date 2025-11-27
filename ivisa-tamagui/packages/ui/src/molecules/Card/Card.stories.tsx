import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
import { Button } from '../../atoms/Button';
import { Text } from 'tamagui';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card width={350} {...args}>
      <CardHeader>
        <CardTitle>Create Project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <Text>Project configuration content goes here.</Text>
      </CardContent>
      <CardFooter>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
  args: {
    variant: 'default',
  },
};

export const Elevated: Story = {
  render: (args) => (
    <Card width={350} {...args}>
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>This card has a shadow elevation.</CardDescription>
      </CardHeader>
      <CardContent>
        <Text>Content with elevation.</Text>
      </CardContent>
      <CardFooter>
        <Button variant="secondary">Cancel</Button>
        <Button ml="$2">Save</Button>
      </CardFooter>
    </Card>
  ),
  args: {
    variant: 'elevated',
  },
};
