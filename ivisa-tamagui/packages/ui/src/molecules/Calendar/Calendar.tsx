import React, { useState } from 'react'
import { useDatePicker } from '@rehookify/datepicker'
import { YStack, XStack, Text, styled } from 'tamagui'
import { Button } from '../../atoms/Button'
import { ChevronLeft, ChevronRight } from '@tamagui/lucide-icons'
import { Skeleton } from '../../atoms/Skeleton'

// Locales for PT-BR
const MONTHS_PT_BR = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];
const WEEK_DAYS_PT_BR = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

// Styled components using Tamagui's `styled` factory and tokens
const CalendarContainer = styled(YStack, {
  name: 'Calendar',
  padding: '$4',
  borderRadius: '$6',
  borderWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
  gap: '$4',

  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
    hasError: {
      true: {
        borderColor: '$red10',
        borderWidth: 2,
      }
    }
  } as const,
})

const CalendarHeader = styled(XStack, {
  justifyContent: 'space-between',
  alignItems: 'center',
})

const CalendarTitle = styled(Text, {
  fontSize: '$5',
  fontWeight: '600',
  textAlign: 'center',
  flex: 1,
})

const CalendarGrid = styled(YStack, {
  gap: '$2',
})

const WeekDaysGrid = styled(XStack, {
  gap: '$2',
})

const WeekDayText = styled(Text, {
  flex: 1,
  textAlign: 'center',
  color: '$mutedForeground',
  fontSize: '$2',
  fontWeight: '600',
})

const DaysGrid = styled(XStack, {
  flexWrap: 'wrap',
  gap: '$2',
})

const DayButtonFrame = styled(Button, {
  width: 40,
  height: 40,
  padding: 0,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderRadius: '$4',
  borderWidth: 1,
  borderColor: 'transparent',
  tag: 'button',

  variants: {
    selected: {
      true: {
        backgroundColor: '$primary',
        borderColor: '$primary',
        '&:hover': {
          backgroundColor: '$primary',
          opacity: 0.9,
        },
      },
    },
    today: {
      true: {
        borderColor: '$primary',
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

  defaultVariants: {
    variant: 'ghost',
  },
})

const DayText = styled(Text, {
  fontSize: '$4',
  color: '$foreground',
  variants: {
    selected: {
      true: {
        color: '$primaryForeground',
      },
    },
  } as const,
})

const SkeletonGrid = () => (
  <YStack gap="$2" data-testid="calendar-skeleton">
    <XStack gap="$2" justifyContent="space-around">
      {Array.from({ length: 7 }).map((_, i) => (
        <Skeleton key={i} width={40} height={20} borderRadius="$2" />
      ))}
    </XStack>
    <XStack flexWrap="wrap" gap="$2" justifyContent="space-around">
      {Array.from({ length: 35 }).map((_, i) => (
        <Skeleton key={i} width={40} height={40} borderRadius="$4" />
      ))}
    </XStack>
  </YStack>
)


export interface CalendarProps {
  selectedDate?: Date
  onDateChange?: (date: Date) => void
  minDate?: Date
  maxDate?: Date
  isLoading?: boolean
  isDisabled?: boolean
  hasError?: boolean
}

export const Calendar = ({
  selectedDate,
  onDateChange,
  minDate,
  maxDate,
  isLoading = false,
  isDisabled = false,
  hasError = false,
}: CalendarProps) => {
  const [selectedDates, onDatesChange] = useState<Date[]>(selectedDate ? [selectedDate] : [])

  const dp = useDatePicker({
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
    },
    locale: {
      month: MONTHS_PT_BR,
      weekdays: WEEK_DAYS_PT_BR,
    }
  })

  // Ensure data exists before accessing
  const calendars = dp.data?.calendars ?? []
  const currentMonth = calendars[0]

  // Guard clause to prevent crash if data is not ready and not loading
  if (!currentMonth && !isLoading) {
    return null
  }

  const { onClick: onPrevClick } = dp.propGetters.subtractOffset({ months: 1 })
  const { onClick: onNextClick } = dp.propGetters.addOffset({ months: 1 })

  return (
    <CalendarContainer disabled={isDisabled} hasError={hasError} data-testid="calendar-container">
      <CalendarHeader>
        <Button icon={ChevronLeft} circular variant="ghost" onPress={onPrevClick} disabled={isLoading} />
        <CalendarTitle>
          {isLoading ? <Skeleton width={120} height={24} /> : (currentMonth ? `${currentMonth.month} ${currentMonth.year}` : '')}
        </CalendarTitle>
        <Button icon={ChevronRight} circular variant="ghost" onPress={onNextClick} disabled={isLoading} />
      </CalendarHeader>

      {isLoading ? <SkeletonGrid /> : (
        currentMonth ? (
          <CalendarGrid data-testid="calendar-grid">
            <WeekDaysGrid>
              {WEEK_DAYS_PT_BR.map((day) => (
                <WeekDayText key={day}>{day.substring(0, 3)}</WeekDayText>
              ))}
            </WeekDaysGrid>
            <DaysGrid>
              {(currentMonth?.days || []).map((day, index) => {
                const { onClick: onDayClick, ...dayProps } = dp.propGetters.dayButton(day)
                return (
                  <DayButtonFrame
                    key={index}
                    selected={day.selected}
                    today={day.now}
                    outside={!day.inCurrentMonth}
                    disabled={day.disabled}
                    onPress={onDayClick}
                    {...dayProps}
                  >
                    <DayText selected={day.selected}>{day.day}</DayText>
                  </DayButtonFrame>
                )
              })}
            </DaysGrid>
          </CalendarGrid>
        ) : null
      )}
    </CalendarContainer>
  )
}
