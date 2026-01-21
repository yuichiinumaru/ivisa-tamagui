// @ts-nocheck
import { Input, InputProps } from '../../atoms/Input'
import { Button, ButtonProps } from '../../atoms/Button'
import { Spinner, XStack, styled } from 'tamagui'
import { cloneElement, Children } from 'react'

const InputGroupFrame = styled(XStack, {
  name: 'InputGroup',
  alignItems: 'center',
  borderWidth: 1,
  borderRadius: '$2',
  borderColor: '$borderColor',
  paddingHorizontal: '$3',

  variants: {
    hasError: {
      true: {
        borderColor: '$red10',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        backgroundColor: '$background',
      },
    },
  },
})

export type InputGroupProps = {
  children: React.ReactNode
  isLoading?: boolean
  hasError?: boolean
  isDisabled?: boolean
}

export const InputGroup = ({
  children,
  isLoading,
  hasError,
  isDisabled,
}: InputGroupProps) => {
  const childrenArray = Children.toArray(children)

  return (
    <InputGroupFrame hasError={hasError} disabled={isDisabled} gap="$2">
      {Children.map(childrenArray, (child: any) => {
        if (child.type === Input) {
          return cloneElement(child as React.ReactElement<InputProps>, {
            disabled: isDisabled,
            borderWidth: 0,
            backgroundColor: 'transparent',
            flex: 1,
            focusStyle: {
              borderWidth: 0,
              outlineWidth: 0,
            }
          })
        }
        if (child.type === Button) {
          return cloneElement(child as React.ReactElement<ButtonProps>, {
            disabled: isDisabled || isLoading,
            variant: 'ghost',
          })
        }
        return child
      })}
      {isLoading && <Spinner />}
    </InputGroupFrame>
  )
}

