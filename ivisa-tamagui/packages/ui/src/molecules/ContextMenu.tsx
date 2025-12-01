import React from 'react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { styled, Text, Separator } from 'tamagui'
import { ChevronRight } from '@tamagui/lucide-icons'

// --- Styled Primitives ---

const ContextMenuContentFrame = styled(ContextMenuPrimitive.Content, {
  minWidth: 220,
  backgroundColor: '$background',
  borderRadius: '$md',
  borderWidth: 1,
  borderColor: '$borderColor',
  padding: '$1',
  shadowColor: '$shadowColor',
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  animationDuration: '200ms',
})

const ContextMenuItemFrame = styled(ContextMenuPrimitive.Item, {
  group: 'item',
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: '$2',
  paddingHorizontal: '$2',
  borderRadius: '$sm',
  cursor: 'pointer',
  justifyContent: 'space-between',
  outlineWidth: 0,

  hoverStyle: {
    backgroundColor: '$accent',
  },
  focusStyle: {
    backgroundColor: '$accent',
  },

  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  } as const,
})

const ContextMenuSubContentFrame = styled(ContextMenuPrimitive.SubContent, {
  minWidth: 220,
  backgroundColor: '$background',
  borderRadius: '$md',
  borderWidth: 1,
  borderColor: '$borderColor',
  padding: '$1',
  shadowColor: '$shadowColor',
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  marginLeft: '$1',
})

const ContextMenuSubTriggerFrame = styled(ContextMenuPrimitive.SubTrigger, {
  group: 'item',
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: '$2',
  paddingHorizontal: '$2',
  borderRadius: '$sm',
  cursor: 'default',
  justifyContent: 'space-between',
  outlineWidth: 0,

  hoverStyle: {
    backgroundColor: '$accent',
  },
  focusStyle: {
    backgroundColor: '$accent',
  },

  '&[data-state="open"]': {
    backgroundColor: '$accent',
  },
})

// --- Types ---

export type ContextMenuEntry = {
  label?: string
  shortcut?: string
  onSelect?: () => void
  disabled?: boolean
  type?: 'separator' | 'sub' | 'item'
  children?: ContextMenuEntry[]
}

export type ContextMenuProps = {
  children: React.ReactNode
  items: ContextMenuEntry[]
}

// --- Component ---

const RenderMenuItem = ({ item, index }: { item: ContextMenuEntry; index: number }) => {
  if (item.type === 'separator') {
    return (
      <ContextMenuPrimitive.Separator asChild key={index}>
        <Separator marginVertical={5} />
      </ContextMenuPrimitive.Separator>
    )
  }

  if (item.type === 'sub' && item.children) {
    return (
      <ContextMenuPrimitive.Sub key={index}>
        <ContextMenuSubTriggerFrame>
          <Text fontSize="$3" color="$foreground">
            {item.label}
          </Text>
          <ChevronRight size={16} color="$mutedForeground" />
        </ContextMenuSubTriggerFrame>
        <ContextMenuPrimitive.Portal>
          <ContextMenuSubContentFrame>
            {item.children.map((subItem, subIndex) => (
              <RenderMenuItem item={subItem} index={subIndex} key={subIndex} />
            ))}
          </ContextMenuSubContentFrame>
        </ContextMenuPrimitive.Portal>
      </ContextMenuPrimitive.Sub>
    )
  }

  // Regular Item
  return (
    <ContextMenuItemFrame
      key={index}
      disabled={item.disabled}
      onSelect={item.onSelect}
    >
      <Text fontSize="$3" color="$foreground">
        {item.label}
      </Text>
      {item.shortcut && (
        <Text fontSize="$2" color="$mutedForeground" marginLeft="$4">
          {item.shortcut}
        </Text>
      )}
    </ContextMenuItemFrame>
  )
}

export const ContextMenu = ({ children, items }: ContextMenuProps) => {
  return (
    <ContextMenuPrimitive.Root>
      <ContextMenuPrimitive.Trigger asChild>
        {children}
      </ContextMenuPrimitive.Trigger>

      <ContextMenuPrimitive.Portal>
        <ContextMenuContentFrame>
          {items.map((item, index) => (
            <RenderMenuItem item={item} index={index} key={index} />
          ))}
        </ContextMenuContentFrame>
      </ContextMenuPrimitive.Portal>
    </ContextMenuPrimitive.Root>
  )
}
