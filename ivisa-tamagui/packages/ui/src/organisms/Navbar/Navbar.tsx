import React from 'react'
import { XStack, YStack, Text, GetProps } from 'tamagui'
import { Logo } from '../../atoms/Logo/Logo'
import { Avatar } from '../../atoms/Avatar'
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

export const Navbar: React.FC<NavbarProps> = ({ logo, center, actions, user, fixed = true }) => {
  const headerProps: Partial<GetProps<typeof YStack>> = {
    tag: 'header',
    width: '100%',
    position: fixed ? 'fixed' : 'relative',
    top: fixed ? 0 : undefined,
    left: fixed ? 0 : undefined,
    right: fixed ? 0 : undefined,
    zIndex: 100,
    backgroundColor: '$background',
    borderBottomWidth: 1,
    borderColor: '$borderColor',
    py: '$2',
    px: '$4',
    alignItems: 'center',
    justifyContent: 'center',
    role: 'navigation',
    'aria-label': 'Barra de navegação principal',
  }

  const containerProps: Partial<GetProps<typeof XStack>> = {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 1400,
    mx: 'auto',
    gap: '$4',
  }

  const leftProps: Partial<GetProps<typeof XStack>> = { alignItems: 'center', gap: '$3' }
  const centerProps: Partial<GetProps<typeof XStack>> = { flex: 1, alignItems: 'center', justifyContent: 'center', 'aria-live': 'polite' }
  const rightProps: Partial<GetProps<typeof XStack>> = { alignItems: 'center', gap: '$3' }
  const userProps: Partial<GetProps<typeof XStack>> = { alignItems: 'center', gap: '$3' }
  const nameTextProps: Partial<GetProps<typeof Text>> = { fontWeight: '600', fontSize: '$3' }
  const roleTextProps: Partial<GetProps<typeof Text>> = { fontSize: '$2', color: '$gray11' }
  const buttonProps: Partial<GetProps<typeof Button>> = { chromeless: true }

  return (
    // local casts to `any` keep Tamagui runtime behavior but avoid index-signature typing noise
    <YStack {...headerProps}>
      <XStack {...containerProps}>
        <XStack {...leftProps}>{logo ?? <Logo variant="symbol" />}</XStack>

        <XStack {...centerProps}>{center}</XStack>

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
            <Button {...buttonProps}>Entrar</Button>
          )}
        </XStack>
      </XStack>
    </YStack>
  )
}

export default Navbar

