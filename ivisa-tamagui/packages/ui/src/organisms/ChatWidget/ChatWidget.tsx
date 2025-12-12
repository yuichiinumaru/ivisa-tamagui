import React, { useRef, useEffect } from 'react'
import { styled, YStack, XStack, Text, ScrollView, Avatar, Input, Stack } from 'tamagui'
import { Button } from '../../atoms/Button'
import { Send, Bot, User } from '@tamagui/lucide-icons'
import { Spinner } from '../../atoms/Spinner'

// --- Types ---
export type Message = {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
}

export type ChatWidgetProps = {
  messages: Message[]
  onSendMessage: (message: string) => void
  isTyping?: boolean
  title?: string
  placeholder?: string
}

// --- Components ---
const ChatContainer = styled(YStack, {
  name: 'ChatWidget',
  flex: 1,
  backgroundColor: '$background',
  borderRadius: '$4',
  borderWidth: 1,
  borderColor: '$borderColor',
  overflow: 'hidden',
  height: '100%',
  maxHeight: 600,
})

const ChatHeader = styled(XStack, {
  padding: '$3',
  borderBottomWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const MessageList = styled(ScrollView, {
  flex: 1,
  padding: '$3',
  contentContainerStyle: { gap: 12 },
})

const MessageBubble = styled(YStack, {
  padding: '$3',
  borderRadius: '$4',
  maxWidth: '80%',
  variants: {
    role: {
      user: {
        backgroundColor: '$blue10',
        alignSelf: 'flex-end',
        borderBottomRightRadius: '$1',
      },
      assistant: {
        backgroundColor: '$gray3',
        alignSelf: 'flex-start',
        borderBottomLeftRadius: '$1',
      },
      system: {
        backgroundColor: '$yellow3',
        alignSelf: 'center',
        borderRadius: '$2',
        maxWidth: '90%',
      }
    }
  } as const,
})

const InputArea = styled(XStack, {
  padding: '$3',
  borderTopWidth: 1,
  borderColor: '$borderColor',
  gap: '$2',
  backgroundColor: '$background',
})

// --- Organism ---
export const ChatWidget = ({
  messages = [],
  onSendMessage,
  isTyping = false,
  title = 'Assistente Virtual',
  placeholder = 'Digite sua mensagem...',
}: ChatWidgetProps) => {
  const [inputValue, setInputValue] = React.useState('')
  const scrollRef = useRef<ScrollView>(null)

  const handleSend = () => {
    if (!inputValue.trim()) return
    onSendMessage(inputValue)
    setInputValue('')
  }

  // Auto-scroll to bottom
  useEffect(() => {
    // Basic timeout to allow render
    setTimeout(() => {
        // @ts-expect-error - Tamagui ScrollView ref type
        scrollRef.current?.scrollToEnd({ animated: true })
    }, 100)
  }, [messages, isTyping])

  return (
    <ChatContainer>
      <ChatHeader>
        <XStack gap="$2" alignItems="center">
          <Avatar circular size="$3">
            <Avatar.Image src="" />
            <Avatar.Fallback backgroundColor="$blue5" alignItems='center' justifyContent='center'>
                <Bot size={20} />
            </Avatar.Fallback>
          </Avatar>
          <YStack>
            <Text fontWeight="bold">{title}</Text>
            <Text fontSize="$1" color="$green10">Online</Text>
          </YStack>
        </XStack>
      </ChatHeader>

      <MessageList ref={scrollRef}>
        {messages.map((msg) => (
          <MessageBubble key={msg.id} role={msg.role}>
            <Text
                color={msg.role === 'user' ? 'white' : '$color'}
                fontSize="$3"
            >
                {msg.content}
            </Text>
            <Text
                fontSize={10}
                color={msg.role === 'user' ? 'rgba(255,255,255,0.7)' : '$gray10'}
                alignSelf='flex-end'
                marginTop='$1'
            >
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </MessageBubble>
        ))}
        {isTyping && (
            <XStack padding="$2" alignItems="center" gap="$2">
                <Spinner size="small" />
                <Text fontSize="$2" color="$gray10">Digitando...</Text>
            </XStack>
        )}
      </MessageList>

      <InputArea>
        <Input
            flex={1}
            placeholder={placeholder}
            value={inputValue}
            onChangeText={setInputValue}
            onSubmitEditing={handleSend}
            backgroundColor="$backgroundHover"
        />
        <Button
            icon={Send}
            circular
            onPress={handleSend}
            disabled={!inputValue.trim() || isTyping}
            variant={inputValue.trim() ? 'primary' : 'default'}
        />
      </InputArea>
    </ChatContainer>
  )
}
