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
import { Skeleton as SkeletonOriginal } from '../../atoms/Skeleton'
import { Button } from '../../atoms/Button'
import { HStack as HStackOriginal, VStack as VStackOriginal } from '../../atoms/Stack'

const Skeleton = SkeletonOriginal as any
const HStack = HStackOriginal as any
const VStack = VStackOriginal as any

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
const SheetOverlay = styled(TamaguiSheet.Overlay as any, {
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

type SheetContentProps = GetProps<typeof SheetContentFrame>

const SheetContent = forwardRef<React.ElementRef<typeof SheetContentFrame>, any>(
  ({ children, ...props }, ref) => {
    const { isLoading, hasError } = useSheetCustomContext()
    const sheet = useSheet()

    // ...

    const SheetHeader = styled(VStackOriginal as any, {
      gap: '$2',
      marginBottom: '$4',
    } as any) as any

    // ...

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

    // ...


    const SheetCloseFrame = styled(Button as any, {}) as any

    const SheetClose = SheetCloseFrame.styleable((props, ref) => {
      const context = useSheet()
      return (
        <SheetCloseFrame
          ref={ref}
          onPress={() => context.setOpen(false)}
          {...props}
        />
      )
    })

    const SheetTriggerFrame = styled(VStackOriginal as any, {}) as any

    const SheetTrigger = SheetTriggerFrame.styleable((props, ref) => {
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
