import {
  Sheet as TamaguiSheet,
  styled,
  GetProps,
  XStack,
  YStack,
  H2,
  Paragraph,
  withStaticProperties,
} from 'tamagui'
import React from 'react'
import { Button } from '../atoms/Button'

const Sheet = TamaguiSheet

const SheetPortal = TamaguiSheet.Portal

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

const SheetFrame = styled(TamaguiSheet.Frame, {
  name: 'SheetContent',
  backgroundColor: '$background',
  padding: '$4',
  borderTopLeftRadius: '$4',
  borderTopRightRadius: '$4',
  shadowColor: '$shadowColor',
  shadowOpacity: 0.2,
  shadowRadius: 10,
  elevation: 5,
})

const SheetHeader = styled(YStack, {
  name: 'SheetHeader',
  gap: '$2',
  marginBottom: '$4',
})

const SheetFooter = styled(XStack, {
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

const CustomSheet = withStaticProperties(Sheet, {
  Portal: SheetPortal,
  Overlay: SheetOverlay,
  Frame: SheetFrame,
  Handle: SheetHandle,
  Content: SheetFrame,
  Header: SheetHeader,
  Footer: SheetFooter,
  Title: SheetTitle,
  Description: SheetDescription,
  Close: SheetClose,
})

export {
  CustomSheet as Sheet,
  SheetPortal,
  SheetOverlay,
  SheetHandle,
  SheetFrame,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
}

export type SheetProps = GetProps<typeof Sheet>
export type SheetContentProps = GetProps<typeof SheetFrame>