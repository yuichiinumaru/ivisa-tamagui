
import { ReactNode } from 'react'
import { GetProps, H5, Paragraph, styled, XStack, YStack } from 'tamagui'
import { Skeleton } from '../../atoms/Skeleton'

const HorizontalBarGroupFrame = styled(XStack, {
  name: 'HorizontalBarGroup',
  tag: 'li',
  padding: '$4',
  gap: '$4',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$2',

  variants: {
    error: {
      true: {
        borderColor: '$red10',
      },
    },

    disabled: {
      true: {
        opacity: 0.5,
        backgroundColor: '$background',
      },
    },
  } as const,
})

const HorizontalBarGroupContent = styled(YStack, {
  name: 'HorizontalBarGroupContent',
  gap: '$1',
  flex: 1,
})

const HorizontalBarGroupActions = styled(XStack, {
  name: 'HorizontalBarGroupActions',
  gap: '$2',
  justifyContent: 'flex-end',
})

type HorizontalBarGroupProps = GetProps<typeof HorizontalBarGroupFrame> & {
  item?: {
    title?: string
    subtitle?: string
  }
  title?: string
  subtitle?: string
  actions?: ReactNode
  isLoading?: boolean
  hasError?: boolean
}

const HorizontalBarGroup = HorizontalBarGroupFrame.styleable<HorizontalBarGroupProps>(
  (
    {
      item,
      title: titleProp,
      subtitle: subtitleProp,
      actions,
      isLoading = false,
      hasError = false,
      ...props
    },
    ref
  ) => {
    const title = item?.title ?? titleProp
    const subtitle = item?.subtitle ?? subtitleProp

    return (
      <HorizontalBarGroupFrame ref={ref} error={hasError} {...props}>
        <HorizontalBarGroupContent>
          {isLoading ? (
            <Skeleton height={20} width={180} />
          ) : (
            title && (
              <H5 ellipse>
                {title}
              </H5>
            )
          )}
          {isLoading ? (
            <Skeleton height={14} width={280} />
          ) : (
            subtitle && (
              <Paragraph theme="alt2" ellipse>
                {subtitle}
              </Paragraph>
            )
          )}
        </HorizontalBarGroupContent>

        {actions && <HorizontalBarGroupActions>{actions}</HorizontalBarGroupActions>}
      </HorizontalBarGroupFrame>
    )
  }
)

export { HorizontalBarGroup, HorizontalBarGroupFrame }
export type { HorizontalBarGroupProps }
