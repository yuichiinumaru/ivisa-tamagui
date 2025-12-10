import React, { useMemo } from 'react'
import { Button, isWeb, Select as TamaguiSelect, Sheet, styled, View, Adapt, SelectProps as TamaguiSelectProps } from 'tamagui'
import { Check, ChevronDown } from '@tamagui/lucide-icons'
import { withErrorLogging } from '../../utils/withErrorLogging'

// Constants
const SELECT_CONTENT_Z_INDEX = 200000

// Styled components
const SelectTriggerFrame = styled(Button, {
  name: 'SelectTrigger',
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
  color: '$foreground',
  paddingHorizontal: '$3',
  height: '$10',
  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },
  focusStyle: {
    borderColor: '$ring',
    borderWidth: 2,
  },
})

const SelectIconFrame = styled(View, {
  name: 'SelectIcon',
  marginLeft: '$2',
})

// Use Lucide Icons for better visual quality
const ChevronDownIcon = () => <ChevronDown size={12} color="$mutedForeground" />
const CheckIcon = () => <Check size={16} color="$primary" />

export interface SelectProps extends Omit<TamaguiSelectProps, 'children'> {
  items?: { value: string; label: string }[]
  placeholder?: string
  label?: string
  children?: React.ReactNode
}

/**
 * Select Component
 *
 * A form select component based on Tamagui Select (which wraps Radix UI Select on web).
 *
 * Improvements:
 * - Removed magic numbers (extracted zIndex to constant)
 * - Improved icons (Lucide vs Text)
 * - Strict Types
 * - Cleaned up lint warnings
 */
const SelectImpl = React.forwardRef<React.ElementRef<typeof TamaguiSelect>, SelectProps>(
  (
    {
      items,
      placeholder,
      children,
      disablePreventBodyScroll = true,
      ...props
    },

    _ref
  ) => {
    const hasCustomChildren = React.Children.count(children) > 0

    const content = useMemo(() => {
      if (hasCustomChildren) return children

      if (!items || items.length === 0) return null

      return (
        <>
          <TamaguiSelect.Trigger icon={ChevronDownIcon} asChild>
            <SelectTriggerFrame>
              <TamaguiSelect.Value placeholder={placeholder} />
            </SelectTriggerFrame>
          </TamaguiSelect.Trigger>

          <Adapt when="sm" platform="touch">
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

          <TamaguiSelect.Content zIndex={SELECT_CONTENT_Z_INDEX}>
            <TamaguiSelect.ScrollUpButton />
            <TamaguiSelect.Viewport minWidth={200}>
              <TamaguiSelect.Group>
                {props.label && (
                   <TamaguiSelect.Label>{props.label}</TamaguiSelect.Label>
                )}
                {items.map((item, index) => (
                  <TamaguiSelect.Item key={item.value} value={item.value} index={index}>
                    <TamaguiSelect.ItemText>{item.label}</TamaguiSelect.ItemText>
                    <TamaguiSelect.ItemIndicator marginLeft="auto">
                      <CheckIcon />
                    </TamaguiSelect.ItemIndicator>
                  </TamaguiSelect.Item>
                ))}
              </TamaguiSelect.Group>
            </TamaguiSelect.Viewport>
            <TamaguiSelect.ScrollDownButton />
          </TamaguiSelect.Content>
        </>
      )
    }, [items, placeholder, props.label, children, hasCustomChildren])

    return (
      <TamaguiSelect
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

export const Select = Object.assign(SelectWithLogging, {
  Trigger: TamaguiSelect.Trigger,
  Value: TamaguiSelect.Value,
  Content: TamaguiSelect.Content,
  Item: TamaguiSelect.Item,
  ItemText: TamaguiSelect.ItemText,
  ItemIndicator: TamaguiSelect.ItemIndicator,
  Group: TamaguiSelect.Group,
  Viewport: TamaguiSelect.Viewport,
  Label: TamaguiSelect.Label,
  ScrollUpButton: TamaguiSelect.ScrollUpButton,
  ScrollDownButton: TamaguiSelect.ScrollDownButton,
  TriggerFrame: SelectTriggerFrame,
  IconFrame: SelectIconFrame,
})

export const SelectTrigger = TamaguiSelect.Trigger
export const SelectValue = TamaguiSelect.Value
export const SelectContent = TamaguiSelect.Content
export const SelectItem = TamaguiSelect.Item
export const SelectItemText = TamaguiSelect.ItemText
export const SelectItemIndicator = TamaguiSelect.ItemIndicator
export const SelectGroup = TamaguiSelect.Group
export const SelectViewport = TamaguiSelect.Viewport
export const SelectLabel = TamaguiSelect.Label
export const SelectScrollUpButton = TamaguiSelect.ScrollUpButton
export const SelectScrollDownButton = TamaguiSelect.ScrollDownButton
