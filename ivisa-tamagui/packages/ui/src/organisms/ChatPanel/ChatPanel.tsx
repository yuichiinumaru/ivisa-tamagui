import React, { useState, useRef, useEffect, useMemo } from 'react'
import { Send, Square, AlertCircle, X, Folder } from '@tamagui/lucide-icons'
import { YStack, XStack, Text, Button, ScrollView, Input as TamaguiInput, TextArea, Spinner } from 'tamagui'
import { MessageBubble } from './MessageBubble'
import type { Message, HITLRequest, Todo } from './types'

interface ChatPanelProps {
  messages: Message[]
  isLoading?: boolean
  error?: string | null
  onSendMessage: (message: string) => void
  onCancel?: () => void
  onClearError?: () => void
  onApprovalDecision?: (decision: 'approve' | 'reject' | 'edit') => void
  pendingApproval?: HITLRequest | null
  todos?: Todo[]
  placeholder?: string
}

export function ChatPanel({
  messages,
  isLoading = false,
  error = null,
  onSendMessage,
  onCancel,
  onClearError,
  onApprovalDecision,
  pendingApproval,
  todos = [],
  placeholder = "Message..."
}: ChatPanelProps) {
  const [input, setInput] = useState('')

  // Build tool results map from tool messages
  const toolResults = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const results = new Map<string, { content: string | unknown; is_error?: boolean }>()
    for (const msg of messages) {
      if (msg.role === 'tool' && msg.tool_call_id) {
        results.set(msg.tool_call_id, {
          content: msg.content,
          is_error: false // Could be enhanced to track errors
        })
      }
    }
    return results
  }, [messages])

  const handleSubmit = () => {
    if (!input.trim() || isLoading) return
    onSendMessage(input.trim())
    setInput('')
  }

  const handleKeyDown = (e: any) => {
    if (e.nativeEvent.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
    }
  }

  return (
    <YStack flex={1} overflow="hidden" backgroundColor="$background" height="100%">
      {/* Messages Area */}
      <ScrollView flex={1}>
        <YStack padding="$4" gap="$4" maxWidth={800} marginHorizontal="auto" width="100%">
            {messages.length === 0 && !isLoading && (
                <YStack alignItems="center" justifyContent="center" paddingVertical="$10" gap="$2">
                    <Text fontWeight="bold">NEW THREAD</Text>
                    <Text fontSize="$2" color="$mutedForeground">Start a conversation with the agent</Text>
                </YStack>
            )}

            {messages.map((message) => (
                <MessageBubble
                    key={message.id}
                    message={message}
                    toolResults={toolResults}
                    pendingApproval={pendingApproval}
                    onApprovalDecision={onApprovalDecision}
                />
            ))}

            {isLoading && (
                <XStack alignItems="center" gap="$2">
                    <Spinner size="small" />
                    <Text fontSize="$2" color="$mutedForeground">Agent is thinking...</Text>
                </XStack>
            )}

            {error && !isLoading && (
                 <XStack backgroundColor="$red2" padding="$3" borderRadius="$2" gap="$2" alignItems="flex-start">
                    <AlertCircle size={16} color="$red10" />
                    <YStack flex={1}>
                        <Text color="$red10" fontWeight="bold">Error</Text>
                        <Text color="$red10" fontSize="$2">{error}</Text>
                    </YStack>
                    {onClearError && (
                        <Button
                            size="$2"
                            chromeless
                            icon={X}
                            onPress={onClearError}
                        />
                    )}
                 </XStack>
            )}
        </YStack>
      </ScrollView>

      {/* Input Area */}
      <YStack borderTopWidth={1} borderColor="$borderColor" padding="$4" backgroundColor="$background">
         <YStack maxWidth={800} marginHorizontal="auto" width="100%" gap="$2">
            <XStack gap="$2" alignItems="flex-end">
                <TextArea
                    value={input}
                    onChangeText={setInput}
                    onKeyPress={handleKeyDown}
                    placeholder={placeholder}
                    disabled={isLoading}
                    flex={1}
                    minHeight={48}
                    maxHeight={200}
                    borderWidth={1}
                />
                {isLoading && onCancel ? (
                    <Button
                        size="$3"
                        onPress={onCancel}
                        icon={Square}
                    />
                ) : (
                    <Button
                        size="$3"
                        themeInverse
                        disabled={!input.trim()}
                        onPress={handleSubmit}
                        icon={Send}
                    />
                )}
            </XStack>
         </YStack>
      </YStack>
    </YStack>
  )
}
