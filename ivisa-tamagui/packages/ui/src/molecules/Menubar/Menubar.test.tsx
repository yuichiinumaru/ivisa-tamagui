import { render, screen } from '../../test-utils'
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from './Menubar'
import React from 'react'


/* eslint-disable @typescript-eslint/no-explicit-any */
jest.mock('@radix-ui/react-menubar', () => ({
    Root: ({ children }: any) => <div>{children}</div>,
    Menu: ({ children }: any) => <div>{children}</div>,
    Trigger: ({ children }: any) => <button>{children}</button>,
    Portal: ({ children }: any) => <div>{children}</div>,
    Content: ({ children }: any) => <div>{children}</div>,
    Item: ({ children }: any) => <div>{children}</div>,
    Group: ({ children }: any) => <div>{children}</div>,
    CheckboxItem: ({ children }: any) => <div>{children}</div>,
    ItemIndicator: ({ children }: any) => <div>{children}</div>,
    RadioItem: ({ children }: any) => <div>{children}</div>,
    Label: ({ children }: any) => <div>{children}</div>,
    Separator: ({ children }: any) => <div>{children}</div>,
    SubTrigger: ({ children }: any) => <div>{children}</div>,
    SubContent: ({ children }: any) => <div>{children}</div>,
    Sub: ({ children }: any) => <div>{children}</div>,
    RadioGroup: ({ children }: any) => <div>{children}</div>,
}))
/* eslint-enable @typescript-eslint/no-explicit-any */

describe('Menubar', () => {
  it('renders menu', () => {
    render(
      <Menubar>
        <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
                <MenubarItem>New</MenubarItem>
            </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
    expect(screen.getByText('File')).toBeInTheDocument()
  })
})
