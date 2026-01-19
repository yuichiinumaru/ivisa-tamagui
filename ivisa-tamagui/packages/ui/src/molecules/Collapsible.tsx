
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { ChevronDown } from '@tamagui/lucide-icons'
import React, { useContext, useState } from 'react'
import { Button, GetProps, Text, XStack, YStack, styled } from 'tamagui'
import { Skeleton } from '../atoms/Skeleton'

const CollapsibleContext = React.createContext<{ open: boolean }>({ open: false })
export const useCollapsibleContext = () => useContext(CollapsibleContext)

// 1. Compound Components
export const CollapsibleRoot = styled(CollapsiblePrimitive.Root, {
  name: 'Collapsible',
  width: '100%',
})

export const CollapsibleTrigger = styled(XStack, {
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

export const CollapsibleContent = styled(CollapsiblePrimitive.Content, {
  name: 'CollapsibleContent',
  overflow: 'hidden',
  paddingTop: '$4',
  // animation: 'quick',
  // enterStyle: { opacity: 0, height: 0 },
  // exitStyle: { opacity: 0, height: 0 },
})

// 2. Facade Component
type CollapsibleFacadeProps = GetProps<typeof CollapsibleRoot> & {
  isLoading?: boolean
  hasError?: boolean
  isDisabled?: boolean
  title?: React.ReactNode
  rightSlot?: React.ReactNode
}

export const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsibleRoot>,
  CollapsibleFacadeProps
>(
  (
    {
      children,
      isLoading = false,
      hasError = false,
      isDisabled = false,
      title,
      rightSlot,
      open: openProp,
      defaultOpen,
      onOpenChange,
      ...props
    },
    ref
  ) => {
    const [openState, setOpenState] = useState(defaultOpen || false)
    const open = openProp !== undefined ? openProp : openState

    const handleOpenChange = (newOpen: boolean) => {
      if (openProp === undefined) {
        setOpenState(newOpen)
      }
      onOpenChange?.(newOpen)
    }

    return (
      <CollapsibleContext.Provider value={{ open }}>
        <CollapsibleRoot
          {...props}
          ref={ref}
          open={open}
          onOpenChange={handleOpenChange}
          defaultOpen={defaultOpen}
        >
          <CollapsiblePrimitive.Trigger asChild disabled={isDisabled || isLoading}>
            <CollapsibleTrigger
              hasError={hasError}
              disabled={isDisabled || isLoading}
              data-has-error={hasError}
              aria-invalid={hasError}
            >
              <Text fontSize="$4" fontWeight="bold" ellipse>
                {title}
              </Text>
              <XStack gap="$2" alignItems="center" flexShrink={0}>
                {rightSlot}
                <Button size="$3" chromeless icon={ChevronDown} />
              </XStack>
            </CollapsibleTrigger>
          </CollapsiblePrimitive.Trigger>

          <CollapsibleContent>
            {isLoading ? (
              <YStack space="$2" data-testid="skeleton-container">
                <Skeleton height={40} />
                <Skeleton height={40} />
              </YStack>
            ) : (
              children
            )}
          </CollapsibleContent>
        </CollapsibleRoot>
      </CollapsibleContext.Provider>
    )
  }
)

export type CollapsibleRootProps = React.ComponentProps<typeof CollapsibleRoot>

export type CollapsibleTriggerProps = React.ComponentProps<typeof CollapsibleTrigger>

export type CollapsibleContentProps = React.ComponentProps<typeof CollapsibleContent>

export type CollapsibleProps = React.ComponentProps<typeof Collapsible>

