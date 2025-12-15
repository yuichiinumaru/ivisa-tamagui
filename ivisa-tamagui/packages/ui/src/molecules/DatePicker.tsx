import { Calendar as CalendarIcon } from '@tamagui/lucide-icons'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import React from 'react'
import { Adapt, PopoverProps, styled, XStack, YStack } from 'tamagui'

import { Button, ButtonProps } from '../atoms/Button'
import { Sheet } from './Sheet'
import { Input, InputProps } from '../atoms/Input'
import { Skeleton } from '../atoms/Skeleton'
import { Calendar } from './Calendar'
import { Popover, PopoverContent, PopoverTrigger } from './Popover'

const DatePickerFrame = styled(XStack, {
  name: 'DatePickerFrame',
  alignItems: 'center',
  borderRadius: '$md',
  overflow: 'hidden',
  width: '100%',
  borderWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
  focusWithinStyle: {
    borderColor: '$ring',
    outlineColor: '$ring',
    outlineStyle: 'solid',
    outlineWidth: 2,
  },

  variants: {
    variant: {
      filled: {
        backgroundColor: '$muted',
      },
    },
    state: {
      error: {
        borderColor: '$red10',
      },
      success: {
        borderColor: '$green10',
      },
      default: {
        borderColor: '$borderColor',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  } as const,
})

type DatePickerState = 'default' | 'error' | 'success'

export interface DatePickerProps extends Omit<PopoverProps, 'children'> {
  /**
   * The selected date.
   */
  date?: Date
  /**
   * Callback function when a date is selected.
   */
  onDateChange?: (date?: Date) => void
  /**
   * The visual style of the input.
   * @default 'default'
   */
  variant?: 'default' | 'filled'
  /**
   * The size of the input.
   * @default 'default'
   */
  size?: 'sm' | 'default' | 'lg'
  /**
   * If true, the input will be in a loading state.
   * @default false
   */
  loading?: boolean
  /**
   * The validation state of the input.
   * @default undefined
   */
  state?: DatePickerState
  /**
   * If true, the input will be disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * The placeholder text for the input.
   */
  placeholder?: string
  /**
   * Props for the input component.
   */
  inputProps?: InputProps
  /**
   * Props for the button component.
   */
  buttonProps?: ButtonProps
}

export const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      date,
      onDateChange,
      variant = 'default',
      size = 'default',
      loading = false,
      state = 'default',
      disabled = false,
      placeholder = 'Selecione uma data',
      inputProps,
      buttonProps,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false)

    const handleDateSelect = (selectedDate?: Date) => {
      onDateChange?.(selectedDate)
      setOpen(false) // Close popover on date selection
    }

    if (loading) {
      return <Skeleton height={40} borderRadius="$md" />
    }

    const trigger = (
      <DatePickerFrame variant={variant} state={state} disabled={disabled}>
        <Input.Box
          flex={1}
          borderWidth={0}
          backgroundColor="transparent"
          focusStyle={{
            borderWidth: 0,
            outlineWidth: 0,
          }}
        >
          <Input.Field
            size={size}
            value={date ? format(date, 'PPP', { locale: ptBR }) : ''}
            placeholder={placeholder}
            disabled={disabled}
            readOnly
            {...inputProps}
          />
        </Input.Box>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            icon={CalendarIcon}
            variant="ghost"
            size={size}
            disabled={disabled}
            {...buttonProps}
          />
        </PopoverTrigger>
      </DatePickerFrame>
    )

    return (
      <Popover open={open} onOpenChange={setOpen} {...props}>
        {trigger}

        <Adapt when="sm" platform="touch">
          <Sheet modal dismissOnSnapToBottom>
            <Sheet.Frame padding="$4">
              <Adapt.Contents />
            </Sheet.Frame>
            <Sheet.Overlay />
          </Sheet>
        </Adapt>

        <PopoverContent p={0}>
          <Calendar selectedDate={date} onDateChange={handleDateSelect} />
        </PopoverContent>
      </Popover>
    )
  },
)

DatePicker.displayName = 'DatePicker'
