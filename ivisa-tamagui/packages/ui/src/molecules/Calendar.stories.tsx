import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from './Calendar'
import { DatePicker } from './DatePicker'
import { useState } from 'react'
import { YStack } from 'tamagui'

const meta: Meta = {
  title: 'Molecules/Date',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const CalendarDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <YStack borderWidth={1} borderColor="$borderColor" borderRadius="$md" padding="$4">
        <Calendar
            selectedDate={date}
            onDateChange={setDate}
        />
        <YStack marginTop="$4">
            <p>Selected: {date?.toDateString()}</p>
        </YStack>
    </YStack>
  )
}

export const DatePickerDemo = () => {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <DatePicker
      date={date}
      onDateChange={setDate}
    />
  )
}
