// @ts-nocheck
import React from 'react'
import { YStack, XStack, styled, GetProps, Text, Button as TamaguiButton } from 'tamagui'
import { ZoomIn, ZoomOut, Moon, Sun, Type } from '@tamagui/lucide-icons'
import { Button } from '../../atoms/Button'

const ToolbarContainer = styled(XStack, {
  name: 'A11yToolbar',
  padding: '$2',
  backgroundColor: '$background',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$4',
  gap: '$2',
  alignItems: 'center',
})

const Separator = styled(YStack, {
  width: 1,
  height: 24,
  backgroundColor: '$borderColor',
  marginHorizontal: '$1',
})

export type A11yToolbarProps = GetProps<typeof ToolbarContainer> & {
  onZoomIn?: () => void
  onZoomOut?: () => void
  onToggleTheme?: () => void
  onToggleHighContrast?: () => void
  isDark?: boolean
}

export const A11yToolbar = ({
  onZoomIn,
  onZoomOut,
  onToggleTheme,
  onToggleHighContrast,
  isDark = false,
  ...props
}: A11yToolbarProps) => {
  return (
    <ToolbarContainer {...props}>
      <Text fontSize="$2" fontWeight="bold" marginRight="$2">Acessibilidade:</Text>

      <Button icon={ZoomOut} size="sm" variant="outline" onPress={onZoomOut} aria-label="Diminuir fonte" />
      <Button icon={Type} size="sm" variant="ghost" disabled aria-label="Tamanho da fonte" />
      <Button icon={ZoomIn} size="sm" variant="outline" onPress={onZoomIn} aria-label="Aumentar fonte" />

      <Separator />

      <Button
        icon={isDark ? Sun : Moon}
        size="sm"
        variant="outline"
        onPress={onToggleTheme}
        aria-label={isDark ? "Modo Claro" : "Modo Escuro"}
      />

      <Button
        size="sm"
        variant="outline"
        onPress={onToggleHighContrast}
      >
        Alto Contraste
      </Button>
    </ToolbarContainer>
  )
}
