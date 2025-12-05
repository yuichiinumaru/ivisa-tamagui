import { styled, H1 as TamaguiH1, H2 as TamaguiH2, H3 as TamaguiH3, H4 as TamaguiH4, H5 as TamaguiH5, H6 as TamaguiH6, Text as TamaguiText } from 'tamagui'

// 💀 The Rite of Resurrection: Decoupling Style from Semantics
export const H1 = styled(TamaguiH1, {
  fontFamily: '$heading',
  fontWeight: '900',
  color: '$color',
  // Removed mandatory uppercase. Use `textTransform="uppercase"` prop if needed.
  variants: {
    uppercase: {
      true: {
        textTransform: 'uppercase',
      }
    }
  } as const
})

export const H2 = styled(TamaguiH2, {
  fontFamily: '$heading',
  fontWeight: '900',
  color: '$color',
  variants: {
    uppercase: {
      true: {
        textTransform: 'uppercase',
      }
    }
  } as const
})

export const H3 = styled(TamaguiH3, {
  fontFamily: '$heading',
  fontWeight: '500',
  color: '$color',
})

export const H4 = styled(TamaguiH4, {
  fontFamily: '$heading',
  fontWeight: '500',
  color: '$color',
})

export const H5 = styled(TamaguiH5, {
  fontFamily: '$heading',
  fontWeight: '500',
  color: '$color',
})

export const H6 = styled(TamaguiH6, {
  fontFamily: '$heading',
  fontWeight: '500',
  color: '$color',
})

export const Text = styled(TamaguiText, {
  fontFamily: '$body',
  fontWeight: '400',
  color: '$color',
})

export const Paragraph = styled(TamaguiText, {
  tag: 'p',
  fontFamily: '$body',
  fontWeight: '400',
  color: '$color',
  marginBottom: '$2',
})

// Aliases
export const Heading = H1
export const TypographyText = Text

export const MutedText = styled(Text, {
  color: '$mutedForeground', // Fixed: $color05 -> semantic token
})

export const LeadText = styled(Text, {
  fontSize: '$5',
  fontWeight: '300',
})

export const Blockquote = styled(Text, {
  tag: 'blockquote',
  borderLeftWidth: 2,
  borderLeftColor: '$borderColor', // Fixed: $color05 -> semantic token
  paddingLeft: '$4',
  fontStyle: 'italic',
  // 💀 Fix: Reset margin for blockquote to prevent browser defaults messing up layout
  margin: 0,
})
