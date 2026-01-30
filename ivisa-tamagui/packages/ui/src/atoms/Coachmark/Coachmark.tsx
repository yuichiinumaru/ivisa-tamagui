// @ts-nocheck
import React, { useState } from 'react'
import { Button } from '../../atoms/Button'
import { Popover, PopoverContent, PopoverTrigger } from '../../molecules/Popover'
import { Text, YStack, XStack } from 'tamagui'

export interface CoachmarkProps {
  children: React.ReactNode
  title: string
  description: string
  onClose: () => void
  defaultOpen?: boolean
}

export const Coachmark = ({
  children,
  title,
  description,
  onClose,
  defaultOpen = true,
}: CoachmarkProps) => {
  const [open, setOpen] = useState(defaultOpen)

  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  return (
    <Popover open={open} onOpenChange={setOpen} placement="bottom">
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent
        borderWidth={1}
        borderColor="$blue8"
        padding="$4"
        width={300}
        elevate
        backgroundColor="$blue2"
      >
        <YStack gap="$2">
          <XStack justifyContent="space-between" alignItems="center">
            <Text fontWeight="bold" fontSize="$4" color="$blue11">
              {title}
            </Text>
          </XStack>
          <Text color="$color11" fontSize="$3">
            {description}
          </Text>
          <XStack justifyContent="flex-end" marginTop="$2">
            <Button size="sm" onPress={handleClose}>
              Entendi
            </Button>
          </XStack>
        </YStack>
      </PopoverContent>
    </Popover>
  )
}
