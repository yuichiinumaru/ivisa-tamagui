import React from 'react'
import { View, Text, styled } from 'tamagui'

const Card = styled(View, {
  name: 'Card',
  backgroundColor: '$background',
 borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$4',
  p: '$4',
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
  },
  defaultVariants: {
    variant: 'default'
  }
})

const CardHeader = styled(View, {
  name: 'CardHeader',
  marginBottom: '$3',
})

const CardTitle = styled(Text, {
  name: 'CardTitle',
  fontSize: '$4',
  fontWeight: '600',
  color: '$foreground',
  marginBottom: '$2',
})

const CardDescription = styled(Text, {
  name: 'CardDescription', 
  fontSize: '$2',
  color: '$muted',
  lineHeight: '$2',
})

const CardContent = styled(View, {
  name: 'CardContent',
})

const CardFooter = styled(View, {
  name: 'CardFooter',
  marginTop: '$4',
  paddingTop: '$4',
  borderTopWidth: 1,
  borderTopColor: '$borderColor',
})

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
export type CardProps = React.ComponentProps<typeof Card>
