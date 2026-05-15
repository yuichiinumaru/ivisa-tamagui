import React from 'react'
import { Badge, BadgeProps } from '../Badge'

export type ComponentStatusVariant = 'stable' | 'experimental' | 'deprecated'

export interface ComponentStatusProps extends Omit<BadgeProps, 'children'> {
  status: ComponentStatusVariant
}

const statusConfig: Record<ComponentStatusVariant, { theme: string; label: string }> = {
  stable: { theme: 'green', label: 'Stable' },
  experimental: { theme: 'yellow', label: 'Experimental' },
  deprecated: { theme: 'red', label: 'Deprecated' },
}

export const ComponentStatus = ({ status, ...props }: ComponentStatusProps) => {
  const config = statusConfig[status]
  return (
    <Badge theme={config.theme} {...props}>
      {config.label}
    </Badge>
  )
}
