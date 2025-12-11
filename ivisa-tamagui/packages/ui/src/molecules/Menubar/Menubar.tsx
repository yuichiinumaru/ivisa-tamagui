import {
  Root,
  Menu,
  Group,
  Portal,
  Trigger,
  Content,
  Item,
  CheckboxItem,
  ItemIndicator,
  RadioItem,
  Label,
  Separator,
  SubTrigger,
  SubContent,
  Sub,
  RadioGroup,
} from '@radix-ui/react-menubar'
import { Check, ChevronRight, Circle } from '@tamagui/lucide-icons'
import React from 'react'
import { styled, Paragraph, GetProps, YStack } from 'tamagui'
import { Skeleton } from '../../atoms/Skeleton'

const MenubarFrame = styled(Root, {
  name: 'Menubar',
  display: 'flex',
  flexDirection: 'row',
  height: 'auto',
  alignItems: 'center',
  gap: '$1',
  borderRadius: '$md',
  borderWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
  padding: '$1',
})

const MenubarMenu = Menu
const MenubarGroup = Group
const MenubarPortal = Portal

const MenubarTriggerFrame = styled(Trigger, {
  name: 'MenubarTrigger',
  display: 'flex',
  alignItems: 'center',
  paddingVertical: '$1.5',
  paddingHorizontal: '$3',
  borderRadius: '$sm',
  outlineWidth: 0,
  cursor: 'default',
  userSelect: 'none',
  fontSize: '$3',
  fontWeight: '500',
  color: '$foreground',
  backgroundColor: 'transparent',
  borderWidth: 0,

  hoverStyle: {
    backgroundColor: '$muted',
    color: '$foreground',
  },
  focusStyle: {
    backgroundColor: '$muted',
    color: '$foreground',
  },
  pressStyle: {
    backgroundColor: '$muted',
    color: '$foreground',
  },

  '$platform-web': {
    '&[data-state="open"]': {
      backgroundColor: '$muted',
      color: '$foreground',
    }
  }
})

// Type Safe Wrappers
const MenubarTrigger = React.forwardRef<React.ElementRef<typeof Trigger>, GetProps<typeof MenubarTriggerFrame>>((props, ref) => (
  <MenubarTriggerFrame ref={ref} {...props} />
))
MenubarTrigger.displayName = Trigger.displayName

const MenubarContentFrame = styled(Content, {
  name: 'MenubarContent',
  minWidth: 192,
  overflow: 'hidden',
  borderRadius: '$md',
  borderWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
  padding: '$1',
  zIndex: 50,
  shadowColor: '$shadowColor',
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

const MenubarContent = React.forwardRef<React.ElementRef<typeof Content>, GetProps<typeof MenubarContentFrame>>(({ align = 'start', alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <Portal>
    <MenubarContentFrame
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      {...props}
    />
  </Portal>
))
MenubarContent.displayName = Content.displayName

const MenubarItemFrame = styled(Item, {
  name: 'MenubarItem',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: '$sm',
  paddingVertical: '$1.5',
  paddingHorizontal: '$2',
  outlineWidth: 0,
  userSelect: 'none',
  cursor: 'default',
  fontSize: '$3',
  color: '$foreground',

  hoverStyle: {
    backgroundColor: '$accent',
    color: '$accentForeground',
  },
  focusStyle: {
    backgroundColor: '$accent',
    color: '$accentForeground',
  },

  '$platform-web': {
    '&[data-disabled]': {
      pointerEvents: 'none',
      opacity: 0.5,
    }
  }
})

const MenubarItem = React.forwardRef<React.ElementRef<typeof Item>, GetProps<typeof MenubarItemFrame> & { inset?: boolean }>(({ inset, ...props }, ref) => (
  <MenubarItemFrame
    ref={ref}
    paddingLeft={inset ? '$8' : '$2'}
    {...props}
  />
))
MenubarItem.displayName = Item.displayName

const MenubarCheckboxItemFrame = styled(CheckboxItem, {
  name: 'MenubarCheckboxItem',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: '$sm',
  paddingVertical: '$1.5',
  paddingLeft: '$8',
  paddingRight: '$2',
  outlineWidth: 0,
  userSelect: 'none',
  cursor: 'default',
  fontSize: '$3',
  color: '$foreground',

  hoverStyle: {
    backgroundColor: '$accent',
    color: '$accentForeground',
  },
  focusStyle: {
    backgroundColor: '$accent',
    color: '$accentForeground',
  },

  '$platform-web': {
    '&[data-disabled]': {
      pointerEvents: 'none',
      opacity: 0.5,
    }
  }
})

const MenubarItemIndicatorFrame = styled(ItemIndicator, {
  position: 'absolute',
  left: '$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '$4',
  height: '$4',
})

const MenubarCheckboxItem = React.forwardRef<React.ElementRef<typeof CheckboxItem>, GetProps<typeof MenubarCheckboxItemFrame>>(({ children, checked, ...props }, ref) => (
  <MenubarCheckboxItemFrame ref={ref} checked={checked} {...props}>
    <MenubarItemIndicatorFrame>
      <Check size={14} />
    </MenubarItemIndicatorFrame>
    {children}
  </MenubarCheckboxItemFrame>
))
MenubarCheckboxItem.displayName = CheckboxItem.displayName

const MenubarRadioItemFrame = styled(RadioItem, {
  name: 'MenubarRadioItem',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: '$sm',
  paddingVertical: '$1.5',
  paddingLeft: '$8',
  paddingRight: '$2',
  outlineWidth: 0,
  userSelect: 'none',
  cursor: 'default',
  fontSize: '$3',
  color: '$foreground',

  hoverStyle: {
    backgroundColor: '$accent',
    color: '$accentForeground',
  },
  focusStyle: {
    backgroundColor: '$accent',
    color: '$accentForeground',
  },

  '$platform-web': {
    '&[data-disabled]': {
      pointerEvents: 'none',
      opacity: 0.5,
    }
  }
})

const MenubarRadioItem = React.forwardRef<React.ElementRef<typeof RadioItem>, GetProps<typeof MenubarRadioItemFrame>>(({ children, ...props }, ref) => (
  <MenubarRadioItemFrame ref={ref} {...props}>
    <MenubarItemIndicatorFrame>
      <Circle size={8} fill="currentColor" />
    </MenubarItemIndicatorFrame>
    {children}
  </MenubarRadioItemFrame>
))
MenubarRadioItem.displayName = RadioItem.displayName

const MenubarLabelFrame = styled(Label, {
  name: 'MenubarLabel',
  paddingHorizontal: '$2',
  paddingVertical: '$1.5',
  fontSize: '$3',
  fontWeight: '600',
  color: '$foreground',
  paddingLeft: '$2',
})

const MenubarLabel = React.forwardRef<React.ElementRef<typeof Label>, GetProps<typeof MenubarLabelFrame> & { inset?: boolean }>(({ inset, ...props }, ref) => (
    <MenubarLabelFrame ref={ref} paddingLeft={inset ? '$8' : '$2'} {...props} />
))
MenubarLabel.displayName = Label.displayName


const MenubarSeparator = styled(Separator, {
  name: 'MenubarSeparator',
  height: 1,
  backgroundColor: '$muted',
  marginHorizontal: '-$1',
})

const MenubarShortcut = styled(Paragraph, {
  name: 'MenubarShortcut',
  marginLeft: 'auto',
  fontSize: '$1',
  color: '$mutedForeground',
  letterSpacing: '$1',
})

const MenubarSubTriggerFrame = styled(SubTrigger, {
  name: 'MenubarSubTrigger',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: '$sm',
  paddingVertical: '$1.5',
  paddingHorizontal: '$2',
  outlineWidth: 0,
  userSelect: 'none',
  cursor: 'default',
  fontSize: '$3',
  color: '$foreground',

  hoverStyle: {
    backgroundColor: '$accent',
    color: '$accentForeground',
  },
  focusStyle: {
    backgroundColor: '$accent',
    color: '$accentForeground',
  },

  '$platform-web': {
    '&[data-state="open"]': {
      backgroundColor: '$accent',
      color: '$accentForeground',
    }
  }
})

const MenubarSubTrigger = React.forwardRef<React.ElementRef<typeof SubTrigger>, GetProps<typeof MenubarSubTriggerFrame> & { inset?: boolean }>(({ children, inset, ...props }, ref) => (
  <MenubarSubTriggerFrame
    ref={ref}
    paddingLeft={inset ? '$8' : '$2'}
    {...props}
  >
    {children}
    <ChevronRight size={14} style={{ marginLeft: 'auto' }} />
  </MenubarSubTriggerFrame>
))
MenubarSubTrigger.displayName = SubTrigger.displayName

const MenubarSubContentFrame = styled(SubContent, {
  name: 'MenubarSubContent',
  minWidth: 128,
  overflow: 'hidden',
  borderRadius: '$md',
  borderWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
  padding: '$1',
  shadowColor: '$shadowColor',
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  zIndex: 50,
})

const MenubarSubContent = React.forwardRef<React.ElementRef<typeof SubContent>, GetProps<typeof MenubarSubContentFrame>>(({ ...props }, ref) => (
  <MenubarSubContentFrame ref={ref} {...props} />
))
MenubarSubContent.displayName = SubContent.displayName

const MenubarSub = Sub
const MenubarRadioGroup = RadioGroup
const MenubarRoot = MenubarFrame

type MenubarProps = GetProps<typeof MenubarFrame> & {
  isLoading?: boolean
  hasError?: boolean
  isDisabled?: boolean
  rightSlot?: React.ReactNode
}

import { Spacer } from 'tamagui'

const Menubar = ({
  isLoading,
  hasError,
  isDisabled,
  rightSlot,
  children,
  ...props
}: MenubarProps) => {
  if (isLoading) {
    return (
      <YStack width="100%" space="$2">
        <Skeleton height="$4" width="100%" />
      </YStack>
    );
  }

  return (
    <MenubarRoot
      {...props}
      opacity={isDisabled ? 0.5 : 1}
      borderColor={hasError ? '$red10' : '$borderColor'}
    >
      {children}
      {rightSlot && (
        <>
          <Spacer />
          {rightSlot}
        </>
      )}
    </MenubarRoot>
  )
}

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
