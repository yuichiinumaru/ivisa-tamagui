import type { Meta, StoryObj } from '@storybook/react'
import { TimeSeriesChart } from './TimeSeriesChart'
import { Button } from '../../atoms/Button'
import { MoreHorizontal } from '@tamagui/lucide-icons'
import { YStack } from 'tamagui'

const meta: Meta<typeof TimeSeriesChart> = {
  title: 'Organisms/TimeSeriesChart',
  component: TimeSeriesChart,
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: { type: 'object' },
      description: 'Array de objetos com os dados para o gráfico.',
    },
    xKey: {
      control: { type: 'text' },
      description: 'A chave para o eixo X nos objetos de dados.',
    },
    yKey: {
      control: { type: 'text' },
      description: 'A chave para o eixo Y nos objetos de dados.',
    },
    color: {
      control: { type: 'color' },
      description: 'Cor da linha do gráfico (token de tema).',
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Exibe o estado de carregamento com esqueletos.',
    },
    error: {
      control: { type: 'text' },
      description: 'Exibe o estado de erro com a mensagem fornecida.',
    },
    headerActions: {
      control: { type: 'object' },
      description: 'Nó React para ser renderizado nas ações do cabeçalho.',
    },
    footerContent: {
      control: { type: 'object' },
      description: 'Nó React para ser renderizado no conteúdo do rodapé.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Um gráfico de séries temporais para visualizar dados ao longo do tempo.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof TimeSeriesChart>

const mockData = [
  { month: 'Jan', revenue: 1200 },
  { month: 'Fev', revenue: 1800 },
  { month: 'Mar', revenue: 1500 },
  { month: 'Abr', revenue: 2100 },
  { month: 'Mai', revenue: 2500 },
  { month: 'Jun', revenue: 2300 },
  { month: 'Jul', revenue: 2800 },
]

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    title: 'Receita Mensal',
    data: mockData,
    xKey: 'month',
    yKey: 'revenue',
    color: '$blue10',
    headerActions: (
      <Button size="$2" icon={MoreHorizontal}>
        Opções
      </Button>
    ),
  },
  render: (args) => (
    <YStack width="100%" maxWidth={700}>
      <TimeSeriesChart {...args} />
    </YStack>
  ),
}

export const Carregando: Story = {
  name: 'Carregando',
  args: {
    ...Padrao.args,
    data: [],
    isLoading: true,
  },
  render: (args) => (
    <YStack width="100%" maxWidth={700}>
      <TimeSeriesChart {...args} />
    </YStack>
  ),
}

export const SemDados: Story = {
  name: 'Sem Dados',
  args: {
    ...Padrao.args,
    data: [],
  },
  render: (args) => (
    <YStack width="100%" maxWidth={700}>
      <TimeSeriesChart {...args} />
    </YStack>
  ),
}

export const ComErro: Story = {
  name: 'Com Erro',
  args: {
    ...Padrao.args,
    data: [],
    error: 'Falha na conexão com a API.',
  },
  render: (args) => (
    <YStack width="100%" maxWidth={700}>
      <TimeSeriesChart {...args} />
    </YStack>
  ),
}

export const EstresseLayout: Story = {
  name: 'Estresse de Layout',
  args: {
    ...Padrao.args,
  },
  render: (args) => (
    <YStack width="100%" maxWidth={350} borderWidth={1} borderColor="$borderColor" padding="$2">
      <TimeSeriesChart {...args} />
    </YStack>
  ),
}
