import React from 'react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { styled, XStack, Text } from 'tamagui'

const ContextMenu = ContextMenuPrimitive.Root
const ContextMenuTrigger = ContextMenuPrimitive.Trigger
const ContextMenuGroup = ContextMenuPrimitive.Group
const ContextMenuPortal = ContextMenuPrimitive.Portal
const ContextMenuSub = ContextMenuPrimitive.Sub
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuContentFrame = styled(ContextMenuPrimitive.Content, {
  name: 'ContextMenuContent',
  minWidth: 180,
  backgroundColor: '$background',
  borderColor: '$borderColor',
  borderWidth: 1,
  borderRadius: '$md',
  padding: '$1',
  overflow: 'hidden',
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 10,
  animation: 'quick',
})

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className: _className, ...props }, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ = _className;
  return (
    <ContextMenuPortal>
      <ContextMenuContentFrame ref={ref} {...props} />
    </ContextMenuPortal>
  );
})
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItemFrame = styled(ContextMenuPrimitive.Item, {
  name: 'ContextMenuItem',
  position: 'relative',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: '$sm',
  paddingHorizontal: '$2',
  paddingVertical: '$1.5',
  outlineStyle: 'none',
  cursor: 'default',
  userSelect: 'none',

  hoverStyle: {
    backgroundColor: '$accent',
    cursor: 'default',
  },
  focusStyle: {
    backgroundColor: '$accent',
    color: '$accentForeground',
  },

  variants: {
    disabled: {
        true: {
            opacity: 0.5,
            pointerEvents: 'none',
        }
    },
    inset: {
        true: {
            paddingLeft: '$8',
        }
    }
  } as const,
})

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className: _className, inset, ...props }, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ = _className;
  return <ContextMenuItemFrame ref={ref} inset={inset} {...props} />
})
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItemFrame = styled(ContextMenuPrimitive.CheckboxItem, {
  name: 'ContextMenuCheckboxItem',
  position: 'relative',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: '$sm',
  paddingVertical: '$1.5',
  paddingLeft: '$8',
  paddingRight: '$2',
  outlineStyle: 'none',
  cursor: 'default',
  userSelect: 'none',

  hoverStyle: {
    backgroundColor: '$accent',
    color: '$accentForeground',
  },
  focusStyle: {
    backgroundColor: '$accent',
    color: '$accentForeground',
  },

  variants: {
      disabled: {
          true: {
              opacity: 0.5,
              pointerEvents: 'none',
          }
      }
  } as const
})

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className: _className, children, checked, ...props }, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ = _className;
  return (
    <ContextMenuCheckboxItemFrame ref={ref} checked={checked} {...props}>
      <XStack position="absolute" left="$2" justifyContent="center" alignItems="center" width="$3.5" height="$3.5">
        <ContextMenuPrimitive.ItemIndicator>
          <Text>✓</Text>
        </ContextMenuPrimitive.ItemIndicator>
      </XStack>
      {children}
    </ContextMenuCheckboxItemFrame>
  );
})
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItemFrame = styled(ContextMenuPrimitive.RadioItem, {
    name: 'ContextMenuRadioItem',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '$sm',
    paddingVertical: '$1.5',
    paddingLeft: '$8',
    paddingRight: '$2',
    outlineStyle: 'none',
    cursor: 'default',
    userSelect: 'none',

    hoverStyle: {
      backgroundColor: '$accent',
      color: '$accentForeground',
    },
    focusStyle: {
      backgroundColor: '$accent',
      color: '$accentForeground',
    },

    variants: {
        disabled: {
            true: {
                opacity: 0.5,
                pointerEvents: 'none',
            }
        }
    } as const
})

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className: _className, children, ...props }, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ = _className;
  return (
    <ContextMenuRadioItemFrame ref={ref} {...props}>
      <XStack position="absolute" left="$2" justifyContent="center" alignItems="center" width="$3.5" height="$3.5">
        <ContextMenuPrimitive.ItemIndicator>
          <Text>●</Text>
        </ContextMenuPrimitive.ItemIndicator>
      </XStack>
      {children}
    </ContextMenuRadioItemFrame>
  );
})
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = styled(ContextMenuPrimitive.Label, {
  name: 'ContextMenuLabel',
  paddingHorizontal: '$2',
  paddingVertical: '$1.5',
  fontSize: '$2',
  fontWeight: '600',
  color: '$foreground',
  variants: {
      inset: {
          true: {
              paddingLeft: '$8'
          }
      }
  } as const
})

const ContextMenuSeparator = styled(ContextMenuPrimitive.Separator, {
  name: 'ContextMenuSeparator',
  height: 1,
  backgroundColor: '$border',
  marginHorizontal: '-$1',
  marginVertical: '$1',
})

const ContextMenuShortcut = styled(Text, {
  name: 'ContextMenuShortcut',
  marginLeft: 'auto',
  fontSize: '$1',
  color: '$mutedForeground',
  letterSpacing: 1,
})

const ContextMenuSubContentFrame = styled(ContextMenuPrimitive.SubContent, {
    name: 'ContextMenuSubContent',
    minWidth: 180,
    backgroundColor: '$background',
    borderColor: '$borderColor',
    borderWidth: 1,
    borderRadius: '$md',
    padding: '$1',
    overflow: 'hidden',
    shadowColor: '$shadowColor',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    animation: 'quick',
})

const ContextMenuSubTriggerFrame = styled(ContextMenuPrimitive.SubTrigger, {
    name: 'ContextMenuSubTrigger',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '$sm',
    paddingHorizontal: '$2',
    paddingVertical: '$1.5',
    cursor: 'default',
    userSelect: 'none',
    outlineStyle: 'none',

    hoverStyle: {
        backgroundColor: '$accent',
        color: '$accentForeground',
    },
    focusStyle: {
        backgroundColor: '$accent',
        color: '$accentForeground',
    },

    variants: {
        inset: {
            true: {
                paddingLeft: '$8',
            }
        }
    } as const
})

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className: _className, inset, children, ...props }, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ = _className;
  return (
    <ContextMenuSubTriggerFrame ref={ref} inset={inset} {...props}>
      {children}
      <Text marginLeft="auto">▶</Text>
    </ContextMenuSubTriggerFrame>
  );
})
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className: _className, ...props }, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ = _className;
  return <ContextMenuSubContentFrame ref={ref} {...props} />;
})
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
