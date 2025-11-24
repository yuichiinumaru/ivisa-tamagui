import React from 'react'
import { View, Text } from 'tamagui'
import styled from '@tamagui/styled-components'

const AlertContainer = styled(View, {
  name: 'Alert',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: '$4',
  borderRadius: '$4',
  borderWidth: 1,
  variants: {
    variant: {
      default: {
        backgroundColor: '$background',
        borderColor: '$border',
        color: '$foreground',
      },
      destructive: {
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderColor: '$destructive',
        color: '$destructive',
      },
      warning: {
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        borderColor: '$warning',
        color: '$warning',
      },
      success: {
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        borderColor: '$success',
        color: '$success',
      },
      info: {
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderColor: '$info',
        color: '$info',
      }
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

const AlertIcon = styled(View, {
  name: 'AlertIcon',
  marginRight: '$3',
  marginTop: '$1',
  fontSize: '$4',
  flexShrink: 0,
})

const AlertContent = styled(View, {
  name: 'AlertContent',
  flex: 1,
})

const AlertTitle = styled(Text, {
  name: 'AlertTitle',
  fontSize: '$3',
  fontWeight: '500',
  marginBottom: '$1',
  color: 'inherit',
})

const AlertDescription = styled(Text, {
  name: 'AlertDescription',
  fontSize: '$2',
  lineHeight: '$3',
  color: 'inherit',
  opacity: 0.8,
})

interface AlertProps {
  variant?: 'default' | 'destructive' | 'warning' | 'success' | 'info'
  title?: string
  description?: string
  icon?: React.ReactNode
  children?: React.ReactNode
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'default',
  title,
  description,
  icon,
  children
}) => {
  return (
    <AlertContainer variant={variant}>
      {icon && <AlertIcon>{icon}</AlertIcon>}
      <AlertContent>
        {title && <AlertTitle>{title}</AlertTitle>}
        {description && <AlertDescription>{description}</AlertDescription>}
        {children}
      </AlertContent>
    </AlertContainer>
  )
}

export const AlertTitle: typeof Text = AlertTitle
export const AlertDescription: typeof Text = AlertDescription
