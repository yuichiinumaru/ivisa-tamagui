import React from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import { styled, View, Text, GetProps, TamaguiElement } from 'tamagui'
import { Dialog, DialogContent } from '../../molecules/Dialog'

// --- Styled Wrappers ---

// Command Root
const CommandFrame = styled(View, {
  name: 'Command',
  flexDirection: 'column',
  overflow: 'hidden',
  backgroundColor: '$background',
  borderRadius: '$md',
  // We need to target the [cmdk-root] if possible, but styling the wrapper is usually enough
  width: '100%',
  height: '100%',
})

const Command = React.forwardRef<TamaguiElement, React.ComponentPropsWithoutRef<typeof CommandPrimitive> & GetProps<typeof CommandFrame>>(
  ({ className: _className, ...props }, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = _className
    return (
      <CommandFrame ref={ref} asChild>
        <CommandPrimitive {...props} />
      </CommandFrame>
    )
  }
)
Command.displayName = CommandPrimitive.displayName

// Command Dialog
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CommandDialogProps extends React.ComponentPropsWithoutRef<typeof Dialog> {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent padding={0} overflow="hidden" maxWidth={600}>
        <Command
          className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
        >
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

// Command Input
const CommandInputFrame = styled(View, {
  flexDirection: 'row',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderBottomColor: '$borderColor',
  paddingHorizontal: '$3',
})

const SearchIcon = () => <Text fontSize="$4" marginRight="$2">🔍</Text>

const CommandInput = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Input>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & GetProps<typeof CommandInputFrame>>(
  ({ ...props }, ref) => (
    <CommandInputFrame>
      <SearchIcon />
      <CommandPrimitive.Input
        ref={ref}
        style={{
            flex: 1,
            height: 44,
            fontSize: 14,
            outline: 'none',
            border: 'none',
            background: 'transparent',
            color: 'var(--color-foreground)', // Need to ensure colors work
        }}
        {...props}
      />
    </CommandInputFrame>
  )
)
CommandInput.displayName = CommandPrimitive.Input.displayName

// Command List
const CommandListFrame = styled(View, {
  maxHeight: 300,
  overflowY: 'auto',
  overflowX: 'hidden',
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
  // Styling the label text is tricky with pure styled wrapper around Group
  // cmdk renders the label itself
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
  // Hover/Selected styles handled by cmdk data attributes usually
  // but we can add default hover
  hoverStyle: {
      backgroundColor: '$muted',
  },
})

const CommandItem = React.forwardRef<TamaguiElement, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> & GetProps<typeof CommandItemFrame>>(
  ({ ...props }, ref) => (
    <CommandItemFrame ref={ref} asChild>
      <CommandPrimitive.Item
        className="aria-selected:bg-muted aria-selected:text-accent-foreground"
        style={{
             display: 'flex',
             flexDirection: 'row',
             alignItems: 'center',
             // Styles for cmdk selection usually need CSS or classNames
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
