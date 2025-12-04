/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { View, Text, styled, Button, XStack, YStack, Separator } from 'tamagui'
import { Sheet } from '../Sheet'
import { Check, Circle } from '@tamagui/lucide-icons'

// Context to manage open state
const DropdownMenuContext = React.createContext<{
  open: boolean
  setOpen: (o: boolean) => void
}>({ open: false, setOpen: () => {} })

export const DropdownMenu = ({ children, open: controlledOpen, onOpenChange }: any) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = onOpenChange ?? setUncontrolledOpen

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      {children}
    </DropdownMenuContext.Provider>
  )
}

export const DropdownMenuTrigger = ({ children, asChild, ...props }: any) => {
  const { setOpen, open } = React.useContext(DropdownMenuContext)

  if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as any, {
          onPress: (e: any) => {
              // @ts-expect-error - assuming onPress exists
              children.props.onPress?.(e)
              setOpen(!open)
          }
      })
  }

  return (
      <Button onPress={() => setOpen(!open)} chromeless {...props}>
        {children}
      </Button>
  )
}

// Group, Portal, Sub, RadioGroup - mostly structural or no-ops on native simplified version
export const DropdownMenuGroup = YStack
export const DropdownMenuPortal = ({ children }: any) => <>{children}</>
export const DropdownMenuSub = ({ children }: any) => <>{children}</> // Nested sheets are hard, simplifying
export const DropdownMenuRadioGroup = YStack

export const DropdownMenuContent = ({ children }: any) => {
  const { open, setOpen } = React.useContext(DropdownMenuContext)
  return (
      <Sheet open={open} onOpenChange={setOpen} modal snapPoints={[50]} dismissOnSnapToBottom>
         <Sheet.Overlay />
         <Sheet.Frame>
            <Sheet.Handle />
             <YStack padding="$4" gap="$2">
                {children}
             </YStack>
         </Sheet.Frame>
      </Sheet>
  )
}

export const DropdownMenuItem = ({ children, onSelect, ...props }: any) => {
    const { setOpen } = React.useContext(DropdownMenuContext)
    return (
        <Button
            onPress={(e) => {
                onSelect?.(e)
                setOpen(false)
            }}
            justifyContent="flex-start"
            chromeless
            backgroundColor="transparent"
            {...props}
        >
            <Text>{children}</Text>
        </Button>
    )
}

export const DropdownMenuLabel = styled(Text, {
  paddingHorizontal: '$2',
  paddingVertical: '$1.5',
  fontSize: '$3',
  fontWeight: '600',
  color: '$foreground',
})

export const DropdownMenuSeparator = styled(Separator, {
  marginVertical: '$1',
})

export const DropdownMenuShortcut = styled(Text, {
  marginLeft: 'auto',
  fontSize: '$2',
  color: '$mutedForeground',
})

// Sub components placeholders
export const DropdownMenuSubTrigger = DropdownMenuItem
export const DropdownMenuSubContent = ({ children }: any) => <>{children}</>

export const DropdownMenuCheckboxItem = ({ children, checked, onSelect, ...props }: any) => {
    const { setOpen } = React.useContext(DropdownMenuContext)
    return (
        <Button
            onPress={(e) => {
                onSelect?.(e)
                setOpen(false)
            }}
            justifyContent="flex-start"
            chromeless
             backgroundColor="transparent"
            {...props}
        >
             <XStack alignItems="center" gap="$2">
                <View width={20}>
                    {checked && <Check size={16} />}
                </View>
                <Text>{children}</Text>
             </XStack>
        </Button>
    )
}

export const DropdownMenuRadioItem = ({ children, ...props }: any) => {
     const { setOpen } = React.useContext(DropdownMenuContext)
    return (
         <Button
            onPress={() => setOpen(false)}
            justifyContent="flex-start"
            chromeless
             backgroundColor="transparent"
            {...props}
        >
             <XStack alignItems="center" gap="$2">
                <View width={20}>
                    <Circle size={8} fill="currentColor" />
                </View>
                <Text>{children}</Text>
             </XStack>
        </Button>
    )
}
