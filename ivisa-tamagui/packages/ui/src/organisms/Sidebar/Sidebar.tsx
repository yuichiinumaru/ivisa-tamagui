import React from 'react';
import { YStack, useMedia } from 'tamagui';
import { Sheet, SheetTrigger, SheetContent } from '../../molecules/Sheet';
import { Button } from '../../atoms/Button';

// A simple hamburger icon for the trigger
const MenuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const Sidebar = ({ children }) => {
  const media = useMedia();

  // On small screens (mobile), render a Sheet with a trigger button
  if (media.sm) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button icon={MenuIcon} circular />
        </SheetTrigger>
        <SheetContent position="left" size="$20">
          <YStack space="$4" paddingTop="$8">
            {children}
          </YStack>
        </SheetContent>
      </Sheet>
    );
  }

  // On larger screens (desktop), render a fixed YStack
  return (
    <YStack
      width={280}
      borderRightWidth={1}
      borderColor="$borderColor"
      padding="$4"
      space="$2"
    >
      {children}
    </YStack>
  );
};
