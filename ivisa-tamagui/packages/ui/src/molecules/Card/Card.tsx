import { GetProps, styled, Text, XStack, YStack } from 'tamagui'
import React from 'react'
import { Skeleton } from '../../atoms/Skeleton'

const CardFrame = styled(YStack, {
  name: 'Card',
  role: 'article',
  backgroundColor: '$background',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$lg',
  p: '$lg',
  gap: '$4',
  variants: {
    variant: {
      default: {
        backgroundColor: '$background',
      },
      elevated: {
        backgroundColor: '$background',
        shadowColor: '$shadowColor',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
      },
    },
    hasError: {
      true: {
        borderColor: '$red10',
      },
    },
    disabled: {
      true: {
        opacity: 0.65,
        pointerEvents: 'none',
      },
    },
  } as const,
  defaultVariants: {
    variant: 'default',
  },
})

export const CardHeader = styled(YStack, {
  name: 'CardHeader',
  gap: '$1.5',
})

export const CardTitle = styled(Text, {
  name: 'CardTitle',
  fontSize: '$6',
  fontWeight: '600',
  color: '$foreground',
})

export const CardDescription = styled(Text, {
  name: 'CardDescription',
  fontSize: '$3',
  color: '$mutedForeground',
  lineHeight: '$3',
})

export const CardContent = styled(YStack, {
  name: 'CardContent',
  gap: '$4',
})

export const CardFooter = styled(XStack, {
  name: 'CardFooter',
  borderTopWidth: 1,
  borderTopColor: '$borderColor',
  pt: '$4',
  gap: '$3',
  justifyContent: 'flex-end',
  alignItems: 'center',
})

// Prop types
export type CardFrameProps = GetProps<typeof CardFrame>
export type CardHeaderProps = GetProps<typeof CardHeader>
export type CardTitleProps = GetProps<typeof CardTitle>
export type CardDescriptionProps = GetProps<typeof CardDescription>
export type CardContentProps = GetProps<typeof CardContent>
export type CardFooterProps = GetProps<typeof CardFooter>

interface CardData {
  title: string
  description?: string
  content: React.ReactNode
}

export interface CardProps extends CardFrameProps {
  isLoading?: boolean
  isDisabled?: boolean // Renamed to match variant
  data?: CardData
  actions?: React.ReactNode
}

// Main Card component
export const Card = ({
  children,
  isLoading,
  isDisabled,
  data,
  actions,
  ...rest
}: CardProps) => {
  // Pass isDisabled to the 'disabled' variant
  const cardProps = { ...rest, disabled: isDisabled, 'data-testid': 'card' }

  // "Smart" component mode with data object
  if (data) {
    return (
      <CardFrame {...cardProps}>
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>
          {data.description && <CardDescription>{data.description}</CardDescription>}
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <YStack gap="$2" f={1} p="$1">
              <Skeleton h="$4" w="75%" />
              <Skeleton h="$2.5" w="100%" />
              <Skeleton h="$2.5" w="90%" />
            </YStack>
          ) : (
            data.content
          )}
        </CardContent>
        {actions && <CardFooter>{actions}</CardFooter>}
      </CardFrame>
    )
  }

  // "Dumb" composable component mode
  return (
    <CardFrame {...cardProps}>
      {isLoading ? (
        <YStack gap="$2" f={1} p="$1">
          <Skeleton h="$4" w="75%" />
          <Skeleton h="$2.5" w="100%" />
          <Skeleton h="$2.5" w="90%" />
        </YStack>
      ) : (
        children
      )}
    </CardFrame>
  )
}
