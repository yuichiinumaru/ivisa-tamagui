import React, { useState, useEffect } from 'react';
import { YStack, AnimatePresence, useMedia, View } from 'tamagui';
import { Sheet, SheetTrigger, SheetContent } from '../../molecules/Sheet';
import { Button } from '../../atoms/Button';
import { ChevronLeft, ChevronRight, Menu } from '@tamagui/lucide-icons';

// 💀 The Rite of Resurrection: Magic Number Exorcism
const CONSTANTS = {
  WIDTH_EXPANDED: 280,
  WIDTH_COLLAPSED: 60,
  TOGGLE_OFFSET: -15,
  TOGGLE_TOP: 20,
} as const;

interface SidebarProps {
  children: React.ReactNode;
  variant?: 'collapsible' | 'fixed' | 'floating';
}

// 💀 The Rite of Resurrection: Hydration Guard
const HydrationGuard = ({ children, fallback = null }: { children: React.ReactNode, fallback?: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return <>{fallback}</>;
  return <>{children}</>;
};

// 💀 Optimization: Extracted components to prevent re-mounting on parent render
const MobileSidebar = ({ children }: { children: React.ReactNode }) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button icon={Menu} circular size="$4" />
    </SheetTrigger>
    <SheetContent position="left" size="$20">
      <YStack space="$4" paddingTop="$8">
        {children}
      </YStack>
    </SheetContent>
  </Sheet>
);

interface DesktopSidebarProps {
  children: React.ReactNode;
  isCollapsed: boolean;
  toggleSidebar: () => void;
  variant: SidebarProps['variant'];
}

const DesktopSidebar = ({ children, isCollapsed, toggleSidebar, variant = 'fixed' }: DesktopSidebarProps) => (
  <AnimatePresence>
    <YStack
      animation="medium"
      width={isCollapsed && variant === 'collapsible' ? CONSTANTS.WIDTH_COLLAPSED : CONSTANTS.WIDTH_EXPANDED}
      borderRightWidth={1}
      borderColor="$borderColor"
      padding="$4"
      space="$2"
      {...(variant === 'floating' && {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        backgroundColor: '$background',
        zIndex: 10,
      })}
    >
      {children}
      {variant === 'collapsible' && (
        <Button
          icon={isCollapsed ? ChevronRight : ChevronLeft}
          onPress={toggleSidebar}
          circular
          size="$3"
          position="absolute"
          top={CONSTANTS.TOGGLE_TOP}
          right={CONSTANTS.TOGGLE_OFFSET}
          zIndex={20}
        />
      )}
    </YStack>
  </AnimatePresence>
);

export const Sidebar = ({ children, variant = 'fixed' }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const media = useMedia();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <HydrationGuard fallback={<View width={CONSTANTS.WIDTH_EXPANDED} />}>
      {media.sm ? (
        <MobileSidebar>{children}</MobileSidebar>
      ) : (
        <DesktopSidebar
          isCollapsed={isCollapsed}
          toggleSidebar={toggleSidebar}
          variant={variant}
        >
          {children}
        </DesktopSidebar>
      )}
    </HydrationGuard>
  );
};
