import React from 'react'
import { XStack, YStack, Text, XStackProps, YStackProps } from 'tamagui'
import { Logo } from '../../atoms/Logo/Logo'
import { Avatar } from '../../atoms/Avatar/Avatar'
import { Button } from '../../atoms/Button'

export interface UserProfile {
  name?: string
  role?: string
  avatarUrl?: string
}

export interface NavbarProps {
  logo?: React.ReactNode
  center?: React.ReactNode
  actions?: React.ReactNode
  user?: UserProfile
  fixed?: boolean
}

export const Navbar: React.FC<NavbarProps> = ({ logo, center, actions, user, fixed = false }) => {
    // Usamos 'as any' apenas para position devido a conflito de versão do Tamagui
  const headerProps: YStackProps = {
    tag: 'header',
    width: '100%',
    position: (fixed ? 'fixed' : 'relative') as any,
    top: fixed ? 0 : undefined,
    left: fixed ? 0 : undefined,
    zIndex: fixed ? 1000 : undefined,
    backgroundColor: '$background',
    borderBottomWidth: 1,
    borderColor: '$borderColor',
    py: '$2',
    px: '$4',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const containerProps: XStackProps = {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 1400,
    mx: 'auto',
    gap: '$4',
  }

  const leftProps: XStackProps = { alignItems: 'center', gap: '$3' }
  const centerProps: XStackProps = { flex: 1, alignItems: 'center', justifyContent: 'center' }
  const rightProps: XStackProps = { alignItems: 'center', gap: '$3' }
  const userProps: XStackProps = { alignItems: 'center', gap: '$3' }
  const nameTextProps = { fontWeight: '600' as const, fontSize: '$3' as const }
  const roleTextProps = { fontSize: '$2' as const, color: '$gray11' as const }

  return (
    <YStack {...headerProps}>
      <XStack {...containerProps}>
        <XStack {...leftProps}>
          {logo ?? <Logo variant="symbol" />}
        </XStack>

        <XStack {...centerProps}>
          {center}
        </XStack>

        <XStack {...rightProps}>
          {actions}
          
          {user ? (
            <XStack {...userProps}>
              <Avatar src={user.avatarUrl} />
              <YStack>
                <Text {...nameTextProps}>{user.name}</Text>
                <Text {...roleTextProps}>{user.role}</Text>
              </YStack>
            </XStack>
          ) : (
            <Button chromeless>Entrar</Button>
          )}
        </XStack>
      </XStack>
    </YStack>
  )
}

Navbar.displayName = 'Navbar'

