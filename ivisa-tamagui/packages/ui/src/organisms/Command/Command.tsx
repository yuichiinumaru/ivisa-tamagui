import React from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import { styled, Text, GetProps, TamaguiElement, XStack, YStack } from 'tamagui'
import { Search, PackageSearch, AlertTriangle } from '@tamagui/lucide-icons'
import { Dialog, DialogContent } from '../../molecules/Dialog'
import { Skeleton } from '../../atoms/Skeleton'

// --- Styled Wrappers ---

// Command Root
const CommandFrame = styled(YStack, {
  name: 'Command',
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
      <DialogContent p="$0" overflow="hidden" maw={600}>
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
  paddingHorizontal: '$3',
  gap: '$2',
})

const StyledCommandInput = styled(CommandPrimitive.Input, {
  flex: 1,
  height: '$11',
  fontSize: '$4',
  outlineStyle: 'none',
  borderWidth: 0,
  backgroundColor: 'transparent',
  color: '$color',
})

const CommandInput = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Input>, React.ComponentPropsWithoutRef<typeof StyledCommandInput>>(
  (props, ref) => {
    return (
      <CommandInputFrame>
        <Search size="$1" color="$color10" />
        <StyledCommandInput ref={ref} {...props} />
      </CommandInputFrame>
    )
  }
)
CommandInput.displayName = CommandPrimitive.Input.displayName

// --- Skeleton ---
const CommandSkeleton = () => (
  <YStack gap="$2" p="$1">
    <Skeleton height="$4" width="80%" />
    <Skeleton height="$4" width="60%" />
    <Skeleton height="$4" width="90%" />
  </YStack>
)

// --- Error ---
const CommandError = ({ message }: { message: string }) => (
  <YStack ai="center" jc="center" gap="$2" p="$4">
    <AlertTriangle color="$red10" />
    <Text color="$red10" fontSize="$4">
      {message}
    </Text>
  </YStack>
)

// Command List
const CommandListFrame = styled(YStack, {
  name: 'CommandList',
  maxHeight: '$15', // 300px
  overflowY: 'auto',
  overflowX: 'hidden',
})

interface CommandListProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>,
    GetProps<typeof CommandListFrame> {
  isLoading?: boolean
  error?: string | null
}

const CommandList = React.forwardRef<TamaguiElement, CommandListProps>(
  ({ children, isLoading = false, error = null, ...props }, ref) => (
    <CommandListFrame ref={ref}>
      {isLoading ? (
        <CommandSkeleton />
      ) : error ? (
        <CommandError message={error} />
      ) : (
        <CommandPrimitive.List {...props}>{children}</CommandPrimitive.List>
      )}
    </CommandListFrame>
  )
)
CommandList.displayName = CommandPrimitive.List.displayName

// Command Empty
const CommandEmptyContainer = styled(YStack, {
  padding: '$6',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
})

const CommandEmptyText = styled(Text, {
  fontSize: '$4',
  color: '$color10',
})

interface CommandEmptyProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> {
  title?: string,
  icon?: React.ReactNode,
}

const CommandEmpty = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Empty>, CommandEmptyProps>(
  ({ title = "Nenhum resultado encontrado.", icon = <PackageSearch />, ...props }, ref) => (
    <CommandPrimitive.Empty ref={ref} asChild {...props}>
      <CommandEmptyContainer>
        {icon}
        <CommandEmptyText>{title}</CommandEmptyText>
      </CommandEmptyContainer>
    </CommandPrimitive.Empty>
  )
)
CommandEmpty.displayName = CommandPrimitive.Empty.displayName

// Command Group
const CommandGroupFrame = styled(YStack, {
  overflow: 'hidden',
  padding: '$1',
})

const CommandGroup = React.forwardRef<
  TamaguiElement,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> & GetProps<typeof CommandGroupFrame>
>(({ heading, ...props }, ref) => (
  <CommandGroupFrame ref={ref} asChild>
    {/* @ts-expect-error CMDK is not correctly typed */}
    <CommandPrimitive.Group heading={heading} {...props} />
  </CommandGroupFrame>
))
CommandGroup.displayName = CommandPrimitive.Group.displayName

// Command Separator
const CommandSeparatorFrame = styled(YStack, {
  height: '$px',
  backgroundColor: '$borderColor',
  margin: '-$1',
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
const CommandItemFrame = styled(XStack, {
  name: 'CommandItem',
  alignItems: 'center',
  paddingVertical: '$2',
  paddingHorizontal: '$3',
  borderRadius: '$sm',
  cursor: 'pointer',
  userSelect: 'none',
  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },
  focusStyle: {
    backgroundColor: '$backgroundFocus',
  },
  disabledStyle: {
    opacity: 0.5,
    pointerEvents: 'none',
  },
})

const CommandItem = React.forwardRef<TamaguiElement, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> & GetProps<typeof CommandItemFrame>>(
  ({ ...props }, ref) => (
    <CommandItemFrame ref={ref} asChild>
      <CommandPrimitive.Item {...props} />
    </CommandItemFrame>
  )
)
CommandItem.displayName = CommandPrimitive.Item.displayName

// Command Shortcut
const CommandShortcut = styled(Text, {
  marginLeft: 'auto',
  fontSize: '$2',
  color: '$color11',
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

export type CommandDialogProps = React.ComponentProps<typeof CommandDialog>

export type CommandSkeletonProps = React.ComponentProps<typeof CommandSkeleton>

export type CommandErrorProps = React.ComponentProps<typeof CommandError>

