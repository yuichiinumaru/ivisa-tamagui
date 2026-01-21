import { Circle, Clock, CheckCircle2, XCircle, ListTodo } from '@tamagui/lucide-icons'
import React from 'react'
import { YStack, XStack, Text, Progress } from 'tamagui'
import type { Todo } from './types'

interface AgentTodoListProps {
  todos: Todo[]
}

const STATUS_CONFIG: Record<string, { icon: React.ComponentType<{ size?: number; color?: string }>; color: string }> = {
  pending: {
    icon: Circle,
    color: '$mutedForeground'
  },
  in_progress: {
    icon: Clock,
    color: '$blue10'
  },
  completed: {
    icon: CheckCircle2,
    color: '$green10'
  },
  cancelled: {
    icon: XCircle,
    color: '$mutedForeground'
  }
}

export function AgentTodoList({ todos }: AgentTodoListProps) {
  if (todos.length === 0) return null

  // Separate active and completed todos
  const activeTodos = todos.filter((t) => t.status === 'in_progress' || t.status === 'pending')
  const completedCount = todos.filter((t) => t.status === 'completed').length
  const totalCount = todos.length

  // Calculate progress
  const progress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  return (
    <YStack borderRadius="$2" borderWidth={1} borderColor="$borderColor" backgroundColor="$backgroundHover" overflow="hidden">
      {/* Header */}
      <XStack alignItems="center" gap="$2" paddingHorizontal="$3" paddingVertical="$2" borderBottomWidth={1} borderColor="$borderColor">
        <ListTodo size={16} color="$blue10" />
        <Text fontSize="$2" fontWeight="600">Agent Tasks</Text>
        <Text fontSize="$2" color="$mutedForeground" marginLeft="auto">
          {completedCount}/{totalCount}
        </Text>
        {/* Mini progress bar */}
        <YStack width={64} height={4} borderRadius="$4" backgroundColor="$background" overflow="hidden">
           <Progress value={progress} backgroundColor="$green10" height="100%" />
        </YStack>
      </XStack>

      {/* Active todos */}
      {activeTodos.length > 0 && (
        <YStack paddingHorizontal="$3" paddingVertical="$2" gap="$2">
          {activeTodos.map((todo) => {
            const config = STATUS_CONFIG[todo.status]
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Icon: any = config.icon
            return (
              <XStack key={todo.id} alignItems="flex-start" gap="$2">
                <Icon size={14} color={config.color} />
                <Text fontSize="$2" color="$color">{todo.content}</Text>
              </XStack>
            )
          })}
        </YStack>
      )}

      {/* Completed summary (collapsed) */}
      {completedCount > 0 && activeTodos.length > 0 && (
        <XStack paddingHorizontal="$3" paddingVertical="$2" backgroundColor="$background" borderTopWidth={1} borderColor="$borderColor">
          <Text fontSize="$2" color="$mutedForeground">
            {completedCount} task{completedCount !== 1 ? 's' : ''} completed
          </Text>
        </XStack>
      )}
    </YStack>
  )
}
