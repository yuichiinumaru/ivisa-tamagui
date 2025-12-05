import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import React, { useContext, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import { styled, Stack } from 'tamagui'

const CollapsibleContext = React.createContext<{ open: boolean }>({ open: false })

const CollapsibleRoot = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>
>(({ open: openProp, defaultOpen, onOpenChange, children, ...props }, ref) => {
  const [openState, setOpenState] = useState(defaultOpen || false)
  const open = openProp !== undefined ? openProp : openState

  const handleOpenChange = (newOpen: boolean) => {
    if (openProp === undefined) {
      setOpenState(newOpen)
    }
    onOpenChange?.(newOpen)
  }

  return (
    <CollapsiblePrimitive.Root
      open={open}
      onOpenChange={handleOpenChange}
      ref={ref}
      {...props}
    >
      <CollapsibleContext.Provider value={{ open }}>
        {children}
      </CollapsibleContext.Provider>
    </CollapsiblePrimitive.Root>
  )
})
CollapsibleRoot.displayName = CollapsiblePrimitive.Root.displayName

const CollapsibleTrigger = styled(CollapsiblePrimitive.Trigger, {
  name: 'CollapsibleTrigger',
})

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content> & { animateHeightProps?: Record<string, unknown> }
>(({ children, animateHeightProps, ...props }, ref) => {
  const { open } = useContext(CollapsibleContext)

  return (
    <CollapsiblePrimitive.Content forceMount ref={ref} {...props} asChild>
      <Stack>
        <AnimateHeight duration={300} height={open ? 'auto' : 0} {...animateHeightProps}>
          {children}
        </AnimateHeight>
      </Stack>
    </CollapsiblePrimitive.Content>
  )
})
CollapsibleContent.displayName = CollapsiblePrimitive.Content.displayName

export const Collapsible = CollapsibleRoot
export { CollapsibleTrigger, CollapsibleContent }
