import React, { useState, useEffect } from 'react';
import { YStack, AnimatePresence, useMedia } from 'tamagui';
import { Sheet, SheetTrigger, SheetContent } from '../../molecules/Sheet';
import { Button } from '../../atoms/Button';
import { ChevronLeft, ChevronRight, Menu } from '@tamagui/lucide-icons';

// Defining the props interface for the Sidebar component
interface SidebarProps {
  children: React.ReactNode;
  variant?: 'collapsible' | 'fixed' | 'floating';
}

const SIDEBAR_WIDTH_EXPANDED = 280;
const SIDEBAR_WIDTH_COLLAPSED = 60;
const TOGGLE_BUTTON_OFFSET = -15;
const TOGGLE_BUTTON_TOP = 20;

// 💀 Resurrection: ClientOnly ensures hydration matches
const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;
  return <>{children}</>;
};

export const Sidebar = ({ children, variant = 'fixed' }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const media = useMedia();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Helper function to render content based on media query
  // avoiding nested component definitions which cause remounts
  const renderSidebarContent = () => {
    // On small screens (mobile), render a Sheet with a trigger button
    if (media.sm) {
      return (
        <Sheet>
          <SheetTrigger asChild>
            <Button icon={Menu} circular />
          </SheetTrigger>
          <SheetContent position="left" size="$20">
            <YStack space="$4" paddingTop="$8">
              {children}
            </YStack>
          </SheetContent>
        </Sheet>
      );
    }

    // Desktop view
    return (
      <AnimatePresence>
        <YStack
          animation="medium"
          width={isCollapsed && variant === 'collapsible' ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH_EXPANDED}
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
              position="absolute"
              top={TOGGLE_BUTTON_TOP}
              right={TOGGLE_BUTTON_OFFSET}
              zIndex={20}
            />
          )}
        </YStack>
      </AnimatePresence>
    );
  };

  return (
    <ClientOnly>
      {renderSidebarContent()}
    </ClientOnly>
  );
};
