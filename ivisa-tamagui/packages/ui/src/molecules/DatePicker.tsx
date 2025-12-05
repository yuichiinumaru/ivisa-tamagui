import React, { useState } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '../molecules/Popover'
import { Calendar } from '../molecules/Calendar'
import { Button } from '../atoms/Button'
import { format, isValid } from 'date-fns'
import { Adapt, Text } from 'tamagui'
import { Sheet } from '../molecules/Sheet'
import { Calendar as CalendarIcon } from '@tamagui/lucide-icons'

export interface DatePickerProps {
  date?: Date | null
  onDateChange?: (date: Date | undefined) => void
  placeholder?: string
}

export const DatePicker = ({
  date,
  onDateChange,
  placeholder = "Pick a date",
}: DatePickerProps) => {
  const [open, setOpen] = useState(false)

  const handleSelect = (newDate: Date | undefined) => {
    // 🛡️ Guard: Ensure valid date before propagating
    if (newDate && !isValid(newDate)) {
      console.warn('DatePicker: Attempted to select invalid date', newDate)
      return
    }
    onDateChange?.(newDate)
    setOpen(false)
  }

  // 🛡️ Guard: Ensure display date is valid to prevent crash
  const displayDate = date && isValid(date) ? format(date, "PPP") : placeholder
  const isDateSelected = !!(date && isValid(date))

  return (
    <Popover open={open} onOpenChange={setOpen} placement="bottom-start">
      <Adapt when="sm" platform="touch">
        <Sheet animation="medium" modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" gap="$4">
             <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>

      <PopoverTrigger asChild>
        <Button
          variant="outline"
          justifyContent="flex-start"
          textAlign="left"
          width={240}
          paddingLeft="$3"
          icon={<CalendarIcon size={16} />}
        >
             <Text color={isDateSelected ? '$foreground' : '$mutedForeground'}>
                {displayDate}
             </Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent padding={0} width="auto">
        <Calendar
          selectedDate={date || undefined}
          onDateChange={handleSelect}
        />
      </PopoverContent>
    </Popover>
  )
}
