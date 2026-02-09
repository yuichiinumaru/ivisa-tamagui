import React, { createContext, useContext, forwardRef } from 'react'
import { styled, GetProps, H2, Paragraph, withStaticProperties} from 'tamagui'
import { Sheet as TamaguiSheet, SheetProps as TamaguiSheetProps, createSheet} from '@tamagui/sheet'
import { Skeleton } from '../../atoms/Skeleton'
import { HStack, VStack } from '../../atoms/Stack'

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
  variants: {
    hasError: {
      true: {
        borderColor: '$red10',
        borderWidth: 1,
        borderBottomWidth: 0,
      },
    },
  }
})

export type SheetContentProps = GetProps<typeof SheetContentFrame>

const SheetContent = forwardRef<React.ElementRef<typeof SheetContentFrame>, SheetContentProps>(
  ({ children, ...props }, ref) => {
    const { isLoading, hasError } = useSheetCustomContext()

    return (
      <SheetContentFrame ref={ref} {...props} hasError={hasError}>
        <SheetHandle />
        {isLoading ? (
          <VStack gap="$4" paddingVertical="$4">             
             <Skeleton height={30} width="60%" />
             <Skeleton height={40} />
             <Skeleton height={40} />
          </VStack>
        ) : (
          children
        )}
      </SheetContentFrame>
    )
  }
)

SheetContent.displayName = 'SheetContent'

const SheetHeader = styled(VStack, { name: 'SheetHeader', gap: '$2', marginBottom: '$4' })
const SheetFooter = styled(HStack, { name: 'SheetFooter', justifyContent: 'flex-end', gap: '$2', marginTop: '$4' })
const SheetTitle = styled(H2, { name: 'SheetTitle', fontWeight: 'bold', fontSize: '$6' })
const SheetDescription = styled(Paragraph, { name: 'SheetDescription', fontSize: '$3', color: '$gray11' })

// 4. COMPOSITE COMPONENT
// =================================================================================================

export const Sheet = withStaticProperties(SheetComponent, {
  Overlay: SheetOverlay,
  Frame: SheetContentFrame,
  Handle: SheetHandle,
  Content: SheetContent,
  Header: SheetHeader,
  Footer: SheetFooter,
  Title: SheetTitle,
  Description: SheetDescription,
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