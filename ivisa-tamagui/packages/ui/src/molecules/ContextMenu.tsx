import React from 'react'
import {
  ContextMenu as RadixContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuLabel,
  ContextMenuArrow,
} from '@radix-ui/react-context-menu'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import {
  Adapt,
  Sheet,
  Text,
  XStack,
  YStack,
  styled,
  GetProps,
  useMedia,
} from 'tamagui'

import { withErrorLogging } from '../utils/withErrorLogging'

const MenuContentFrame = styled(ContextMenuContent, {
  name: 'ContextMenuContent',
  backgroundColor: '$background',
  borderRadius: '$4',
  borderWidth: 1,
  borderColor: '$borderColor',
  paddingVertical: '$2',
  paddingHorizontal: '$1',
  width: 220,
  elevation: '$2',
  shadowColor: '$shadowColor',
  shadowRadius: 12,
  shadowOpacity: 0.15,
  shadowOffset: { width: 0, height: 6 },
})

const MenuItemFrame = styled(ContextMenuItem, {
  name: 'ContextMenuItem',
  height: '$5',
  paddingHorizontal: '$3',
  alignItems: 'center',
  borderRadius: '$3',
  outlineWidth: 0,
  hoverStyle: {
    backgroundColor: '$accent',
    color: '$accentColor',
  },
  focusStyle: {
    backgroundColor: '$accent',
    color: '$accentColor',
  },
  pressStyle: {
    backgroundColor: '$accent',
  },
  variants: {
    inset: {
      true: {
        paddingLeft: '$6',
      },
    },
  },
})

const MenuSubTriggerFrame = styled(ContextMenuSubTrigger, {
  name: 'ContextMenuSubTrigger',
  height: '$5',
  paddingHorizontal: '$3',
  alignItems: 'center',
  borderRadius: '$3',
  hoverStyle: {
    backgroundColor: '$accent',
    color: '$accentColor',
  },
  focusStyle: {
    backgroundColor: '$accent',
    color: '$accentColor',
  },
})

const MenuLabelFrame = styled(ContextMenuLabel, {
  name: 'ContextMenuLabel',
  fontSize: '$2',
  color: '$mutedForeground',
  paddingHorizontal: '$3',
  paddingVertical: '$1',
})

const MenuSeparator = styled(ContextMenuSeparator, {
  name: 'ContextMenuSeparator',
  height: 1,
  marginVertical: '$1',
  marginHorizontal: '$2',
  backgroundColor: '$borderColor',
})

const ShortcutText = styled(Text, {
  fontSize: '$2',
  color: '$mutedForeground',
})

const Arrow = styled(ContextMenuArrow, {
  name: 'ContextMenuArrow',
  fill: '$background',
  stroke: '$borderColor',
})

const DefaultTrigger = styled(YStack, {
  name: 'ContextMenuTrigger',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$4',
  padding: '$3',
  backgroundColor: '$background',
  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },
})

type MenuItemFrameProps = GetProps<typeof MenuItemFrame>

type ContextMenuEntryBase = {
  id?: string
  label?: string
  shortcut?: string
  disabled?: boolean
  inset?: MenuItemFrameProps['inset']
  onSelect?: () => void
}

export type ContextMenuEntry =
  | (ContextMenuEntryBase & {
    type?: 'item'
    children?: never
  })
  | (ContextMenuEntryBase & {
    type: 'sub'
    children: ContextMenuEntry[]
  })
  | {
    type: 'separator'
    id?: string
  }
  | {
    type: 'label'
    id?: string
    label: string
    tone?: 'primary' | 'secondary'
  }

export interface ContextMenuProps
  extends Omit<React.ComponentProps<typeof TamaguiContextMenu>, 'children'> {
  /**
   * Declarative list of menu entries. If omitted, provide custom `children` for full control.
   */
  items?: ContextMenuEntry[]
  /**
   * Trigger rendered inside `ContextMenu.Trigger`. Defaults to a neutral surface.
   */
  trigger?: React.ReactNode
  /**
   * Custom menu content. When provided, `items` are ignored.
   */
  children?: React.ReactNode
}

type ContextMenuElement = React.ElementRef<typeof TamaguiContextMenu>

const ContextMenuImpl = React.forwardRef<ContextMenuElement, ContextMenuProps>(
  ({ trigger, items, children, ...props }, ref) => {
    const media = useMedia()

    const renderEntries = React.useCallback(
      (entries?: ContextMenuEntry[], depth = 0): React.ReactNode => {
        if (!entries) return null

        return entries.map((entry, index) => {
          const key = entry.id ?? `${depth}-${index}`

          if (entry.type === 'separator') {
            return <MenuSeparator key={`separator-${key}`} />
          }

          if (entry.type === 'label') {
            return (
              <MenuLabelFrame key={`label-${key}`}>{entry.label}</MenuLabelFrame>
            )
          }

          if (entry.type === 'sub' && entry.children?.length) {
            return (
              <TamaguiContextMenu.Sub key={`sub-${key}`}>
                <MenuSubTriggerFrame disabled={entry.disabled}>
                  <XStack flex={1} justifyContent="space-between" alignItems="center">
                    <Text fontSize="$3" color="$foreground">
                      {entry.label}
                    </Text>
                    <ShortcutText>›</ShortcutText>
                  </XStack>
                </MenuSubTriggerFrame>
                <MenuSubContentFrame alignOffset={-5}>
                  {renderEntries(entry.children, depth + 1)}
                </MenuSubContentFrame>
              </TamaguiContextMenu.Sub>
            )
          }

          return (
            <MenuItemFrame
              key={`item-${key}`}
              inset={entry.inset}
              disabled={entry.disabled}
              onSelect={() => entry.onSelect?.()}
            >
              <XStack flex={1} justifyContent="space-between" alignItems="center">
                <Text fontSize="$3" color="$foreground">
                  {entry.label}
                </Text>
                {entry.shortcut ? <ShortcutText>{entry.shortcut}</ShortcutText> : null}
              </XStack>
            </MenuItemFrame>
          )
        })
      },
      []
    )

    const content = children ?? renderEntries(items)

    return (
      <TamaguiContextMenu ref={ref} {...props}>
        <TamaguiContextMenu.Trigger asChild>
          {trigger ?? (
            <DefaultTrigger>
              <Text fontSize="$3" color="$mutedForeground">
                Right-click me
              </Text>
            </DefaultTrigger>
          )}
        </TamaguiContextMenu.Trigger>

        <Adapt when="sm" platform="touch">
          <Sheet
            modal
            dismissOnSnapToBottom
            native
            snapPoints={[85]}
            animationConfig={{ type: 'spring', damping: 20, mass: 1, stiffness: 250 }}
          >
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay
              animation="lazy"
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
          </Sheet>
        </Adapt>

        <MenuContentFrame offset={5} collisionPadding={10} inert={!media.sm}>
          {content}
          <Arrow offset={12} />
        </MenuContentFrame>
      </TamaguiContextMenu>
    )
  }
)

ContextMenuImpl.displayName = 'ContextMenu'

const ContextMenuWithLogging = withErrorLogging<ContextMenuProps, ContextMenuElement>(
  'ContextMenu',
  ContextMenuImpl
)

export const ContextMenu = Object.assign(ContextMenuWithLogging, {
  Root: TamaguiContextMenu,
  Trigger: TamaguiContextMenu.Trigger,
  Content: MenuContentFrame,
  Item: MenuItemFrame,
  Label: MenuLabelFrame,
  Separator: MenuSeparator,
  Shortcut: ShortcutText,
  Sub: TamaguiContextMenu.Sub,
  SubTrigger: MenuSubTriggerFrame,
  SubContent: MenuSubContentFrame,
})
