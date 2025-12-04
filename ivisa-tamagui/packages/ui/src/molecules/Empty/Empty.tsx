import { Stack, Text, Image, GetProps, styled } from 'tamagui'
import React, { cloneElement } from 'react'

const EmptyFrame = styled(Stack, {
  name: 'Empty',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$4',
  gap: '$2',
})

const EmptyImage = styled(Image, {
  width: 100,
  height: 100,
  resizeMode: 'contain',
})

const EmptyTitle = styled(Text, {
  fontSize: '$5',
  fontWeight: '600',
  textAlign: 'center',
})

const EmptyDescription = styled(Text, {
  fontSize: '$3',
  color: '$mutedForeground',
  textAlign: 'center',
})

type EmptyProps = GetProps<typeof EmptyFrame> & {
  icon?: React.ReactElement
  imageSource?: GetProps<typeof Image>['source']
  title?: string
  description?: string
  children?: React.ReactNode
}

export const Empty = ({
  icon,
  imageSource,
  title,
  description,
  children,
  ...props
}: EmptyProps) => {
  return (
    <EmptyFrame {...props}>
      {icon && cloneElement(icon, { size: 48, color: '$mutedForeground' })}
      {imageSource && <EmptyImage source={imageSource} />}
      {title && <EmptyTitle>{title}</EmptyTitle>}
      {description && <EmptyDescription>{description}</EmptyDescription>}
      {children}
    </EmptyFrame>
  )
}
