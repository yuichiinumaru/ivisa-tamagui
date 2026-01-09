import React from 'react'
import { YStack, XStack, styled, GetProps } from 'tamagui'

const DashboardContainer = styled(YStack, {
  name: 'DashboardLayout',
  flex: 1,
  backgroundColor: '$background',
  minHeight: '100vh',
})

const DashboardHeader = styled(XStack, {
  name: 'DashboardHeader',
  height: 64,
  borderBottomWidth: 1,
  borderColor: '$borderColor',
  alignItems: 'center',
  paddingHorizontal: '$4',
  backgroundColor: '$background',
  zIndex: 10,
})

const DashboardBody = styled(XStack, {
  name: 'DashboardBody',
  flex: 1,
})

const DashboardSidebar = styled(YStack, {
  name: 'DashboardSidebar',
  width: 250,
  borderRightWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
  display: 'none',
  $gtSm: {
    display: 'flex',
  },
})

const DashboardMain = styled(YStack, {
  name: 'DashboardMain',
  flex: 1,
  padding: '$4',
  overflow: 'hidden', // Allows internal scroll views
})

export const DashboardLayout = ({
  children,
  header,
  sidebar,
  ...props
}: GetProps<typeof DashboardContainer> & {
  header?: React.ReactNode
  sidebar?: React.ReactNode
}) => {
  return (
    <DashboardContainer {...props}>
      {header && <DashboardHeader>{header}</DashboardHeader>}
      <DashboardBody>
        {sidebar && <DashboardSidebar>{sidebar}</DashboardSidebar>}
        <DashboardMain>{children}</DashboardMain>
      </DashboardBody>
    </DashboardContainer>
  )
}

DashboardLayout.Header = DashboardHeader
DashboardLayout.Sidebar = DashboardSidebar
DashboardLayout.Main = DashboardMain

export type DashboardLayoutProps = React.ComponentProps<typeof DashboardLayout>
