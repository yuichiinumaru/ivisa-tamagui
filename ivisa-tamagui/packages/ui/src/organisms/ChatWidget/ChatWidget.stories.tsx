
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { ChatWidget, Message } from './ChatWidget'


const meta: Meta<React.ComponentProps<typeof ChatWidget>> = {
  title: 'Organismos/ChatWidget',
  component: ChatWidget,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
      onSendMessage: { action: 'sent' }
  }
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof ChatWidget>>

const mockMessages: Message[] = [
    { id: '1', role: 'assistant', content: 'Olá! Como posso ajudar você hoje?', timestamp: new Date(Date.now() - 100000) },
    { id: '2', role: 'user', content: 'Gostaria de consultar meus débitos.', timestamp: new Date(Date.now() - 80000) },
    { id: '3', role: 'assistant', content: 'Claro. Por favor, informe seu CPF ou CNPJ.', timestamp: new Date(Date.now() - 60000) },
]

export const Padrao: Story = {
  args: {
    messages: mockMessages,
  },
}

export const Typing: Story = {
    args: {
        messages: mockMessages,
        isTyping: true,
    }
}

export const Empty: Story = {
    args: {
        messages: [],
    }
}
