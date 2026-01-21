import React, { useState } from 'react'
import { CheckCircle2, Circle, Clock, XCircle, ChevronRight, ChevronDown } from '@tamagui/lucide-icons'
import { YStack, XStack, Text, ScrollView, Progress, styled } from 'tamagui'
import { Badge } from '../../atoms/Badge'
import { Button } from '../../atoms/Button'
import type { Todo } from '../ChatPanel/types'

const STATUS_CONFIG: Record<string, { icon: React.ComponentType<{ size?: number; color?: string }>; color: string; label: string }> = {
  pending: {
    icon: Circle,
    label: "PENDING",
    color: "$mutedForeground"
  },
  in_progress: {
    icon: Clock,
    label: "IN PROGRESS",
    color: "$blue10"
  },
  completed: {
    icon: CheckCircle2,
    label: "DONE",
    color: "$green10"
  },
  cancelled: {
    icon: XCircle,
    label: "CANCELLED",
    color: "$mutedForeground"
  }
}

interface TaskBoardProps {
  todos: Todo[]
  title?: string
}

export function TaskBoard({ todos, title = "PROGRESS" }: TaskBoardProps) {
  const [completedExpanded, setCompletedExpanded] = useState(false)

  // Group todos by status
  const inProgress = todos.filter((t) => t.status === "in_progress")
  const pending = todos.filter((t) => t.status === "pending")
  const completed = todos.filter((t) => t.status === "completed")
  const cancelled = todos.filter((t) => t.status === "cancelled")

  // Completed section includes both completed and cancelled
  const doneItems = [...completed, ...cancelled]

  // Calculate progress
  const total = todos.length
  const done = completed.length
  const progress = total > 0 ? Math.round((done / total) * 100) : 0
  const hasAnyTodos = todos.length > 0

  return (
    <YStack flex={1} height="100%" backgroundColor="$background" borderRadius="$2" overflow="hidden" borderWidth={1} borderColor="$borderColor">
      {/* Progress Header */}
      <YStack padding="$4" borderBottomWidth={1} borderColor="$borderColor" gap="$2">
        <XStack alignItems="center" justifyContent="space-between">
          <Text fontSize="$3" fontWeight="bold" color="$mutedForeground">{title}</Text>
          <Text fontSize="$2" fontFamily="$mono">
            {done}/{total}
          </Text>
        </XStack>
        <YStack height={6} borderRadius="$4" backgroundColor="$backgroundHover" overflow="hidden">
           <Progress value={progress} backgroundColor="$green10" height="100%" />
        </YStack>
      </YStack>

      {/* Todo List */}
      <ScrollView flex={1}>
        <YStack padding="$4" gap="$2">
          {!hasAnyTodos ? (
             <YStack padding="$4" alignItems="center">
                <Text fontSize="$2" color="$mutedForeground">No tasks yet</Text>
             </YStack>
          ) : (
            <>
              {/* Completed/Cancelled Section (Collapsible) */}
              {doneItems.length > 0 && (
                <YStack marginBottom="$2">
                  <Button
                    onPress={() => setCompletedExpanded(!completedExpanded)}
                    chromeless
                    justifyContent="flex-start"
                    paddingHorizontal="$0"
                    height="auto"
                    icon={completedExpanded ? ChevronDown : ChevronRight}
                    color="$mutedForeground"
                  >
                    <Text fontSize="$2" fontWeight="600" color="$mutedForeground" textTransform="uppercase">
                        Completed ({doneItems.length})
                    </Text>
                  </Button>

                  {completedExpanded && (
                    <YStack gap="$2" paddingLeft="$4" paddingTop="$2">
                      {doneItems.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                      ))}
                    </YStack>
                  )}
                </YStack>
              )}

              {/* In Progress Section */}
              {inProgress.length > 0 && (
                <YStack gap="$2">
                  {inProgress.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                  ))}
                </YStack>
              )}

              {/* Pending Section */}
              {pending.length > 0 && (
                <YStack gap="$2">
                  {pending.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                  ))}
                </YStack>
              )}
            </>
          )}
        </YStack>
      </ScrollView>
    </YStack>
  )
}

function TodoItem({ todo }: { todo: Todo }) {
  const config = STATUS_CONFIG[todo.status]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon: any = config.icon
  const isDone = todo.status === 'completed' || todo.status === 'cancelled'

  return (
    <XStack
      padding="$3"
      gap="$3"
      borderRadius="$2"
      borderWidth={1}
      borderColor="$borderColor"
      backgroundColor="$background"
      opacity={isDone ? 0.6 : 1}
      alignItems="flex-start"
    >
      <Icon size={16} color={config.color} />
      <YStack flex={1}>
         <Text
            fontSize="$2"
            textDecorationLine={isDone ? 'line-through' : 'none'}
            color="$color"
         >
            {todo.content}
         </Text>
      </YStack>
      <Badge variant={isDone ? 'default' : 'outline'}>
        {config.label}
      </Badge>
    </XStack>
  )
}
