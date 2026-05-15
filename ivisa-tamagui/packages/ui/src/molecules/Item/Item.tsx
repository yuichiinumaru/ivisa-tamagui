// @ts-nocheck
import { Skeleton } from '../../atoms/Skeleton'
import { GetProps, Text, XStack, YStack, styled } from 'tamagui'

import type { ReactElement, ReactNode } from 'react'

const ItemFrame = styled(XStack, {
  name: 'Item',
  tag: 'li',

  alignItems: 'center',
  gap: '$3',
  padding: '$3',
  borderRadius: '$md',
  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },

  variants: {
    hasError: {
      true: {
        borderColor: '$red10',
        borderWidth: 1,
      },
    },

    isDisabled: {
      true: {
        opacity: 0.5,
      },
    },
  } as const,
})

const ItemIcon = styled(YStack, {
  name: 'ItemIcon',
  paddingHorizontal: '$1',
})

const ItemContent = styled(YStack, {
  name: 'ItemContent',
  flex: 1,
  gap: '$1',
})

const ItemText = styled(Text, {
  name: 'ItemText',
  fontSize: '$3',
  fontWeight: '500',
  ellipse: true,
})

const ItemSubtitle = styled(Text, {
  name: 'ItemSubtitle',
  fontSize: '$2',
  color: '$gray11',
  ellipse: true,
})

const ItemValue = styled(Text, {
  name: 'ItemValue',
  fontSize: '$3',
  color: '$mutedForeground',
})

const ItemRightSlot = styled(YStack, {
  name: 'ItemRightSlot',
})

type ItemData = {
  icon?: ReactElement
  text?: string
  subtitle?: string
  value?: string
}

export type ItemProps = GetProps<typeof ItemFrame> & {
  item?: ItemData
  rightSlot?: ReactNode
  isLoading?: boolean
}

const ItemComponent = ({ item, rightSlot, isLoading, ...props }: ItemProps) => {
  if (isLoading) {
    return (
      <ItemFrame {...props}>
        <Skeleton height={40} />
      </ItemFrame>
    )
  }

  const { icon, text, subtitle, value } = item || {}

  return (
    <ItemFrame {...props}>
      {icon && <ItemIcon>{icon}</ItemIcon>}
      <ItemContent>
        {text && <ItemText>{text}</ItemText>}
        {subtitle && <ItemSubtitle>{subtitle}</ItemSubtitle>}
      </ItemContent>
      {value && <ItemValue>{value}</ItemValue>}
      {rightSlot && <ItemRightSlot>{rightSlot}</ItemRightSlot>}
    </ItemFrame>
  )
}

export const Item = ItemComponent

// `ItemProps` is defined and exported above.
// Removed trailing alias export to avoid duplicate-type declarations
