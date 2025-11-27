import { XStack, styled, Paragraph } from 'tamagui'
import React from 'react'

const MenubarFrame = styled(XStack, {
  name: 'Menubar',
  backgroundColor: '$background',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$md',
  padding: '$1',
  gap: '$1',
})

export const Menubar = React.forwardRef<any, any>((props, ref) => {
  return (
    <MenubarFrame ref={ref} {...props}>
      {props.children}
    </MenubarFrame>
  )
})

Menubar.displayName = 'Menubar'

export const MenubarMenu = styled(XStack, {})
export const MenubarTrigger = styled(Paragraph, {
  padding: '$2',
  cursor: 'pointer',
  hoverStyle: {
    backgroundColor: '$muted',
    borderRadius: '$sm',
  }
})
export const MenubarContent = styled(XStack, {})
export const MenubarItem = styled(Paragraph, {})
