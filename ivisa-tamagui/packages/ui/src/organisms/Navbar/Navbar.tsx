import React from 'react'
import { XStack, YStack, Text } from 'tamagui'
import { Logo } from '../../atoms/Logo/Logo'
import { Avatar } from '../../atoms/Avatar/Avatar'
import { Button } from '../../atoms/Button'

export interface UserProfile {
  name?: string
  role?: string
  avatarUrl?: string
  status?: string
}

export interface NavbarProps {
  logo?: React.ReactNode
  center?: React.ReactNode 
  actions?: React.ReactNode
  user?: UserProfile
  fixed?: boolean
}

export const Navbar: React.FC<NavbarProps> = ({ 
  logo, 
  center, 
  actions, 
  user, 
  fixed = false 
}) => {
  return (
    <YStack
      tag="header"
      width="100%"
      position={fixed ? 'fixed' : 'relative'}
      top={0}
      left={0}
      zIndex={1000}
      backgroundColor="$background"
      borderBottomWidth={1}
      borderColor="$borderColor"
      paddingVertical="$2"
      paddingHorizontal="$4"
      alignItems="center"
    >
      <XStack
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        maxWidth={1440}
        gap="$4"
      >
        {/* ESQUERDA: Logo e Identidade */}
        <XStack alignItems="center" gap="$3" minWidth={200}>
          {logo ?? (
            <XStack alignItems="center" gap="$2">              
              <Logo variant="symbol" />
              <YStack $sm={{ display: 'none' }}>
                <Text fontWeight="800" fontSize="$4" lineHeight={18} color="$blue10">
                  IVISA
                </Text>
                <Text fontSize="$1" color="$gray10" fontWeight="600">
                  VERSÃO 1.0.0
                </Text>
              </YStack>
            </XStack>
          )}
        </XStack>

        {/* CENTRO: Slot flexível (Onde injetamos o SearchBar via Story) */}
        <XStack flex={1} justifyContent="center" alignItems="center">
          {center}
        </XStack>

        {/* DIREITA: Perfil e Ações */}
        <XStack alignItems="center" gap="$3" minWidth={200} justifyContent="flex-end">
          {actions}

          {user ? (
            <XStack alignItems="center" gap="$3">
              <YStack alignItems="flex-end" $sm={{ display: 'none' }}>
                <Text fontWeight="700" fontSize="$3" color="$color">
                  {user.name}
                </Text>
                <Text fontSize="$1" color="$green10" fontWeight="800">
                  {user.status ?? 'ONLINE'}
                </Text>
              </YStack>
              <Avatar src={user.avatarUrl} size="$3" />
            </XStack>
          ) : null}
        </XStack>
      </XStack>
    </YStack>
  )
}