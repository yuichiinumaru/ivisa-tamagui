import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { InputGPT } from './InputGPT'

const meta: Meta<typeof InputGPT> = {
  title: 'Molecules/InputGPT',
  component: InputGPT,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSend: (text) => console.log('Enviado:', text),
  },
  render: (args) => <InputGPT {...args} />,
}

export const WithCustomPlaceholder: Story = {
  args: {
    placeholder: 'Digite uma pergunta para o assistente...',
    onSend: (text) => console.log('Enviado:', text),
  },
  render: (args) => <InputGPT {...args} />,
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Desabilitado',
    onSend: (text) => console.log('Enviado:', text),
  },
  render: (args) => <InputGPT {...args} />,
}
