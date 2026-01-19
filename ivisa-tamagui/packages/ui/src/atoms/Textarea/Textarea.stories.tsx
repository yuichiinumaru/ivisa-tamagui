import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'

import { Textarea } from './Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'Átomos/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'subtle'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    invalid: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Textarea>

export const Padrao: Story = {
  args: {
    variant: 'default',
    size: 'default',
    placeholder: 'Digite sua mensagem aqui...',
    label: 'Mensagem',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByLabelText('Mensagem')
    await userEvent.type(textarea, 'This is a test message.', {
      delay: 100,
    })
  },
}

export const Filled: Story = {
  args: {
    ...Padrao.args,
    variant: 'filled',
  },
}

export const Subtle: Story = {
  args: {
    ...Padrao.args,
    variant: 'subtle',
  },
}

export const Small: Story = {
  args: {
    ...Padrao.args,
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    ...Padrao.args,
    size: 'lg',
  },
}

export const Disabled: Story = {
  args: {
    ...Padrao.args,
    disabled: true,
  },
}

export const Invalid: Story = {
  args: {
    ...Padrao.args,
    invalid: true,
  },
}

export const TextoLongo: Story = {
  args: {
    ...Padrao.args,
    defaultValue:
      'This is a very long text to test the wrapping behavior of the textarea component. It should wrap to the next line when it reaches the end of the container.',
  },
}

export const RestritoContainer: Story = {
  args: {
    ...Padrao.args,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 200 }}>
        <Story />
      </div>
    ),
  ],
}

export const Carregando: Story = {
  args: {
    ...Padrao.args,
    loading: true,
  },
}

