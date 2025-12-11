import React from 'react'
import { GetProps, styled, Text, XStack, YStack } from 'tamagui'

import { Label, LabelProps } from '../../atoms/Label'
import { Skeleton } from '../../atoms/Skeleton'

// --- Styled Components (Building Blocks) ---

const FieldFrame = styled(YStack, {
  name: 'Field',
  gap: '$2',
})

// We export the original Label component as Field.Label
const FieldLabel = Label

const FieldControlFrame = styled(YStack, {
  name: 'FieldControl',
  flex: 1,
})

const FieldErrorFrame = styled(Text, {
  name: 'FieldError',
  color: '$destructive',
  fontSize: '$2',
})

// --- Main Component (The "Puppeteer") ---

type FieldRootProps = GetProps<typeof FieldFrame> & {
  /**
   * When true, displays a skeleton loader instead of the field's content.
   * @default false
   */
  isLoading?: boolean
  /**
   * When true, applies an error state to the label and input control.
   * @default false
   */
  hasError?: boolean
  /**
   * When true, disables the label and input control.
   * @default false
   */
  isDisabled?: boolean
  /**
   * A ReactNode to be rendered to the right of the input control, typically for action buttons.
   */
  rightSlot?: React.ReactNode
  children: React.ReactNode
}

const FieldRoot = ({
  isLoading = false,
  hasError = false,
  isDisabled = false,
  rightSlot,
  children,
  ...props
}: FieldRootProps) => {
  if (isLoading) {
    return (
      <FieldFrame {...props}>
        <Skeleton height="$4" width="$20" />
        <Skeleton height="$10" />
      </FieldFrame>
    )
  }

  const childrenArray = React.Children.toArray(children)

  const finalChildren = childrenArray.map((child, index) => {
    if (!React.isValidElement(child)) {
      return child
    }

    // Direct comparison with the imported component reference is the most reliable way.
    if (child.type === FieldLabel) {
      return React.cloneElement(child as React.ReactElement<LabelProps>, {
        key: `field-child-${index}`,
        state: hasError ? 'error' : undefined,
        disabled: isDisabled,
      })
    }

    if (child.type === FieldControlFrame) {
      const inputChild = React.Children.only(child.props.children)

      const clonedInput = React.cloneElement(
        inputChild as React.ReactElement<any>,
        {
          state: hasError ? 'error' : undefined,
          disabled: isDisabled,
        }
      )

      const finalControl = React.cloneElement(
        child,
        { key: `field-child-${index}` },
        clonedInput
      )

      if (rightSlot) {
        return (
          <XStack key={`field-child-${index}`} gap="$2" alignItems="center">
            {finalControl}
            {rightSlot}
          </XStack>
        )
      }
      return finalControl
    }

    return child
  })

  return <FieldFrame {...props}>{finalChildren}</FieldFrame>
}

FieldRoot.displayName = 'Field'

// --- Exports ---
// This follows the compound component pattern like Tamagui's Select or Input
export const Field = Object.assign(FieldRoot, {
  Label: FieldLabel,
  Control: FieldControlFrame,
  Error: FieldErrorFrame,
})
