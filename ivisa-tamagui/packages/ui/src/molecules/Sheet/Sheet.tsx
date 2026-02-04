import { 
  styled, 
  GetProps, 
  H2, 
  Paragraph, 
  withStaticProperties, 
  Portal, 
  YStack,
  ThemeableStack
} from 'tamagui'
import { 
  Sheet as TamaguiSheet, 
  SheetProps as TamaguiSheetProps, 
  useSheet 
} from '@tamagui/sheet'
import React, { createContext, useContext, forwardRef } from 'react'
import { Skeleton } from '../../atoms/Skeleton'
import { Button } from '../../atoms/Button'
import { HStack, VStack, Stack } from '../../atoms/Stack'

// 1. CONTEXT
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

// 2. ROOT COMPONENT
// =================================================================================================
export interface SheetProps extends TamaguiSheetProps {
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
  name: 'SheetContentFrame',
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
  },
})

// Tipagem correta extraída do componente estilizado
export type SheetContentProps = GetProps<typeof SheetContentFrame>

const SheetContent = forwardRef<React.ElementRef<typeof SheetContentFrame>, SheetContentProps>(
  ({ children, ...props }, ref) => {
    const { isLoading, hasError } = useSheetCustomContext()

    return (
      <Portal>
        <SheetOverlay />
        <SheetContentFrame ref={ref} {...props} hasError={hasError}>
          <SheetHandle />
          {isLoading ? (
            <VStack gap="$4" paddingVertical="$4">
              <VStack gap="$2" marginBottom="$4">
                <Skeleton height={30} width="60%" />
                <Skeleton height={20} width="90%" />
              </VStack>
              <VStack gap="$4" paddingVertical="$4">
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
        </SheetContentFrame>
      </Portal>
    )
  }
)

const SheetHeader = styled(VStack, {
  name: 'SheetHeader',
  gap: '$2',
  marginBottom: '$4',
})

// Tipagem para o Footer sem aliases
export interface SheetFooterProps extends GetProps<typeof HStack> {
  actions?: React.ReactNode
}

const SheetFooter = styled(HStack, {
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

const SheetClose = forwardRef<React.ElementRef<typeof Button>, GetProps<typeof Button>>(
  (props, ref) => {
    const context = useSheet()
    return (
      <Button
        ref={ref}
        onPress={() => context.setOpen(false)}
        {...props}
      />
    )
  }
)

const SheetTrigger = forwardRef<React.ElementRef<typeof Stack>, GetProps<typeof Stack>>(
  (props, ref) => {
    const context = useSheet()
    return (
      <Stack
        ref={ref}
        onPress={() => context.setOpen(true)}
        {...props}
      />
    )
  }
)

// 4. COMPOSITE COMPONENT
// =================================================================================================

// withStaticProperties exige que o objeto de propriedades seja tipado corretamente
export const Sheet = withStaticProperties(SheetComponent, {
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
  useSheetCustomContext,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}