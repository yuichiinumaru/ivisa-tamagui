import React, { useState } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '../molecules/Popover'
import { Calendar } from '../molecules/Calendar'
import { Button } from '../atoms/Button'
import { format } from 'date-fns'
import { XStack } from 'tamagui'

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
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          justifyContent="flex-start"
          textAlign="left"
          width={240}
          paddingLeft="$3"
        >
          {/* Ideally use an Icon here */}
          <XStack gap="$2" alignItems="center">
             <Text>📅</Text>
             <Text color={date ? '$foreground' : '$mutedForeground'}>
                {date ? format(date, "PPP") : placeholder}
             </Text>
          </XStack>
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

// Helper Text component since we removed imports to avoid conflicts
import { Text } from 'tamagui'
