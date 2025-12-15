import type { Meta, StoryObj } from '@storybook/react'
import { LineChart } from './LineChart'

const meta: Meta<typeof LineChart> = {
  title: 'Organismos/Gráficos/LineChart',
  component: LineChart,
  argTypes: {
    isLoading: { control: 'boolean' },
    error: { control: 'text' },
    color: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof LineChart>

const timeData = [
  { date: '2023-01', value: 100 },
  { date: '2023-02', value: 120 },
  { date: '2023-03', value: 90 },
  { date: '2023-04', value: 150 },
  { date: '2023-05', value: 200 },
]

const categoryData = [
  { category: 'A', score: 10 },
  { category: 'B', score: 15 },
  { category: 'C', score: 8 },
  { category: 'D', score: 20 },
]

export const PadraoTimeSeries: Story = {
  args: {
    title: 'Vendas Mensais',
    data: timeData,
    xKey: 'date',
    yKey: 'value',
  },
}

export const CategoricalLine: Story = {
  args: {
    title: 'Pontuação por Categoria',
    data: categoryData,
    xKey: 'category',
    yKey: 'score',
    color: '$red10',
  },
}

export const Carregando: Story = {
  args: {
    title: 'Carregando...',
    data: [],
    xKey: 'x',
    yKey: 'y',
    isLoading: true,
  },
}

export const Erro: Story = {
  args: {
    title: 'Erro',
    data: [],
    xKey: 'x',
    yKey: 'y',
    error: 'Não foi possível carregar os dados',
  },
}
