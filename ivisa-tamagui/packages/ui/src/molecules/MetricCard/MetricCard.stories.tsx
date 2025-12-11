
import type { Meta, StoryObj } from '@storybook/react'
import { YStack } from 'tamagui'
import { Button } from '../../atoms/Button'
import { MetricCard } from './MetricCard'

const meta: Meta<typeof MetricCard> = {
  title: 'Molecules/MetricCard',
  component: MetricCard,
  tags: ['autodocs'],
  argTypes: {
    'metric.title': { control: 'text', description: 'O título da métrica.' },
    'metric.value': { control: 'text', description: 'O valor principal da métrica.' },
    'metric.trend': {
      control: 'select',
      options: ['up', 'down', 'neutral'],
      description: 'A direção da tendência.',
    },
    'metric.trendValue': { control: 'text', description: 'O valor da tendência.' },
    isLoading: { control: 'boolean', description: 'Exibe o estado de carregamento com um skeleton.' },
    hasError: { control: 'boolean', description: 'Aplica um estilo de erro (borda vermelha).' },
    rightSlot: { control: false, description: 'Um slot para ações ou ícones à direita.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'O `MetricCard` é um componente de molécula usado para exibir um único ponto de dados chave, como receita total ou assinantes ativos. Ele pode mostrar uma tendência e suporta estados de carregamento e erro.',
      },
    },
  },
  render: (args) => (
    <YStack width={300}>
      <MetricCard {...args} />
    </YStack>
  ),
}

export default meta
type Story = StoryObj<typeof MetricCard>

export const Playground: Story = {
  name: 'Brinquedo',
  args: {
    metric: {
      title: 'Receita Total',
      value: 'R$ 54.230,00',
      trend: 'up',
      trendValue: '+20.1% vs mês passado',
    },
    isLoading: false,
    hasError: false,
    rightSlot: <Button size="sm">Ver Detalhes</Button>,
  },
}

export const Loading: Story = {
  name: 'Carregando',
  args: {
    ...Playground.args,
    isLoading: true,
  },
}

export const ErrorState: Story = {
  name: 'Erro',
  args: {
    ...Playground.args,
    hasError: true,
  },
}

export const PartialData: Story = {
  name: 'Dados Parciais (Sem Tendência)',
  args: {
    ...Playground.args,
    metric: {
      title: 'Usuários Ativos',
      value: '1.204',
    },
    rightSlot: undefined,
  },
}

export const NarrowContainer: Story = {
  name: 'Container Estreito',
  render: (args) => (
    <YStack width={200}>
      <MetricCard {...args} />
    </YStack>
  ),
  args: {
    ...Playground.args,
    metric: {
      title: 'Receita Total Mensal Recorrente',
      value: 'R$ 54.230,00',
      trend: 'up',
      trendValue: '+20.1% vs mês passado',
    },
  },
}
