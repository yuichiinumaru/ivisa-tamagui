import React from 'react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { Check, ChevronRight, Circle } from '@tamagui/lucide-icons'
import { styled, XStack, Text, YStack } from 'tamagui'

import { Skeleton } from '../../atoms/Skeleton'

const StyledContent = styled(ContextMenuPrimitive.Content, {
  name: 'ContextMenuContent',
  minWidth: 220,
  zIndex: 200,
  overflow: 'hidden',
  padding: '$1',
  backgroundColor: '$background',
  borderRadius: '$4',
  borderWidth: 1,
  borderColor: '$borderColor',
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 12,
})

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ children, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <StyledContent ref={ref} {...props}>
      {children}
    </StyledContent>
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = 'ContextMenuContent'

const StyledItem = styled(ContextMenuPrimitive.Item, {
  name: 'ContextMenuItem',
  fontSize: '$2',
  lineHeight: '$2',
  borderRadius: '$2',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  padding: '$2',
  paddingLeft: '$6',
  cursor: 'pointer',
  outline: 'none',
  userSelect: 'none',

  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  },

  hoverStyle: {
    backgroundColor: '$accent',
    color: '$accentForeground',
  },

  focusStyle: {
    backgroundColor: '$accent',
    color: '$accentForeground',
  },
})

const StyledCheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, {
  name: 'ContextMenuCheckboxItem',
  fontSize: '$2',
  lineHeight: '$2',
  borderRadius: '$2',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  padding: '$2',
  paddingLeft: '$6',
  cursor: 'pointer',
  outline: 'none',
  userSelect: 'none',

  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  },

  hoverStyle: {
    backgroundColor: '$accent',
  },

  focusStyle: {
    backgroundColor: '$accent',
  },
})

const StyledRadioItem = styled(ContextMenuPrimitive.RadioItem, {
  name: 'ContextMenuRadioItem',
  fontSize: '$2',
  lineHeight: '$2',
  borderRadius: '$2',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  padding: '$2',
  paddingLeft: '$6',
  cursor: 'pointer',
  outline: 'none',
  userSelect: 'none',

  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  },

  hoverStyle: {
    backgroundColor: '$accent',
  },

  focusStyle: {
    backgroundColor: '$accent',
  },
})

const StyledSubTrigger = styled(ContextMenuPrimitive.SubTrigger, {
  name: 'ContextMenuSubTrigger',
  fontSize: '$2',
  lineHeight: '$2',
  borderRadius: '$2',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  padding: '$2',
  paddingLeft: '$6',
  cursor: 'pointer',
  outline: 'none',
  userSelect: 'none',

  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  },

  hoverStyle: {
    backgroundColor: '$accent',
  },

  focusStyle: {
    backgroundColor: '$accent',
  },
})

const StyledSubContent = styled(ContextMenuPrimitive.SubContent, {
  name: 'ContextMenuSubContent',
  minWidth: 220,
  zIndex: 200,
  overflow: 'hidden',
  padding: '$1',
  backgroundColor: '$background',
  borderRadius: '$4',
  borderWidth: 1,
  borderColor: '$borderColor',
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 12,
})

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ children, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <StyledSubContent ref={ref} {...props}>
      {children}
    </StyledSubContent>
  </ContextMenuPrimitive.Portal>
))
ContextMenuSubContent.displayName = 'ContextMenuSubContent'

const ContextMenuItemIndicator = styled(ContextMenuPrimitive.ItemIndicator, {
  position: 'absolute',
  left: '$2',
  width: '$3.5',
  height: '$3.5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const StyledLabel = styled(ContextMenuPrimitive.Label, {
  name: 'ContextMenuLabel',
  padding: '$2',
  paddingLeft: '$6',
  fontSize: '$2',
  lineHeight: '$2.5',
  fontWeight: '600',
  color: '$color',
})

const StyledSeparator = styled(ContextMenuPrimitive.Separator, {
  name: 'ContextMenuSeparator',
  height: 1,
  margin: '$1',
  backgroundColor: '$borderColor',
})

const ContextMenuShortcut = styled(Text, {
  name: 'ContextMenuShortcut',
  marginLeft: 'auto',
  fontSize: '$2',
  letterSpacing: 0.5,
  color: '$color',
  opacity: 0.6,
})

export interface ContextMenuItemDef {
  label: string
  icon?: React.ReactNode
  shortcut?: string
  onSelect?: (event: Event) => void
  disabled?: boolean
  isSeparator?: boolean
  isLabel?: boolean
  items?: ContextMenuItemDef[]
  isCheckbox?: boolean
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  isRadio?: boolean
  value?: string
}

interface ContextMenuProps extends React.ComponentProps<typeof ContextMenuPrimitive.Root> {
  children: React.ReactElement
  items: ContextMenuItemDef[]
  isLoading?: boolean
  isDisabled?: boolean
  hasError?: boolean
  radioGroupValue?: string
  onRadioGroupChange?: (value: string) => void
}

const ContextMenuComponent = ({
  children,
  items,
  isLoading,
  isDisabled,
  hasError,
  radioGroupValue,
  onRadioGroupChange,
  ...props
}: ContextMenuProps) => {
  const renderItems = (menuItems: ContextMenuItemDef[]) =>
    menuItems.map((item, index) => {
      const key = `context-menu-item-${item.label}-${index}`

      if (item.isSeparator) {
        return <StyledSeparator key={key} />
      }

      if (item.isLabel) {
        return (
          <StyledLabel key={key}>
            <Text ellipse>{item.label}</Text>
          </StyledLabel>
        )
      }

      if (item.items && item.items.length > 0) {
        return (
          <ContextMenuPrimitive.Sub key={key}>
            <StyledSubTrigger disabled={item.disabled}>
              <XStack gap="$2" alignItems="center">
                {item.icon}
                <Text ellipse>{item.label}</Text>
              </XStack>
              <ChevronRight size="$1" marginLeft="auto" />
            </StyledSubTrigger>
            <ContextMenuSubContent>{renderItems(item.items)}</ContextMenuSubContent>
          </ContextMenuPrimitive.Sub>
        )
      }

      if (item.isCheckbox) {
        return (
          <StyledCheckboxItem
            key={key}
            checked={item.checked}
            onCheckedChange={item.onCheckedChange}
            disabled={item.disabled}
          >
            <ContextMenuItemIndicator>
              <Check size="$1" />
            </ContextMenuItemIndicator>
            <Text ellipse>{item.label}</Text>
          </StyledCheckboxItem>
        )
      }

      if (item.isRadio) {
        return (
          <StyledRadioItem key={key} value={item.value!} disabled={item.disabled}>
            <ContextMenuItemIndicator>
              <Circle size="$1" />
            </ContextMenuItemIndicator>
            <Text ellipse>{item.label}</Text>
          </StyledRadioItem>
        )
      }

      return (
        <StyledItem key={key} disabled={item.disabled} onSelect={item.onSelect}>
          <XStack gap="$2" alignItems="center">
            {item.icon}
            <Text ellipse>{item.label}</Text>
          </XStack>
          {item.shortcut && <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>}
        </StyledItem>
      )
    })

  const radioItems = items.filter((item) => item.isRadio)

  return (
    <ContextMenuPrimitive.Root {...props}>
      <ContextMenuPrimitive.Trigger asChild disabled={isDisabled}>
        {React.cloneElement(children, {
          ...children.props,
          disabled: isDisabled,
          ...(hasError && {
            borderColor: '$red10',
            borderWidth: 2,
          }),
        })}
      </ContextMenuPrimitive.Trigger>
      <ContextMenuContent>
        {isLoading ? (
          <YStack gap="$2" padding="$2">
            <Skeleton height={20} />
            <Skeleton height={20} />
            <Skeleton height={20} />
          </YStack>
        ) : radioItems.length > 0 ? (
          <ContextMenuPrimitive.RadioGroup value={radioGroupValue} onValueChange={onRadioGroupChange}>
            {renderItems(items)}
          </ContextMenuPrimitive.RadioGroup>
        ) : (
          renderItems(items)
        )}
      </ContextMenuContent>
    </ContextMenuPrimitive.Root>
  )
}

ContextMenuComponent.displayName = 'ContextMenu'

export const ContextMenu = ContextMenuComponent

export type ContextMenuProps = React.ComponentProps<typeof ContextMenu>

export type ContextMenuComponentProps = React.ComponentProps<typeof ContextMenuComponent>
