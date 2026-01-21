// @ts-nocheck
import React from 'react'
import { styled, YStack, XStack, ScrollView } from 'tamagui'
import { Activity, AlertCircle, CheckCircle, Info } from '@tamagui/lucide-icons'
import { Card, CardHeader, CardTitle, CardContent } from '../../molecules/Card'
import { Typography } from '../../atoms/Typography'
import { Badge } from '../../atoms/Badge'
import { Empty } from '../../molecules/Empty'

const EventList = styled(YStack, {
  gap: '$3',
  padding: '$2',
})

const EventItem = styled(XStack, {
  backgroundColor: '$background',
  padding: '$3',
  borderRadius: '$md',
  borderWidth: 1,
  borderColor: '$borderColor',
  alignItems: 'center',
  gap: '$3',
  animation: 'quick',
  enterStyle: { opacity: 0, y: 10 },
})

const Timestamp = styled(Typography, {
  fontSize: '$2',
  color: '$mutedForeground',
  minWidth: 50,
})

export interface AgentEvent {
  id: string
  timestamp: string
  message: string
  type: 'info' | 'warning' | 'error' | 'working' | 'success'
}

export interface AgentAnimationPanelProps {
  agentName: string
  agentStatus: 'idle' | 'working' | 'error' | 'success'
  events: AgentEvent[]
}

const StatusIcon = ({ type }: { type: AgentEvent['type'] }) => {
  switch (type) {
    case 'error':
      return <AlertCircle size={16} color="$red10" />
    case 'success':
      return <CheckCircle size={16} color="$green10" />
    case 'working':
      return <Activity size={16} color="$blue10" />
    case 'warning':
      return <AlertCircle size={16} color="$yellow10" />
    default:
      return <Info size={16} color="$gray10" />
  }
}

export const AgentAnimationPanel: React.FC<AgentAnimationPanelProps> = ({
  agentName,
  agentStatus,
  events,
}) => {
  return (
    <Card width="100%" height="100%" maxHeight={600}>
      <CardHeader>
        <XStack justifyContent="space-between" alignItems="center">
          <CardTitle>{agentName}</CardTitle>
          <Badge variant={agentStatus === 'error' ? 'destructive' : 'default'}>
            {agentStatus.toUpperCase()}
          </Badge>
        </XStack>
      </CardHeader>
      <CardContent>
        <ScrollView maxHeight={400}>
          {events.length === 0 ? (
            <Empty
              title="Nenhum evento registrado"
              description="Aguardando atividades do agente..."
            />
          ) : (
            <EventList>
              {events.map((event) => (
                <EventItem key={event.id}>
                  <StatusIcon type={event.type} />
                  <YStack flex={1}>
                    <Typography>{event.message}</Typography>
                    <Timestamp>{new Date(event.timestamp).toLocaleTimeString()}</Timestamp>
                  </YStack>
                </EventItem>
              ))}
            </EventList>
          )}
        </ScrollView>
      </CardContent>
    </Card>
  )
}

export type StatusIconProps = React.ComponentProps<typeof StatusIcon>
