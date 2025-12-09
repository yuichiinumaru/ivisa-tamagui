import React, { useState } from 'react';
import { YStack, AnimatePresence } from 'tamagui';
import { Sheet, SheetContent } from '../../molecules/Sheet';
import { Button } from '../../atoms/Button';
import { ChevronLeft, ChevronRight, Menu } from '@tamagui/lucide-icons';

// --- Constants ---
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

// --- Components ---

const MobileSidebar = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    // 🛡️ CSS-based Responsive Visibility
    // Visible only on 'sm' (mobile). Hidden on desktop.
    <YStack display="none" $sm={{ display: 'flex' }}>
      <Sheet open={open} onOpenChange={setOpen}>
        <Button icon={Menu} circular size="$md" onPress={() => setOpen(true)} />
        <SheetContent position="left" size="$xl">
          <YStack space="$md" paddingTop="$2xl">
            {children}
            {/* Close button inside content since SheetClose is missing */}
            <Button onPress={() => setOpen(false)} size="$sm" chromeless>
              Close
            </Button>
          </YStack>
        </SheetContent>
      </Sheet>
    </YStack>
  );
};

interface DesktopSidebarProps {
  children: React.ReactNode;
  isCollapsed: boolean;
  toggleSidebar: () => void;
  variant: SidebarProps['variant'];
}

const DesktopSidebar = ({ children, isCollapsed, toggleSidebar, variant = 'fixed' }: DesktopSidebarProps) => (
  // 🛡️ CSS-based Responsive Visibility
  // Visible on desktop. Hidden on 'sm' (mobile).
  <YStack display="flex" $sm={{ display: 'none' }}>
    <AnimatePresence>
      <YStack
        animation="bouncy"
        width={isCollapsed && variant === 'collapsible' ? CONSTANTS.WIDTH_COLLAPSED : CONSTANTS.WIDTH_EXPANDED}
        borderRightWidth={1}
        borderColor="$borderColor"
        padding="$lg"
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
            size="$sm"
            position="absolute"
            top={CONSTANTS.TOGGLE_TOP}
            right={CONSTANTS.TOGGLE_OFFSET}
            zIndex={20}
          />
        )}
      </YStack>
    </AnimatePresence>
  </YStack>
);

/**
 * Sidebar Component
 *
 * Uses CSS media queries to toggle between Mobile (Sheet) and Desktop (Side Panel) modes.
 * This prevents FOUC (Flash of Unstyled Content) caused by JS-based media hooks during SSR.
 */
export const Sidebar = ({ children, variant = 'fixed' }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <MobileSidebar>{children}</MobileSidebar>
      <DesktopSidebar
        isCollapsed={isCollapsed}
        toggleSidebar={toggleSidebar}
        variant={variant}
      >
        {children}
      </DesktopSidebar>
    </>
  );
};
