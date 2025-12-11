import type { Meta, StoryObj } from '@storybook/react'
import { Button, YStack } from 'tamagui'
import { RankingChart, RankingChartEntry } from './RankingChart'

const MOCK_DATA: RankingChartEntry[] = [
  { name: 'Produto A', value: 400, color: '$blue10' },
  { name: 'Produto B', value: 300, color: '$green10' },
  { name: 'Produto C', value: 200, color: '$orange10' },
  { name: 'Produto D', value: 100, color: '$red10' },
];

const meta: Meta<typeof RankingChart> = {
  title: 'Organismos/RankingChart',
  component: RankingChart,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'O título do gráfico.',
    },
    data: {
      control: 'object',
      description: 'Os dados a serem exibidos no gráfico.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Ativa o estado de carregamento.',
    },
    isError: {
      control: 'boolean',
      description: 'Ativa o estado de erro.',
    },
    error: {
        control: 'text',
        description: 'A mensagem de erro a ser exibida.',
    },
    headerActions: {
        control: 'object',
        description: 'Ações a serem exibidas no cabeçalho.',
    },
    emptyStateCTA: {
        control: 'object',
        description: 'CTA a ser exibido no estado vazio.',
    },
  },
}

export default meta
type Story = StoryObj<typeof RankingChart>

export const GoldenPath: Story = {
  args: {
    title: 'Ranking de Produtos',
    data: MOCK_DATA,
    headerActions: <Button>Ver Todos</Button>,
  },
}

export const ZeroData: Story = {
    args: {
      title: 'Ranking de Produtos',
      data: [],
      emptyStateCTA: <Button>Adicionar Produto</Button>,
    },
}

export const Loading: Story = {
    args: {
      title: 'Ranking de Produtos',
      data: [],
      isLoading: true,
    },
}

export const Error: Story = {
    args: {
      title: 'Ranking de Produtos',
      data: [],
      isError: true,
      error: 'Falha ao buscar dados. Por favor, tente novamente.',
    },
}

export const LayoutStress: Story = {
    args: {
      ...GoldenPath.args,
    },
    render: (args) => (
      <YStack width={300} mx="auto">
        <RankingChart {...args} />
      </YStack>
    ),
  }
