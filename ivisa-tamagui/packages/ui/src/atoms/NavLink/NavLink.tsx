import { GetProps, Stack, Text, styled } from 'tamagui'
import { cloneElement } from 'react'
import type { ReactElement, ReactNode } from 'react'

export const NavLinkFrame = styled(Stack, {
  name: 'NavLink',
  tag: 'a',
  alignItems: 'center',
  flexDirection: 'row',
  gap: '$2',
  padding: '$3',
  borderRadius: '$4',
  backgroundColor: '$background',
  cursor: 'pointer',

  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },

  focusStyle: {
    outlineColor: '$blue10',
    outlineStyle: 'solid',
    outlineWidth: 2,
  },

  pressStyle: {
    backgroundColor: '$backgroundPress',
  },
})

export type NavLinkProps = GetProps<typeof NavLinkFrame> & {
  /**
   * O conteúdo de texto principal a ser exibido.
   */
  children: ReactNode
  /**
   * Um ícone a ser exibido à esquerda do texto.
   */
  leftIcon?: ReactElement
  /**
   * Um ícone a ser exibido à direita do texto.
   */
  rightIcon?: ReactElement
}

export const NavLink = NavLinkFrame.styleable<NavLinkProps>(
  ({ children, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <NavLinkFrame ref={ref} {...props}>
        {leftIcon && cloneElement(leftIcon, { size: '$1' })}
        <Text>{children}</Text>
        {rightIcon && cloneElement(rightIcon, { size: '$1' })}
      </NavLinkFrame>
    )
  }
)

export default NavLink

export type NavLinkFrameProps = React.ComponentProps<typeof NavLinkFrame>

