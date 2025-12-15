import type { Meta, StoryObj } from '@storybook/react'
import { AnimatedSegmentedControl } from './AnimatedSegmentedControl'
import { useState } from 'react'

const meta: Meta<typeof AnimatedSegmentedControl> = {
  title: 'Organismos/AnimatedSegmentedControl',
  component: AnimatedSegmentedControl,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
      onValueChange: { action: 'value changed' }
  }
}

export default meta

type Story = StoryObj<typeof AnimatedSegmentedControl>

const items = [
    { value: 'all', label: 'Todos' },
    { value: 'active', label: 'Ativos' },
    { value: 'completed', label: 'Concluídos' },
    { value: 'archived', label: 'Arquivados' },
]

export const Padrao: Story = {
  render: (args) => {
      const [val, setVal] = useState('all')
      return <AnimatedSegmentedControl {...args} value={val} onValueChange={(v) => {
          setVal(v)
          args.onValueChange?.(v)
      }} />
  },
  args: {
    value: 'all',
    items: items,
  },
}

export const TwoOptions: Story = {
    render: (args) => {
        const [val, setVal] = useState('login')
        return <AnimatedSegmentedControl {...args} value={val} onValueChange={(v) => {
            setVal(v)
            args.onValueChange?.(v)
        }} />
    },
    args: {
        value: 'login',
        items: [
            { value: 'login', label: 'Login' },
            { value: 'register', label: 'Cadastro' },
        ]
    }
}
