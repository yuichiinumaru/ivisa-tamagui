import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Navbar } from './Navbar'
import { XStack, YStack, Text } from 'tamagui'
import { MessageSquare, Globe, Settings, Bell } from '@tamagui/lucide-icons'
import { Button } from '../../atoms/Button'
import { Logo } from '../../atoms/Logo/Logo'
import { SearchBar } from '../../molecules/SearchBar/SearchBar'

const mockUser = {
  name: 'Chica da Silva',
  avatarUrl: 'https://i.pravatar.cc/150?u=adriana',
  status: 'ONLINE',
}

const meta: Meta<typeof Navbar> = {
  title: 'Organismos/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    fixed: { control: 'boolean' },
    onSearch: { action: 'searched' },
  },
}

export default meta
type Story = StoryObj<typeof Navbar>

/**
 * Story: Layout Oficial VIVI (Golden Path)
 * Com SearchBar para usuários autenticados.
 */
export const GoldenPath: Story = {
  name: 'Layout Oficial VIVI',
  args: {
    user: mockUser,
    fixed: false,
  },
  render: (args) => (
    <YStack minHeight={150} backgroundColor="$gray2">
      <Navbar
        {...args}
        center={
          <XStack width="100%" maxWidth={500}>
            <SearchBar 
              placeholder="Buscar processos ou documentos..." 
              shortcut="/" 
            />
          </XStack>
        }
        actions={
          <XStack paddingHorizontal="$2" alignItems="center" gap="$4">
            <XStack gap="$4" $sm={{ display: 'none' }}>
              <MessageSquare size={20} color="$gray11" style={{ cursor: 'pointer' }} />
              <Globe size={20} color="$gray11" style={{ cursor: 'pointer' }} />
              <Settings size={20} color="$gray11" style={{ cursor: 'pointer' }} />
            </XStack>
            <Bell size={20} color="$gray11" style={{ cursor: 'pointer' }} />
          </XStack>
        }
      />
    </YStack>
  ),
}

/**
 * Story: Estado Deslogado (Logged Out)
 * Sem SearchBar, focado em Logo e Ações de entrada.
 */
export const LoggedOut: Story = {
  name: 'Navbar – Logged Out',
  args: {
    user: undefined,
  },
  render: (args) => (
    <YStack minHeight={100}>
      <Navbar
        {...args}
        logo={<Logo variant="full" />}
        center={null} // Removida a barra de busca para usuários não autenticados
        actions={
          <XStack gap="$3">
            <Button variant="secondary">Entrar</Button>
            <Button>Registrar</Button>
          </XStack>
        }
      />
    </YStack>
  ),
}

/**
 * Story: Comportamento Fixo (Scroll Test)
 */
export const Fixed: Story = {
  name: 'Navbar – Fixed',
  args: {
    fixed: true,
    user: mockUser,
  },
  render: (args) => (
    <YStack height={400} backgroundColor="$gray2" overflow="auto">
      <Navbar
        {...args}
        center={
          <XStack width="100%" maxWidth={400}>
            <SearchBar placeholder="Pesquisa rápida..." size="sm" />
          </XStack>
        }
      />
      <YStack padding="$10" alignItems="center" gap="$4">
        <Text color="$gray10" fontSize="$4">Role a página para baixo para testar a fixação</Text>
        <YStack height={1000} width="90%" backgroundColor="$background" borderRadius="$4" opacity={0.3} borderStyle="dashed" borderWidth={2} borderColor="$borderColor" />
      </YStack>
    </YStack>
  ),
}