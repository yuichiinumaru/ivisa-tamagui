
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { ChevronDown } from '@tamagui/lucide-icons'
import React from 'react'
import { Button, GetProps, Text, XStack, YStack, styled } from 'tamagui'
import { Skeleton } from '../atoms/Skeleton'

const CollapsibleFrame = styled(CollapsiblePrimitive.Root, {
  name: 'Collapsible',
  width: '100%',
})

const CollapsibleTriggerFrame = styled(XStack, {
  name: 'CollapsibleTrigger',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$4',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$4',
  variants: {
    hasError: {
      true: {
        borderColor: '$red10',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
})

const CollapsibleContentFrame = styled(CollapsiblePrimitive.Content, {
  name: 'CollapsibleContent',
  paddingTop: '$4',
})

type CollapsibleProps = GetProps<typeof CollapsibleFrame> & {
  isLoading?: boolean
  hasError?: boolean
  isDisabled?: boolean
  title?: string
  rightSlot?: React.ReactNode
}

export const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsibleFrame>,
  CollapsibleProps
>(
  (
    {
      children,
      isLoading = false,
      hasError = false,
      isDisabled = false,
      title,
      rightSlot,
      ...props
    },
    ref
  ) => {
    return (
      <CollapsibleFrame {...props} ref={ref}>
        <CollapsiblePrimitive.Trigger asChild>
          <CollapsibleTriggerFrame
            hasError={hasError}
            disabled={isDisabled || isLoading}
            data-has-error={hasError}
          >
            <Text fontSize="$4" fontWeight="bold">
              {title}
            </Text>
            <XStack gap="$2" alignItems="center">
              {rightSlot}
              <Button size="$3" chromeless icon={ChevronDown} />
            </XStack>
          </CollapsibleTriggerFrame>
        </CollapsiblePrimitive.Trigger>

        <CollapsibleContentFrame>
          {isLoading ? (
            <YStack space="$2" data-testid="skeleton-container">
              <Skeleton height={40} />
              <Skeleton height={40} />
            </YStack>
          ) : (
            children
          )}
        </CollapsibleContentFrame>
      </CollapsibleFrame>
    )
  }
)
