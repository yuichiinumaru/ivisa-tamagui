
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../atoms/Button'
import { AlertDialog } from './AlertDialog'
import { Check, X } from '@tamagui/lucide-icons'


const meta: Meta<React.ComponentProps<typeof AlertDialog>> = {
  title: 'Moléculas/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    actionText: { control: 'text' },
    cancelText: { control: 'text' },
    isLoading: { control: 'boolean' },
    hasError: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    trigger: {
      control: {
        type: null,
      },
    },
    actions: {
      control: {
        type: null,
      },
    },
    onCancel: { action: 'canceled' },
    onAction: { action: 'confirmed' },
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof AlertDialog>>

const defaultArgs = {
  trigger: <Button variant="outline">Abrir Diálogo</Button>,
  title: 'Você tem certeza absoluta?',
  description:
    'Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.',
  actionText: 'Continuar',
  cancelText: 'Cancelar',
}

export const Padrao: Story = {
  args: {
    ...defaultArgs,
  },
}

export const Carregando: Story = {
  args: {
    ...defaultArgs,
    isLoading: true,
  },
}

export const Error: Story = {
  args: {
    ...defaultArgs,
    title: 'Ocorreu um Erro',
    description: 'Não foi possível completar a sua solicitação. Por favor, tente novamente.',
    actionText: 'Tentar Novamente',
    hasError: true,
  },
}

export const LongDescription: Story = {
  args: {
    ...defaultArgs,
    description:
      'Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
}

export const CustomActions: Story = {
  args: {
    ...defaultArgs,
    title: 'Ações Customizadas',
    description: 'Você pode passar qualquer nó React para a propriedade de ações para substituir os botões padrão.',
    actions: (
      <>
        <Button variant="outline" icon={<X />}>
          Rejeitar
        </Button>
        <Button variant="default" icon={<Check />}>
          Aprovar
        </Button>
      </>
    ),
  },
}

