import type { Meta, StoryObj } from '@storybook/react'
import { ChatPanel } from './ChatPanel'
import { AgentTodoList } from './AgentTodoList'
import { TokenUsageMeter } from './TokenUsageMeter'
import type { Message, Todo } from './types'
import { YStack } from 'tamagui'

const meta: Meta<typeof ChatPanel> = {
  title: 'Organismos/ChatPanel',
  component: ChatPanel,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof ChatPanel>

const MOCK_MESSAGES: Message[] = [
    {
        id: '1',
        role: 'user',
        content: 'Please list the files in the current directory.',
        created_at: new Date()
    },
    {
        id: '2',
        role: 'tool',
        content: 'file1.txt\nfile2.js\nfolder/',
        tool_call_id: 'call_1',
        created_at: new Date()
    },
    {
        id: '3',
        role: 'assistant',
        content: 'I have listed the files.',
        tool_calls: [
            {
                id: 'call_1',
                name: 'ls',
                args: { path: '.' }
            }
        ],
        created_at: new Date()
    }
]

const MOCK_TODOS: Todo[] = [
    { id: '1', content: 'Analyze codebase', status: 'completed' },
    { id: '2', content: 'Extract components', status: 'in_progress' },
    { id: '3', content: 'Write tests', status: 'pending' },
]

export const Default: Story = {
  args: {
    messages: MOCK_MESSAGES,
    onSendMessage: (msg) => console.log('Send:', msg),
  },
}

export const WithAgentState: Story = {
    render: (args) => (
        <YStack height={600} width="100%">
             <ChatPanel {...args} />
        </YStack>
    ),
    args: {
        messages: MOCK_MESSAGES,
        isLoading: true,
        todos: MOCK_TODOS,
        onSendMessage: (msg) => console.log('Send:', msg),
    }
}

export const TokenMeterDemo = () => (
    <YStack padding="$10" alignItems="center">
        <TokenUsageMeter
            tokenUsage={{
                inputTokens: 12000,
                outputTokens: 500,
                totalTokens: 12500,
                cacheReadTokens: 4000,
                lastUpdated: new Date()
            }}
            modelId="gpt-4"
        />
    </YStack>
)

export const TodoListDemo = () => (
    <YStack padding="$10" maxWidth={400}>
        <AgentTodoList todos={MOCK_TODOS} />
    </YStack>
)
