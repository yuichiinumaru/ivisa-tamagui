import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../atoms/Button'
import { MetricCard } from './MetricCard'
import { YStack } from 'tamagui'

const meta: Meta<typeof MetricCard> = {
  title: 'Molecules/MetricCard',
  component: MetricCard,
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: 'boolean',
    },
    hasError: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
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

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    metric: {
      title: 'Receita Total',
      value: 'R$ 45.231,89',
      trend: {
        value: '+20.1% em relação ao mês passado',
        direction: 'up',
      },
    },
    isLoading: false,
    hasError: false,
    isDisabled: false,
  },
}

export const Carregando: Story = {
  name: 'Carregando',
  args: {
    metric: {
      title: 'Receita Total',
      value: 'R$ 45.231,89',
    },
    isLoading: true,
  },
}

export const ComErro: Story = {
  name: 'Com Erro',
  args: {
    ...Padrao.args,
    hasError: true,
  },
}

export const Desabilitado: Story = {
  name: 'Desabilitado',
  args: {
    ...Padrao.args,
    isDisabled: true,
  },
}

export const ComAcao: Story = {
  name: 'Com Ação',
  args: {
    ...Padrao.args,
    rightSlot: <Button size="sm">Ver Detalhes</Button>,
  },
}

export const LarguraRestrita: Story = {
  name: 'Largura Restrita',
  args: {
    metric: {
      title: 'Receita Total de Assinaturas Mensais Recorrentes',
      value: 'R$ 1.150.231,89',
      trend: {
        value: '+20.1% em relação ao mês passado',
        direction: 'up',
      },
    },
    rightSlot: <Button size="sm">Detalhes</Button>,
  },
  render: (args) => (
    <YStack width={250}>
      <MetricCard {...args} />
    </YStack>
  ),
}
