import React from 'react'
import { GetProps, styled, XStack, YStack, H3, Paragraph } from 'tamagui'
import { Separator } from '../../atoms/Separator'

const PageHeaderFrame = styled(YStack, {
  name: 'PageHeader',
  gap: '$4',
  paddingBottom: '$4',
  width: '100%',
})

const HeaderTop = styled(XStack, {
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  flexWrap: 'wrap',
  gap: '$4',
})

const HeaderContent = styled(YStack, {
  gap: '$1',
  flex: 1,
})

const PageTitle = styled(H3, {
  color: '$foreground',
})

const PageDescription = styled(Paragraph, {
  color: '$mutedForeground',
})

const PageActions = styled(XStack, {
  gap: '$2',
  alignItems: 'center',
})

export type PageHeaderProps = GetProps<typeof PageHeaderFrame> & {
  title: string
  description?: string
  actions?: React.ReactNode
}

export const PageHeader = React.forwardRef<React.ElementRef<typeof PageHeaderFrame>, PageHeaderProps>(
  ({ title, description, actions, children, ...props }, ref) => {
    return (
      <PageHeaderFrame ref={ref} {...props}>
        <HeaderTop>
          <HeaderContent>
            <PageTitle>{title}</PageTitle>
            {description && <PageDescription>{description}</PageDescription>}
          </HeaderContent>
          {actions && <PageActions>{actions}</PageActions>}
        </HeaderTop>
        {children}
        <Separator />
      </PageHeaderFrame>
    )
  }
)

PageHeader.displayName = 'PageHeader'
