import React from 'react'
import { styled } from 'tamagui'

import { withErrorLogging } from '../../utils/withErrorLogging'

const StyledTextarea = styled('textarea', {
  name: 'Textarea',
  fontFamily: '$body',
  color: '$foreground',
  backgroundColor: '$background',
  placeholderTextColor: '$color.gray10',
  borderColor: '$borderColor',
  borderWidth: 1,
  borderRadius: '$3',
  width: '100%',
  minHeight: 120,
  px: '$3',
  py: '$2',
  outlineStyle: 'none',
  transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
  focusStyle: {
    borderColor: '$ring',
    borderWidth: 2,
  },
  disabledStyle: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  variants: {
    variant: {
      default: {},
      filled: {
        backgroundColor: '$muted',
        borderColor: 'transparent',
        focusStyle: {
          borderColor: '$ring',
          boxShadow: '0 0 0 1px $colors$ring',
        },
      },
      subtle: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderBottomColor: '$borderColor',
        borderBottomWidth: 1,
        borderRadius: 0,
        px: 0,
        focusStyle: {
          borderBottomColor: '$ring',
          boxShadow: 'none',
        },
      },
    },
    size: {
      sm: {
        minHeight: 96,
        fontSize: '$2',
        lineHeight: 20,
        px: '$2',
        py: '$2',
      },
      default: {
        minHeight: 124,
        fontSize: '$3',
      },
      lg: {
        minHeight: 156,
        fontSize: '$4',
        px: '$4',
        py: '$3',
      },
    },
    invalid: {
      true: {
        borderColor: '$destructive',
        boxShadow: '0 0 0 1px $colors$destructive',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface TextareaProps
  extends Omit<React.ComponentProps<typeof StyledTextarea>, 'variant' | 'size' | 'resize'> {
  variant?: 'default' | 'filled' | 'subtle'
  size?: 'sm' | 'default' | 'lg'
  resize?: 'vertical' | 'none' | 'both'
  invalid?: boolean
}

type TextareaResize = NonNullable<TextareaProps['resize']>

const resizeStyles: Record<TextareaResize, React.CSSProperties> = {
  vertical: { resize: 'vertical' },
  none: { resize: 'none' },
  both: { resize: 'both' },
}

import { log } from '../../utils/log'

const TextareaImpl = React.forwardRef<React.ElementRef<typeof StyledTextarea>, TextareaProps>(
  (
    {
      variant = 'default',
      size = 'default',
      resize = 'vertical',
      invalid = false,
      rows,
      style,
      ...props
    },
    ref
  ) => {
    log('Textarea: focusStyle modified for cross-platform compatibility.');
    return (
      <StyledTextarea
        ref={ref}
        variant={variant}
        size={size}
        invalid={invalid || undefined}
        rows={rows ?? (size === 'lg' ? 6 : size === 'sm' ? 3 : 4)}
        aria-invalid={invalid || undefined}
        style={{ ...resizeStyles[resize], ...style }}
        {...props}
      />
    )
  }
)

TextareaImpl.displayName = 'Textarea'

export const Textarea = withErrorLogging<TextareaProps, React.ElementRef<typeof StyledTextarea>>(
  'Textarea',
  TextareaImpl
)