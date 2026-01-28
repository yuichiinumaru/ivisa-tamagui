// Removed @ts-nocheck — enabling type checking
import React from 'react'
import { Calendar as TamaguiCalendar } from '../../molecules/Calendar'
import { Card } from '../../molecules/Card'
import { YStack, H4, Separator } from 'tamagui'

// This is a Booking Calendar wrapper around the atom/molecule Calendar
// It could add time slots, multiple months, etc.
// For now, it wraps the molecule with booking-specific context or layout.

export const Calendar = () => {
  return (
    <Card padded>
        <YStack space="$4">
            <H4>Select Date</H4>
            <Separator />
            <TamaguiCalendar
                mode="single"
                selected={new Date()}
                className="rounded-md border"
            />
        </YStack>
    </Card>
  )
}

// Removed trailing React.ComponentProps alias export to avoid duplicate-type declarations
