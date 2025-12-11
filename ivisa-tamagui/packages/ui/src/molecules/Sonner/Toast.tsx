import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Info,
  Loader,
  X,
} from '@tamagui/lucide-icons'
import React from 'react'
import { Button } from '../../atoms/Button'
import { Paragraph } from '../../atoms/Typography'
import { XStack, YStack } from 'tamagui'

const toastVariants = {
  success: {
    icon: <CheckCircle />,
    iconColor: '$green10',
  },
  error: {
    icon: <AlertCircle />,
    iconColor: '$red10',
  },
  warning: {
    icon: <AlertTriangle />,
    iconColor: '$orange10',
  },
  info: {
    icon: <Info />,
    iconColor: '$blue10',
  },
  loading: {
    icon: <Loader />,
    iconColor: '$gray10',
  },
}

export type ToastVariant = keyof typeof toastVariants

export interface ToastProps {
  variant?: ToastVariant
  title?: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  action?: {
    label: string
    onClick: () => void
  }
  onDismiss?: () => void
}

export const Toast = ({
  variant = 'info',
  title,
  description,
  icon: customIcon,
  action,
  onDismiss,
}: ToastProps) => {
  const { icon: defaultIcon, iconColor } = toastVariants[variant]
  const icon = customIcon ?? defaultIcon

  return (
    <XStack
      gap="$3"
      alignItems="center"
      backgroundColor="$background"
      borderColor="$border"
      borderWidth={1}
      borderRadius="$4"
      padding="$3"
      width={350}
      elevation="$2"
    >
      {React.cloneElement(icon as React.ReactElement, { color: iconColor })}
      <YStack flex={1} gap="$1">
        {title && <Paragraph fontWeight="bold">{title}</Paragraph>}
        {description && <Paragraph size="$2">{description}</Paragraph>}
      </YStack>
      {action && (
        <Button size="$2" onPress={action.onClick}>
          {action.label}
        </Button>
      )}
      {onDismiss && (
        <Button icon={X} size="$2" circular chromeless onPress={onDismiss} />
      )}
    </XStack>
  )
}
