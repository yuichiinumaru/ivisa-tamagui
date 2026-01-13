// @ts-nocheck

import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { AgentAnimationPanel } from './AgentAnimationPanel'


const meta: Meta<React.ComponentProps<typeof AgentAnimationPanel>> = {
  title: 'Organismos/AgentAnimationPanel',
  component: AgentAnimationPanel,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof AgentAnimationPanel>>

const events = [
  {
    id: '1',
    timestamp: new Date().toISOString(),
    message: 'Agente iniciado',
    type: 'info' as const,
  },
  {
    id: '2',
    timestamp: new Date(Date.now() + 1000).toISOString(),
    message: 'Processando dados da câmera',
    type: 'working' as const,
  },
  {
    id: '3',
    timestamp: new Date(Date.now() + 2000).toISOString(),
    message: 'Violação detectada: Falta de EPI',
    type: 'warning' as const,
  },
  {
    id: '4',
    timestamp: new Date(Date.now() + 3000).toISOString(),
    message: 'Erro ao conectar com servidor de logs',
    type: 'error' as const,
  },
  {
    id: '5',
    timestamp: new Date(Date.now() + 4000).toISOString(),
    message: 'Análise concluída com sucesso',
    type: 'success' as const,
  },
]

export const Default: Story = {
  args: {
    agentName: 'Fiscal Virtual #01',
    agentStatus: 'working',
    events: events,
  },
  render: (args) => (
    <div style={{ width: 400, height: 500 }}>
      <AgentAnimationPanel {...args} />
    </div>
  ),
}

export const EmptyState: Story = {
  args: {
    agentName: 'Fiscal Virtual #02',
    agentStatus: 'idle',
    events: [],
  },
  render: (args) => (
    <div style={{ width: 400, height: 300 }}>
      <AgentAnimationPanel {...args} />
    </div>
  ),
}

export const ErrorState: Story = {
  args: {
    agentName: 'Fiscal Virtual #03',
    agentStatus: 'error',
    events: events.slice(0, 4),
  },
  render: (args) => (
    <div style={{ width: 400, height: 400 }}>
      <AgentAnimationPanel {...args} />
    </div>
  ),
}
