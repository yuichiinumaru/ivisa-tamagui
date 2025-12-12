import React from 'react'
import { styled, YStack, XStack, Text, ScrollView } from 'tamagui'
import { Calendar } from '../Calendar'
import { Button } from '../../atoms/Button'
import { Sheet } from '../../molecules/Sheet'
import { ChevronLeft, ChevronRight, Plus } from '@tamagui/lucide-icons'
import { format, addDays, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay } from 'date-fns'
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

  const weekStart = startOfWeek(currentDate, { locale: ptBR })
  const weekEnd = endOfWeek(currentDate, { locale: ptBR })
  const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd })

  const handlePrev = () => setCurrentDate(addDays(currentDate, -7))
  const handleNext = () => setCurrentDate(addDays(currentDate, 7))

  return (
    <YStack flex={1} border='1px solid' borderColor='$borderColor' borderRadius='$4' overflow='hidden'>
      <SchedulerHeader>
        <XStack gap="$2" alignItems="center">
          <Button icon={ChevronLeft} onPress={handlePrev} size="small" circular />
          <Text fontWeight="bold" fontSize="$5" textTransform='capitalize'>
            {format(currentDate, 'MMMM yyyy', { locale: ptBR })}
          </Text>
          <Button icon={ChevronRight} onPress={handleNext} size="small" circular />
        </XStack>
        <XStack gap="$2">
            <Button onPress={() => onAddEvent?.(currentDate)} icon={Plus}>Novo Evento</Button>
             {/* View Toggle could go here */}
        </XStack>
      </SchedulerHeader>

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
                        {/* Filter events for this day */}
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
    </YStack>
  )
}
