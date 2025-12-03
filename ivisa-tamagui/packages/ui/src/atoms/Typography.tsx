import { styled, H1 as TamaguiH1, H2 as TamaguiH2, H3 as TamaguiH3, H4 as TamaguiH4, H5 as TamaguiH5, H6 as TamaguiH6, Text as TamaguiText } from 'tamagui'

export const H1 = styled(TamaguiH1, {
  fontFamily: '$heading',
  fontWeight: '900',
  textTransform: 'uppercase',
  color: '$color',
  // Sizes are usually handled by the theme/font config, but we can enforce defaults here if needed.
  // Using default Tamagui sizing for now which maps to the font config sizes.
})

export const H2 = styled(TamaguiH2, {
  fontFamily: '$heading',
  fontWeight: '900',
  textTransform: 'uppercase',
  color: '$color',
})

export const H3 = styled(TamaguiH3, {
  fontFamily: '$heading',
  fontWeight: '500',
  textTransform: 'uppercase',
  color: '$color',
})

export const H4 = styled(TamaguiH4, {
  fontFamily: '$heading',
  fontWeight: '500',
  textTransform: 'uppercase',
  color: '$color',
})

export const H5 = styled(TamaguiH5, {
  fontFamily: '$heading',
  fontWeight: '500',
  textTransform: 'uppercase',
  color: '$color',
})

export const H6 = styled(TamaguiH6, {
  fontFamily: '$heading',
  fontWeight: '500',
  textTransform: 'uppercase',
  color: '$color',
})

export const Text = styled(TamaguiText, {
  fontFamily: '$body',
  fontWeight: '400',
  color: '$color',
})

export const Paragraph = styled(TamaguiText, { // Often useful to have Paragraph separate
  tag: 'p',
  fontFamily: '$body',
  fontWeight: '400',
  color: '$color',
  marginBottom: '$2',
})
