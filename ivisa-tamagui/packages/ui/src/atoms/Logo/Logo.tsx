import { FC } from 'react'
import { Svg, Path } from 'react-native-svg'
import { Stack, StackProps, useTheme } from 'tamagui'
import { Slot } from '@tamagui/core'

// These are simple placeholder SVGs. In a real-world scenario,
// these would be complex paths from a design file.

const FullLogoSVG: FC<{ color: string }> = ({ color }) => (
  <Svg width="107" height="24" viewBox="0 0 107 24" fill="none">
    {/* I */}
    <Path d="M10 4h4v16h-4V4z" fill={color} />
    {/* V */}
    <Path d="M18 4h4l3 10 3-10h4l-5 16h-4L18 4z" fill={color} />
    {/* I */}
    <Path d="M36 4h4v16h-4V4z" fill={color} />
    {/* S */}
    <Path d="M44 4h10v4H48v2h6v10H44v-4h6v-2h-6V4z" fill={color} />
    {/* A */}
    <Path d="M58 4h10v16h-4v-6h-2v6h-4V4zm4 4v2h2V8h-2z" fill={color} />
  </Svg>
)

const SymbolLogoSVG: FC<{ color: string }> = ({ color }) => (
  <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <Path
      d="M20 0L24.4893 5.51071L30 3.81966L31.1803 10L37.3197 8.81966L36.1803 15L40 20L36.1803 25L37.3197 31.1803L31.1803 30L30 36.1803L24.4893 34.4893L20 40L15.5107 34.4893L10 36.1803L8.81966 30L2.68034 31.1803L3.81966 25L0 20L3.81966 15L2.68034 8.81966L8.81966 10L10 3.81966L15.5107 5.51071L20 0Z"
      fill={color}
    />
  </Svg>
)

export interface LogoProps extends Omit<StackProps, 'color'> {
  /**
   * Renderiza o componente como um filho, permitindo a composição com outros componentes.
   * @default false
   */
  asChild?: boolean
  /**
   * Define a variante do logo a ser exibida.
   * `full`: Exibe o logo completo (símbolo + texto).
   * `symbol`: Exibe apenas o símbolo do logo.
   * @default 'full'
   */
  variant?: 'full' | 'symbol'
  /**
   * Define a cor do logo.
   * `primary`: Usa a cor primária do tema.
   * `white`: Usa a cor branca.
   * @default 'primary'
   */
  color?: 'primary' | 'white'
  children?: React.ReactNode
}

export const Logo: FC<LogoProps> = ({
  asChild = false,
  variant = 'full',
  color = 'primary',
  ...props
}) => {
  const theme = useTheme()
  const logoColor = color === 'primary' ? theme.blue10?.val ?? '#0000FF' : '#FFFFFF'
  const Component = asChild ? Slot : Stack

  return (
    <Component
      name="Logo"
      width={variant === 'full' ? 107 : 40}
      height={variant === 'full' ? 24 : 40}
      alignItems="center"
      justifyContent="center"
      aria-label="Logo da empresa"
      role="img"
      {...props}
    >
      {variant === 'full' ? (
        <FullLogoSVG color={logoColor} />
      ) : (
        <SymbolLogoSVG color={logoColor} />
      )}
    </Component>
  )
}

export default Logo
