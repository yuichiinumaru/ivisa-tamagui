import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from './Calendar'
import { DatePicker } from '../DatePicker'
import { YStack, Text } from 'tamagui'

const meta: Meta = {
  title: 'Molecules/Date',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: Calendar,
}

export default meta

type Story = StoryObj<typeof meta>

export const CalendarDemo: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <YStack borderWidth={1} borderColor="$borderColor" borderRadius="$md" padding="$4">
        <Calendar selectedDate={date} onDateChange={setDate} />
        <YStack marginTop="$4">
          <Text>Selected: {date?.toDateString()}</Text>
        </YStack>
      </YStack>
    )
  },
}

export const DatePickerDemo: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>()
    return <DatePicker date={date} onDateChange={setDate} />
  },
}

export const WithMinMax: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const minDate = new Date()
    const maxDate = new Date()
    maxDate.setDate(maxDate.getDate() + 10)
    return (
      <YStack borderWidth={1} borderColor="$borderColor" borderRadius="$md" padding="$4">
        <Calendar selectedDate={date} onDateChange={setDate} minDate={minDate} maxDate={maxDate} />
        <YStack marginTop="$4">
          <Text>Selected: {date?.toDateString()}</Text>
          <Text>Min Date: {minDate.toDateString()}</Text>
          <Text>Max Date: {maxDate.toDateString()}</Text>
        </YStack>
      </YStack>
    )
  },
}
