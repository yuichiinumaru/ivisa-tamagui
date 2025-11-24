import React, { useState } from 'react'
import { ScrollView, styled, XStack, YStack } from 'tamagui'

import { Button } from '../components/primitives/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/data-display/Card'
import { Input } from '../components/forms/Input'
import { TypographyText, Heading, MutedText } from '../components/typography/Typography'

import { Badge } from '../components/feedback/Badge'
import { Separator } from '../components/data-display/Separator'

const DemoContainer = styled(ScrollView, {
  name: 'DemoContainer',
  padding: '$6',
  gap: '$4',
})

const MessageBubble = styled(Card, {
  name: 'MessageBubble',
  padding: '$3',
  maxWidth: '70%',
})

const UserBubble = styled(MessageBubble, {
  alignSelf: 'flex-end',
  backgroundColor: '$primary',
})

const AgentBubble = styled(MessageBubble, {
  alignSelf: 'flex-start',
  backgroundColor: '$muted',
})

const ChatFlowDemo = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', type: 'agent' },
    { id: 2, text: 'I need to configure my agent settings.', type: 'user' },
    { id: 3, text: 'Sure, let me show you the settings panel.', type: 'agent' },
  ])
  const [newMessage, setNewMessage] = useState('')

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now(), text: newMessage, type: 'user' }])
      setNewMessage('')
      // Simulate agent response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now(),
          text: 'Thanks for your message. I\'ll process that.',
          type: 'agent'
        }])
      }, 1000)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Chat Flow Demo</CardTitle>
        <CardDescription>
          Representative chat interface using migrated Tamagui components
        </CardDescription>
      </CardHeader>
      <CardContent>
        <YStack gap="$4" height={300} borderWidth={1} borderColor="$border" borderRadius="$4" padding="$4">
          <ScrollView>
            <YStack gap="$2">
              {messages.map((msg) => (
                msg.type === 'user' ? (
                  <UserBubble key={msg.id}>
                    <TypographyText>{msg.text}</TypographyText>
                  </UserBubble>
                ) : (
                  <AgentBubble key={msg.id}>
                    <TypographyText>{msg.text}</TypographyText>
                  </AgentBubble>
                )
              ))}
            </YStack>
          </ScrollView>
        </YStack>
        <XStack gap="$2" marginTop="$4">
          <Input
            flex={1}
            value={newMessage}
            onChangeText={setNewMessage}
            placeholder="Type your message..."
            onSubmitEditing={sendMessage}
          />
          <Button onPress={sendMessage}>Send</Button>
        </XStack>
      </CardContent>
    </Card>
  )
}

const SettingsFlowDemo = () => {
  const [settings, setSettings] = useState({
    agentName: 'VIVI Assistant',
    enableLogging: true,
    maxTokens: '1000',
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings Flow Demo</CardTitle>
        <CardDescription>
          Agent configuration form using form components
        </CardDescription>
      </CardHeader>
      <CardContent>
        <YStack gap="$4">
          <YStack gap="$2">
            <MutedText>Agent Name</MutedText>
            <Input
              value={settings.agentName}
              onChangeText={(text) => setSettings({...settings, agentName: text})}
            />
          </YStack>
          <YStack gap="$2">
            <MutedText>Max Tokens</MutedText>
            <Input
              value={settings.maxTokens}
              onChangeText={(text) => setSettings({...settings, maxTokens: text})}
              keyboardType="numeric"
            />
          </YStack>
          <XStack gap="$2" alignItems="center">
            <MutedText>Enable Logging</MutedText>
            <Badge variant={settings.enableLogging ? 'success' : 'secondary'}>
              {settings.enableLogging ? 'Enabled' : 'Disabled'}
            </Badge>
          </XStack>
          <Button alignSelf="flex-start">Save Settings</Button>
        </YStack>
      </CardContent>
    </Card>
  )
}

export const FlowDemos = () => {
  return (
    <DemoContainer>
      <Heading level={1}>Flow Integration Demos</Heading>
      <TypographyText>
        These demos showcase how migrated Tamagui components integrate into representative flows
        from the application.
      </TypographyText>
      <Separator />
      <ChatFlowDemo />
      <SettingsFlowDemo />
    </DemoContainer>
  )
}
