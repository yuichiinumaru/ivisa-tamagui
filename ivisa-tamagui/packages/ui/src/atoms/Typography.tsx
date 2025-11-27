import { Text, Heading as TamaguiHeading, styled } from 'tamagui'

export const Heading = TamaguiHeading
export const TypographyText = styled(Text, {
  name: 'TypographyText',
  color: '$foreground',
})
export const MutedText = styled(Text, {
  name: 'MutedText',
  color: '$mutedForeground',
})
export const LeadText = styled(Text, {
  name: 'LeadText',
  fontSize: '$5',
  color: '$mutedForeground',
})
export const Blockquote = styled(Text, {
  name: 'Blockquote',
  borderLeftWidth: 2,
  borderLeftColor: '$borderColor',
  paddingLeft: '$4',
  fontStyle: 'italic',
})
