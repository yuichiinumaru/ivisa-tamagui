import React, { useState } from 'react';
import { ScrollView, Separator, Text, YStack, styled, GetProps } from 'tamagui';
import { ChevronLeft, ChevronRight, MenuSquare, AlertCircle, Inbox } from '@tamagui/lucide-icons';
import { Button } from '../../atoms/Button';
import { Sheet } from '../../molecules/Sheet';
import { Skeleton } from '../../atoms/Skeleton';

// --- Styled Components ---

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
      true: { 
        animation: 'bouncy' 
      },
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
});

const SidebarHeader = styled(YStack, { name: 'SidebarHeader' });
const SidebarContent = styled(YStack, { name: 'SidebarContent', flex: 1 });
const SidebarFooter = styled(YStack, { name: 'SidebarFooter' });

type SidebarContainerProps = GetProps<typeof SidebarContainer>;

// --- Data Lifecycle Components ---

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
);

const EmptyState = ({ message }: { message: string }) => (
  <YStack flex={1} justifyContent="center" alignItems="center" gap="$2">
    <Inbox size={24} color="$gray10" />
    <Text color="$gray11" fontSize="$3">{message}</Text>
  </YStack>
);

const ErrorState = ({ message }: { message: string }) => (
  <YStack flex={1} justifyContent="center" alignItems="center" gap="$2">
    <AlertCircle size={24} color="$red10" />
    <Text color="$red10" fontSize="$3" textAlign="center">{message}</Text>
  </YStack>
);

// --- Main Component ---

export interface SidebarOwnProps {
  children?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'collapsible' | 'fixed' | 'floating';
  isCollapsed?: boolean;
  onCollapsedChange?: (isCollapsed: boolean) => void;
  isLoading?: boolean;
  isEmpty?: boolean;
  emptyMessage?: string;
  error?: string;
}

const DesktopSidebar = ({
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
}: SidebarOwnProps) => {
  const [isCollapsedInternal, setIsCollapsedInternal] = useState(false);
  const isCollapsed = isCollapsedProp ?? isCollapsedInternal;

  const toggleSidebar = () => {
    if (onCollapsedChange) {
      onCollapsedChange(!isCollapsed);
    } else {
      setIsCollapsedInternal(!isCollapsedInternal);
    }
  };

  // Princípio do Clean Code: Retorno antecipado (Fail Fast/Early Return)
  if (isLoading) {
    return (
      <SidebarContainer collapsible={variant === 'collapsible'} collapsed={isCollapsed}>
        <SidebarSkeleton />
      </SidebarContainer>
    );
  }

  return (
    <SidebarContainer
      collapsible={variant === 'collapsible'}
      collapsed={isCollapsed}
      position={variant === 'floating' ? 'absolute' : 'relative'}
      height={variant === 'floating' ? '100%' : undefined}
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
          <ScrollView>
            <YStack gap="$2">{children}</YStack>
          </ScrollView>
        )}
      </SidebarContent>

      {footer && (
        <>
          <Separator />
          <SidebarFooter>{footer}</SidebarFooter>
        </>
      )}

      {variant === 'collapsible' && (
        <Button
          onPress={toggleSidebar}
          circular
          size="sm"
          position="absolute"
          top={20}
          right={-15}
          zIndex={20}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      )}
    </SidebarContainer>
  );
};

const MobileSidebar = ({ 
  children, 
  header, 
  footer, 
  isLoading, 
  isEmpty, 
  emptyMessage, 
  error 
}: SidebarOwnProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen} modal snapPoints={[90]}>
      <Sheet.Trigger>
        <Button circular>
          <MenuSquare size={24} />
        </Button>
      </Sheet.Trigger>
      <Sheet.Content>
        <YStack gap="$4" padding="$4" flex={1} backgroundColor="$background">
          {isLoading ? <SidebarSkeleton /> : (
            <>
              {header && <SidebarHeader>{header}</SidebarHeader>}
              <ScrollView>
                <YStack gap="$2">{children}</YStack>
              </ScrollView>
              {footer && <SidebarFooter>{footer}</SidebarFooter>}
            </>
          )}
          <Button onPress={() => setOpen(false)} chromeless>Fechar</Button>
        </YStack>
      </Sheet.Content>
    </Sheet>
  );
};

export const Sidebar = (props: SidebarOwnProps) => (
  <>
    <YStack $gtSm={{ display: 'none' }}>
      <MobileSidebar {...props} />
    </YStack>
    <YStack $sm={{ display: 'none' }}>
      <DesktopSidebar {...props} />
    </YStack>
  </>
);