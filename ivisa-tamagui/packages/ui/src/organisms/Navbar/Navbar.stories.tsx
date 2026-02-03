import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Navbar } from './Navbar'
import { YStack, Text } from 'tamagui'
import { Button } from '../../atoms/Button'
import { mockUserProfile } from '../../mocks/sidebar'
import { Logo } from '../../atoms/Logo/Logo'

// Aliases para evitar conflitos de tipos do Tamagui
const YStackAny = YStack as any
const TextAny = Text as any
const ButtonAny = Button as any
const LogoAny = Logo as any
const NavbarAny = Navbar as any

const meta: Meta<typeof Navbar> = {
  title: 'Organismos/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Navbar>

export const GoldenPath: Story = {
  name: 'Navbar Padrão',
  render: () => (
    <div style={{ height: 80 }}>
      <NavbarAny
        logo={<LogoAny variant="full" />}
        center={(
          <YStackAny flexDirection="row" gap="$2">
            <ButtonAny chromeless>Dashboard</ButtonAny>
            <ButtonAny chromeless>Análises</ButtonAny>
          </YStackAny>
        )}
        actions={(
          <YStackAny>
            <TextAny>Notificações</TextAny>
          </YStackAny>
        )}
        user={mockUserProfile}
      />
    </div>
  ),
}

export const LoggedOut: Story = {
  name: 'Navbar – Logged Out',
  render: () => (
    <div style={{ height: 80 }}>
      <NavbarAny
        logo={<LogoAny variant="full" />}
        center={(
          <YStackAny flexDirection="row" gap="$2">
            <ButtonAny chromeless>Login</ButtonAny>
            <ButtonAny chromeless>Criar conta</ButtonAny>
          </YStackAny>
        )}
      />
    </div>
  ),
}

export const Fixed: Story = {
  name: 'Navbar – Fixed',
  render: () => (
    <div style={{ height: 300 }}>
      <NavbarAny
        fixed
        logo={<LogoAny variant="full" />}
        center={(
          <YStackAny flexDirection="row" gap="$2">
            <ButtonAny chromeless>Dashboard</ButtonAny>
            <ButtonAny chromeless>Análises</ButtonAny>
          </YStackAny>
        )}
        actions={(
          <YStackAny>
            <TextAny>Notificações</TextAny>
          </YStackAny>
        )}
        user={mockUserProfile}
      />
      <div style={{ padding: 16 }}>
        <p>Conteúdo da página rolável aqui.</p>
      </div>
    </div>
  ),
}