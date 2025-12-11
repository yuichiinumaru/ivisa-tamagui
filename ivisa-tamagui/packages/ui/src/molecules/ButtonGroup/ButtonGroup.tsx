import { XStack, styled, GetProps } from 'tamagui'
import React from 'react'
import { Skeleton } from '../../atoms/Skeleton'

const ButtonGroupFrame = styled(XStack, {
  name: 'ButtonGroup',
  gap: '$2',
  alignItems: 'center',
})

type ButtonGroupProps = GetProps<typeof ButtonGroupFrame> & {
  isDisabled?: boolean
  isLoading?: boolean
  hasError?: boolean
  rightSlot?: React.ReactNode
}

export const ButtonGroup = ({
  children,
  isDisabled = false,
  isLoading = false,
  hasError = false,
  rightSlot,
  ...props
}: ButtonGroupProps) => {
  const childCount = React.Children.count(children)

  if (isLoading) {
    return (
      <ButtonGroupFrame {...props}>
        {Array.from({ length: childCount > 0 ? childCount : 3 }).map((_, i) => (
          <Skeleton key={i} height="$4" width="$10" />
        ))}
        {rightSlot}
      </ButtonGroupFrame>
    )
  }

  const items = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const buttonProps: { disabled?: boolean; borderColor?: string } = {}

      if (isDisabled) {
        buttonProps.disabled = true
      }
      if (hasError) {
        buttonProps.borderColor = '$red10'
      }

      return React.cloneElement(child as React.ReactElement<any>, buttonProps)
    }
    return child
  })

  return (
    <ButtonGroupFrame {...props}>
      {items}
      {rightSlot}
    </ButtonGroupFrame>
  )
}
