import React, { useMemo } from 'react'
import { Adapt, Sheet } from 'tamagui'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectViewport } from '../Select'

export interface MonthsPickerProps {
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
}

export const MonthsPicker = ({ value, onValueChange, placeholder = "Select Month" }: MonthsPickerProps) => {
  const months = useMemo(() => [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ], [])

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger width={200}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <Adapt when="sm" platform="touch">
        <Sheet modal dismissOnSnapToBottom>
            <Sheet.Frame>
                <Sheet.ScrollView>
                    <Adapt.Contents />
                </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <SelectContent>
        <SelectViewport>
          {months.map((month, index) => (
            <SelectItem index={index} key={month} value={month}>
              {month}
            </SelectItem>
          ))}
        </SelectViewport>
      </SelectContent>
    </Select>
  )
}
