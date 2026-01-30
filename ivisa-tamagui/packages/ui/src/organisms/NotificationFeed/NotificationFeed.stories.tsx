// @ts-nocheck
import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { NotificationFeed } from './NotificationFeed'

const meta: Meta<typeof NotificationFeed> = {
  title: 'Organismos/NotificationFeed',
  component: NotificationFeed,
}

export default meta

type Story = StoryObj<typeof NotificationFeed>

const notifications = [
  {
    id: '1',
    title: 'Nova mensagem',
    description: 'Você recebeu uma nova mensagem de João.',
    date: 'Há 5 min',
    isRead: false,
  },
  {
    id: '2',
    title: 'Atualização do sistema',
    description: 'O sistema será atualizado às 22h.',
    date: 'Há 1 hora',
    isRead: true,
  },
  {
    id: '3',
    title: 'Bem-vindo!',
    description: 'Obrigado por se cadastrar na nossa plataforma.',
    date: 'Há 1 dia',
    isRead: true,
  },
]

export const Default: Story = {
  args: {
    notifications,
    onMarkAllAsRead: () => alert('Todas lidas!'),
    onMarkAsRead: (id) => alert(`Lida: ${id}`),
  },
}

export const Loading: Story = {
  args: {
    isLoading: true,
    notifications: [],
  },
}

export const Empty: Story = {
  args: {
    notifications: [],
  },
}
