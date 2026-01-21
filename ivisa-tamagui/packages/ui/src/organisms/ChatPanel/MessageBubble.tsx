import { User, Bot } from '@tamagui/lucide-icons'
import React from 'react'
import { YStack, XStack, Text, styled } from 'tamagui'
import { ToolCallRenderer } from './ToolCallRenderer'
import { CodeBlock } from '../CodeBlock'
import type { Message, HITLRequest } from './types'

interface ToolResultInfo {
  content: string | unknown
  is_error?: boolean
}

interface MessageBubbleProps {
  message: Message
  isStreaming?: boolean
  toolResults?: Map<string, ToolResultInfo>
  pendingApproval?: HITLRequest | null
  onApprovalDecision?: (decision: 'approve' | 'reject' | 'edit') => void
}

const AvatarBox = styled(YStack, {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$2',
})

// Simple helper to parse markdown code blocks
// Looks for ```lang ... ``` pattern
function parseContentWithCodeBlocks(content: string) {
  const parts = []
  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g
  let lastIndex = 0
  let match

  while ((match = codeBlockRegex.exec(content)) !== null) {
    // Add text before code block
    if (match.index > lastIndex) {
      parts.push({
        type: 'text',
        content: content.slice(lastIndex, match.index)
      })
    }

    // Add code block
    parts.push({
      type: 'code',
      language: match[1] || 'text',
      content: match[2]
    })

    lastIndex = codeBlockRegex.lastIndex
  }

  // Add remaining text
  if (lastIndex < content.length) {
    parts.push({
      type: 'text',
      content: content.slice(lastIndex)
    })
  }

  return parts
}

export function MessageBubble({
  message,
  // isStreaming, // TODO: Implement streaming cursor
  toolResults,
  pendingApproval,
  onApprovalDecision
}: MessageBubbleProps) {
  const isUser = message.role === 'user'
  const isTool = message.role === 'tool'

  // Hide tool result messages - they're shown inline with tool calls
  if (isTool) {
    return null
  }

  const renderContent = () => {
    if (typeof message.content === 'string') {
      if (!message.content.trim()) return null

      const blocks = parseContentWithCodeBlocks(message.content)

      return (
        <YStack gap="$2">
          {blocks.map((block, i) => {
            if (block.type === 'code') {
              return (
                <CodeBlock
                  key={i}
                  code={block.content}
                  language={block.language}
                  maxHeight={300}
                />
              )
            }
            return (
              <Text key={i} fontSize="$3" lineHeight="$4" whiteSpace="pre-wrap">
                {block.content}
              </Text>
            )
          })}
        </YStack>
      )
    }
    // Handle complex content blocks (not implemented fully for now)
    return null
  }

  const content = renderContent()
  const hasToolCalls = message.tool_calls && message.tool_calls.length > 0

  if (!content && !hasToolCalls) {
    return null
  }

  return (
    <XStack gap="$3" width="100%">
      {/* Left Avatar (Bot) */}
      <YStack width={32} flexShrink={0}>
        {!isUser && (
          <AvatarBox backgroundColor="$blue2">
            <Bot size={16} color="$blue10" />
          </AvatarBox>
        )}
      </YStack>

      <YStack flex={1} gap="$2" overflow="hidden">
        <Text fontSize="$1" fontWeight="bold" color="$mutedForeground" textAlign={isUser ? 'right' : 'left'}>
            {isUser ? 'YOU' : 'AGENT'}
        </Text>

        {content && (
            <YStack
                padding="$3"
                borderRadius="$2"
                backgroundColor={isUser ? '$gray3' : '$background'}
                borderWidth={isUser ? 0 : 1}
                borderColor="$borderColor"
                width="100%"
            >
                {content}
            </YStack>
        )}

        {hasToolCalls && (
            <YStack gap="$2">
                {message.tool_calls!.map((toolCall, index) => {
                    const result = toolResults?.get(toolCall.id)
                    const pendingId = pendingApproval?.tool_call?.id
                    const needsApproval = Boolean(pendingId && pendingId === toolCall.id)
                    return (
                        <ToolCallRenderer
                            key={`${toolCall.id || `tc-${index}`}-${needsApproval ? 'pending' : 'done'}`}
                            toolCall={toolCall}
                            result={result?.content}
                            isError={result?.is_error}
                            needsApproval={needsApproval}
                            onApprovalDecision={needsApproval ? onApprovalDecision : undefined}
                        />
                    )
                })}
            </YStack>
        )}
      </YStack>

      {/* Right Avatar (User) */}
      <YStack width={32} flexShrink={0}>
        {isUser && (
          <AvatarBox backgroundColor="$gray3">
            <User size={16} color="$gray10" />
          </AvatarBox>
        )}
      </YStack>
    </XStack>
  )
}
