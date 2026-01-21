// @ts-nocheck
import { Button } from '@ivisa/ui/atoms/Button'
import { Home } from '@tamagui/lucide-icons'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { YStack } from 'tamagui'
import { Breadcrumb, BreadcrumbProps } from './Breadcrumb'

const meta: Meta<BreadcrumbProps> = {
  title: 'Moléculas/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  args: {
    ariaLabel: 'Navegação',
  },
  parameters: {
    docs: {
      description: {
        component:
          'O Breadcrumb é um componente de navegação que ajuda os usuários a entenderem sua localização atual em uma hierarquia de páginas ou seções.',
      },
    },
  },
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof meta>>

const itemsPadrao = [
  { label: 'Início', href: '#' },
  { label: 'Projetos', href: '#' },
  { label: 'Sistema de Design', href: '#' },
  { label: 'Documentos' },
]

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    items: itemsPadrao,
  },
}

export const ComSeparadorCustomizado: Story = {
  name: 'Com Separador Customizado',
  args: {
    items: itemsPadrao,
    separator: '>',
  },
}

export const CaminhoLongo: Story = {
  name: 'Caminho Longo',
  args: {
    items: [
      { label: 'Início', href: '#' },
      { label: 'Plataforma', href: '#' },
      { label: 'Componentes', href: '#' },
      { label: 'Navegação', href: '#' },
      { label: 'Breadcrumb', href: '#' },
      { label: 'Especificações' },
    ],
    separator: '•',
  },
}

export const Carregando: Story = {
  name: 'Carregando',
  args: {
    isLoading: true,
  },
}

export const ComAcao: Story = {
  name: 'Com Ação',
  args: {
    items: itemsPadrao,
    rightSlot: <Button icon={<Home size="$1" />}>Ação</Button>,
  },
}

export const ComContainerEstreito: Story = {
  name: 'Com Container Estreito',
  args: {
    items: CaminhoLongo.args?.items,
  },
  decorators: [
    (Story) => (
      <YStack width={300} borderwidth={1} borderColor="$borderColor" p="$2" borderRadius="$2">
        <Story />
      </YStack>
    ),
  ],
}

