// @ts-nocheck
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { YStack, Text } from 'tamagui'
import { Share, Link, Pen, Trash } from '@tamagui/lucide-icons'

import { ContextMenu, ContextMenuItemDef } from './ContextMenu'

const meta: Meta<React.ComponentProps<typeof ContextMenu>> = {
  title: 'Moléculas/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Exibe um menu para o usuário — como um conjunto de ações ou funções — acionado por um clique com o botão direito.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: 'boolean',
      description: 'Mostra o estado de carregamento do menu.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Desativa o gatilho do menu de contexto.',
    },
    hasError: {
      control: 'boolean',
      description: 'Aplica um estilo de erro ao gatilho.',
    },
    items: {
      control: 'object',
      description: 'Array de itens a serem exibidos no menu.',
    },
  },
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof meta>>

const defaultItems: ContextMenuItemDef[] = [
  {
    label: 'Compartilhar',
    icon: <Share size="$1" />,
    shortcut: '⌘S',
    onSelect: () => console.log('Compartilhar'),
  },
  {
    label: 'Copiar Link',
    icon: <Link size="$1" />,
    onSelect: () => console.log('Copiar Link'),
  },
  {
    isSeparator: true,
  },
  {
    label: 'Editar',
    icon: <Pen size="$1" />,
    onSelect: () => console.log('Editar'),
    disabled: true,
  },
  {
    isSeparator: true,
  },
  {
    label: 'Excluir',
    icon: <Trash size="$1" />,
    shortcut: '⌘D',
    onSelect: () => console.log('Excluir'),
  },
]

const TriggerArea = ({
  hasError = false,
  isDisabled = false,
  constrained = false,
  children,
}) => (
  <YStack
    width={constrained ? 150 : 300}
    height={200}
    borderWidth={2}
    borderColor={hasError ? '$red10' : '$borderColor'}
    borderRadius="$md"
    alignItems="center"
    justifyContent="center"
    borderStyle="dashed"
    opacity={isDisabled ? 0.5 : 1}
    backgroundColor={isDisabled ? '$backgroundHover' : 'transparent'}
    padding="$4"
  >
    <Text textAlign="center">{children}</Text>
  </YStack>
)

export const Padrao: Story = {
  args: {
    items: defaultItems,
    isLoading: false,
    isDisabled: false,
    hasError: false,
  },
  render: ({ items, isLoading, isDisabled, hasError }) => (
    <ContextMenu items={items} isLoading={isLoading} isDisabled={isDisabled}>
      <TriggerArea hasError={hasError} isDisabled={isDisabled}>
        Clique com o botão direito aqui
      </TriggerArea>
    </ContextMenu>
  ),
}

export const Carregando: Story = {
  ...Padrao,
  args: {
    ...Padrao.args,
    isLoading: true,
  },
  render: (args) => (
    <ContextMenu {...args}>
      <TriggerArea>Carregando...</TriggerArea>
    </ContextMenu>
  ),
}

export const Disabled: Story = {
  ...Padrao,
  args: {
    ...Padrao.args,
    isDisabled: true,
  },
  render: (args) => (
    <ContextMenu {...args}>
      <TriggerArea isDisabled>Desativado</TriggerArea>
    </ContextMenu>
  ),
}

export const Error: Story = {
  ...Padrao,
  args: {
    ...Padrao.args,
    hasError: true,
  },
  render: (args) => (
    <ContextMenu {...args}>
      <TriggerArea hasError>Erro no gatilho</TriggerArea>
    </ContextMenu>
  ),
}

export const PartialData: Story = {
  ...Padrao,
  args: {
    ...Padrao.args,
    items: [
      {
        label: 'Ação com ícone',
        icon: <Share size="$1" />,
      },
      {
        label: 'Ação sem ícone',
      },
      {
        label: 'Ação com atalho',
        shortcut: '⌘K',
      },
    ],
  },
  render: (args) => (
    <ContextMenu {...args}>
      <TriggerArea>Dados parciais</TriggerArea>
    </ContextMenu>
  ),
}

export const RestritoWidth: Story = {
  ...Padrao,
  args: {
    ...Padrao.args,
    items: [
      {
        label: 'Este é um texto muito longo que deve ser truncado',
      },
      {
        label: 'Outro item com texto longo para mostrar o comportamento',
      },
    ],
  },
  render: (args) => (
    <ContextMenu {...args}>
      <TriggerArea constrained>
        Gatilho com largura restrita para testar o truncamento de texto
      </TriggerArea>
    </ContextMenu>
  ),
}

export const WithCheckbox: Story = {
  ...Padrao,
  args: {
    ...Padrao.args,
    items: [
      {
        label: 'Opção 1',
        isCheckbox: true,
        checked: true,
        onCheckedChange: (checked) => console.log(`Opção 1: ${checked}`),
      },
      {
        label: 'Opção 2',
        isCheckbox: true,
        checked: false,
        onCheckedChange: (checked) => console.log(`Opção 2: ${checked}`),
      },
    ],
  },
  render: (args) => (
    <ContextMenu {...args}>
      <TriggerArea>Menu com checkboxes</TriggerArea>
    </ContextMenu>
  ),
}

export type TriggerAreaProps = React.ComponentProps<typeof TriggerArea>
