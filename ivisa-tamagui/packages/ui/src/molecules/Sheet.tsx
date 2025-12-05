import { Sheet as TamaguiSheet, styled, GetProps, XStack, YStack, H2, Paragraph } from 'tamagui'
import React from 'react'

/* 
  Shadcn Sheet is a sidebar (Drawer). Tamagui Sheet is a bottom sheet.
  For this implementation, we will wrap Tamagui Sheet. 
  Note: Tamagui Sheet does NOT expose Trigger or Close components. 
  We must control state manually or create custom wrappers if needed.
*/

const Sheet = TamaguiSheet

// SheetTrigger and SheetClose are NOT supported by Tamagui Sheet directly.
// Removing them to prevent "undefined" errors. State must be controlled.

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
    // Shadow and elevation
    shadowColor: '$shadowColor',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
})

// Wrapper for Content to include Overlay and Handle automatically if desired,
// but Tamagui Sheet expects these as direct children of Sheet usually, or inside the Portal.
// To match shadcn <SheetContent>, we might need to be careful.
// Shadcn: <Sheet><SheetTrigger/><SheetContent>...</SheetContent></Sheet>
// Tamagui: <Sheet><Sheet.Trigger/><Sheet.Frame>...</Sheet.Frame></Sheet>
// We will alias Frame as Content.

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetContentFrame>, GetProps<typeof SheetContentFrame>>((props, ref) => {
    return (
        <>
            <SheetOverlay />
            <SheetHandle />
            <SheetContentFrame ref={ref} {...props} />
        </>
    )
})
SheetContent.displayName = 'SheetContent'

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

export {
    Sheet,
    // SheetTrigger, // Not available
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
    SheetOverlay, // Exporting just in case
    SheetHandle,  // Exporting just in case
    // SheetClose, // Not available
    SheetContentFrame as SheetFrame,
}

export type SheetProps = GetProps<typeof Sheet>
export type SheetContentProps = GetProps<typeof SheetContentFrame>
