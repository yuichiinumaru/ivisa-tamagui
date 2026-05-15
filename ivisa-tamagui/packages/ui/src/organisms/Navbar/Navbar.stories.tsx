import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Bell, Globe, MessageSquare, Settings } from '@tamagui/lucide-icons'
import { XStack, YStack, Text } from 'tamagui'
import { Button } from '../../atoms/Button'
import { Logo } from '../../atoms/Logo/Logo'
import { mockNavbarUser } from '../../mocks/navbar'
import { Navbar } from './Navbar'

const meta: Meta<React.ComponentProps<typeof Navbar>> = {
  title: 'Organismos/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Navbar padrão da aplicação: logo, área central configurável, ações e perfil do usuário.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    fixed: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof Navbar>>

const primaryNav = (
  <XStack gap="$2" alignItems="center" flexWrap="wrap" justifyContent="center">
    <Button chromeless>Dashboard</Button>
    <Button chromeless>Solicitações</Button>
    <Button chromeless>Análises</Button>
  </XStack>
)

const appActions = (
  <XStack gap="$2" alignItems="center">
    <Button chromeless circular aria-label="Mensagens"><MessageSquare /></Button>
    <Button chromeless circular aria-label="Idioma"><Globe /></Button>
    <Button chromeless circular aria-label="Notificações"><Bell /></Button>
    <Button chromeless circular aria-label="Configurações"><Settings /></Button>
  </XStack>
)

export const GoldenPath: Story = {
  name: 'Layout Oficial VIVI',
  args: {
    fixed: false,
    user: mockNavbarUser,
  },
  render: (args) => (
    <Navbar
      {...args}
      logo={<Logo variant="full" />}
      center={primaryNav}
      actions={appActions}
    />
  ),
}

export const LoggedOut: Story = {
  name: 'Navbar – Deslogado',
  args: {
    fixed: false,
  },
  render: (args) => (
    <Navbar
      {...args}
      logo={<Logo variant="full" />}
      center={null}
      actions={(
        <XStack gap="$2" alignItems="center">
          <Button chromeless>Entrar</Button>
          <Button>Registrar</Button>
        </XStack>
      )}
    />
  ),
}

export const Fixed: Story = {
  name: 'Navbar – Fixa com scroll',
  args: {
    fixed: true,
    user: mockNavbarUser,
  },
  render: (args) => (
    <YStack minHeight={720} backgroundColor="$background" paddingTop={72} gap="$4">
      <Navbar
        {...args}
        logo={<Logo variant="full" />}
        center={primaryNav}
        actions={appActions}
      />
      <YStack padding="$6" gap="$4">
        <Text fontSize="$7" fontWeight="700">Teste de navegação fixa</Text>
        <Text color="$gray11">
          Role a página para baixo e confirme que a navbar permanece visível sem cobrir o conteúdo principal.
        </Text>
        {Array.from({ length: 8 }, (_, index) => (
          <YStack key={index} padding="$4" borderWidth={1} borderColor="$borderColor" borderRadius="$4">
            <Text fontWeight="600">Seção de conteúdo {index + 1}</Text>
            <Text color="$gray11">Conteúdo de apoio para validar o comportamento com scroll.</Text>
          </YStack>
        ))}
      </YStack>
    </YStack>
  ),
}
