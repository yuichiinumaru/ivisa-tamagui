import { render, screen } from '../../test-utils'
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from './Menubar'
import React from 'react'


/* eslint-disable @typescript-eslint/no-explicit-any */
jest.mock('@radix-ui/react-menubar', () => {
    const React = require('react');
    const ForwardRefDiv = React.forwardRef(({ children, ...props }: any, ref: any) => <div ref={ref} {...props}>{children}</div>);
    ForwardRefDiv.displayName = 'MockDiv';

    const ForwardRefButton = React.forwardRef(({ children, ...props }: any, ref: any) => <button ref={ref} {...props}>{children}</button>);
    ForwardRefButton.displayName = 'MockButton';

    return {
        Root: ForwardRefDiv,
        Menu: ForwardRefDiv,
        Trigger: ForwardRefButton,
        Portal: ForwardRefDiv,
        Content: ForwardRefDiv,
        Item: ForwardRefDiv,
        Group: ForwardRefDiv,
        CheckboxItem: ForwardRefDiv,
        ItemIndicator: ForwardRefDiv,
        RadioItem: ForwardRefDiv,
        Label: ForwardRefDiv,
        Separator: ForwardRefDiv,
        SubTrigger: ForwardRefDiv,
        SubContent: ForwardRefDiv,
        Sub: ForwardRefDiv,
        RadioGroup: ForwardRefDiv,
    };
})
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
