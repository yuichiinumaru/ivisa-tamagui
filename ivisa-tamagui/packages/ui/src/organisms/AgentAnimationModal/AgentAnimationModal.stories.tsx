// @ts-nocheck

import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { AgentAnimationModal } from './AgentAnimationModal'
import { Button } from '../../atoms/Button'
import { useArgs } from '@storybook/preview-api'


const meta: Meta<React.ComponentProps<typeof AgentAnimationModal>> = {
  title: 'Organismos/AgentAnimationModal',
  component: AgentAnimationModal,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof AgentAnimationModal>>

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
]

export const Default: Story = {
  args: {
    open: false,
    agentName: 'Fiscal Virtual #01',
    agentStatus: 'working',
    events: events,
  },
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs()

    return (
      <>
        <Button onPress={() => updateArgs({ open: true })}>Abrir Monitoramento</Button>
        <AgentAnimationModal
          {...args}
          open={open}
          onOpenChange={(isOpen) => updateArgs({ open: isOpen })}
        />
      </>
    )
  },
}

export type RenderProps = React.ComponentProps<typeof Render>
