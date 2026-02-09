import {
  Popover as TamaguiPopover,
  PopoverProps,
  PopoverContentProps,
  styled,
  YStack,
} from 'tamagui'
import { ReactNode, forwardRef, ElementRef, createContext, useContext, useMemo } from 'react'

// 1. Create the Context
interface PopoverContextValue {
  isLoading?: boolean
  hasError?: boolean
  isDisabled?: boolean
}

const PopoverContext = createContext<PopoverContextValue>({})

const usePopoverContext = () => {
  const context = useContext(PopoverContext)
  if (!context) {
    throw new Error('usePopoverContext must be used within a Popover')
  }
  return context
}

// 2. Define Frames and Style Components
const PopoverContentFrame = styled(TamaguiPopover.Content, {
  name: 'PopoverContent',
  backgroundColor: '$background',
  borderColor: '$borderColor',
  borderWidth: 1,
  padding: '$4',
  borderRadius: '$2',
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 5,
  animation: [
    'quick',
    {
      opacity: {
        overshootClamping: true,
      },
    },
  ],
  enterStyle: { y: -10, opacity: 0 },
  exitStyle: { y: -10, opacity: 0 },
  y: 0,
  opacity: 1,

  variants: {
    hasError: {
      true: {
        borderColor: '$red10',
      },
    },
  } as const,
})

const PopoverArrow = styled(TamaguiPopover.Arrow, {
  name: 'PopoverArrow',
  borderWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
})

// 3. Refactor PopoverContent to consume context
export interface PopoverContentCompositeProps extends PopoverContentProps {
  /**
   * Slot for action buttons or other interactive elements.
   */
  actions?: ReactNode
}

const PopoverContent = forwardRef<ElementRef<typeof PopoverContentFrame>, PopoverContentCompositeProps>(
  ({ children, actions, ...props }, ref) => {
    const { isLoading, hasError } = usePopoverContext()

    return (
      <PopoverContentFrame ref={ref} {...props} hasError={hasError}>
        <PopoverArrow size="$3" />
        <YStack gap="$3">
          {children}
          {actions && <YStack>{actions}</YStack>}
        </YStack>
      </PopoverContentFrame>
    )
  }
)
PopoverContent.displayName = 'PopoverContent'

// 4. Refactor Popover to be the provider
export interface PopoverMoleculeProps extends PopoverProps {
  /**
   * When true, the component will display a loading state.
   */
  isLoading?: boolean
  /**
   * When true, indicates that the component is in an error state.
   */
  hasError?: boolean
  /**
   * When true, the trigger button and content will be disabled.
   */
  isDisabled?: boolean
}

const Popover = ({
  children,
  isLoading,
  hasError,
  isDisabled,
  ...props
}: PopoverMoleculeProps) => {
  const contextValue = useMemo(
    () => ({ isLoading, hasError, isDisabled }),
    [isLoading, hasError, isDisabled]
  )

  return (
    <PopoverContext.Provider value={contextValue}>
      <TamaguiPopover {...props}>{children}</TamaguiPopover>
    </PopoverContext.Provider>
  )
}

// 5. Refactor PopoverTrigger to consume context
import { ComponentProps } from 'react'

const PopoverTrigger = forwardRef<
  ElementRef<typeof TamaguiPopover.Trigger>,
  ComponentProps<typeof TamaguiPopover.Trigger>
>((props, ref) => {
    const { isDisabled, isLoading } = usePopoverContext()
    return <TamaguiPopover.Trigger ref={ref} {...props} disabled={isDisabled || isLoading} />
  }
)
PopoverTrigger.displayName = 'PopoverTrigger'

const PopoverAnchor = TamaguiPopover.Anchor
const PopoverClose = TamaguiPopover.Close

export {
  Popover,
  PopoverTrigger,
  PopoverAnchor,
  PopoverContent,
  PopoverClose,
  usePopoverContext,
}

// Removed trailing React.ComponentProps alias exports to reduce duplicate-type declarations
