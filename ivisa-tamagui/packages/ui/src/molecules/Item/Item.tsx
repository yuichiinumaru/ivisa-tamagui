import { XStack, Text, GetProps, styled } from 'tamagui'
import React, { cloneElement } from 'react'

const ItemFrame = styled(XStack, {
  name: 'Item',
  alignItems: 'center',
  gap: '$3',
  padding: '$3',
  borderRadius: '$md',
  hoverStyle: {
    backgroundColor: '$muted',
  },
})

const ItemText = styled(Text, {
  name: 'ItemText',
  fontSize: '$3',
  fontWeight: '500',
  flex: 1,
})

const ItemValue = styled(Text, {
  name: 'ItemValue',
  fontSize: '$3',
  color: '$mutedForeground',
})

type ItemProps = GetProps<typeof ItemFrame> & {
  icon?: React.ReactElement
  text?: string
  value?: string
}

export const Item = ({ icon, text, value, ...props }: ItemProps) => {
  return (
    <ItemFrame {...props}>
      {icon && cloneElement(icon, { size: 20 })}
      {text && <ItemText>{text}</ItemText>}
      {value && <ItemValue>{value}</ItemValue>}
    </ItemFrame>
  )
}
