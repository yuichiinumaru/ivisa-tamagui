import { XGroup, styled, GetProps } from 'tamagui'
import React from 'react'

const ButtonGroupFrame = styled(XGroup, {
  // Styles for the group container
})

export const ButtonGroupItem = XGroup.Item

type ButtonGroupProps = GetProps<typeof ButtonGroupFrame>

export const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
  return <ButtonGroupFrame {...props}>{children}</ButtonGroupFrame>
}
