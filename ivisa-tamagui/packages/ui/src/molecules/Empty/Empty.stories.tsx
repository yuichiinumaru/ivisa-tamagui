import type { Meta, StoryObj } from '@storybook/react'
import { Empty } from './Empty'
import { Button } from '../../atoms/Button'
import { Ban, WifiOff } from '@tamagui/lucide-icons'
import { YStack } from 'tamagui'

const meta: Meta<typeof Empty> = {
  title: 'Moléculas/Empty',
  component: Empty,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Um componente para ser exibido quando não há dados para mostrar. Pode conter um ícone, um título, uma descrição e um botão de chamada para ação.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'O título principal para o estado vazio.',
    },
    description: {
      control: 'text',
      description: 'O texto descritivo para o estado vazio.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Mostra o estado de esqueleto de carregamento.',
    },
    hasError: {
      control: 'boolean',
      description: 'Aplica estilos de erro ao componente.',
    },
    actions: {
      control: false,
      description: 'Um slot para adicionar um ou mais botões de ação.',
    },
    icon: {
      control: false,
      description: 'Um ícone para ser exibido no componente.',
    },
  },
  decorators: [
    (Story) => (
      <YStack padding="$4" alignItems="center" backgroundColor="$backgroundFocus" flex={1}>
        <Story />
      </YStack>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Empty>

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    icon: <Ban />,
    title: 'Nenhum Projeto Criado',
    description: 'Comece criando um novo projeto para vê-lo aqui.',
    actions: <Button>Criar Projeto</Button>,
  },
}

export const Carregando: Story = {
  name: 'Carregando',
  args: {
    isLoading: true,
  },
}

export const ComErro: Story = {
  name: 'Com Erro',
  args: {
    icon: <WifiOff />,
    title: 'Falha na Conexão',
    description: 'Não foi possível buscar os dados. Verifique sua conexão e tente novamente.',
    actions: <Button>Tentar Novamente</Button>,
    hasError: true,
  },
}

export const ApenasTitulo: Story = {
  name: 'Apenas Título',
  args: {
    title: 'Nenhum Resultado Encontrado',
  },
}

export const ContainerEstreito: Story = {
  name: 'Container Estreito',
  args: {
    icon: <Ban />,
    title: 'Título da Seção Extremamente Longo Que Deveria Ser Cortado',
    description:
      'Esta é uma descrição muito longa que também precisa ser verificada para ver se o truncamento de texto funciona como esperado em containers pequenos.',
    actions: <Button>Criar Novo Item</Button>,
  },
  decorators: [
    (Story) => (
      <YStack
        padding="$4"
        alignItems="center"
        backgroundColor="$backgroundFocus"
        flex={1}
        width={250}
      >
        <Story />
      </YStack>
    ),
  ],
}
