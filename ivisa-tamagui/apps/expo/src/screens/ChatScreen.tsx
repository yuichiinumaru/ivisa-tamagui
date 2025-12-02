import React from 'react'
import { YStack, XStack, ScrollView, Text } from 'tamagui'
import { Input, Button, Avatar, Card, Separator } from '@ivisa/ui'

export function ChatScreen() {
  return (
    <YStack flex={1} padding="$4" gap="$4" backgroundColor="$background">
      <ScrollView flex={1}>
        <YStack gap="$4">
          <ChatBubble
            message="Hello! How can I help you with the design system today?"
            isMe={false}
            sender="System"
          />
          <ChatBubble
            message="I need to integrate the chat flow."
            isMe={true}
            sender="Me"
          />
          <Separator marginVertical="$2" />
          <Text textAlign="center" fontSize="$1" color="$mutedForeground">Today, 10:23 AM</Text>
          <ChatBubble
            message="Sure! You can use the ChatScreen component as a reference."
            isMe={false}
            sender="System"
          />
        </YStack>
      </ScrollView>
      <XStack gap="$2" alignItems="center">
        <Input flex={1} placeholder="Type a message..." />
        <Button theme="active">Send</Button>
      </XStack>
    </YStack>
  )
}

function ChatBubble({ message, isMe, sender }: { message: string, isMe: boolean, sender: string }) {
  return (
    <XStack
      justifyContent={isMe ? 'flex-end' : 'flex-start'}
      gap="$3"
      alignItems="flex-end"
    >
      {!isMe && (
        <Avatar circular size="$3">
          <Avatar.Image src="https://via.placeholder.com/40" />
          <Avatar.Fallback backgroundColor="$gray5" />
        </Avatar>
      )}
      <YStack maxWidth="70%">
        {!isMe && <Text fontSize="$1" color="$mutedForeground" marginBottom="$1">{sender}</Text>}
        <Card
          padded
          bordered
          backgroundColor={isMe ? '$blue4' : '$gray3'}
          borderRadius="$4"
          borderBottomRightRadius={isMe ? 0 : '$4'}
          borderBottomLeftRadius={isMe ? '$4' : 0}
        >
          <Text color={isMe ? '$color' : '$color'}>{message}</Text>
        </Card>
      </YStack>
      {isMe && (
        <Avatar circular size="$3">
          <Avatar.Image src="https://via.placeholder.com/40" />
          <Avatar.Fallback backgroundColor="$blue5" />
        </Avatar>
      )}
    </XStack>
  )
}
