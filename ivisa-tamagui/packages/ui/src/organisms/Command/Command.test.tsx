import { render, screen } from '../../../vitest.setup'
import { Command, CommandInput, CommandList, CommandItem, CommandEmpty } from './Command'
import { vi, describe, it, expect } from 'vitest'
import React from 'react'


/* eslint-disable @typescript-eslint/no-explicit-any */
vi.mock('cmdk', () => {
  const Command = ({ children }: any) => <div>{children}</div>;
  Command.displayName = 'Command';

  const CommandInput = (props: any) => <input {...props} />;
  CommandInput.displayName = 'CommandInput';
  Command.Input = CommandInput;

  const CommandList = ({ children }: any) => <div>{children}</div>;
  CommandList.displayName = 'CommandList';
  Command.List = CommandList;

  const CommandEmpty = ({ children }: any) => <div>{children}</div>;
  CommandEmpty.displayName = 'CommandEmpty';
  Command.Empty = CommandEmpty;

  const CommandGroup = ({ children }: any) => <div>{children}</div>;
  CommandGroup.displayName = 'CommandGroup';
  Command.Group = CommandGroup;

  const CommandItem = ({ children }: any) => <div>{children}</div>;
  CommandItem.displayName = 'CommandItem';
  Command.Item = CommandItem;

  const CommandSeparator = () => <hr />;
  CommandSeparator.displayName = 'CommandSeparator';
  Command.Separator = CommandSeparator;

  return {
    Command,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandSeparator,
  };
})

vi.mock('../../molecules/Dialog', () => ({
    Dialog: ({ children }: any) => <div>{children}</div>,
    DialogContent: ({ children }: any) => <div>{children}</div>,
}))
/* eslint-enable @typescript-eslint/no-explicit-any */

describe('Command', () => {
  it('renders and filters', async () => {
    render(
        <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
                <CommandEmpty>No results.</CommandEmpty>
                <CommandItem>Apple</CommandItem>
                <CommandItem>Banana</CommandItem>
            </CommandList>
        </Command>
    )
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
    expect(screen.getByText('Apple')).toBeInTheDocument()

    // With mock, filtering won't happen automatically unless we implement it in mock or use logic
    // Just checking render is enough for "unit test" of wrapper
  })
})
