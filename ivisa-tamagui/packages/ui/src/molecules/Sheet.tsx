
import {
  Sheet as TamaguiSheet,
  styled,
  GetProps,
  XStack,
  YStack,
  H2,
  Paragraph,
  SheetProps as TamaguiSheetProps,
  withStaticProperties,
  Portal,
} from 'tamagui'
import React, { createContext, useContext, forwardRef } from 'react'
import { Skeleton } from '../atoms/Skeleton'
import { Button } from '../atoms/Button'

// 1. CONTEXT for state propagation
// =================================================================================================
interface SheetContextValue {
  isLoading?: boolean
  hasError?: boolean
}

const SheetContext = createContext<SheetContextValue>({
  isLoading: false,
  hasError: false,
})

const useSheetContext = () => useContext(SheetContext)

// 2. ROOT COMPONENT with Provider
// =================================================================================================
interface SheetProps extends TamaguiSheetProps {
  isLoading?: boolean
  hasError?: boolean
}

const SheetComponent = ({ isLoading = false, hasError = false, children, ...props }: SheetProps) => (
  <SheetContext.Provider value={{ isLoading, hasError }}>
    <TamaguiSheet {...props}>{children}</TamaguiSheet>
  </SheetContext.Provider>
)

// 3. STYLED SUB-COMPONENTS
// =================================================================================================
const SheetOverlay = styled(TamaguiSheet.Overlay, {
  name: 'SheetOverlay',
  backgroundColor: '$black',
  opacity: 0.5,
  enterStyle: { opacity: 0 },
  exitStyle: { opacity: 0 },
})

const SheetHandle = styled(TamaguiSheet.Handle, {
  name: 'SheetHandle',
  backgroundColor: '$borderColor',
  opacity: 0.8,
})

const SheetContentFrame = styled(TamaguiSheet.Frame, {
  name: 'SheetContent',
  backgroundColor: '$background',
  padding: '$4',
  borderTopLeftRadius: '$4',
  borderTopRightRadius: '$4',
  shadowColor: '$shadowColor',
  shadowOpacity: 0.2,
  shadowRadius: 10,
  elevation: 5,
  variants: {
    hasError: {
      true: {
        borderColor: '$red10',
        borderWidth: 1,
        borderBottomWidth: 0,
      },
    },
  } as const,
})

type SheetContentProps = GetProps<typeof SheetContentFrame>

const SheetContent = forwardRef<React.ElementRef<typeof SheetContentFrame>, SheetContentProps>(
  ({ children, ...props }, ref) => {
    const { isLoading, hasError } = useSheetContext()

    // Fixed: Removed internal Portal and Overlay to allow flexible composition (e.g. in Drawer)
    // The consumer (Drawer or user) must wrap this in Portal/Overlay if needed.
    return (
      <SheetContentFrame ref={ref} {...props} hasError={hasError}>
        <SheetHandle />
        {isLoading ? (
          <YStack gap="$4" py="$4">
            <YStack gap="$2" marginBottom="$4">
              <Skeleton height={30} width="60%" />
              <Skeleton height={20} width="90%" />
            </YStack>
            <YStack gap="$4" py="$4">
              <YStack gap="$2">
                <Skeleton height={16} width="30%" />
                <Skeleton height={40} />
              </YStack>
              <YStack gap="$2">
                <Skeleton height={16} width="30%" />
                <Skeleton height={40} />
              </YStack>
            </YStack>
            <XStack justifyContent="flex-end" marginTop="$4">
              <Skeleton height={44} width={120} />
            </XStack>
          </YStack>
        ) : (
          children
        )}
      </SheetContentFrame>
    )
  }
)
SheetContent.displayName = 'SheetContent'

const SheetHeader = styled(YStack, {
  name: 'SheetHeader',
  gap: '$2',
  marginBottom: '$4',
})

interface SheetFooterProps extends GetProps<typeof XStack> {
  actions?: React.ReactNode
}

const SheetFooterComponent = forwardRef<React.ElementRef<typeof XStack>, SheetFooterProps>(
  ({ children, actions, ...props }, ref) => {
    return (
      <XStack ref={ref} {...props}>
        {children}
        {actions}
      </XStack>
    )
  }
)

const SheetFooter = styled(SheetFooterComponent, {
  name: 'SheetFooter',
  justifyContent: 'flex-end',
  gap: '$2',
  marginTop: '$4',
})

const SheetTitle = styled(H2, {
  name: 'SheetTitle',
  fontWeight: 'bold',
  fontSize: '$6',
  color: '$foreground',
})

const SheetDescription = styled(Paragraph, {
  name: 'SheetDescription',
  fontSize: '$3',
  color: '$mutedForeground',
})

const SheetCloseFrame = styled(Button, {
  name: 'SheetClose',
})

const SheetClose = SheetCloseFrame.styleable((props, ref) => {
  const context = TamaguiSheet.useSheetContext()
  return (
    <SheetCloseFrame
      ref={ref}
      onPress={() => context.setOpen(false)}
      {...props}
    />
  )
})

const SheetTrigger = TamaguiSheet.Trigger

// 4. COMPOSITE COMPONENT
// =================================================================================================
const Sheet = withStaticProperties(SheetComponent, {
  Portal: Portal,
  Overlay: SheetOverlay,
  Frame: SheetContentFrame,
  Handle: SheetHandle,
  Content: SheetContent,
  Header: SheetHeader,
  Footer: SheetFooter,
  Title: SheetTitle,
  Description: SheetDescription,
  Close: SheetClose,
  Trigger: SheetTrigger,
  ScrollView: TamaguiSheet.ScrollView,
})

// 5. EXPORTS
// =================================================================================================
export {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetOverlay,
  SheetHandle,
  SheetComponent,
  SheetContentFrame, // Exporting as alias if needed, or raw
  SheetClose,
  SheetTrigger,
  useSheetContext,
}

export type { SheetProps, SheetContentProps, SheetFooterProps }
