import React, { useState } from 'react'
import { useDatePicker } from '@rehookify/datepicker'
import { YStack, XStack, Text, styled } from 'tamagui'
import { Button } from '../../atoms/Button'

const CalendarContainer = styled(YStack, {
  width: 320,
  padding: '$4',
  borderRadius: '$md',
  borderWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
})

const WeekDaysGrid = styled(XStack, {
  justifyContent: 'space-between',
  marginBottom: '$2',
})

const DaysGrid = styled(XStack, {
  flexWrap: 'wrap',
})

const DayCell = styled(Button, {
  width: 40,
  height: 40,
  padding: 0,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderRadius: '$md',
  borderWidth: 0,

  variants: {
    selected: {
      true: {
        backgroundColor: '$primary',
        color: '$primaryForeground',
        hoverStyle: {
          backgroundColor: '$primaryHover',
        },
      },
    },
    today: {
      true: {
        backgroundColor: '$muted',
        color: '$foreground',
      },
    },
    outside: {
      true: {
        opacity: 0.5,
      },
    },
    disabled: {
      true: {
        opacity: 0.3,
        pointerEvents: 'none',
      },
    },
  } as const,
})

const DayText = styled(Text, {
  fontSize: '$3',
  variants: {
    selected: {
      true: {
        color: '$background',
      },
    },
  } as const,
})

const HeaderText = styled(Text, {
  fontSize: '$4',
  fontWeight: '600',
})

export interface CalendarProps {
  selectedDate?: Date
  onDateChange?: (date: Date) => void
  minDate?: Date
  maxDate?: Date
}

export const Calendar = ({
  selectedDate = new Date(),
  onDateChange,
  minDate,
  maxDate,
}: CalendarProps) => {
  // @rehookify/datepicker uses an array for selectedDates
  const [selectedDates, onDatesChange] = useState<Date[]>(selectedDate ? [selectedDate] : [])

  const {
    data: { calendars, weekDays },
    propGetters: { dayButton, subtractOffset, addOffset },
  } = useDatePicker({
    selectedDates,
    onDatesChange: (dates) => {
      onDatesChange(dates)
      if (dates[0] && onDateChange) {
        onDateChange(dates[0])
      }
    },
    calendar: {
      startDay: 0, // Sunday
    },
    dates: {
      minDate,
      maxDate,
    }
  })

  // We usually only display one month at a time
  const currentMonth = calendars[0]
  // const currentMonthData = months[0]

  if (!currentMonth) return null

  // Use subtractOffset/addOffset for navigation props
  const prevBtn = subtractOffset({ months: 1 })
  const nextBtn = addOffset({ months: 1 })

  return (
    <CalendarContainer>
      {/* Header: Month Year + Nav */}
      <XStack justifyContent="space-between" alignItems="center" marginBottom="$4">
        <Button
          circular
          size="sm"
          variant="ghost"
          // @ts-expect-error - rehookify props mismatch with tamagui
          onPress={prevBtn.onClick}
        >
          {'<'}
        </Button>
        
        <HeaderText>
          {currentMonth.month} {currentMonth.year}
        </HeaderText>

        <Button
          circular
          size="sm"
          variant="ghost"
          // @ts-expect-error - rehookify props mismatch with tamagui
          onPress={nextBtn.onClick}
        >
          {'>'}
        </Button>
      </XStack>

      {/* Week Days Header */}
      <WeekDaysGrid>
        {weekDays.map((day) => (
          <Text key={day} width={40} textAlign="center" color="$mutedForeground" fontSize="$2">
            {day.substring(0, 2)}
          </Text>
        ))}
      </WeekDaysGrid>

      {/* Days Grid */}
      <DaysGrid>
        {currentMonth.days.map((day, index) => {
            // rehookify provides props, but we need to adapt them to Tamagui
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { onClick, ...dayProps } = dayButton(day)
            
            return (
              <DayCell
                key={index}
                selected={day.selected}
                today={day.now}
                outside={!day.inCurrentMonth}
                disabled={day.disabled}
                onPress={(e) => {
                  // @ts-expect-error - rehookify props mismatch with tamagui
                  onClick?.(e) 
                }}
              >
                <DayText selected={day.selected}>{day.day}</DayText>
              </DayCell>
            )
        })}
      </DaysGrid>
    </CalendarContainer>
  )
}
