import React, { useState } from 'react';
import { AnimatePresence, ScrollView as ScrollViewOriginal, Separator, Text as TextOriginal, YStack as YStackOriginal, styled } from 'tamagui';
import { Button as ButtonOriginal } from '../../atoms/Button';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, MenuSquare as MenuSquareIcon, AlertCircle as AlertCircleIcon, Inbox as InboxIcon } from '@tamagui/lucide-icons';
import { Sheet } from '../../molecules/Sheet'; // Sheet is already 'any' from previous fix
import { Skeleton as SkeletonOriginal } from '../../atoms/Skeleton';

const Button = ButtonOriginal as any
const YStack = YStackOriginal as any
const ScrollView = ScrollViewOriginal as any
const Text = TextOriginal as any
const Skeleton = SkeletonOriginal as any

const ChevronLeft = ChevronLeftIcon as any
const ChevronRight = ChevronRightIcon as any
const MenuSquare = MenuSquareIcon as any
const AlertCircle = AlertCircleIcon as any
const Inbox = InboxIcon as any

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
} as any) as any;

const SidebarHeader = styled(YStack, {
  name: 'SidebarHeader',
} as any) as any;

const SidebarContent = styled(YStack, {
  name: 'SidebarContent',
  f: 1,
} as any) as any;

const SidebarFooter = styled(YStack, {
  name: 'SidebarFooter',
} as any) as any;

// --- Data Lifecycle Components ---

const SidebarSkeleton = () => (
  <YStack gap="$4" padding="$4" width="100%">
    <Skeleton height="$10" />
    <YStack gap="$3">
      <Skeleton height="$8" />
      <Skeleton height="$8" />
      <Skeleton height="$8" />
    </YStack>
    <YStack flex={1} />
    <Skeleton height="$10" />
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
          onPress={toggleSidebar}
          circular
          size="sm"
          position="absolute"
          top={20}
          right={-15}
          zIndex={20}
        >
          {isCollapsed ? <ChevronRight size="$1.5" /> : <ChevronLeft size="$1.5" />}
        </Button>
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
    <Sheet open={open} onOpenChange={setOpen} modal snapPoints={[90]}>
      <Sheet.Trigger asChild>
        <Button circular>
          <MenuSquare size="$1.5" />
        </Button>
      </Sheet.Trigger>
      {/* <Sheet.Overlay /> */}
      <Sheet.Content alignItems="flex-start" justifyContent="flex-start">
        <YStack gap="$4" paddingTop="$6" paddingHorizontal="$4" flex={1} height="100%" width={300} backgroundColor="$background">
          {renderContent()}
          <Button onPress={() => setOpen(false)} chromeless>
            Fechar
          </Button>
        </YStack>
      </Sheet.Content>
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
