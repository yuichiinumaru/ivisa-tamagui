import React, { useState } from 'react'
import { ScrollView, Separator, Text, YStack, styled, GetProps } from 'tamagui'
import { ChevronLeft, ChevronRight, MenuSquare, AlertCircle, Inbox } from '@tamagui/lucide-icons'
import { Button } from '../../atoms/Button'
import { Sheet } from '../../molecules/Sheet'
import { Skeleton } from '../../atoms/Skeleton'

// --- Estilos ---

const SidebarContainer = styled(YStack, {
  name: 'SidebarContainer',
  tag: 'aside',
  borderRightWidth: 1,
  borderColor: '$borderColor',
  padding: '$4',
  gap: '$4',
  width: '100%',
  backgroundColor: '$background',
  
  variants: {
    collapsible: {
      true: { animation: 'bouncy' },
    },
    collapsed: {
      true: {
        width: 72,
        paddingHorizontal: '$2',
        alignItems: 'center',
      },
      false: { 
        width: 280 
      },
    },
  },
})

const SidebarHeader = styled(YStack, { name: 'SidebarHeader' })
const SidebarContent = styled(YStack, { name: 'SidebarContent', flex: 1 })
const SidebarFooter = styled(YStack, { name: 'SidebarFooter' })

// --- Estados de Dados ---

const SidebarSkeleton = () => (
  <YStack gap="$4" padding="$4" width="100%">
    <Skeleton height={40} />
    <YStack gap="$3">
      <Skeleton height={32} />
      <Skeleton height={32} />
      <Skeleton height={32} />
    </YStack>
    <YStack flex={1} />
    <Skeleton height={40} />
  </YStack>
)

const EmptyState = ({ message }: { message: string }) => (
  <YStack flex={1} justifyContent="center" alignItems="center" gap="$2">
    <Inbox size={24} color="$gray10" />
    <Text color="$gray11" fontSize="$3">{message}</Text>
  </YStack>
)

const ErrorState = ({ message }: { message: string }) => (
  <YStack flex={1} justifyContent="center" alignItems="center" gap="$2">
    <AlertCircle size={24} color="$red10" />
    <Text color="$red10" fontSize="$3" textAlign="center">{message}</Text>
  </YStack>
)

// --- Tipagem ---

export interface SidebarProps extends GetProps<typeof SidebarContainer> {
  children?: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  variant?: 'collapsible' | 'fixed' | 'floating'
  isCollapsed?: boolean
  onCollapsedChange?: (isCollapsed: boolean) => void
  isLoading?: boolean
  isEmpty?: boolean
  emptyMessage?: string
  error?: string
}

// --- Implementação Desktop ---

const DesktopSidebar = (props: SidebarProps) => {
  const {
    header,
    children,
    footer,
    isCollapsed: isCollapsedProp,
    onCollapsedChange,
    variant,
    isLoading,
    isEmpty,
    emptyMessage = 'Sem conteúdo',
    error,
  } = props

  const [isCollapsedInternal, setIsCollapsedInternal] = useState(false)
  const isCollapsed = isCollapsedProp ?? isCollapsedInternal

  const toggleSidebar = () => {
    onCollapsedChange ? onCollapsedChange(!isCollapsed) : setIsCollapsedInternal(!isCollapsed)
  }

  if (isLoading) {
    return (
      <SidebarContainer collapsible={variant === 'collapsible'} collapsed={isCollapsed}>
        <SidebarSkeleton />
      </SidebarContainer>
    )
  }

  return (
    <SidebarContainer
      collapsible={variant === 'collapsible'}
      collapsed={isCollapsed}
      position={variant === 'floating' ? 'absolute' : 'relative'}
      height="100%"
      zIndex={variant === 'floating' ? 10 : undefined}
    >
      {header && <SidebarHeader>{header}</SidebarHeader>}
      <Separator />

      <SidebarContent>
        {error ? (
          <ErrorState message={error} />
        ) : isEmpty ? (
          <EmptyState message={emptyMessage} />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <YStack gap="$2">{children}</YStack>
          </ScrollView>
        )}
      </SidebarContent>

      {footer && (
        <YStack gap="$4">
          <Separator />
          <SidebarFooter>{footer}</SidebarFooter>
        </YStack>
      )}

      {variant === 'collapsible' && (
        <Button
          onPress={toggleSidebar}
          circular
          size="$2"
          position="absolute"
          top={20}
          right={-15}
          zIndex={20}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      )}
    </SidebarContainer>
  )
}

// --- Implementação Mobile ---

const MobileSidebar = (props: SidebarProps) => {
  const { children, header, footer, isLoading, isEmpty, emptyMessage, error } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button circular onPress={() => setOpen(true)} m="$2">
        <MenuSquare size={24} />
      </Button>
      
      <Sheet open={open} onOpenChange={setOpen} snapPoints={[90]}>
        <Sheet.Frame>
          <Sheet.Handle />
          <YStack gap="$4" flex={1} padding="$4">
            {header && <SidebarHeader>{header}</SidebarHeader>}
            
            <SidebarContent>
               {isLoading ? (
                  <SidebarSkeleton />
                ) : error ? (
                  <ErrorState message={error} />
                ) : isEmpty ? (
                  <EmptyState message={emptyMessage || 'Vazio'} />
                ) : (
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <YStack gap="$2">{children}</YStack>
                  </ScrollView>
                )}
            </SidebarContent>

            {footer && <SidebarFooter>{footer}</SidebarFooter>}
            
            <Button onPress={() => setOpen(false)} chromeless>
              Fechar
            </Button>
          </YStack>
        </Sheet.Frame>
      </Sheet>
    </>
  );
};

// --- Exportação Principal ---

export const Sidebar = (props: SidebarProps) => (
  <>
    <YStack $gtSm={{ display: 'none' }}>
      <MobileSidebar {...props} />
    </YStack>
    <YStack $sm={{ display: 'none' }} height="100%">
      <DesktopSidebar {...props} />
    </YStack>
  </>
)