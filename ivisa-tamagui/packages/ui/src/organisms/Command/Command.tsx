import React from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import { styled, View, Text, GetProps, TamaguiElement, useTheme, XStack } from 'tamagui'
import { Search } from '@tamagui/lucide-icons'
import { Dialog, DialogContent } from '../../molecules/Dialog'

// --- Styled Wrappers ---

// Command Root
const CommandFrame = styled(View, {
  name: 'Command',
  flexDirection: 'column',
  overflow: 'hidden',
  backgroundColor: '$background',
  borderRadius: '$md',
  width: '100%',
  height: '100%',
})

const Command = React.forwardRef<TamaguiElement, React.ComponentPropsWithoutRef<typeof CommandPrimitive> & GetProps<typeof CommandFrame>>(
  ({ className, ...props }, ref) => {
    return (
      <CommandFrame ref={ref} asChild>
        <CommandPrimitive className={className} {...props} />
      </CommandFrame>
    )
  }
)
Command.displayName = CommandPrimitive.displayName

// Command Dialog
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CommandDialogProps extends React.ComponentPropsWithoutRef<typeof Dialog> { }

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent padding={0} overflow="hidden" maxWidth={600}>
        <Command>
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

// Command Input
const CommandInputFrame = styled(XStack, {
  name: 'CommandInput',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderBottomColor: '$borderColor',
  paddingHorizontal: '$md',
})

const CommandInputIcon = () => (
  <View>
    <Search size={20} color="$mutedForeground" marginRight="$sm" />
  </View>
)

const CommandInput = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Input>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & GetProps<typeof CommandInputFrame>>(
  ({ ...props }, ref) => {
    const theme = useTheme()
    return (
      <CommandInputFrame>
        <CommandInputIcon />
        <CommandPrimitive.Input
          ref={ref}
          style={{
            flex: 1,
            height: 44,
            fontSize: 14,
            outline: 'none',
            border: 'none',
            background: 'transparent',
            color: theme.foreground?.val || '#000',
          }}
          {...props}
        />
      </CommandInputFrame>
    )
  }
)
CommandInput.displayName = CommandPrimitive.Input.displayName

// Command List
const CommandListFrame = styled(View, {
  maxHeight: 300,
  overflow: 'scroll',
})

const CommandList = React.forwardRef<TamaguiElement, React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> & GetProps<typeof CommandListFrame>>(
  ({ ...props }, ref) => (
    <CommandListFrame ref={ref} asChild>
      <CommandPrimitive.List {...props} />
    </CommandListFrame>
  )
)
CommandList.displayName = CommandPrimitive.List.displayName

// Command Empty
const CommandEmpty = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Empty>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>>(
  (props, ref) => (
    <CommandPrimitive.Empty
      ref={ref}
      style={{
        padding: 24,
        textAlign: 'center',
        fontSize: 14,
      }}
      {...props}
    />
  )
)
CommandEmpty.displayName = CommandPrimitive.Empty.displayName

// Command Group
const CommandGroupFrame = styled(View, {
  overflow: 'hidden',
  padding: '$1',
})

const CommandGroup = React.forwardRef<TamaguiElement, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> & GetProps<typeof CommandGroupFrame>>(
  ({ heading, ...props }, ref) => (
    <CommandGroupFrame ref={ref} asChild>
      <CommandPrimitive.Group heading={heading} {...props} />
    </CommandGroupFrame>
  )
)
CommandGroup.displayName = CommandPrimitive.Group.displayName

// Command Separator
const CommandSeparatorFrame = styled(View, {
  height: 1,
  backgroundColor: '$borderColor',
  marginHorizontal: '-$1',
})

const CommandSeparator = React.forwardRef<TamaguiElement, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> & GetProps<typeof CommandSeparatorFrame>>(
  ({ ...props }, ref) => (
    <CommandSeparatorFrame ref={ref} asChild>
      <CommandPrimitive.Separator {...props} />
    </CommandSeparatorFrame>
  )
)
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

// Command Item
const CommandItemFrame = styled(View, {
  flexDirection: 'row',
  alignItems: 'center',
  padding: '$2',
  borderRadius: '$sm',
  cursor: 'pointer',
  hoverStyle: {
    backgroundColor: '$muted',
  },
})

const CommandItem = React.forwardRef<TamaguiElement, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> & GetProps<typeof CommandItemFrame>>(
  ({ ...props }, ref) => (
    <CommandItemFrame ref={ref} asChild>
      <CommandPrimitive.Item
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          userSelect: 'none',
        }}
        {...props}
      />
    </CommandItemFrame>
  )
)
CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = styled(Text, {
  marginLeft: 'auto',
  fontSize: '$2',
  color: '$mutedForeground',
})

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
