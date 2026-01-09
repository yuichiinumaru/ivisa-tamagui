import { Ban } from '@tamagui/lucide-icons'
import React from 'react'
import { YStack, Text, GetProps, styled, Image, ImageProps } from 'tamagui'
import { cloneElement } from 'react'
import { Skeleton } from '../../atoms/Skeleton'
import { XStack } from 'tamagui'

const EmptyFrame = styled(YStack, {
  name: 'Empty',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$4',
  gap: '$2',
})

const EmptyIconFrame = styled(YStack, {
  name: 'EmptyIcon',
  padding: '$3',
  borderRadius: 100,
  backgroundColor: '$background',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    hasError: {
      true: {
        backgroundColor: '$red2',
      },
    },
  },
})

const EmptyTitle = styled(Text, {
  name: 'EmptyTitle',
  fontSize: '$5',
  fontWeight: '600',
  textAlign: 'center',
  ellipse: true,
  variants: {
    hasError: {
      true: {
        color: '$red10',
      },
    },
  },
})

const EmptyDescription = styled(Text, {
  name: 'EmptyDescription',
  fontSize: '$3',
  color: '$gray10',
  textAlign: 'center',
  ellipse: true,
  variants: {
    hasError: {
      true: {
        color: '$red10',
      },
    },
  },
})

type EmptyProps = GetProps<typeof EmptyFrame> & {
  icon?: React.ReactElement
  image?: string
  imageProps?: ImageProps
  title?: string
  description?: string
  actions?: React.ReactNode
  isLoading?: boolean
  hasError?: boolean
}

const EmptySkeleton = () => (
  <EmptyFrame data-testid="empty-skeleton">
    <Skeleton width={64} height={64} borderRadius={100} />
    <YStack gap="$1" alignItems="center">
      <Skeleton width={120} height={20} />
      <Skeleton width={240} height={15} />
    </YStack>
    <Skeleton width={100} height={40} marginTop="$2" />
  </EmptyFrame>
)

export const Empty = ({
  icon,
  image,
  imageProps,
  title,
  description,
  actions,
  isLoading = false,
  hasError = false,
  ...props
}: EmptyProps) => {
  if (isLoading) {
    return <EmptySkeleton />
  }

  let content;

  if (image) {
     content = (
      <Image
        source={{ uri: image }}
        width={200}
        height={150}
        resizeMode="contain"
        {...imageProps}
      />
     )
  } else {
    const iconElement = icon ? (
      cloneElement(icon, {
        size: 32,
        color: hasError ? '$red10' : '$gray10',
      })
    ) : (
      <Ban size={32} color={hasError ? '$red10' : '$gray10'} />
    );

    content = (
      <EmptyIconFrame hasError={hasError} data-testid="empty-icon-frame" data-has-error={hasError}>
        {iconElement}
      </EmptyIconFrame>
    );
  }

  return (
    <EmptyFrame {...props}>
      {content}
      <YStack gap="$1" alignItems="center">
        {title && <EmptyTitle hasError={hasError}>{title}</EmptyTitle>}
        {description && <EmptyDescription hasError={hasError}>{description}</EmptyDescription>}
      </YStack>
      {actions && <XStack marginTop="$2">{actions}</XStack>}
    </EmptyFrame>
  )
}

export type EmptyProps = React.ComponentProps<typeof Empty>

export type EmptySkeletonProps = React.ComponentProps<typeof EmptySkeleton>
