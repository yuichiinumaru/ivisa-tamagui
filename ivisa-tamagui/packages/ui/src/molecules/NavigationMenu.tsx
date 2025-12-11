import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { GetProps, styled, YStack, XStack } from 'tamagui'
import { Skeleton } from '../atoms/Skeleton'

const NavigationMenu = styled(NavigationMenuPrimitive.Root, {
  name: 'NavigationMenu',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  variants: {
    hasError: {
      true: {
        borderColor: '$red10',
        borderWidth: 1,
        borderRadius: '$4',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    },
  },
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

const NavigationMenuItem = styled(NavigationMenuPrimitive.Item, {
  name: 'NavigationMenuItem',
  tag: 'li',
})

const NavigationMenuTrigger = styled(NavigationMenuPrimitive.Trigger, {
  name: 'NavigationMenuTrigger',
  ellipse: true,
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
  ellipse: true,
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

type NavigationMenuProps = GetProps<typeof NavigationMenu> & {
  isLoading?: boolean
  rightSlot?: React.ReactNode
}

const NavigationMenuComponent = ({
  children,
  isLoading,
  rightSlot,
  ...props
}: NavigationMenuProps) => {
  if (isLoading) {
    return (
      <XStack alignItems="center" gap="$4">
        <Skeleton height={32} width={120} />
        <Skeleton height={32} width={120} />
        <Skeleton height={32} width={120} />
      </XStack>
    )
  }

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList>
        {children}
        {rightSlot}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export {
  NavigationMenuComponent as NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  IndicatorArrow,
}
