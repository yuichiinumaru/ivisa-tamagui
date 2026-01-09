
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { YStack } from 'tamagui'
import { BadgeCounter } from './BadgeCounter'
import { Button } from '../../atoms/Button'
import { Bell } from '@tamagui/lucide-icons'


const meta: Meta<React.ComponentProps<typeof BadgeCounter>> = {
  title: 'Moléculas/BadgeCounter',
  component: BadgeCounter,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BadgeCounter envolve um elemento e exibe um contador de notificações.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: 'number',
      description: 'O número a ser exibido no contador.',
    },
    max: {
      control: 'number',
      description: 'O número máximo a ser exibido. Acima deste valor, será exibido com um "+".',
    },
    showZero: {
      control: 'boolean',
      description: 'Se o contador deve ser exibido quando o valor for zero.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Se o componente está em estado de carregamento.',
    },
    hasError: {
      control: 'boolean',
      description: 'Se o componente está em estado de erro.',
    },
    disabled: {
      control: 'boolean',
      description: 'Se o componente está desabilitado.',
    },
    children: {
      control: 'none',
      description: 'O conteúdo principal a ser renderizado.',
    },
  },
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof BadgeCounter>>

export const Padrão: Story = {
  name: 'Padrão',
  args: {
    count: 5,
    children: <Button icon={Bell} circular size="$md" />,
  },
}

export const Estouro: Story = {
  name: 'Estouro',
  args: {
    count: 100,
    max: 99,
    children: <Button icon={Bell} circular size="$md" />,
  },
}

export const ExibirZero: Story = {
  name: 'Exibir Zero',
  args: {
    count: 0,
    showZero: true,
    children: <Button icon={Bell} circular size="$md" />,
  },
}

export const Carregando: Story = {
  name: 'Carregando',
  args: {
    isLoading: true,
    children: <Button icon={Bell} circular size="$md" />,
  },
}

export const ComErro: Story = {
  name: 'Com Erro',
  args: {
    count: 5,
    hasError: true,
    children: <Button icon={Bell} circular size="$md" />,
  },
}

export const Desabilitado: Story = {
  name: 'Desabilitado',
  args: {
    count: 5,
    disabled: true,
    children: <Button icon={Bell} circular size="$md" />,
  },
}

export const EmContainerEstreito: Story = {
  name: 'Em Contêiner Estreito',
  decorators: [
    (Story) => (
      <YStack width={50}>
        <Story />
      </YStack>
    ),
  ],
  args: {
    count: 12345,
    max: 9999,
    children: <Button icon={Bell} circular size="$md" />,
  },
}
