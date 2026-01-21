// @ts-nocheck
import React from 'react'
import { Dialog, DialogContent } from '../../molecules/Dialog'
import { AgentAnimationPanel, AgentAnimationPanelProps } from '../AgentAnimationPanel/AgentAnimationPanel'

export interface AgentAnimationModalProps extends AgentAnimationPanelProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const AgentAnimationModal: React.FC<AgentAnimationModalProps> = ({
  open,
  onOpenChange,
  ...panelProps
}) => {
  return (
    <Dialog modal open={open} onOpenChange={onOpenChange}>
      <DialogContent padding={0} maxWidth={600} maxHeight="80vh">
        <AgentAnimationPanel {...panelProps} />
      </DialogContent>
    </Dialog>
  )
}

