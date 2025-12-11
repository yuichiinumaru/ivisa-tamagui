import React, { useState } from 'react'
import { Sheet as BaseSheet } from './Sheet'
import { YStack } from 'tamagui'
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

  return (
    <>
      {triggerWithPress}
      <BaseSheet open={open} onOpenChange={setOpen}>
        <BaseSheet.Portal>
          <BaseSheet.Overlay />
          <BaseSheet.Content animation="medium" enterStyle={{ y: 300 }} exitStyle={{ y: 300 }}>
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
        </BaseSheet.Portal>
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
