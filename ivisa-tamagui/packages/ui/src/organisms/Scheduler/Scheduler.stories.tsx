// @ts-nocheck

// import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Scheduler } from './Scheduler'
import { addHours, startOfToday, addDays } from 'date-fns'


const meta: Meta<React.ComponentProps<typeof Scheduler>> = {
  title: 'Organismos/Scheduler',
  component: Scheduler,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof Scheduler>>

const today = startOfToday()

const mockEvents = [
  {
    id: '1',
    title: 'Reunião de Alinhamento',
    start: addHours(today, 10),
    end: addHours(today, 11),
  },
  {
    id: '2',
    title: 'Almoço de Equipe',
    start: addHours(today, 12),
    end: addHours(today, 13.5),
  },
  {
    id: '3',
    title: 'Review de Código',
    start: addHours(addDays(today, 1), 14),
    end: addHours(addDays(today, 1), 15),
  },
]

export const Padrao: Story = {
  args: {
    events: mockEvents,
    onEventClick: (e) => alert(`Clicou no evento: ${e.title}`),
    onAddEvent: (d) => alert(`Adicionar evento em: ${d.toLocaleDateString()}`),
  },
}

export const Carregando: Story = {
    args: {
        isLoading: true,
        events: []
    }
}

export const Empty: Story = {
    args: {
        events: []
    }
}
