import type { Meta, StoryObj } from '@storybook/react'
import { TimelineAudit } from './TimelineAudit'

const meta: Meta<typeof TimelineAudit> = {
  title: 'Organismos/TimelineAudit',
  component: TimelineAudit,
  tags: ['autodocs'],
  args: {
    events: [
      {
        id: '1',
        user: 'Ana Silva',
        userInitials: 'AS',
        action: 'criou o processo',
        timestamp: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        id: '2',
        user: 'Carlos Souza',
        userInitials: 'CS',
        action: 'adicionou um anexo',
        details: 'Relatório_Fiscal_v1.pdf',
        timestamp: new Date(Date.now() - 43200000).toISOString(),
      },
      {
        id: '3',
        user: 'Roberto Admin',
        userInitials: 'RA',
        action: 'aprovou com ressalvas',
        timestamp: new Date().toISOString(),
        diff: 'Status: Em Análise -> Aprovado',
      },
    ],
  },
}

export default meta
type Story = StoryObj<typeof TimelineAudit>

export const Default: Story = {}
