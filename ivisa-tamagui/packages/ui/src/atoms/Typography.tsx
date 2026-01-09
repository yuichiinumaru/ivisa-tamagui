import React from 'react';
import { styled, H1 as TamaguiH1, H2 as TamaguiH2, H3 as TamaguiH3, H4 as TamaguiH4, H5 as TamaguiH5, H6 as TamaguiH6, Text as TamaguiText, withStaticProperties } from 'tamagui';
import { Skeleton } from './Skeleton';
import { Slot } from '@radix-ui/react-slot';

/**
 * A versatile typography component that can render various text styles, from headings to paragraphs.
 * It supports icon placements, loading states, and different visual variants.
 *
 * @param {React.ReactNode} leftIcon - An icon to display to the left of the text.
 * @param {React.ReactNode} rightIcon - An icon to display to the right of the text.
 * @param {boolean} loading - If true, the component will render a skeleton loader.
 * @param {boolean} asChild - If true, the component will render its children as a slot.
 * @param {React.ReactNode} children - The text content to display.
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'} variant - The semantic HTML tag and style to apply.
 */
export const Typography = React.forwardRef(({ leftIcon, rightIcon, loading, children, variant, asChild, ...props }: any, ref) => {
  const components = {
    h1: TamaguiH1,
    h2: TamaguiH2,
    h3: TamaguiH3,
    h4: TamaguiH4,
    h5: TamaguiH5,
    h6: TamaguiH6,
    p: TamaguiText,
    span: TamaguiText,
  };

  const Component = asChild ? Slot : components[variant] || TamaguiText;

  if (loading) {
    return <Skeleton width="100%" height={props.fontSize || 16} />;
  }

  // Filter out props that leak to DOM
  const { defaultProps, uppercase, ...safeProps } = props;

  return (
    <Component ref={ref} {...safeProps} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', ...props.style }}>
      {leftIcon}
      {children}
      {rightIcon}
    </Component>
  );
});

Typography.displayName = 'Typography';

const commonStyles = {
  hoverStyle: {
    color: '$colorHover',
  },
  focusStyle: {
    color: '$colorFocus',
    outline: '2px solid $blue10',
  },
  pressStyle: {
    color: '$colorPress',
  },
};

export const H1 = styled(Typography, {
  ...commonStyles,
  fontFamily: '$heading',
  fontWeight: '900',
  color: '$color',
  variants: {
    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },
  } as const,
  defaultProps: {
    variant: 'h1',
  },
});

export const H2 = styled(Typography, {
  ...commonStyles,
  fontFamily: '$heading',
  fontWeight: '900',
  color: '$color',
  variants: {
    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },
  } as const,
  defaultProps: {
    variant: 'h2',
  },
});

export const H3 = styled(Typography, {
  ...commonStyles,
  fontFamily: '$heading',
  fontWeight: '500',
  color: '$color',
  defaultProps: {
    variant: 'h3',
  },
});

export const H4 = styled(Typography, {
  ...commonStyles,
  fontFamily: '$heading',
  fontWeight: '500',
  color: '$color',
  defaultProps: {
    variant: 'h4',
  },
});

export const H5 = styled(Typography, {
  ...commonStyles,
  fontFamily: '$heading',
  fontWeight: '500',
  color: '$color',
  defaultProps: {
    variant: 'h5',
  },
});

export const H6 = styled(Typography, {
  ...commonStyles,
  fontFamily: '$heading',
  fontWeight: '500',
  color: '$color',
  defaultProps: {
    variant: 'h6',
  },
});

export const Text = styled(Typography, {
  ...commonStyles,
  fontFamily: '$body',
  fontWeight: '400',
  color: '$color',
  defaultProps: {
    variant: 'span',
  },
});

export const Paragraph = styled(Typography, {
  ...commonStyles,
  tag: 'p',
  fontFamily: '$body',
  fontWeight: '400',
  color: '$color',
  marginBottom: '$2',
  defaultProps: {
    variant: 'p',
  },
});

export const Heading = H1;
export const TypographyText = Text;

export const MutedText = styled(Text, {
  color: '$mutedForeground',
});

export const LeadText = styled(Text, {
  fontSize: '$5',
  fontWeight: '300',
});

export const Blockquote = styled(Text, {
  tag: 'blockquote',
  borderLeftWidth: 2,
  borderLeftColor: '$borderColor',
  paddingLeft: '$4',
  fontStyle: 'italic',
  margin: 0,
});

export type TypographyProps = React.ComponentProps<typeof Typography>

export type H1Props = React.ComponentProps<typeof H1>

export type H2Props = React.ComponentProps<typeof H2>

export type H3Props = React.ComponentProps<typeof H3>

export type H4Props = React.ComponentProps<typeof H4>

export type H5Props = React.ComponentProps<typeof H5>

export type H6Props = React.ComponentProps<typeof H6>

export type TextProps = React.ComponentProps<typeof Text>

export type ParagraphProps = React.ComponentProps<typeof Paragraph>

export type HeadingProps = React.ComponentProps<typeof Heading>

export type TypographyTextProps = React.ComponentProps<typeof TypographyText>

export type MutedTextProps = React.ComponentProps<typeof MutedText>

export type LeadTextProps = React.ComponentProps<typeof LeadText>

export type BlockquoteProps = React.ComponentProps<typeof Blockquote>
