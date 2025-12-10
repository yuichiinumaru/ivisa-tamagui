import {
  GetProps,
  Label as TamaguiLabel,
  SizableText,
  styled,
  TamaguiElement,
} from 'tamagui'
import React from 'react'

const LabelFrame = styled(TamaguiLabel, {
  name: 'Label',
  color: '$color',
  fontSize: '$4',
  fontWeight: '500',
  lineHeight: '$4',
  userSelect: 'none',

  // To align the asterisk correctly
  display: 'inline-flex',
  alignItems: 'center',

  hoverStyle: {
    color: '$colorHover',
  },

  variants: {
    state: {
      error: {
        color: '$red10',
      },
    },
    disabled: {
      true: {
        color: '$colorDisabled',
        cursor: 'not-allowed',
      },
    },
  } as const,
})

type LabelFrameProps = GetProps<typeof LabelFrame>
export type LabelProps = LabelFrameProps & {
  /**
   * If true, an asterisk is displayed next to the label text.
   * @default false
   */
  required?: boolean
}

/**
 * Renders an accessible label associated with a form control.
 * This component extends the Tamagui Label, providing variants for different states
 * and an optional indicator for required fields. It supports polymorphism via the `asChild` prop.
 */
export const Label = React.forwardRef<TamaguiElement, LabelProps>(
  ({ children, required, ...props }, ref) => {
    return (
      <LabelFrame ref={ref} {...props}>
        {children}
        {required && (
          <SizableText color="$red10" ml="$1" aria-hidden="true">
            *
          </SizableText>
        )}
      </LabelFrame>
    )
  }
)
