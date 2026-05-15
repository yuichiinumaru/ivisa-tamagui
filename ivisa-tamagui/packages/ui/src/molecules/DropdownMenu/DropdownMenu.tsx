// Removed @ts-nocheck — enabling type checking
import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { styled, View, Text } from 'tamagui'
import { Check, ChevronRight, Circle } from '@tamagui/lucide-icons'

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuGroup = DropdownMenuPrimitive.Group
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTriggerFrame = styled(DropdownMenuPrimitive.SubTrigger, {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: '$2',
  paddingHorizontal: '$2',
  borderRadius: '$sm',
  cursor: 'default',
  outlineStyle: 'none',

  hoverStyle: {
    backgroundColor: '$accent',
  },
  focusStyle: {
     backgroundColor: '$accent',
  }
})

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & { inset?: boolean }
>(({ className: _className, children, inset, ...props }, ref) => (
  <DropdownMenuSubTriggerFrame
    ref={ref}
    paddingLeft={inset ? '$8' : '$2'}
    {...props}
  >
    {children}
    <View marginLeft="auto">
        <ChevronRight size={16} />
    </View>
  </DropdownMenuSubTriggerFrame>
))
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContentFrame = styled(DropdownMenuPrimitive.SubContent, {
  minWidth: 180, // roughly 8rem
  backgroundColor: '$background',
  borderRadius: '$md',
  borderWidth: 1,
  borderColor: '$borderColor',
  padding: '$1',
  shadowColor: '$shadowColor',
  shadowRadius: 5,
  elevation: 5,
  animation: 'quick',
  zIndex: 200000,
})

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className: _className, ...props }, ref) => (
  <DropdownMenuSubContentFrame ref={ref} {...props} />
))
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContentFrame = styled(DropdownMenuPrimitive.Content, {
  minWidth: 220,
  backgroundColor: '$background',
  borderRadius: '$md',
  borderWidth: 1,
  borderColor: '$borderColor',
  padding: '$1',
  shadowColor: '$shadowColor',
  shadowRadius: 10,
  shadowOpacity: 0.2,
  elevation: 10,
  zIndex: 200000,
  // animation handled by radix/css? or we assume Tamagui handles it?
})

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className: _className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuContentFrame
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItemFrame = styled(DropdownMenuPrimitive.Item, {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: '$2',
  paddingHorizontal: '$2',
  borderRadius: '$sm',
  cursor: 'pointer',
  outlineStyle: 'none',
  userSelect: 'none',

  hoverStyle: {
    backgroundColor: '$accent',
    // color is handled by children usually, or inheritable
  },
  focusStyle: {
    backgroundColor: '$accent',
  },
})

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & { inset?: boolean }
>(({ className: _className, inset, ...props }, ref) => (
  <DropdownMenuItemFrame
    ref={ref}
    paddingLeft={inset ? '$8' : '$2'}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItemFrame = styled(DropdownMenuPrimitive.CheckboxItem, {
   flexDirection: 'row',
   alignItems: 'center',
   paddingVertical: '$2',
   paddingLeft: '$8',
   paddingRight: '$2',
   borderRadius: '$sm',
   outlineStyle: 'none',
   cursor: 'default',

   hoverStyle: { backgroundColor: '$accent' },
   focusStyle: { backgroundColor: '$accent' },
})

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className: _className, children, checked, ...props }, ref) => (
  <DropdownMenuCheckboxItemFrame
    ref={ref}
    checked={checked}
    {...props}
  >
    <View position="absolute" left="$2" justifyContent="center" alignItems="center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check size={16} />
      </DropdownMenuPrimitive.ItemIndicator>
    </View>
    {children}
  </DropdownMenuCheckboxItemFrame>
))
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItemFrame = styled(DropdownMenuPrimitive.RadioItem, {
   flexDirection: 'row',
   alignItems: 'center',
   paddingVertical: '$2',
   paddingLeft: '$8',
   paddingRight: '$2',
   borderRadius: '$sm',
   outlineStyle: 'none',
   cursor: 'default',

   hoverStyle: { backgroundColor: '$accent' },
   focusStyle: { backgroundColor: '$accent' },
})

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className: _className, children, ...props }, ref) => (
  <DropdownMenuRadioItemFrame ref={ref} {...props}>
    <View position="absolute" left="$2" justifyContent="center" alignItems="center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle size={8} fill="currentColor" />
      </DropdownMenuPrimitive.ItemIndicator>
    </View>
    {children}
  </DropdownMenuRadioItemFrame>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, {
  paddingHorizontal: '$2',
  paddingVertical: '$1.5',
  fontSize: '$3',
  fontWeight: '600',
  color: '$foreground', // Ensure visibility
})

const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: '$muted',
  marginVertical: '$1',
})

const DropdownMenuShortcut = styled(Text, {
  marginLeft: 'auto',
  fontSize: '$2',
  color: '$mutedForeground',
  letterSpacing: 1,
})

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}

