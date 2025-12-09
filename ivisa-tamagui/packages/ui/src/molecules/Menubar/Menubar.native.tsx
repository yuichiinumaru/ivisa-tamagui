import { View, styled } from 'tamagui'

// 💀 The Rite of Resurrection: Safe Native Stub
// This file exists to prevent React Native from crashing when importing @ivisa/ui.
// Menubar is a desktop-only pattern. On native, it renders nothing or minimal fallbacks.

const StubComponent = (name: string) => {
  const Component = styled(View, {
    name,
    display: 'none', // Hide by default on native
  })
  return Component
}

export const Menubar = StubComponent('Menubar')
export const MenubarMenu = StubComponent('MenubarMenu')
export const MenubarTrigger = StubComponent('MenubarTrigger')
export const MenubarContent = StubComponent('MenubarContent')
export const MenubarItem = StubComponent('MenubarItem')
export const MenubarSeparator = StubComponent('MenubarSeparator')
export const MenubarLabel = StubComponent('MenubarLabel')
export const MenubarCheckboxItem = StubComponent('MenubarCheckboxItem')
export const MenubarRadioGroup = StubComponent('MenubarRadioGroup')
export const MenubarRadioItem = StubComponent('MenubarRadioItem')
export const MenubarPortal = StubComponent('MenubarPortal')
export const MenubarSubContent = StubComponent('MenubarSubContent')
export const MenubarSubTrigger = StubComponent('MenubarSubTrigger')
export const MenubarGroup = StubComponent('MenubarGroup')
export const MenubarSub = StubComponent('MenubarSub')
export const MenubarShortcut = StubComponent('MenubarShortcut')
