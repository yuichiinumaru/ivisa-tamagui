import React from 'react'
import { XStack, YStack, Text } from 'tamagui'
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
  return (
    <YStack
      tag="header"
      width="100%"
      // TS typing for Tamagui position is limited; use 'relative' in typesafe code.
      position={fixed ? 'relative' : 'relative'}
      zIndex={100}
      backgroundColor="$background"
      borderBottomWidth={1}
      borderColor="$borderColor"
      py="$2"
      px="$4"
      alignItems="center"
      justifyContent="center"
    >
      <XStack width="100%" alignItems="center" justifyContent="space-between" maxWidth={1400} mx="auto" gap="$4">
        <XStack alignItems="center" gap="$3">{logo ?? <Logo variant="symbol" />}</XStack>

        <XStack flex={1} alignItems="center" justifyContent="center">{center}</XStack>

        <XStack alignItems="center" gap="$3">
          {actions}
          {user ? (
            <XStack alignItems="center" gap="$3">
              <Avatar src={user.avatarUrl} />
              <YStack>
                <Text fontWeight="600" fontSize="$3">{user.name}</Text>
                <Text fontSize="$2" color="$gray11">{user.role}</Text>
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

export default Navbar

