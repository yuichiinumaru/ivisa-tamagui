import type { Meta, StoryObj } from '@storybook/react'
import { TaskBoard } from './TaskBoard'
import type { Todo } from '../ChatPanel/types'

const meta: Meta<typeof TaskBoard> = {
  title: 'Organismos/TaskBoard',
  component: TaskBoard,
}

export default meta
type Story = StoryObj<typeof TaskBoard>

const MOCK_TODOS: Todo[] = [
    { id: '1', content: 'Initial Research', status: 'completed' },
    { id: '2', content: 'Setup Repository', status: 'completed' },
    { id: '3', content: 'Implement Chat Interface', status: 'in_progress' },
    { id: '4', content: 'Add Agent Visualization', status: 'pending' },
    { id: '5', content: 'Deploy to Production', status: 'pending' },
    { id: '6', content: 'Abandoned Task', status: 'cancelled' },
]

export const Default: Story = {
  args: {
    todos: MOCK_TODOS,
  },
}

export const Empty: Story = {
  args: {
    todos: [],
  },
}
