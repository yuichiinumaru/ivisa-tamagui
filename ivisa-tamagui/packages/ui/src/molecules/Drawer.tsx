import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
    SheetOverlay,
    SheetClose,
    SheetFrame,
    SheetHandle,
} from './Sheet'

// Drawer is essentially a Bottom Sheet in shadcn/vaul context.
// Since our Sheet implementation wraps Tamagui Sheet (which is a bottom sheet),
// we can alias the components.

export const Drawer = Sheet
export const DrawerTrigger = SheetTrigger
export const DrawerContent = SheetContent
export const DrawerHeader = SheetHeader
export const DrawerFooter = SheetFooter
export const DrawerTitle = SheetTitle
export const DrawerDescription = SheetDescription
export const DrawerOverlay = SheetOverlay
export const DrawerClose = SheetClose
export const DrawerFrame = SheetFrame
export const DrawerHandle = SheetHandle

// If we need specific Drawer styling distinct from Sheet, we would wrap them here.
// For now, direct aliasing provides the functionality.
