import React, { useState } from 'react';
import { YStack, AnimatePresence, useMedia } from 'tamagui';
import { Sheet, SheetTrigger, SheetContent } from '../../molecules/Sheet';
import { Button } from '../../atoms/Button';
import { ChevronLeft, ChevronRight, Menu } from '@tamagui/lucide-icons';

// Defining the props interface for the Sidebar component
interface SidebarProps {
  children: React.ReactNode;
  variant?: 'collapsible' | 'fixed' | 'floating';
}

export const Sidebar = ({ children, variant = 'fixed' }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const media = useMedia();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

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
  const desktopSidebar = (
    <AnimatePresence>
      <YStack
        animation="medium"
        width={isCollapsed && variant === 'collapsible' ? 60 : 280}
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
            top={20}
            right={-15}
            zIndex={20}
          />
        )}
      </YStack>
    </AnimatePresence>
  );

  return desktopSidebar;
};
