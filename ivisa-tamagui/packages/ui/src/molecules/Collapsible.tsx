
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { ChevronDown } from '@tamagui/lucide-icons'
import React, { useContext, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import { Button, GetProps, Text, XStack, YStack, styled } from 'tamagui'
import { Skeleton } from '../atoms/Skeleton'

const CollapsibleContext = React.createContext<{ open: boolean }>({ open: false })

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

export const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content> & {
    animationDuration?: number
    animationEasing?: string
  }
>(({ children, animationDuration = 300, animationEasing = 'ease-in-out', ...props }, ref) => {
  const { open } = useContext(CollapsibleContext)

  return (
    <CollapsiblePrimitive.Content forceMount ref={ref} {...props} asChild>
      <YStack>
        <AnimateHeight duration={animationDuration} easing={animationEasing} height={open ? 'auto' : 0}>
          {children}
        </AnimateHeight>
      </YStack>
    </CollapsiblePrimitive.Content>
  )
})

// 2. Facade Component
type CollapsibleFacadeProps = GetProps<typeof CollapsibleRoot> & {
  isLoading?: boolean
  hasError?: boolean
  isDisabled?: boolean
  title?: React.ReactNode
  rightSlot?: React.ReactNode
  animationDuration?: number
  animationEasing?: string
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
      animationDuration,
      animationEasing,
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

          <CollapsibleContent
            animationDuration={animationDuration}
            animationEasing={animationEasing}
          >
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
