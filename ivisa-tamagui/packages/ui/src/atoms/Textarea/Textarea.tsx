import React from 'react'
import {
  TextArea as TamaguiTextArea,
  styled,
  GetProps,
  XStack,
  YStack,
} from 'tamagui'
import { StyleProp, TextStyle } from 'react-native'

import { Label } from '../Label'
import { Spinner } from '../Spinner'
import { withErrorLogging } from '../../utils/withErrorLogging'

const StyledTextarea = styled(TamaguiTextArea, {
  name: 'Textarea',
  fontFamily: '$body',
  color: '$foreground',
  backgroundColor: 'transparent',
  placeholderTextColor: '$color.gray10',
  borderColor: 'transparent',
  borderWidth: 0,
  width: '100%',
  minHeight: 120,
  px: '$0',
  py: '$0',
  focusStyle: {
    borderColor: 'transparent',
    borderWidth: 0,
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
  /**
   * The visual style of the textarea.
   * @default 'default'
   */
  variant?: StyledTextareaProps['variant']
  /**
   * The size of the textarea.
   * @default 'default'
   */
  size?: StyledTextareaProps['size']
  /**
   * If true, the textarea will be displayed in an invalid state.
   * @default false
   */
  invalid?: boolean
  /**
   * Custom style for the textarea.
   */
  style?: StyleProp<TextStyle>
  /**
   * The label for the textarea.
   */
  label?: string
  /**
   * An icon to display on the left side of the textarea.
   */
  leftIcon?: React.ReactNode
  /**
   * An icon to display on the right side of the textarea.
   */
  rightIcon?: React.ReactNode
  /**
   * If true, the textarea will be in a loading state.
   * @default false
   */
  loading?: boolean
}

/**
 * Textarea Component
 *
 * A multi-line input field based on Tamagui TextArea.
 * Supports variants, error states, and strict typing.
 */
const TextareaImpl = React.forwardRef<React.ElementRef<typeof TamaguiTextArea>, TextareaProps>(
  (
    {
      variant = 'default',
      size = 'default',
      invalid = false,
      style,
      label,
      leftIcon,
      rightIcon,
      loading = false,
      ...props
    },
    ref
  ) => {
    const id = React.useId()

    return (
      <YStack width="100%" space="$2">
        {label && <Label htmlFor={id}>{label}</Label>}
        <XStack
          alignItems="center"
          space="$2"
          borderColor={invalid ? '$destructive' : '$borderColor'}
          borderWidth={1}
          borderRadius="$sm"
          px="$3"
          py="$2"
          focusStyle={{
            borderColor: '$ring',
            borderWidth: 2,
          }}
          hoverStyle={{
            borderColor: '$borderColorHover',
          }}
          pressStyle={{
            borderColor: '$borderColorPress',
          }}
        >
          {leftIcon}
          <StyledTextarea
            ref={ref}
            id={id}
            variant={variant}
            size={size}
            invalid={invalid || undefined}
            aria-invalid={invalid}
            style={style}
            disabled={loading || props.disabled}
            {...props}
          />
          {loading ? <Spinner /> : rightIcon}
        </XStack>
      </YStack>
    )
  }
)

TextareaImpl.displayName = 'Textarea'

export const Textarea = withErrorLogging<TextareaProps, React.ElementRef<typeof TamaguiTextArea>>(
  'Textarea',
  TextareaImpl
)

