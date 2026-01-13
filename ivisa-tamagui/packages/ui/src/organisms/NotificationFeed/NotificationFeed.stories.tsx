// @ts-nocheck
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { NotificationFeed } from './NotificationFeed'

const meta: Meta<React.ComponentProps<typeof NotificationFeed>> = {
  title: 'Organismos/NotificationFeed',
  component: NotificationFeed,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof NotificationFeed>>

const notifications = [
  {
    id: '1',
    title: 'Nova Mensagem',
    description: 'Você recebeu uma mensagem de João Silva.',
    date: '2 horas atrás',
    isRead: false,
  },
  {
    id: '2',
    title: 'Atualização do Sistema',
    description: 'A manutenção programada foi concluída com sucesso.',
    date: '1 dia atrás',
    isRead: true,
  },
  {
    id: '3',
    title: 'Lembrete de Reunião',
    description: 'Reunião de alinhamento em 15 minutos.',
    date: '1 dia atrás',
    isRead: true,
  },
  {
    id: '4',
    title: 'Documento Aprovado',
    description: 'O relatório Q3 foi aprovado pela diretoria.',
    date: '2 dias atrás',
    isRead: true,
  },
]

export const Padrao: Story = {
  args: {
    notifications: notifications,
    onMarkAsRead: (id) => console.log('Mark read:', id),
    onMarkAllAsRead: () => console.log('Mark all read'),
  },
}

export const Empty: Story = {
  args: {
    notifications: [],
    emptyMessage: 'Nenhuma notificação encontrada',
  },
}

export const LimitedHeight: Story = {
  args: {
    notifications: [...notifications, ...notifications, ...notifications], // more data to scroll
    maxHeight: 300,
    onMarkAsRead: (id) => console.log('Mark read:', id),
  },
}
