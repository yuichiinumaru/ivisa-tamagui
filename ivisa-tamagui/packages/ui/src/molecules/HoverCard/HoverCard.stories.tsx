
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardProfileContent,
  HoverCardTrigger,
} from './HoverCard'
import { Button } from '../../atoms/Button'
import { YStack } from 'tamagui'


const meta: Meta<React.ComponentProps<typeof HoverCard>> = {
  title: 'Moléculas/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Um pop-up que aparece quando o usuário passa o mouse sobre um elemento, ideal para exibir informações adicionais sem poluir a interface.',
      },
    },
  },
  argTypes: {
    children: {
      control: { type: 'none' },
      description: 'O conteúdo gatilho e o conteúdo do pop-up.',
    },
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof HoverCard>>

const mockUser = {
  name: 'Ivisa',
  handle: '@ivisa',
  avatar: 'https://github.com/ivisa.png',
  bio: 'Simplificando o mundo das viagens com a melhor tecnologia e o melhor atendimento.',
  followers: 100,
  following: 10,
}

const partialMockUser = {
  ...mockUser,
  bio: undefined,
}

export const Padrao: Story = {
  name: 'Padrão',
  args: {},
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost">{mockUser.handle}</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <HoverCardProfileContent user={mockUser} />
      </HoverCardContent>
    </HoverCard>
  ),
}

export const Carregando: Story = {
  name: 'Carregando',
  args: {},
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost">{mockUser.handle}</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <HoverCardProfileContent user={mockUser} isLoading />
      </HoverCardContent>
    </HoverCard>
  ),
}

export const ComErro: Story = {
  name: 'Com Erro',
  args: {},
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost">{mockUser.handle}</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <HoverCardProfileContent user={mockUser} hasError />
      </HoverCardContent>
    </HoverCard>
  ),
}

export const ComAcoes: Story = {
  name: 'Com Ações',
  args: {},
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost">{mockUser.handle}</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <HoverCardProfileContent
          user={mockUser}
          actions={<Button onPress={() => alert('Seguindo!')}>Seguir</Button>}
        />
      </HoverCardContent>
    </HoverCard>
  ),
}

export const DadosParciais: Story = {
  name: 'Dados Parciais',
  args: {},
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost">{partialMockUser.handle}</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <HoverCardProfileContent user={partialMockUser} />
      </HoverCardContent>
    </HoverCard>
  ),
}

export const TesteDeEstresse: Story = {
  name: 'Teste de Estresse (Texto Longo)',
  args: {},
  render: () => (
    <YStack w={200}>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button theme="blue" variant="ghost">
            {mockUser.handle}
          </Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <HoverCardProfileContent user={mockUser} />
        </HoverCardContent>
      </HoverCard>
    </YStack>
  ),
}
