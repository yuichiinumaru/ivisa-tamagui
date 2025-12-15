import type { Meta, StoryObj } from '@storybook/react'
import { DecompositionTree, TreeNode } from './DecompositionTree'

const meta: Meta<typeof DecompositionTree> = {
  title: 'Organismos/Gráficos/DecompositionTree',
  component: DecompositionTree,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof DecompositionTree>

const sampleData: TreeNode = {
  id: 'root',
  label: 'Total Revenue',
  value: '$1,000,000',
  children: [
    {
        id: '1',
        label: 'Direct Sales',
        value: '$600,000',
        children: [
            { id: '1a', label: 'Online', value: '$400,000' },
            { id: '1b', label: 'In-Store', value: '$200,000' },
        ]
    },
    {
        id: '2',
        label: 'Partner Sales',
        value: '$400,000',
        children: [
             { id: '2a', label: 'Resellers', value: '$300,000' },
             { id: '2b', label: 'Affiliates', value: '$100,000' },
        ]
    }
  ]
}

export const Padrao: Story = {
  args: {
    data: sampleData,
    width: 600,
    height: 400,
  },
}

export const Carregando: Story = {
  args: {
    data: sampleData,
    isLoading: true,
  },
}

export const Erro: Story = {
  args: {
    data: sampleData,
    error: new Error('Failed to load data'),
  },
}
