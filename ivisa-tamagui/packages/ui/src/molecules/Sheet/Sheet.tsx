// @ts-nocheck
import {
  styled,
  GetProps,
  H2,
  Paragraph,
  withStaticProperties,
  Portal,
} from 'tamagui'
import { Sheet as TamaguiSheet, SheetProps as TamaguiSheetProps, useSheet } from '@tamagui/sheet'
import React, { createContext, useContext, forwardRef } from 'react'
import { Skeleton } from '../../atoms/Skeleton'
import { Button } from '../../atoms/Button'
import { HStack, VStack } from '../../atoms/Stack'

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

const useSheetCustomContext = () => useContext(SheetContext)

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
// Wrap the upstream Overlay in a forwardRef so refs passed by Tamagui/styled
// land on a real DOM node and avoid the "Function components cannot be given refs" warning.
const RawOverlay = React.forwardRef<any, any>((props, ref) => {
  return <TamaguiSheet.Overlay {...props} ref={ref} />
})

const SheetOverlay = styled(RawOverlay as any, {
  backgroundColor: '$black',
  opacity: 0.5,
  enterStyle: { opacity: 0 },
  exitStyle: { opacity: 0 },
} as any) as any

const SheetHandle = styled(TamaguiSheet.Handle as any, {
  backgroundColor: '$borderColor',
  opacity: 0.8,
} as any) as any

const SheetContentFrame = styled(TamaguiSheet.Frame as any, {
  backgroundColor: '$background',
  padding: '$4',
  borderTopLeftRadius: '$4',
  borderTopRightRadius: '$4',
  shadowColor: '$shadowColor',
  shadowOpacity: 0.2,
  shadowRadius: 10,
  variants: {
    hasError: {
      true: {
        borderColor: '$red10',
        borderWidth: 1,
        borderBottomWidth: 0,
      },
    },
  } as const,
} as any) as any

type InternalSheetContentProps = GetProps<typeof SheetContentFrame>

const SheetContent = forwardRef<React.ElementRef<typeof SheetContentFrame>, any>(
  ({ children, ...props }: any, ref) => {
    const { isLoading, hasError } = useSheetCustomContext()
    const sheet = useSheet()

    return (
      <Portal>
        <SheetOverlay />
        <SheetContentFrame ref={ref} {...props} hasError={hasError}>
          <>
            <SheetHandle />
            {isLoading ? (
              <VStack gap="$4" py="$4">
                <VStack gap="$2" marginBottom="$4">
                  <Skeleton height={30} width="60%" />
                  <Skeleton height={20} width="90%" />
                </VStack>
                <VStack gap="$4" py="$4">
                  <VStack gap="$2">
                    <Skeleton height={16} width="30%" />
                    <Skeleton height={40} />
                  </VStack>
                  <VStack gap="$2">
                    <Skeleton height={16} width="30%" />
                    <Skeleton height={40} />
                  </VStack>
                </VStack>
                <HStack justifyContent="flex-end" marginTop="$4">
                  <Skeleton height={44} width={120} />
                </HStack>
              </VStack>
            ) : (
              children
            )}
          </>
        </SheetContentFrame>
      </Portal>
    )
  }
)
SheetContent.displayName = 'SheetContent'

const SheetHeader = styled(VStack as any, {
  gap: '$2',
  marginBottom: '$4',
} as any) as any

type SheetFooterProps = GetProps<typeof HStack> & {
  actions?: React.ReactNode
}

const SheetFooterComponent = forwardRef<React.ElementRef<typeof HStack>, SheetFooterProps>(
  ({ children, actions, ...props }, ref) => {
    return (
      <HStack ref={ref} {...props}>
        {children}
        {actions}
      </HStack>
    )
  }
)

const SheetFooter = styled(SheetFooterComponent as any, {
  justifyContent: 'flex-end',
  gap: '$2',
  marginTop: '$4',
} as any) as any

const SheetTitle = styled(H2 as any, {
  fontWeight: 'bold',
  fontSize: '$6',
  color: '$foreground',
} as any) as any

const SheetDescription = styled(Paragraph as any, {
  fontSize: '$3',
  color: '$mutedForeground',
} as any) as any

const SheetCloseFrame = styled(Button as any, {}) as any

const SheetClose = SheetCloseFrame.styleable((props: any, ref: any) => {
  const context = useSheet()
  return (
    <SheetCloseFrame
      ref={ref}
      onPress={() => context.setOpen(false)}
      {...props}
    />
  )
})

const SheetTriggerFrame = styled(VStack as any, {}) as any

const SheetTrigger = SheetTriggerFrame.styleable((props: any, ref: any) => {
  const context = useSheet()
  return (
    <SheetTriggerFrame
      ref={ref}
      onPress={() => context.setOpen(true)}
      {...props}
    />
  )
})

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
}) as any

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
  SheetContentFrame,
  SheetClose,
  SheetTrigger,
  useSheetCustomContext,
}

export type { SheetProps, SheetContentProps, SheetFooterProps }

export type SheetComponentProps = React.ComponentProps<typeof SheetComponent>

export type SheetContentProps = React.ComponentProps<typeof SheetContent>

export type SheetFooterComponentProps = React.ComponentProps<typeof SheetFooterComponent>
