import { styled, GetProps, Stack } from 'tamagui'

export const NavLinkFrame = styled(Stack, {
  name: 'NavLink',
  tag: 'a',
  padding: '$3',
  borderRadius: '$4',
  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },
})

export type NavLinkProps = GetProps<typeof NavLinkFrame>

export const NavLink = NavLinkFrame

export default NavLink
