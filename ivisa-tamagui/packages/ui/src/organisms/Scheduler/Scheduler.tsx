// @ts-nocheck
import React from 'react'
import { styled, YStack, XStack, Text, ScrollView } from 'tamagui'
import { Button } from '../../atoms/Button'
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, List } from '@tamagui/lucide-icons'
import { format, addDays, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay, startOfMonth, endOfMonth, addMonths, isSameMonth } from 'date-fns'
import { ptBR } from 'date-fns/locale'

// --- Types ---
export type SchedulerEvent = {
  id: string
  title: string
  start: Date
  end: Date
  color?: string
}

export type SchedulerProps = {
  events?: SchedulerEvent[]
  onEventClick?: (event: SchedulerEvent) => void
  onAddEvent?: (date: Date) => void
  isLoading?: boolean
}

// --- Components ---
const SchedulerHeader = styled(XStack, {
  name: 'SchedulerHeader',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '$4',
  borderBottomWidth: 1,
  borderColor: '$borderColor',
})

const WeekViewContainer = styled(XStack, {
  flex: 1,
  width: '100%',
  overflow: 'hidden',
})

const MonthViewContainer = styled(YStack, {
  flex: 1,
  width: '100%',
  padding: '$2',
})

const MonthGrid = styled(XStack, {
    flexWrap: 'wrap',
    flex: 1,
})

const MonthDayCell = styled(YStack, {
    width: '14.28%', // 7 days
    height: 100,
    borderWidth: 0.5,
    borderColor: '$borderColor',
    padding: '$1',
    cursor: 'pointer',
    hoverStyle: {
        backgroundColor: '$backgroundHover'
    }
})

const TimeColumn = styled(YStack, {
  width: 60,
  borderRightWidth: 1,
  borderColor: '$borderColor',
  paddingVertical: '$2',
})

const DayColumn = styled(YStack, {
  flex: 1,
  borderRightWidth: 1,
  borderColor: '$borderColor',
  minWidth: 100,
})

const EventCard = styled(YStack, {
  backgroundColor: '$blue4',
  borderRadius: '$2',
  padding: '$1',
  cursor: 'pointer',
  marginBottom: '$1',
  hoverStyle: {
    backgroundColor: '$blue5',
  },
})

// --- Organism ---
export const Scheduler = ({
  events = [],
  onEventClick,
  onAddEvent,
  isLoading = false,
}: SchedulerProps) => {
  const [currentDate, setCurrentDate] = React.useState(new Date())
  const [view, setView] = React.useState<'month' | 'week'>('week')

  // Navigation Logic
  const handlePrev = () => {
      if (view === 'week') setCurrentDate(addDays(currentDate, -7))
      else setCurrentDate(addMonths(currentDate, -1))
  }

  const handleNext = () => {
      if (view === 'week') setCurrentDate(addDays(currentDate, 7))
      else setCurrentDate(addMonths(currentDate, 1))
  }

  const toggleView = () => setView(v => v === 'week' ? 'month' : 'week')

  // Week View Data
  const weekStart = startOfWeek(currentDate, { locale: ptBR })
  const weekEnd = endOfWeek(currentDate, { locale: ptBR })
  const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd })

  // Month View Data
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const monthStartWeek = startOfWeek(monthStart, { locale: ptBR })
  const monthEndWeek = endOfWeek(monthEnd, { locale: ptBR })
  const monthDays = eachDayOfInterval({ start: monthStartWeek, end: monthEndWeek })

  return (
    <YStack flex={1} border='1px solid' borderColor='$borderColor' borderRadius='$4' overflow='hidden' height={600}>
      <SchedulerHeader>
        <XStack gap="$2" alignItems="center">
          <Button icon={ChevronLeft} onPress={handlePrev} size="small" circular />
          <Text fontWeight="bold" fontSize="$5" textTransform='capitalize'>
            {format(currentDate, 'MMMM yyyy', { locale: ptBR })}
          </Text>
          <Button icon={ChevronRight} onPress={handleNext} size="small" circular />
        </XStack>
        <XStack gap="$2">
            <Button onPress={toggleView} icon={view === 'week' ? CalendarIcon : List}>
                {view === 'week' ? 'Mês' : 'Semana'}
            </Button>
            <Button onPress={() => onAddEvent?.(currentDate)} icon={Plus} variant="primary">
                Novo
            </Button>
        </XStack>
      </SchedulerHeader>

      {view === 'week' ? (
        <ScrollView horizontal>
            <WeekViewContainer>
                <TimeColumn>
                    {/* Simple time slots for demo */}
                    {Array.from({ length: 9 }).map((_, i) => (
                        <Text key={i} fontSize="$1" color="$mutedForeground" textAlign="center" height={60}>
                            {9 + i}:00
                        </Text>
                    ))}
                </TimeColumn>
                {weekDays.map((day) => (
                    <DayColumn key={day.toISOString()}>
                        <YStack alignItems='center' padding='$2' borderBottomWidth={1} borderColor='$borderColor'>
                            <Text fontWeight={isSameDay(day, new Date()) ? 'bold' : 'normal'}>
                                {format(day, 'EEE', { locale: ptBR })}
                            </Text>
                            <Text fontSize='$6' fontWeight={isSameDay(day, new Date()) ? 'bold' : 'normal'} color={isSameDay(day, new Date()) ? '$blue10' : '$color'}>
                                {format(day, 'd')}
                            </Text>
                        </YStack>
                        <YStack flex={1} padding='$1' space='$1'>
                            {events.filter(e => isSameDay(e.start, day)).map(event => (
                                <EventCard key={event.id} onPress={() => onEventClick?.(event)}>
                                    <Text fontSize='$2' numberOfLines={1}>{event.title}</Text>
                                    <Text fontSize='$1' color='$gray10'>{format(event.start, 'HH:mm')}</Text>
                                </EventCard>
                            ))}
                        </YStack>
                    </DayColumn>
                ))}
            </WeekViewContainer>
        </ScrollView>
      ) : (
          <ScrollView>
              <MonthViewContainer>
                {/* Weekday Headers */}
                <XStack borderBottomWidth={1} borderColor="$borderColor" paddingBottom="$2">
                    {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(d => (
                        <Text key={d} width="14.28%" textAlign="center" fontWeight="bold">{d}</Text>
                    ))}
                </XStack>
                <MonthGrid>
                    {monthDays.map(day => (
                        <MonthDayCell key={day.toISOString()} opacity={isSameMonth(day, currentDate) ? 1 : 0.5}>
                            <Text textAlign="right" fontSize="$2" fontWeight={isSameDay(day, new Date()) ? 'bold' : 'normal'}>
                                {format(day, 'd')}
                            </Text>
                            <YStack space="$1" marginTop="$1">
                                {events.filter(e => isSameDay(e.start, day)).slice(0, 3).map(event => (
                                    <EventCard key={event.id} onPress={() => onEventClick?.(event)} padding="$1" height="auto">
                                        <Text fontSize={10} numberOfLines={1}>{event.title}</Text>
                                    </EventCard>
                                ))}
                            </YStack>
                        </MonthDayCell>
                    ))}
                </MonthGrid>
              </MonthViewContainer>
          </ScrollView>
      )}
    </YStack>
  )
}

