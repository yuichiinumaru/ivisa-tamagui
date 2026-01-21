
// import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Activity, DollarSign, Users } from '@tamagui/lucide-icons'
import { RadialChartContent } from './RadialChartContent'
import { Button, Text } from 'tamagui'


const meta: Meta<React.ComponentProps<typeof RadialChartContent>> = {
  title: 'Moléculas/RadialChartContent',
  component: RadialChartContent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Uso
Exibe métricas resumidas, ideal para dashboards ou como conteúdo complementar de gráficos.

### Variantes
- **Padrão**: Exibe título, ícone e pontos de dados.
- **Loading**: Exibe esqueletos.
- **Erro**: Aplica borda de erro.
- **Slot Direito**: Permite ações ou informações adicionais à direita.
`,
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    isLoading: { control: 'boolean' },
    hasError: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof RadialChartContent>>

const dataSample = [
  { label: 'Total', value: '1.234' },
  { label: 'Ativos', value: '890', color: '$green10' },
]

export const Padrao: Story = {
  args: {
    title: 'Engajamento',
    subtitle: 'Métricas de usuários ativos na semana',
    icon: <Users size="$2" />,
    data: dataSample,
  },
}

export const ComIconesNosDados: Story = {
  args: {
    title: 'Vendas',
    subtitle: 'Relatório financeiro',
    icon: <DollarSign size="$2" />,
    data: [
      { label: 'Receita', value: 'R$ 10k', icon: DollarSign, color: '$green10' },
      { label: 'Custo', value: 'R$ 2k', icon: Activity, color: '$red10' },
    ],
  },
}

export const Carregando: Story = {
  args: {
    ...Padrao.args,
    isLoading: true,
  },
}

export const ComErro: Story = {
  args: {
    ...Padrao.args,
    hasError: true,
  },
}

export const ComSlotDireito: Story = {
  args: {
    ...Padrao.args,
    rightSlot: <Button size="$2">Detalhes</Button>,
  },
}

