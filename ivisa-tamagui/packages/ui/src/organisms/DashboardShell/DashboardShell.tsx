import React, { useState } from 'react'
import { YStack, XStack, GetProps, styled, Paragraph, useMedia } from 'tamagui'
import { AlertTriangle, DatabaseZap, Menu, X } from '@tamagui/lucide-icons'

import { Skeleton } from '../../atoms/Skeleton'
import { Button } from '../../atoms/Button'
import { Alert } from '../../atoms/Alert'
import { H4 } from '../../atoms/Typography'

export const DashboardShellFrame = styled(YStack, {
  name: 'DashboardShell',
  flex: 1,
  height: '100%',
  backgroundColor: '$background',
  position: 'relative',
})

const Header = styled(XStack, {
  name: 'Header',
  tag: 'header',
  padding: '$4',
  borderBottomWidth: 1,
  borderColor: '$borderColor',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const Sidebar = styled(YStack, {
  name: 'Sidebar',
  tag: 'aside',
  padding: '$4',
  borderRightWidth: 1,
  borderColor: '$borderColor',
  gap: '$4',
  width: 280,
  backgroundColor: '$background',

  '$gtMd': {
    display: 'flex',
  },

  '$ltMd': {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 100,
  },
})

const Main = styled(YStack, {
  name: 'Main',
  tag: 'main',
  flex: 1,
  padding: '$4',
  gap: '$4',
  overflowY: 'auto',
})

const Overlay = styled(YStack, {
  name: 'Overlay',
  backgroundColor: '$background',
  opacity: 0.5,
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 99,
})

const CenteredContainer = styled(YStack, {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
})

export type DashboardShellProps = GetProps<typeof DashboardShellFrame> & {
  header?: React.ReactNode
  sidebar?: React.ReactNode
  children?: React.ReactNode
  isLoading?: boolean
  hasError?: boolean
  isEmpty?: boolean
  onRetry?: () => void
  emptyStateTitle?: string
  emptyStateMessage?: string
  emptyStateIcon?: React.ReactNode
}

const renderContent = ({
  isLoading,
  hasError,
  isEmpty,
  children,
  onRetry,
  emptyStateTitle,
  emptyStateMessage,
  emptyStateIcon,
}) => {
  if (isLoading) {
    return (
      <YStack gap="$4" flex={1}>
        <Skeleton height={40} />
        <Skeleton flex={1} />
      </YStack>
    )
  }

  if (hasError) {
    return (
      <CenteredContainer>
        <Alert variant="destructive" icon={<AlertTriangle />}>
          <H4>Ocorreu um erro</H4>
          <Paragraph>Não foi possível carregar as informações. Tente novamente.</Paragraph>
        </Alert>
        {onRetry && <Button onPress={onRetry}>Tentar Novamente</Button>}
      </CenteredContainer>
    )
  }

  if (isEmpty) {
    return (
      <CenteredContainer>
        {emptyStateIcon || <DatabaseZap size="$4" color="$color10" />}
        <H4>{emptyStateTitle || 'Nenhum dado encontrado'}</H4>
        <Paragraph theme="alt2">{emptyStateMessage || 'Não há informações para exibir.'}</Paragraph>
      </CenteredContainer>
    )
  }

  return children
}

export const DashboardShell = DashboardShellFrame.styleable<DashboardShellProps>(
  (
    {
      header,
      sidebar,
      children,
      isLoading,
      hasError,
      isEmpty,
      onRetry,
      emptyStateTitle,
      emptyStateMessage,
      emptyStateIcon,
      ...props
    },
    ref
  ) => {
    const media = useMedia()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const isMobile = !media.gtMd

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

    return (
      <DashboardShellFrame ref={ref} {...props}>
        <XStack flex={1} position="relative">
          {isMobile && isSidebarOpen && <Overlay onPress={toggleSidebar} />}

          {/* Sidebar Area - Always rendered if sidebar exists to preserve layout or toggle logic */}
          {sidebar && (!isMobile || isSidebarOpen) && (
            <Sidebar>
              {isLoading ? (
                <>
                  <Skeleton height={30} width={120} />
                  <YStack gap="$2">
                    <Skeleton height={20} />
                    <Skeleton height={20} />
                    <Skeleton height={20} />
                  </YStack>
                </>
              ) : (
                sidebar
              )}
            </Sidebar>
          )}

          <YStack flex={1}>
            <Header>
              <XStack flex={1} alignItems="center" gap="$4">
                {isMobile && sidebar && (
                  <Button
                    icon={isSidebarOpen ? X : Menu}
                    onPress={toggleSidebar}
                    variant="tertiary"
                  />
                )}
                {/* Header Content - Rendered inside container always */}
                {!isLoading && header}
                {isLoading && header && <Skeleton height={24} width={200} />}
              </XStack>
            </Header>
            <Main>
              {renderContent({
                isLoading,
                hasError,
                isEmpty,
                children,
                onRetry,
                emptyStateTitle,
                emptyStateMessage,
                emptyStateIcon,
              })}
            </Main>
          </YStack>
        </XStack>
      </DashboardShellFrame>
    )
  }
)

export default DashboardShell

export type DashboardShellFrameProps = React.ComponentProps<typeof DashboardShellFrame>
