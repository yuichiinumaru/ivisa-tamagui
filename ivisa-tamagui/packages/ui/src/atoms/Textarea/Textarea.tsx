import React from 'react'
import { TextArea as TamaguiTextArea, styled, GetProps } from 'tamagui'

import { withErrorLogging } from '../../utils/withErrorLogging'

const StyledTextarea = styled(TamaguiTextArea, {
  name: 'Textarea',
  fontFamily: '$body',
  color: '$foreground',
  backgroundColor: '$background',
  placeholderTextColor: '$color.gray10',
  borderColor: '$borderColor',
  borderWidth: 1,
  borderRadius: '$sm',
  width: '100%',
  minHeight: 120,
  px: '$3',
  py: '$2',
  focusStyle: {
    borderColor: '$ring',
    borderWidth: 2,
  },
  disabledStyle: {
    opacity: 0.6,
  },
  variants: {
    variant: {
      default: {},
      filled: {
        backgroundColor: '$muted',
        borderColor: 'transparent',
        focusStyle: {
          borderColor: '$ring',
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
        },
      },
    },
    size: {
      sm: {
        minHeight: 96,
        fontSize: '$2',
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
      },
    },
  } as const,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

type StyledTextareaProps = GetProps<typeof StyledTextarea>

export interface TextareaProps
  extends Omit<StyledTextareaProps, 'variant' | 'size'> {
  variant?: StyledTextareaProps['variant']
  size?: StyledTextareaProps['size']
  invalid?: boolean
}

const TextareaImpl = React.forwardRef<React.ElementRef<typeof TamaguiTextArea>, TextareaProps>(
  (
    {
      variant = 'default',
      size = 'default',
      invalid = false,
      ...props
    },
    ref
  ) => {
    return (
      <StyledTextarea
        ref={ref}
        variant={variant}
        size={size}
        invalid={invalid || undefined}
        aria-invalid={invalid}
        style={{ resize: 'vertical' } as any}
        {...props}
      />
    )
  }
)

TextareaImpl.displayName = 'Textarea'

export const Textarea = withErrorLogging<TextareaProps, React.ElementRef<typeof TamaguiTextArea>>(
  'Textarea',
  TextareaImpl
)
