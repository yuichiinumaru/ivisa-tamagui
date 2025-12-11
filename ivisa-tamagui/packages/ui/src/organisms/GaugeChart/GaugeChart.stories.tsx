import type { Meta, StoryObj } from '@storybook/react'
import { YStack } from 'tamagui'
import { Button } from '../../atoms/Button'
import { GaugeChart, GaugeChartProps } from './GaugeChart'

const meta: Meta<typeof GaugeChart> = {
  title: 'Organismos/GaugeChart',
  component: GaugeChart,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'O título principal exibido acima do gráfico.',
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'O valor percentual (0-100) a ser exibido.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Ativa o estado de esqueleto (loading).',
    },
    error: {
      control: 'text',
      description: 'Exibe uma mensagem de erro em vez do gráfico.',
    },
    emptyMessage: {
      control: 'text',
      description: 'Mensagem exibida quando o valor é zero.',
    },
    primaryColor: {
      control: 'color',
      description: 'Cor da barra de progresso do gráfico.',
    },
    secondaryColor: {
      control: 'color',
      description: 'Cor de fundo da barra de progresso.',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'O `GaugeChart` é um organismo para exibir dados percentuais em um formato de medidor semicircular. Ele lida com os estados de carregamento, vazio e erro, e permite a composição de conteúdo adicional no rodapé.',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof GaugeChart>

const defaultArgs: GaugeChartProps = {
  title: 'Nível de Conclusão',
  value: 75,
  isLoading: false,
  error: null,
  emptyMessage: 'Nenhum progresso registrado.',
  footerContent: <Button>Ver Detalhes</Button>,
}

export const Default: Story = {
  name: 'Padrão (Golden Path)',
  args: {
    ...defaultArgs,
  },
}

export const Loading: Story = {
  name: 'Carregando (Loading)',
  args: {
    ...defaultArgs,
    isLoading: true,
  },
}

export const ZeroData: Story = {
  name: 'Estado Vazio (Zero Data)',
  args: {
    ...defaultArgs,
    value: 0,
  },
}

export const ErrorState: Story = {
  name: 'Estado de Erro',
  args: {
    ...defaultArgs,
    error: 'Falha na conexão com a API de métricas.',
  },
}

export const CustomColors: Story = {
  name: 'Cores Customizadas',
  args: {
    ...defaultArgs,
    value: 88,
    primaryColor: '#28a745', // green
    secondaryColor: '#f0f0f0',
  },
}

export const LayoutStressTest: Story = {
  name: 'Teste de Estresse (Container Estreito)',
  render: (args) => (
    <YStack width={280} borderWidth={1} borderColor="$borderColor" padding="$2" alignItems="center">
      <GaugeChart {...args} />
    </YStack>
  ),
  args: {
    ...defaultArgs,
    title: 'Conclusão de Tarefas Urgentes',
    value: 45,
    footerContent: <Button size="$2">Ação</Button>,
  },
}
