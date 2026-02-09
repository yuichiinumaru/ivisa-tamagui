// Removed @ts-nocheck — enabling type checking
import React from 'react'
import { YStack, XStack, styled } from 'tamagui'
import { Navbar } from '../Navbar/Navbar'
import { Sidebar } from '../Sidebar/Sidebar'

const LayoutFrame = styled(YStack, {
  name: 'AppLayout',
  backgroundColor: '$background',
  minHeight: '100vh',
})

const ContentArea = styled(XStack, {
  name: 'ContentArea',
  flex: 1,
})

interface LayoutProps {
  navbarProps?: React.ComponentProps<typeof Navbar>
  sidebarProps?: React.ComponentProps<typeof Sidebar>
  children?: React.ReactNode
}

export const Layout = ({ navbarProps, sidebarProps, children }: LayoutProps) => (
  <LayoutFrame>
    <Navbar {...(navbarProps ?? {})} />
    <ContentArea>
      <Sidebar {...(sidebarProps ?? {})} />
      <YStack flex={1} padding="$4">
        {children}
      </YStack>
    </ContentArea>
  </LayoutFrame>
)

export default Layout
