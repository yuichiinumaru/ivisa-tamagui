// @ts-nocheck
import {
  Card,
  H4,
  Paragraph,
  Spinner,
  XStack,
  YStack,
  styled,
  GetProps,
  Text,
} from 'tamagui'
import { ReactNode } from 'react'
import { AlertTriangle } from '@tamagui/lucide-icons'

const ChartContainerFrame = styled(Card, {
  name: 'ChartContainer',
  padding: '$4',
  borderRadius: '$2',
  backgroundColor: '$background',
  borderWidth: 1,
  borderColor: '$borderColor',

  variants: {
    error: {
      true: {
        borderColor: '$red10',
      },
    },
  },
})

export type ChartContainerProps = GetProps<typeof ChartContainerFrame> & {
  title: string
  description?: string
  isLoading?: boolean
  hasError?: boolean
  errorMessage?: string
  rightSlot?: ReactNode
  children: ReactNode
}

export const ChartContainer = ({
  title,
  description,
  isLoading = false,
  hasError = false,
  errorMessage = 'Ocorreu um erro ao carregar os dados.',
  rightSlot,
  children,
  ...rest
}: ChartContainerProps) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <YStack flex={1} justifyContent="center" alignItems="center">
          <Spinner size="large" color="$primary" />
        </YStack>
      )
    }
    if (hasError) {
      return (
        <YStack
          flex={1}
          justifyContent="center"
          alignItems="center"
          gap="$2"
        >
          <AlertTriangle color="$red10" />
          <Text color="$red10">{errorMessage}</Text>
        </YStack>
      )
    }
    return children
  }

  return (
    <ChartContainerFrame error={hasError} {...rest}>
      <YStack gap="$4">
        <XStack justifyContent="space-between" alignItems="center">
          <YStack gap="$1">
            <H4>{title}</H4>
            {description && <Paragraph theme="alt1">{description}</Paragraph>}
          </YStack>
          {rightSlot}
        </XStack>
        <YStack minHeight={300}>{renderContent()}</YStack>
      </YStack>
    </ChartContainerFrame>
  )
}

export default ChartContainer
