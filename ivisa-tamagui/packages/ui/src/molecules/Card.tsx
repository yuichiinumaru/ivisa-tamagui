import React from 'react'
import { View, Text, styled, GetProps } from 'tamagui'

const CardFrame = styled(View, {
  name: 'Card',
  backgroundColor: '$background',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$lg',
  p: '$lg',
  variants: {
    variant: {
      default: {
        backgroundColor: '$background',
      },
      elevated: {
        backgroundColor: '$background',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
      }
    }
  } as const,
  defaultVariants: {
    variant: 'default'
  }
})

const CardHeader = styled(View, {
  name: 'CardHeader',
  marginBottom: '$md',
})

const CardTitle = styled(Text, {
  name: 'CardTitle',
  fontSize: '$6',
  fontWeight: '600',
  color: '$foreground',
  marginBottom: '$sm',
})

const CardDescription = styled(Text, {
  name: 'CardDescription', 
  fontSize: '$3',
  color: '$mutedForeground',
  lineHeight: '$3',
})

const CardContent = styled(View, {
  name: 'CardContent',
})

const CardFooter = styled(View, {
  name: 'CardFooter',
  marginTop: '$lg',
  paddingTop: '$lg',
  borderTopWidth: 1,
  borderTopColor: '$borderColor',
})

export type CardProps = GetProps<typeof CardFrame>
export type CardHeaderProps = GetProps<typeof CardHeader>
export type CardTitleProps = GetProps<typeof CardTitle>
export type CardDescriptionProps = GetProps<typeof CardDescription>
export type CardContentProps = GetProps<typeof CardContent>
export type CardFooterProps = GetProps<typeof CardFooter>

export {
  CardFrame as Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
}
