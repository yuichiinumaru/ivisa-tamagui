import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Usage
Buttons are used to trigger actions or navigation. They should be used for primary actions (Save, Submit) and secondary actions (Cancel, Back).

### Variants
- **Default**: Primary action.
- **Secondary**: Lower priority action.
- **Destructive**: Action that deletes or removes data.
- **Outline**: Alternative secondary action.
- **Ghost**: Minimalistic action, often used in toolbars.
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
}

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: 'secondary',
  },
}

export const Destructive: Story = {
  args: {
    ...Default.args,
    variant: 'destructive',
  },
}

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: 'ghost',
  },
}

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg',
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}
