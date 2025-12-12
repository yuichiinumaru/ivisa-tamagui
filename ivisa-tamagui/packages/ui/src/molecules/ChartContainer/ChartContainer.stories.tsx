import type { Meta, StoryObj } from '@storybook/react'
import { ChartContainer } from './ChartContainer'
import { Button, Text } from 'tamagui'
import { BarChart } from '@tamagui/lucide-icons'

const meta: Meta<typeof ChartContainer> = {
  title: 'Moléculas/ChartContainer',
  component: ChartContainer,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'O título do container do gráfico.',
    },
    description: {
      control: 'text',
      description: 'Uma breve descrição ou subtitulo para o gráfico.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Exibe um spinner de carregamento no container.',
    },
    hasError: {
      control: 'boolean',
      description: 'Exibe uma mensagem de erro no container.',
    },
    errorMessage: {
      control: 'text',
      description: 'Mensagem de erro customizada a ser exibida.',
    },
    rightSlot: {
      control: false,
      description: 'Permite adicionar um componente à direita do título.',
    },
  },
  args: {
    title: 'Desempenho de Vendas',
    description: 'Dados dos últimos 6 meses.',
    children: <Text>O conteúdo do gráfico seria renderizado aqui.</Text>,
  },
  parameters: {
    docs: {
      description: {
        component: 'O `ChartContainer` é uma molécula projetada para encapsular gráficos, fornecendo um layout consistente com título, descrição e estados de carregamento e erro.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ChartContainer>

export const Padrao: Story = {
  name: 'Padrão',
  args: {},
}

export const Carregando: Story = {
  args: {
    isLoading: true,
  },
}

export const ComErro: Story = {
  name: 'Com Erro',
  args: {
    hasError: true,
    errorMessage: 'Não foi possível carregar os dados do gráfico. Tente novamente.',
  },
}

export const ComAcoes: Story = {
  name: 'Com Ações',
  args: {
    rightSlot: <Button icon={BarChart}>Filtrar</Button>,
  },
}

export const TesteDeEstresse: Story = {
  name: 'Teste de Estresse',
  parameters: {
    controls: {
      include: ['title', 'description', 'rightSlot'],
    },
  },
  render: (args) => (
    <div style={{ width: '350px', border: '1px solid red', padding: '10px' }}>
      <ChartContainer {...args} />
    </div>
  ),
  args: {
    title: 'Título do Gráfico Extremamente Longo Que Deveria Quebrar a Linha ou Ser Cortado',
    description: 'Esta é uma descrição muito longa para testar como o componente se comporta com um texto que ocupa múltiplas linhas e pode estourar o container.',
    rightSlot: <Button>Ação</Button>,
    children: <Text>Conteúdo do gráfico.</Text>,
  },
}
