import { styled, YStack, GetProps, Separator } from 'tamagui'
import { NavLink } from '../../atoms/NavLink/NavLink'

export const NavGroupFrame = styled(YStack, {
  name: 'NavGroup',
  gap: '$2',
})

export type NavGroupProps = GetProps<typeof NavGroupFrame> & {
  items: Array<{ label: string, href: string }>
}

export const NavGroup = NavGroupFrame.styleable<NavGroupProps>((props, ref) => {
  const { items, ...rest } = props
  return (
    <NavGroupFrame ref={ref} {...rest}>
      {items.map((item, i) => (
        <NavLink key={i} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </NavGroupFrame>
  )
})

export default NavGroup
