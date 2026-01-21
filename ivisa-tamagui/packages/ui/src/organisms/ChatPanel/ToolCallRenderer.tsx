import {
  FileText,
  FolderOpen,
  Search,
  Edit,
  Terminal,
  ListTodo,
  GitBranch,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Circle,
  Clock,
  XCircle,
  File,
  Folder,
  X
} from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { styled, YStack, XStack, Text, Button, ScrollView } from 'tamagui'
import { Badge } from '../../atoms/Badge'
import type { ToolCall, Todo } from './types'

// --- Types ---
interface ToolCallRendererProps {
  toolCall: ToolCall
  result?: string | unknown
  isError?: boolean
  needsApproval?: boolean
  onApprovalDecision?: (decision: 'approve' | 'reject' | 'edit') => void
}

const TOOL_ICONS: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  read_file: FileText,
  write_file: Edit,
  edit_file: Edit,
  ls: FolderOpen,
  glob: FolderOpen,
  grep: Search,
  execute: Terminal,
  write_todos: ListTodo,
  task: GitBranch
}

const TOOL_LABELS: Record<string, string> = {
  read_file: 'Read File',
  write_file: 'Write File',
  edit_file: 'Edit File',
  ls: 'List Directory',
  glob: 'Find Files',
  grep: 'Search Content',
  execute: 'Execute Command',
  write_todos: 'Update Tasks',
  task: 'Subagent Task'
}

// Tools whose results are shown in the UI panels and don't need verbose display
const PANEL_SYNCED_TOOLS = new Set(['write_todos'])

// Helper to get a clean file name from path
function getFileName(path: string): string {
  return path.split('/').pop() || path
}

// --- Components ---

// Render todos nicely
function TodosDisplay({ todos }: { todos: Todo[] }) {
  const statusConfig: Record<string, { icon: typeof Circle; color: string }> = {
    pending: { icon: Circle, color: '$mutedForeground' },
    in_progress: { icon: Clock, color: '$blue10' },
    completed: { icon: CheckCircle2, color: '$green10' },
    cancelled: { icon: XCircle, color: '$mutedForeground' }
  }

  const defaultConfig = { icon: Circle, color: '$mutedForeground' }

  return (
    <YStack gap="$1">
      {todos.map((todo, i) => {
        const config = statusConfig[todo.status] || defaultConfig
        const Icon = config.icon
        const isDone = todo.status === 'completed' || todo.status === 'cancelled'
        return (
          <XStack key={todo.id || i} alignItems="center" gap="$2">
            <Icon size={14} color={config.color} />
            <Text fontSize="$2" textDecorationLine={isDone ? 'line-through' : 'none'} color="$color">{todo.content}</Text>
          </XStack>
        )
      })}
    </YStack>
  )
}

// Render file list nicely
function FileListDisplay({
  files,
  isGlob
}: {
  files: string[] | Array<{ path: string; is_dir?: boolean }>
  isGlob?: boolean
}) {
  const items = files.slice(0, 15) // Limit display
  const hasMore = files.length > 15

  return (
    <YStack gap="$1">
      {items.map((file, i) => {
        const path = typeof file === 'string' ? file : file.path
        const isDir = typeof file === 'object' && file.is_dir
        return (
          <XStack key={i} alignItems="center" gap="$2">
            {isDir ? (
              <Folder size={12} color="$yellow10" />
            ) : (
              <File size={12} color="$gray10" />
            )}
            <Text fontSize="$2" fontFamily="$mono" numberOfLines={1}>{isGlob ? path : getFileName(path)}</Text>
          </XStack>
        )
      })}
      {hasMore && (
        <Text fontSize="$2" color="$mutedForeground" marginTop="$1">... and {files.length - 15} more</Text>
      )}
    </YStack>
  )
}

// Render file content preview
function FileContentPreview({ content }: { content: string; path?: string }) {
  const lines = content.split('\n')
  const preview = lines.slice(0, 10)
  const hasMore = lines.length > 10

  return (
    <YStack backgroundColor="$background" borderRadius="$2" overflow="hidden" width="100%" borderWidth={1} borderColor="$borderColor">
      <ScrollView maxHeight={160} width="100%">
        <YStack padding="$2">
          {preview.map((line, i) => (
            <XStack key={i} minWidth={0}>
              <Text width={30} color="$mutedForeground" textAlign="right" paddingRight="$2" userSelect="none" fontSize="$1" fontFamily="$mono">
                {i + 1}
              </Text>
              <Text flex={1} numberOfLines={1} fontSize="$1" fontFamily="$mono">{line || ' '}</Text>
            </XStack>
          ))}
        </YStack>
      </ScrollView>
      {hasMore && (
        <XStack padding="$2" backgroundColor="$backgroundHover" borderTopWidth={1} borderColor="$borderColor">
          <Text fontSize="$1" color="$mutedForeground">... {lines.length - 10} more lines</Text>
        </XStack>
      )}
    </YStack>
  )
}

// Command display
function CommandDisplay({
  command,
  output
}: {
  command: string
  output?: string
}) {
  return (
    <YStack gap="$2" width="100%" overflow="hidden">
      <XStack backgroundColor="$background" borderRadius="$2" padding="$2" alignItems="center" gap="$2" borderWidth={1} borderColor="$borderColor">
        <Text color="$blue10" fontFamily="$mono">$</Text>
        <Text numberOfLines={1} fontFamily="$mono" fontSize="$2">{command}</Text>
      </XStack>
      {output && (
        <ScrollView maxHeight={128} width="100%" backgroundColor="$background" borderRadius="$2" padding="$2" borderWidth={1} borderColor="$borderColor">
            <Text fontFamily="$mono" fontSize="$2" color="$mutedForeground">
              {output.slice(0, 500)}
              {output.length > 500 && '...'}
            </Text>
        </ScrollView>
      )}
    </YStack>
  )
}


export function ToolCallRenderer({
  toolCall,
  result,
  isError,
  needsApproval,
  onApprovalDecision
}: ToolCallRendererProps) {
  // Defensive: ensure args is always an object
  const args = toolCall?.args || {}

  const [isExpanded, setIsExpanded] = useState(false)

  // Bail out if no toolCall
  if (!toolCall) {
    return null
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon: any = TOOL_ICONS[toolCall.name] || Terminal
  const label = TOOL_LABELS[toolCall.name] || toolCall.name
  const isPanelSynced = PANEL_SYNCED_TOOLS.has(toolCall.name)

  const handleApprove = (e: React.MouseEvent) => {
    e.stopPropagation()
    onApprovalDecision?.('approve')
  }

  const handleReject = (e: React.MouseEvent) => {
    e.stopPropagation()
    onApprovalDecision?.('reject')
  }

  // Format the main argument for display
  const getDisplayArg = (): string | null => {
    if (!args) return null
    if (args.path) return args.path as string
    if (args.file_path) return args.file_path as string
    if (args.command) return (args.command as string).slice(0, 50)
    if (args.pattern) return args.pattern as string
    if (args.query) return args.query as string
    if (args.glob) return args.glob as string
    return null
  }

  const displayArg = getDisplayArg()

  // Render formatted content based on tool type
  const renderFormattedContent = () => {
    if (!args) return null

    switch (toolCall.name) {
      case 'write_todos': {
        const todos = args.todos as Todo[] | undefined
        if (todos && todos.length > 0) {
          return <TodosDisplay todos={todos} />
        }
        return null
      }

    //   case 'task': {
    //     return <TaskDisplay args={args} isExpanded={isExpanded} />
    //   }

      case 'execute': {
        const command = args.command as string
        const output = typeof result === 'string' ? result : undefined
        return <CommandDisplay command={command} output={isExpanded ? output : undefined} />
      }

      default:
        return null
    }
  }

  // Render result based on tool type
  const renderFormattedResult = () => {
    if (result === undefined) return null

    // Handle errors
    if (isError) {
      return (
        <XStack gap="$2" alignItems="flex-start">
          <XCircle size={14} color="$red10" />
          <Text fontSize="$2" color="$red10">
            {typeof result === 'string' ? result : JSON.stringify(result)}
          </Text>
        </XStack>
      )
    }

    switch (toolCall.name) {
      case 'read_file': {
        const content = typeof result === 'string' ? result : JSON.stringify(result)
        const lines = content.split('\n').length
        return (
          <YStack gap="$2">
            <XStack alignItems="center" gap="$2">
              <CheckCircle2 size={14} color="$green10" />
              <Text fontSize="$2" color="$green10">Read {lines} lines</Text>
            </XStack>
            <FileContentPreview content={content} />
          </YStack>
        )
      }

      case 'ls': {
        if (Array.isArray(result)) {
          const dirs = result.filter(
            (f: { is_dir?: boolean } | string) => typeof f === 'object' && f.is_dir
          ).length
          const files = result.length - dirs
          return (
            <YStack gap="$2">
               <XStack alignItems="center" gap="$2">
                <CheckCircle2 size={14} color="$green10" />
                <Text fontSize="$2" color="$green10">
                  {files} file{files !== 1 ? 's' : ''}
                  {dirs > 0 ? `, ${dirs} folder${dirs !== 1 ? 's' : ''}` : ''}
                </Text>
              </XStack>
              <FileListDisplay files={result} />
            </YStack>
          )
        }
        return null
      }

      default: {
        // Generic success for unknown tools
        if (typeof result === 'string' && result.trim()) {
          return (
             <XStack alignItems="center" gap="$2">
              <CheckCircle2 size={14} color="$green10" />
              <Text numberOfLines={1} fontSize="$2" color="$green10">
                {result.slice(0, 100)}
                {result.length > 100 ? '...' : ''}
              </Text>
            </XStack>
          )
        }
        return (
          <XStack alignItems="center" gap="$2">
            <CheckCircle2 size={14} color="$green10" />
            <Text fontSize="$2" color="$green10">Completed</Text>
          </XStack>
        )
      }
    }
  }

  const formattedContent = renderFormattedContent()
  const formattedResult = renderFormattedResult()
  const hasFormattedDisplay = formattedContent || formattedResult

  return (
    <YStack
      borderRadius="$2"
      borderWidth={1}
      overflow="hidden"
      borderColor={needsApproval ? '$yellow10' : '$borderColor'}
      backgroundColor={needsApproval ? '$yellow2' : '$backgroundHover'}
    >
      {/* Header */}
      <Button
        onPress={() => setIsExpanded(!isExpanded)}
        chromeless
        padding="$2"
        height="auto"
        justifyContent="flex-start"
        hoverStyle={{ backgroundColor: '$backgroundFocus' }}
      >
        <XStack alignItems="center" gap="$2" flex={1}>
          {isExpanded ? (
            <ChevronDown size={16} color="$mutedForeground" />
          ) : (
            <ChevronRight size={16} color="$mutedForeground" />
          )}

          <Icon size={16} color={needsApproval ? '$yellow10' : '$blue10'} />

          <Text fontSize="$2" fontWeight="600">{label}</Text>

          {displayArg && (
             <Text flex={1} numberOfLines={1} fontSize="$2" color="$mutedForeground" fontFamily="$mono">
              {displayArg}
            </Text>
          )}

          {needsApproval && (
            <Badge variant="warning">APPROVAL</Badge>
          )}

          {!needsApproval && result === undefined && (
            <Badge variant="outline">RUNNING</Badge>
          )}

          {result !== undefined && !needsApproval && (
            <Badge variant={isError ? 'destructive' : 'success'}>
              {isError ? 'ERROR' : 'OK'}
            </Badge>
          )}
        </XStack>
      </Button>

      {/* Approval UI */}
      {needsApproval ? (
        <YStack borderTopWidth={1} borderColor="$yellow5" padding="$3" gap="$3">
          {formattedContent}

          <YStack>
            <Text fontSize="$1" fontWeight="bold" marginBottom="$1">ARGUMENTS</Text>
            <ScrollView maxHeight={96} backgroundColor="$background" padding="$2" borderRadius="$2">
                <Text fontSize="$1" fontFamily="$mono">
                    {JSON.stringify(args, null, 2)}
                </Text>
            </ScrollView>
          </YStack>

          <XStack justifyContent="flex-end" gap="$2">
            <Button size="$2" variant="outline" onPress={handleReject}>Reject</Button>
            <Button size="$2" themeInverse onPress={handleApprove}>Approve & Run</Button>
          </XStack>
        </YStack>
      ) : null}

      {/* Formatted content (only visible when collapsed AND has result) */}
      {hasFormattedDisplay && !isExpanded && !needsApproval && result !== undefined && (
        <YStack borderTopWidth={1} borderColor="$borderColor" padding="$2" gap="$2">
          {formattedContent}
          {formattedResult}
        </YStack>
      )}

      {/* Expanded content */}
      {isExpanded && !needsApproval && (
        <YStack borderTopWidth={1} borderColor="$borderColor" padding="$2" gap="$2">
          {formattedContent}
          {formattedResult}

          <YStack>
            <Text fontSize="$1" fontWeight="bold" marginBottom="$1">RAW ARGUMENTS</Text>
            <ScrollView maxHeight={192} backgroundColor="$background" padding="$2" borderRadius="$2">
                 <Text fontSize="$1" fontFamily="$mono">
                    {JSON.stringify(args, null, 2)}
                </Text>
            </ScrollView>
          </YStack>

          {result !== undefined && (
            <YStack>
              <Text fontSize="$1" fontWeight="bold" marginBottom="$1">RAW RESULT</Text>
              <ScrollView maxHeight={192} backgroundColor={isError ? '$red2' : '$background'} padding="$2" borderRadius="$2">
                  <Text fontSize="$1" fontFamily="$mono" color={isError ? '$red10' : '$color'}>
                    {typeof result === 'string' ? result : JSON.stringify(result, null, 2)}
                  </Text>
              </ScrollView>
            </YStack>
          )}
        </YStack>
      )}
    </YStack>
  )
}
