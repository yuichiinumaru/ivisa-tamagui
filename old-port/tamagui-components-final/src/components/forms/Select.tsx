import React, { useEffect, useMemo } from 'react'
import { Check, ChevronDown } from '@tamagui/lucide-icons'
import { Button, isWeb, Select as TamaguiSelect, Sheet, styled, View } from 'tamagui'

import { withErrorLogging } from '../../utils/withErrorLogging'

const SelectTrigger = styled(Button, {
  name: 'SelectTrigger',
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
  color: '$foreground',
  focusStyle: {
    borderColor: '$ring',
    borderWidth: 2,
  },
})

const SelectIcon = styled(View, {
  name: 'SelectIcon',
  marginLeft: '$2',
})

type TamaguiSelectComponentProps = React.ComponentPropsWithRef<typeof TamaguiSelect>
type TamaguiSelectElement = React.ElementRef<typeof TamaguiSelect>

export interface SelectProps extends Omit<TamaguiSelectComponentProps, 'children'> {
  items?: { value: string; label: string }[]
  placeholder?: string
  children?: TamaguiSelectComponentProps['children']
}

const hasSelectItems = (node: React.ReactNode): boolean => {
  return React.Children.toArray(node).some((child) => {
    if (!React.isValidElement(child)) {
      return false
    }

    if (child.type === TamaguiSelect.Item) {
      return true
    }

    if (child.props?.children) {
      return hasSelectItems(child.props.children)
    }

    return false
  })
}

const SelectImpl = React.forwardRef<TamaguiSelectElement, SelectProps>(
  (
    {
      items,
      placeholder,
      children,
      disablePreventBodyScroll = true,
      ...props
    },
    ref
  ) => {
    const childArray = useMemo(() => React.Children.toArray(children ?? []), [children])
    const hasCustomChildren = childArray.length > 0

    useEffect(() => {
      if (process.env.NODE_ENV === 'production') {
        return
      }

      if (hasCustomChildren) {
        const optionsExist = childArray.some((child) => hasSelectItems(child))

        if (!optionsExist) {
          console.warn('[Select.Content] empty option list')
        }
      } else if (!items || items.length === 0) {
        console.warn('[Select] no items provided')
      }
    }, [childArray, hasCustomChildren, items])

    const fallbackChildren = useMemo(() => {
      if (!items || items.length === 0) {
        return null
      }

      return (
        <>
          <TamaguiSelect.Trigger asChild>
            <SelectTrigger>
              <TamaguiSelect.Value placeholder={placeholder} />
              <SelectIcon>
                <ChevronDown size={20} />
              </SelectIcon>
            </SelectTrigger>
          </TamaguiSelect.Trigger>

          <TamaguiSelect.Adapt when="sm" platform="touch">
            <Sheet
              native={!isWeb}
              modal
              dismissOnSnapToBottom
              animationConfig={{
                type: 'spring',
                damping: 20,
                mass: 1.2,
                stiffness: 250,
              }}
            >
              <Sheet.Frame>
                <Sheet.ScrollView>
                  <TamaguiSelect.Adapt.Contents />
                </Sheet.ScrollView>
              </Sheet.Frame>
              <Sheet.Overlay
                animation="lazy"
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
              />
            </Sheet>
          </TamaguiSelect.Adapt>

          <TamaguiSelect.Content zIndex={200000}>
            <TamaguiSelect.ScrollUpButton />
            <TamaguiSelect.Viewport minWidth={200}>
              <TamaguiSelect.Group>
                {items.map((item, index) => (
                  <TamaguiSelect.Item key={item.value} value={item.value} index={index}>
                    <TamaguiSelect.ItemText>{item.label}</TamaguiSelect.ItemText>
                    <TamaguiSelect.ItemIndicator marginLeft="auto">
                      <Check size={16} />
                    </TamaguiSelect.ItemIndicator>
                  </TamaguiSelect.Item>
                ))}
              </TamaguiSelect.Group>
            </TamaguiSelect.Viewport>
            <TamaguiSelect.ScrollDownButton />
          </TamaguiSelect.Content>
        </>
      )
    }, [items, placeholder])

    const content = hasCustomChildren ? children : fallbackChildren

    return (
      <TamaguiSelect
        ref={ref}
        disablePreventBodyScroll={disablePreventBodyScroll}
        {...props}
      >
        {content}
      </TamaguiSelect>
    )
  }
)

SelectImpl.displayName = 'Select'

const SelectWithLogging = withErrorLogging<SelectProps, React.ElementRef<typeof TamaguiSelect>>(
  'Select',
  SelectImpl
)

type SelectStatics = {
  Trigger: typeof TamaguiSelect.Trigger
  Value: typeof TamaguiSelect.Value
  Content: typeof TamaguiSelect.Content
  Item: typeof TamaguiSelect.Item
  ItemText: typeof TamaguiSelect.ItemText
  ItemIndicator: typeof TamaguiSelect.ItemIndicator
  Group: typeof TamaguiSelect.Group
  Viewport: typeof TamaguiSelect.Viewport
  ScrollUpButton: typeof TamaguiSelect.ScrollUpButton
  ScrollDownButton: typeof TamaguiSelect.ScrollDownButton
  TriggerFrame: typeof SelectTrigger
  IconFrame: typeof SelectIcon
}

export const Select = Object.assign(SelectWithLogging, {
  Trigger: TamaguiSelect.Trigger,
  Value: TamaguiSelect.Value,
  Content: TamaguiSelect.Content,
  Item: TamaguiSelect.Item,
  ItemText: TamaguiSelect.ItemText,
  ItemIndicator: TamaguiSelect.ItemIndicator,
  Group: TamaguiSelect.Group,
  Viewport: TamaguiSelect.Viewport,
  ScrollUpButton: TamaguiSelect.ScrollUpButton,
  ScrollDownButton: TamaguiSelect.ScrollDownButton,
  TriggerFrame: SelectTrigger,
  IconFrame: SelectIcon,
})