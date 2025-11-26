import React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { GetProps, styled, XStack, YStack } from 'tamagui'

const NavigationMenu = styled(NavigationMenuPrimitive.Root, {
  name: 'NavigationMenu',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})

const NavigationMenuList = styled(NavigationMenuPrimitive.List, {
  name: 'NavigationMenuList',
  display: 'flex',
  gap: '$2',
  m: 0,
  px: '$1',
  py: '$1',
  borderRadius: '$lg',
  backgroundColor: '$background',
  borderWidth: 1,
  borderColor: '$borderColor',
})

const NavigationMenuItem = NavigationMenuPrimitive.Item

const NavigationMenuTrigger = styled(NavigationMenuPrimitive.Trigger, {
  name: 'NavigationMenuTrigger',
  borderRadius: '$md',
  paddingHorizontal: '$4',
  paddingVertical: '$2',
  color: '$foreground',
  backgroundColor: 'transparent',
  borderWidth: 1,
  borderColor: 'transparent',
  transition: 'all 150ms ease',
  hoverStyle: {
    backgroundColor: '$muted',
  },
  pressStyle: {
    backgroundColor: '$muted',
  },
  focusVisibleStyle: {
    borderColor: '$primary',
  },
})

const NavigationMenuContent = styled(NavigationMenuPrimitive.Content, {
  name: 'NavigationMenuContent',
  position: 'absolute',
  top: 'calc(100% + 0.5rem)',
  left: 0,
  backgroundColor: '$background',
  borderRadius: '$xl',
  borderWidth: 1,
  borderColor: '$borderColor',
  padding: '$4',
  minWidth: 320,
  zIndex: 20,
})

const NavigationMenuLink = styled(NavigationMenuPrimitive.Link, {
  name: 'NavigationMenuLink',
  display: 'block',
  borderRadius: '$lg',
  padding: '$4',
  color: '$foreground',
  hoverStyle: {
    backgroundColor: '$muted',
  },
  focusVisibleStyle: {
    outlineWidth: 2,
    outlineStyle: 'solid',
    outlineColor: '$primary',
  },
})

const NavigationMenuIndicator = styled(NavigationMenuPrimitive.Indicator, {
  name: 'NavigationMenuIndicator',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 10,
  top: '100%',
  transition: 'width, transform 200ms ease',
})

const IndicatorArrow = styled(YStack, {
  width: 20,
  height: 20,
  backgroundColor: '$background',
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderTopWidth: 1,
  borderColor: '$borderColor',
  transform: 'rotate(45deg)',
  marginTop: -8,
})

const NavigationMenuViewport = styled(NavigationMenuPrimitive.Viewport, {
  name: 'NavigationMenuViewport',
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  backgroundColor: '$background',
  borderRadius: '$xl',
  borderWidth: 1,
  borderColor: '$borderColor',
  marginTop: '$2',
  overflow: 'hidden',
})

type NavigationMenuTriggerProps = GetProps<typeof NavigationMenuTrigger>
type NavigationMenuContentProps = GetProps<typeof NavigationMenuContent>

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  IndicatorArrow,
}

export type { NavigationMenuTriggerProps, NavigationMenuContentProps }
