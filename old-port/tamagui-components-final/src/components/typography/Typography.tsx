import React from 'react'
import { Paragraph, Text, styled } from 'tamagui'

import { withErrorLogging } from '../../utils/withErrorLogging'

const StyledHeading = styled(Text, {
  name: 'Heading',
  fontFamily: '$heading',
  fontWeight: '600',
  color: '$foreground',
  letterSpacing: -0.5,
  marginBottom: '$3',
  variants: {
    level: {
      1: { fontSize: '$8', lineHeight: 44 },
      2: { fontSize: '$7', lineHeight: 40 },
      3: { fontSize: '$6', lineHeight: 32 },
      4: { fontSize: '$5', lineHeight: 28 },
    },
    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },
  },
  defaultVariants: {
    level: 2,
    align: 'left',
  },
})

const StyledText = styled(Paragraph, {
  name: 'TypographyText',
  fontFamily: '$body',
  color: '$foreground',
  lineHeight: 24,
  marginBottom: '$3',
  variants: {
    size: {
      sm: { fontSize: '$2', lineHeight: 20 },
      base: { fontSize: '$3', lineHeight: 24 },
      lg: { fontSize: '$4', lineHeight: 28 },
    },
    weight: {
      regular: { fontWeight: '400' },
      medium: { fontWeight: '500' },
      semibold: { fontWeight: '600' },
    },
    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'regular',
    align: 'left',
  },
})

const StyledMutedText = styled(StyledText, {
  name: 'MutedText',
  color: '$mutedForeground',
})

const StyledLeadText = styled(StyledText, {
  name: 'LeadText',
  fontSize: '$5',
  lineHeight: 32,
  color: '$mutedForeground',
})

const StyledBlockquote = styled('blockquote', {
  name: 'Blockquote',
  fontStyle: 'italic',
  backgroundColor: '$muted',
  color: '$foreground',
  borderLeftWidth: 4,
  borderLeftColor: '$primary',
  paddingVertical: '$3',
  paddingHorizontal: '$4',
  marginVertical: '$3',
})

export interface HeadingProps extends Omit<React.ComponentProps<typeof StyledHeading>, 'level'> {
  level?: 1 | 2 | 3 | 4
}

const HeadingImpl = React.forwardRef<React.ElementRef<typeof StyledHeading>, HeadingProps>(
  ({ level = 2, children, role, accessibilityRole, ...props }, ref) => {
    const finalRole = role ?? 'heading'
    const finalAccessibilityRole = accessibilityRole ?? 'header'

    return (
      <StyledHeading
        ref={ref}
        level={level}
        role={finalRole}
        accessibilityRole={finalAccessibilityRole}
        aria-level={level}
        {...props}
      >
        {children}
      </StyledHeading>
    )
  }
)

HeadingImpl.displayName = 'Heading'

export interface TypographyTextProps extends React.ComponentProps<typeof StyledText> {}

const TypographyTextImpl = React.forwardRef<React.ElementRef<typeof StyledText>, TypographyTextProps>(
  ({ children, role, accessibilityRole, ...props }, ref) => {
    return (
      <StyledText
        ref={ref}
        role={role ?? undefined}
        accessibilityRole={accessibilityRole ?? undefined}
        {...props}
      >
        {children}
      </StyledText>
    )
  }
)

TypographyTextImpl.displayName = 'TypographyText'

const MutedTextImpl = React.forwardRef<React.ElementRef<typeof StyledMutedText>, React.ComponentProps<typeof StyledMutedText>>(
  ({ children, role, accessibilityRole, ...props }, ref) => {
    return (
      <StyledMutedText
        ref={ref}
        role={role ?? undefined}
        accessibilityRole={accessibilityRole ?? undefined}
        {...props}
      >
        {children}
      </StyledMutedText>
    )
  }
)

MutedTextImpl.displayName = 'MutedText'

const LeadTextImpl = React.forwardRef<React.ElementRef<typeof StyledLeadText>, React.ComponentProps<typeof StyledLeadText>>(
  ({ children, role, accessibilityRole, ...props }, ref) => {
    return (
      <StyledLeadText
        ref={ref}
        role={role ?? undefined}
        accessibilityRole={accessibilityRole ?? undefined}
        {...props}
      >
        {children}
      </StyledLeadText>
    )
  }
)

LeadTextImpl.displayName = 'LeadText'

const BlockquoteImpl = React.forwardRef<React.ElementRef<typeof StyledBlockquote>, React.ComponentProps<typeof StyledBlockquote>>(
  ({ children, role, accessibilityRole, ...props }, ref) => {
    const finalRole = role ?? undefined
    const finalAccessibilityRole = accessibilityRole ?? 'summary'

    return (
      <StyledBlockquote
        ref={ref}
        role={finalRole}
        accessibilityRole={finalAccessibilityRole}
        {...props}
      >
        {children}
      </StyledBlockquote>
    )
  }
)

BlockquoteImpl.displayName = 'Blockquote'

export const Heading = withErrorLogging<HeadingProps, React.ElementRef<typeof StyledHeading>>('Heading', HeadingImpl)
export const TypographyText = withErrorLogging<TypographyTextProps, React.ElementRef<typeof StyledText>>('TypographyText', TypographyTextImpl)
export const MutedText = withErrorLogging<React.ComponentProps<typeof StyledMutedText>, React.ElementRef<typeof StyledMutedText>>('MutedText', MutedTextImpl)
export const LeadText = withErrorLogging<React.ComponentProps<typeof StyledLeadText>, React.ElementRef<typeof StyledLeadText>>('LeadText', LeadTextImpl)
export const Blockquote = withErrorLogging<React.ComponentProps<typeof StyledBlockquote>, React.ElementRef<typeof StyledBlockquote>>('Blockquote', BlockquoteImpl)
