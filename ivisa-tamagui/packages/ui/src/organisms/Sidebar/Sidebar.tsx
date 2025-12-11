import React, { useState } from 'react';
import { AnimatePresence, ScrollView, Separator, Text, YStack, styled } from 'tamagui';
import { Button } from '../../atoms/Button';
import { ChevronLeft, ChevronRight, Menu, AlertCircle, Inbox } from '@tamagui/lucide-icons';
import { Sheet, SheetContent, SheetTrigger } from '../../molecules/Sheet';
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

  // Collapsible variant styles
  variants: {
    collapsible: {
      true: {
        animation: 'bouncy',
      },
    },
    collapsed: {
      true: {
        width: 72,
        paddingHorizontal: '$2',
        alignItems: 'center',
      },
      false: {
        width: 280,
      },
    },
  } as const,
});

const SidebarHeader = styled(YStack, {
  name: 'SidebarHeader',
});

const SidebarContent = styled(YStack, {
  name: 'SidebarContent',
  f: 1,
});

const SidebarFooter = styled(YStack, {
  name: 'SidebarFooter',
});

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
    <Inbox size="$2" color="$gray10" />
    <Text color="$gray11" fontSize="$3">
      {message}
    </Text>
  </YStack>
);

const ErrorState = ({ message }: { message: string }) => (
  <YStack flex={1} justifyContent="center" alignItems="center" gap="$2">
    <AlertCircle size="$2" color="$red10" />
    <Text color="$red10" fontSize="$3" textAlign="center">
      {message}
    </Text>
    {/* In a real app, this might have a retry button */}
  </YStack>
);

// --- Main Component ---

interface SidebarProps {
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
}: SidebarProps) => {
  const [isCollapsedInternal, setIsCollapsedInternal] = useState(false);
  const isControlled = isCollapsedProp !== undefined;
  const isCollapsed = isControlled ? isCollapsedProp : isCollapsedInternal;

  const toggleSidebar = () => {
    if (isControlled) {
      onCollapsedChange?.(!isCollapsed);
    } else {
      setIsCollapsedInternal(!isCollapsedInternal);
    }
  };

  const isCollapsible = variant === 'collapsible';

  if (isLoading) {
    return <SidebarContainer collapsed={isCollapsible && isCollapsed}><SidebarSkeleton /></SidebarContainer>;
  }

  return (
    <SidebarContainer
      collapsible={isCollapsible}
      collapsed={isCollapsible && isCollapsed}
      {...(variant === 'floating' && {
        position: 'absolute',
        height: '100%',
        zIndex: 10,
      })}
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

      {isCollapsible && (
        <Button
          icon={isCollapsed ? ChevronRight : ChevronLeft}
          onPress={toggleSidebar}
          circular
          size="$3"
          position="absolute"
          top={20}
          right={-15}
          zIndex={20}
        />
      )}
    </SidebarContainer>
  );
};

const MobileSidebar = ({ children, header, footer, isLoading, isEmpty, emptyMessage = 'Sem conteúdo', error }: SidebarProps) => {
    const [open, setOpen] = useState(false);

    const renderContent = () => {
      if (isLoading) {
        return <SidebarSkeleton />;
      }
      if (error) {
        return <ErrorState message={error} />;
      }
      if (isEmpty) {
        return <EmptyState message={emptyMessage} />;
      }
      return (
        <>
          {header && <SidebarHeader>{header}</SidebarHeader>}
          <ScrollView>
            <YStack gap="$2">{children}</YStack>
          </ScrollView>
          <YStack flex={1} />
          {footer && <SidebarFooter>{footer}</SidebarFooter>}
        </>
      );
    };

    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button icon={Menu} circular />
        </SheetTrigger>
        <SheetContent position="left" size="$xl">
          <YStack gap="$4" paddingTop="$6" paddingHorizontal="$4" flex={1}>
            {renderContent()}
            <Button onPress={() => setOpen(false)} chromeless>
              Fechar
            </Button>
          </YStack>
        </SheetContent>
      </Sheet>
    );
  };

export const Sidebar = (props: SidebarProps) => {
  return (
    <>
      <YStack display="none" $sm={{ display: 'flex' }}>
        <MobileSidebar {...props} />
      </YStack>
      <YStack display="flex" $sm={{ display: 'none' }}>
        <DesktopSidebar {...props} />
      </YStack>
    </>
  );
};
