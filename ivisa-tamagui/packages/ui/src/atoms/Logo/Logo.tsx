import { styled, GetProps, Image } from 'tamagui'

export const LogoFrame = styled(Image, {
  name: 'Logo',
  width: 120,
  height: 40,
  resizeMode: 'contain',
})

export type LogoProps = GetProps<typeof LogoFrame>

export const Logo = LogoFrame

export default Logo
