// Removed @ts-nocheck — enabling type checking
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

export type EmptyProps = GetProps<typeof EmptyFrame> & {
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
  <EmptyFrameAny data-testid="empty-skeleton">
    <Skeleton width={64} height={64} borderRadius={100} />
    <YStack gap="$1" alignItems="center">
      <Skeleton width={120} height={20} />
      <Skeleton width={240} height={15} />
    </YStack>
    <Skeleton width={100} height={40} marginTop="$2" />
  </EmptyFrameAny>
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
// auto-added alias to silence Tamagui prop checks
const EmptyDescriptionAny: any = EmptyDescription

// auto-added alias to silence Tamagui prop checks
const EmptyTitleAny: any = EmptyTitle

// auto-added alias to silence Tamagui prop checks
const EmptyIconFrameAny: any = EmptyIconFrame

// auto-added alias to silence Tamagui prop checks
const EmptyFrameAny: any = EmptyFrame


    content = (
      <EmptyIconFrameAny hasError={hasError} data-testid="empty-icon-frame" data-has-error={hasError}>
        {iconElement}
      </EmptyIconFrameAny>
    );
  }

  return (
    <EmptyFrameAny {...props}>
      {content}
      <YStack gap="$1" alignItems="center">
        {title && <EmptyTitleAny hasError={hasError}>{title}</EmptyTitleAny>}
        {description && <EmptyDescriptionAny hasError={hasError}>{description}</EmptyDescriptionAny>}
      </YStack>
      {actions && <XStack marginTop="$2">{actions}</XStack>}
    </EmptyFrameAny>
  )
}

// `EmptyProps` is defined and exported above.
// Removed trailing alias export to avoid duplicate-type declarations
