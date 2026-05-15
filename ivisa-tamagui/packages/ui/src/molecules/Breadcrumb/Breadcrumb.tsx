// @ts-nocheck
import { Skeleton } from '../../atoms/Skeleton'
import React, { useState } from 'react'
import { Anchor, GetProps, Text, XStack, styled } from 'tamagui'
import { Button } from '../../atoms/Button'
import { MoreHorizontal } from '@tamagui/lucide-icons'
import { Popover, PopoverContent, PopoverTrigger } from '../Popover'
import { ListItem, YGroup } from 'tamagui'

const BreadcrumbRoot = styled(XStack, {
  name: 'BreadcrumbRoot',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$4',
  width: '100%',
})

const BreadcrumbList = styled(XStack, {
  name: 'BreadcrumbList',
  gap: '$sm',
  alignItems: 'center',
  flexWrap: 'nowrap',
  overflow: 'hidden',
})

const BreadcrumbItemWrapper = styled(XStack, {
  name: 'BreadcrumbItem',
  alignItems: 'center',
  gap: '$sm',
})

const BreadcrumbSeparator = styled(Text, {
  name: 'BreadcrumbSeparator',
  color: '$mutedForeground',
  fontSize: '$2',
})

const BreadcrumbLink = styled(Anchor, {
  name: 'BreadcrumbLink',
  color: '$foreground',
  fontWeight: '500',
  hoverStyle: {
    color: '$primary',
  },
  ellipse: true,
})

const BreadcrumbButton = styled(Button, {
  name: 'BreadcrumbButton',
  unstyled: true,
  padding: 0,
  minWidth: 0,
  backgroundColor: 'transparent',
  hoverStyle: {
    opacity: 0.8,
  },
})

const BreadcrumbButtonLabel = styled(Text, {
  name: 'BreadcrumbButtonLabel',
  color: '$foreground',
  fontWeight: '500',
  ellipse: true,
})

const BreadcrumbCurrent = styled(Text, {
  name: 'BreadcrumbCurrent',
  color: '$mutedForeground',
  fontWeight: '600',
  ellipse: true,
})

type BreadcrumbButtonProps = GetProps<typeof BreadcrumbButton>

export interface BreadcrumbItem {
  label: string
  href?: string
  onPress?: BreadcrumbButtonProps['onPress']
  target?: string
  rel?: string
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  ariaLabel?: string
  isLoading?: boolean
  rightSlot?: React.ReactNode
  maxItems?: number
  itemsBeforeCollapse?: number
  itemsAfterCollapse?: number
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = '/',
  ariaLabel = 'Navegação',
  isLoading = false,
  rightSlot = null,
  maxItems = 4,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 2,
}) => {
  const [open, setOpen] = useState(false)

  if (isLoading) {
    return (
      <BreadcrumbRoot data-testid="breadcrumb-skeleton">
        <BreadcrumbList>
          <Skeleton height={20} width={80} />
          <Skeleton height={20} width={100} />
          <Skeleton height={20} width={120} />
        </BreadcrumbList>
      </BreadcrumbRoot>
    )
  }

  if (!items || items.length === 0) {
    return null
  }

  const shouldCollapse = items.length > maxItems

  let visibleItems = items
  let collapsedItems: BreadcrumbItem[] = []

  if (shouldCollapse) {
    const start = items.slice(0, itemsBeforeCollapse)
    const end = items.slice(items.length - itemsAfterCollapse)
    collapsedItems = items.slice(itemsBeforeCollapse, items.length - itemsAfterCollapse)
    visibleItems = [...start, { label: '...', href: '#' } as BreadcrumbItem, ...end]
  }

  const renderItem = (item: BreadcrumbItem, index: number, isCollapsedTrigger = false) => {
    const isLast = index === visibleItems.length - 1
    const linkRel = item.rel ?? (item.target === '_blank' ? 'noreferrer noopener' : undefined)

    if (isCollapsedTrigger) {
      return (
        <BreadcrumbItemWrapper key="collapsed-trigger">
          <Popover open={open} onOpenChange={setOpen} placement="bottom-start">
            <PopoverTrigger asChild>
              <Button size="$sm" icon={MoreHorizontal} circular />
            </PopoverTrigger>
            <PopoverContent padding={0} minWidth={150}>
              <YGroup>
                {collapsedItems.map((cItem, cIndex) => (
                  <YGroup.Item key={`collapsed-${cIndex}`}>
                    <ListItem
                      hoverTheme
                      pressTheme
                      onPress={cItem.onPress}
                      // Use href if available by wrapping in Anchor or similar if ListItem supports it,
                      // but for simplicity here treating as pressable
                    >
                      <Text>{cItem.label}</Text>
                    </ListItem>
                  </YGroup.Item>
                ))}
              </YGroup>
            </PopoverContent>
          </Popover>
          <BreadcrumbSeparator aria-hidden={true}>{separator}</BreadcrumbSeparator>
        </BreadcrumbItemWrapper>
      )
    }

    return (
      <BreadcrumbItemWrapper key={`${item.label}-${index}`} role="listitem">
        {isLast ? (
          <BreadcrumbCurrent aria-current="page">{item.label}</BreadcrumbCurrent>
        ) : item.href ? (
          <BreadcrumbLink
            href={item.href}
            target={item.target}
            rel={linkRel}
            onPress={item.onPress}
          >
            {item.label}
          </BreadcrumbLink>
        ) : (
          <BreadcrumbButton onPress={item.onPress}>
            <BreadcrumbButtonLabel>{item.label}</BreadcrumbButtonLabel>
          </BreadcrumbButton>
        )}

        {!isLast && (
          <BreadcrumbSeparator aria-hidden={true}>{separator}</BreadcrumbSeparator>
        )}
      </BreadcrumbItemWrapper>
    )
  }

  return (
    <BreadcrumbRoot role="navigation" aria-label={ariaLabel}>
      <BreadcrumbList role="list">
        {shouldCollapse ? (
          <>
            {items.slice(0, itemsBeforeCollapse).map((item, i) => renderItem(item, i))}
            {renderItem({ label: '...' }, 1, true)}
            {items.slice(items.length - itemsAfterCollapse).map((item, i) => renderItem(item, i + itemsBeforeCollapse + 1))}
          </>
        ) : (
          items.map((item, index) => renderItem(item, index))
        )}
      </BreadcrumbList>

      {rightSlot && <XStack>{rightSlot}</XStack>}
    </BreadcrumbRoot>
  )
}

Breadcrumb.displayName = 'Breadcrumb'
