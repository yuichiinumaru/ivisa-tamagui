import { Skeleton } from '../../atoms/Skeleton'
import React from 'react'
import { Anchor, Button, GetProps, Text, XStack, styled } from 'tamagui'

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
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = '/',
  ariaLabel = 'Navegação',
  isLoading = false,
  rightSlot = null,
}) => {
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

  return (
    <BreadcrumbRoot role="navigation" aria-label={ariaLabel}>
      <BreadcrumbList role="list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const linkRel = item.rel ?? (item.target === '_blank' ? 'noreferrer noopener' : undefined)

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
        })}
      </BreadcrumbList>

      {rightSlot && <XStack>{rightSlot}</XStack>}
    </BreadcrumbRoot>
  )
}

Breadcrumb.displayName = 'Breadcrumb'
