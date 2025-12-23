import React, { useState } from 'react'
import { Sheet as BaseSheet } from './Sheet'
import { YStack, Portal } from 'tamagui'
import { Skeleton } from '../atoms/Skeleton'

export type DrawerProps = {
  /**
   * A React element that will trigger the drawer to open.
   * The drawer will automatically handle the `onPress` event.
   */
  trigger?: React.ReactElement
  /**
   * The title of the drawer, displayed in the header.
   */
  title: string
  /**
   * An optional description displayed below the title.
   */
  description?: string
  /**
   * The main content of the drawer.
   */
  children: React.ReactNode
  /**
   * Content to be displayed in the footer, usually for action buttons.
   */
  footer?: React.ReactNode
  /**
   * If true, the content will be replaced by a skeleton loader.
   */
  isLoading?: boolean
  /**
   * If true, applies an error style to the title.
   */
  hasError?: boolean
  /**
   * Controlled open state.
   */
  open?: boolean
  /**
   * Callback for when the open state changes.
   */
  onOpenChange?: (open: boolean) => void
}

function DrawerComponent({
  trigger,
  title,
  description,
  children,
  footer,
  isLoading = false,
  hasError = false,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: DrawerProps) {
  const [internalOpen, setInternalOpen] = useState(false)

  const open = controlledOpen ?? internalOpen
  const setOpen = setControlledOpen ?? setInternalOpen

  const triggerWithPress = trigger
    ? React.cloneElement(trigger, {
        onPress: () => setOpen(true),
      })
    : null

  // Use explicit Portal and Overlay, but ensure Content doesn't duplicate them.
  // Since BaseSheet.Content usually includes Portal/Overlay in standard Tamagui usage (or at least Frame),
  // we need to see how BaseSheet (Sheet.tsx) defines Content.
  // Sheet.tsx defines Content as wrapping SheetOverlay and Frame in a Portal.
  // So Drawer should NOT render Portal or Overlay manually if using BaseSheet.Content.

  // Refactor: Use standard Tamagui Sheet pattern.
  // <Sheet>
  //   <Sheet.Trigger />
  //   <Sheet.Content /> (which includes Portal/Overlay/Frame)
  // </Sheet>

  return (
    <>
      {triggerWithPress}
      <BaseSheet open={open} onOpenChange={setOpen}>
        {/* BaseSheet.Content in Sheet.tsx already includes Portal and Overlay if unmodified. */}
        {/* So we just render Content. */}
        {/* However, we need to inject the children into the Frame. */}
        <BaseSheet.Content animation="medium" enterStyle={{ y: 300 }} exitStyle={{ y: 300 }}>
            {/* Sheet.tsx Content renders children inside the Frame. */}
            <BaseSheet.Handle />
            <BaseSheet.Header>
              <BaseSheet.Title color={hasError ? '$red10' : undefined}>{title}</BaseSheet.Title>
              {description && <BaseSheet.Description>{description}</BaseSheet.Description>}
            </BaseSheet.Header>
            <YStack flex={1} paddingVertical="$4">
              {isLoading ? (
                <YStack space>
                  <Skeleton height={40} />
                  <Skeleton height={20} width="75%" />
                </YStack>
              ) : (
                children
              )}
            </YStack>
            {footer && <BaseSheet.Footer>{footer}</BaseSheet.Footer>}
        </BaseSheet.Content>
      </BaseSheet>
    </>
  )
}

export const Drawer = Object.assign(DrawerComponent, {
  Portal: BaseSheet.Portal,
  Overlay: BaseSheet.Overlay,
  Handle: BaseSheet.Handle,
  Frame: BaseSheet.Frame,
  Content: BaseSheet.Content,
  Header: BaseSheet.Header,
  Footer: BaseSheet.Footer,
  Title: BaseSheet.Title,
  Description: BaseSheet.Description,
  Close: BaseSheet.Close,
})

export const DrawerPortal = BaseSheet.Portal
export const DrawerOverlay = BaseSheet.Overlay
export const DrawerHandle = BaseSheet.Handle
export const DrawerFrame = BaseSheet.Frame
export const DrawerContent = BaseSheet.Content
export const DrawerHeader = BaseSheet.Header
export const DrawerFooter = BaseSheet.Footer
export const DrawerTitle = BaseSheet.Title
export const DrawerDescription = BaseSheet.Description
export const DrawerClose = BaseSheet.Close
