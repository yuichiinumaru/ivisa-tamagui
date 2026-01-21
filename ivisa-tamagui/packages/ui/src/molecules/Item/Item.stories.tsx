
import type React from 'react';
import { Button } from '../../atoms/Button'
import { MoreVertical, User, Settings, CreditCard } from '@tamagui/lucide-icons'
import { YStack } from 'tamagui'
import { Item } from './Item'

import type { Meta, StoryObj } from '@storybook/react'


const meta: Meta<React.ComponentProps<typeof Item>> = {
  title: 'Moléculas/Item',
  component: Item,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Um Item é um componente flexível usado em listas ou menus. Geralmente contém um ícone, texto e um valor ou atalho opcional.',
      },
    },
  },
  argTypes: {
    item: {
      control: 'object',
      description: 'Objeto contendo os dados do item, como ícone, texto, subtítulo e valor.',
    },
    rightSlot: {
      control: 'object',
      description: 'Um slot à direita para ações personalizadas ou conteúdo adicional.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Se verdadeiro, exibe um esqueleto de carregamento.',
    },
    hasError: {
      control: 'boolean',
      description: 'Se verdadeiro, aplica um estilo de erro ao item.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Se verdadeiro, desativa o item.',
    },
  },
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof Item>>

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    item: {
      icon: <User />,
      text: 'Perfil',
      value: '⌘P',
    },
  },
}

export const ComSubtitulo: Story = {
  name: 'Com Subtítulo',
  args: {
    item: {
      icon: <User />,
      text: 'João da Silva',
      subtitle: 'joao.silva@empresa.com',
      value: '⌘P',
    },
  },
}

export const ApenasTexto: Story = {
  name: 'Apenas Texto',
  args: {
    item: {
      text: 'Faturamento',
      value: '⌘B',
    },
  },
}

export const SemValor: Story = {
  name: 'Sem Valor',
  args: {
    item: {
      icon: <Settings />,
      text: 'Configurações',
    },
  },
}

export const GrupoDeItens: Story = {
  name: 'Grupo de Itens',
  render: () => (
    <YStack
      width={300}
      gap="$2"
      backgroundColor="$background"
      padding="$2"
      borderRadius="$md"
      tag="ul"
    >
      <Item
        item={{
          icon: <User />,
          text: 'Perfil',
          value: '⌘P',
        }}
      />
      <Item
        item={{
          icon: <CreditCard />,
          text: 'Faturamento',
          value: '⌘B',
        }}
      />
      <Item
        item={{
          icon: <Settings />,
          text: 'Configurações',
          value: '⌘S',
        }}
      />
    </YStack>
  ),
}

export const Carregando: Story = {
  args: {
    isLoading: true,
  },
}

export const ComErro: Story = {
  name: 'Com Erro',
  args: {
    item: {
      icon: <User />,
      text: 'Perfil',
      value: '⌘P',
    },
    hasError: true,
  },
}

export const Desativado: Story = {
  args: {
    item: {
      icon: <User />,
      text: 'Perfil',
      value: '⌘P',
    },
    isDisabled: true,
  },
}

export const ComAcoes: Story = {
  name: 'Com Ações',
  args: {
    item: {
      icon: <User />,
      text: 'Usuário',
    },
    rightSlot: <Button icon={<MoreVertical />} size="$2" />,
  },
}

export const EstresseDeTexto: Story = {
  name: 'Estresse de Texto',
  args: {
    item: {
      icon: <User />,
      text: 'Texto muito longo que deve ser truncado para caber no contêiner.',
      subtitle: 'Subtítulo igualmente longo para testar o comportamento de truncamento.',
    },
  },
  render: (args) => (
    <YStack width={200}>
      <Item {...args} />
    </YStack>
  ),
}

export const DadosParciais: Story = {
  name: 'Dados Parciais',
  args: {
    item: {
      text: 'Item com apenas texto.',
    },
  },
}

