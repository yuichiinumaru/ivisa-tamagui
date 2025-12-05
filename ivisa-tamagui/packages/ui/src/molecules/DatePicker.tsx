import React, { useState } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '../molecules/Popover'
import { Calendar } from '../molecules/Calendar'
import { Button } from '../atoms/Button'
import { format } from 'date-fns'
import { Adapt, Text } from 'tamagui'
import { Sheet } from '../molecules/Sheet'
import { Calendar as CalendarIcon } from '@tamagui/lucide-icons'

export interface DatePickerProps {
  date?: Date
  onDateChange?: (date: Date) => void
  placeholder?: string
}

export const DatePicker = ({
  date,
  onDateChange,
  placeholder = "Pick a date",
}: DatePickerProps) => {
  const [open, setOpen] = useState(false)

  const handleSelect = (newDate: Date) => {
    onDateChange?.(newDate)
    setOpen(false)
  }

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
             <Text color={date ? '$foreground' : '$mutedForeground'}>
                {date ? format(date, "PPP") : placeholder}
             </Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent padding={0} width="auto">
        <Calendar
          selectedDate={date}
          onDateChange={handleSelect}
        />
      </PopoverContent>
    </Popover>
  )
}
