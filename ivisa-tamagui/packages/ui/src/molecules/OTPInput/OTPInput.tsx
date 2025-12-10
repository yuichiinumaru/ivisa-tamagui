import React from 'react'
import { GetProps, Input as TamaguiInput, YStack, isWeb, styled } from 'tamagui'

import { withErrorLogging } from '../../utils/withErrorLogging'

const OTPInputFrame = styled(YStack, {
  name: 'OTPInputFrame',
  flexDirection: 'row',
  gap: '$sm',
  alignItems: 'center',
})

const OTPCellInput = styled(TamaguiInput, {
  name: 'OTPInputCell',
  width: 48,
  height: '$2xl',
  textAlign: 'center',
  fontSize: '$5',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$md',
  backgroundColor: '$background',
  focusStyle: {
    borderColor: '$ring',
    borderWidth: 2,
  },
})

type FrameProps = GetProps<typeof OTPInputFrame>
type CellProps = GetProps<typeof OTPCellInput>
type OptionalCellProps = Partial<
  Omit<
    CellProps,
    | 'value'
    | 'onChange'
    | 'onChangeText'
    | 'onKeyDown'
    | 'onPaste'
    | 'ref'
    | 'secureTextEntry'
    | 'type'
    | 'inputMode'
    | 'keyboardType'
    | 'disabled'
    | 'editable'
  >
>

type AllowedCharacters = 'numeric' | 'alphanumeric'

const sanitizeChar = (value: string, allowed: AllowedCharacters) => {
  const regex = allowed === 'alphanumeric' ? /[a-z0-9]/i : /\d/
  const match = value.match(regex)
  return match ? match[match.length - 1] : ''
}

const sanitizeToLength = (value: string, allowed: AllowedCharacters, length: number) => {
  const regex = allowed === 'alphanumeric' ? /[a-z0-9]/gi : /\d/g
  const matches = value.match(regex)
  if (!matches) return ''
  return matches.join('').slice(0, length)
}

const valueToArray = (value: string, length: number) => {
  const chars = value.split('').slice(0, length)
  while (chars.length < length) {
    chars.push('')
  }
  return chars
}

export interface OTPInputProps extends Omit<FrameProps, 'children' | 'mask'> {
  length?: number
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  onComplete?: (value: string) => void
  allowedCharacters?: AllowedCharacters
  mask?: boolean
  autoFocus?: boolean
  disabled?: boolean
  inputProps?: OptionalCellProps
}

type ContainerRef = React.ElementRef<typeof OTPInputFrame>
type InputElement = React.ElementRef<typeof TamaguiInput>

const OTPInputImpl = React.forwardRef<ContainerRef, OTPInputProps>(
  (
    {
      length: lengthProp = 6,
      value: valueProp,
      defaultValue = '',
      onChange,
      onComplete,
      allowedCharacters = 'numeric',
      mask = false,
      autoFocus = false,
      disabled = false,
      inputProps,
      ...frameProps
    },
    ref
  ) => {
    const length = React.useMemo(() => Math.max(1, Math.floor(lengthProp)), [lengthProp])

    const [internalValue, setInternalValue] = React.useState(() =>
      sanitizeToLength(defaultValue ?? '', allowedCharacters, length)
    )

    const isControlled = valueProp !== undefined

    const resolvedValue = React.useMemo(
      () => sanitizeToLength((valueProp ?? internalValue) || '', allowedCharacters, length),
      [allowedCharacters, internalValue, length, valueProp]
    )

    React.useEffect(() => {
      if (!isControlled) {
        setInternalValue(prev => sanitizeToLength(prev, allowedCharacters, length))
      }
    }, [allowedCharacters, isControlled, length])

    const inputRefs = React.useRef<Array<InputElement | null>>([])

    const setValue = React.useCallback(
      (next: string) => {
        const sanitized = sanitizeToLength(next, allowedCharacters, length)
        if (!isControlled) {
          setInternalValue(sanitized)
        }
        onChange?.(sanitized)
        return sanitized
      },
      [allowedCharacters, isControlled, length, onChange]
    )

    const valueArray = React.useMemo(() => valueToArray(resolvedValue, length), [resolvedValue, length])

    const focusInput = React.useCallback((index: number) => {
      const node = inputRefs.current[index]
      node?.focus?.()
    }, [])

    const selectInput = React.useCallback((index: number) => {
      if (!isWeb) return
      const node = inputRefs.current[index] as unknown as HTMLInputElement | undefined
      if (node && typeof node.select === 'function') {
        node.select()
      } else if (node && typeof node.setSelectionRange === 'function') {
        node.setSelectionRange(0, node.value?.length ?? 0)
      }
    }, [])

    const notifyCompletion = React.useCallback(
      (chars: string[]) => {
        if (chars.every(Boolean)) {
          onComplete?.(chars.join(''))
        }
      },
      [onComplete]
    )

    const setCharacterAtIndex = React.useCallback(
      (index: number, char: string) => {
        const chars = valueToArray(resolvedValue, length)
        chars[index] = char
        setValue(chars.join(''))
        notifyCompletion(chars)
      },
      [length, notifyCompletion, resolvedValue, setValue]
    )

    const handleInputChange = React.useCallback(
      (index: number, rawValue: string) => {
        const sanitized = sanitizeChar(rawValue.slice(-1), allowedCharacters)
        if (!sanitized) {
          setCharacterAtIndex(index, '')
          return
        }

        setCharacterAtIndex(index, sanitized)
        if (index < length - 1) {
          focusInput(index + 1)
        }
      },
      [allowedCharacters, focusInput, length, setCharacterAtIndex]
    )

    const handlePaste = React.useCallback(
      (index: number, event: React.ClipboardEvent<HTMLInputElement>) => {
        if (!isWeb) return
        event.preventDefault?.()
        const data = event.clipboardData?.getData('text') ?? ''
        const sanitized = sanitizeToLength(data, allowedCharacters, length - index)
        if (!sanitized) return

        const chars = valueToArray(resolvedValue, length)
        sanitized.split('').forEach((char, offset) => {
          if (index + offset < length) {
            chars[index + offset] = char
          }
        })

        setValue(chars.join(''))
        notifyCompletion(chars)

        const nextIndex = Math.min(index + sanitized.length, length - 1)
        focusInput(nextIndex)
        selectInput(nextIndex)
      },
      [allowedCharacters, focusInput, length, notifyCompletion, resolvedValue, selectInput, setValue]
    )

    const handleKeyDown = React.useCallback(
      (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Backspace') {
          const hasValue = valueArray[index]
          if (hasValue) {
            event.preventDefault()
            setCharacterAtIndex(index, '')
          } else if (index > 0) {
            event.preventDefault()
            focusInput(index - 1)
            setCharacterAtIndex(index - 1, '')
          }
        }

        if (event.key === 'ArrowLeft' && index > 0) {
          event.preventDefault()
          focusInput(index - 1)
        }

        if (event.key === 'ArrowRight' && index < length - 1) {
          event.preventDefault()
          focusInput(index + 1)
        }
      },
      [focusInput, length, setCharacterAtIndex, valueArray]
    )

    React.useEffect(() => {
      if (autoFocus) {
        focusInput(0)
        selectInput(0)
      }
    }, [autoFocus, focusInput, selectInput])

    return (
      <OTPInputFrame ref={ref} {...frameProps}>
        {valueArray.map((char, index) => (
          <OTPCellInput
            key={`otp-input-${index}`}
            ref={node => {
              inputRefs.current[index] = node
            }}
            value={char}
            onChange={(event) => {
              // Tamagui Input types match Native, but on web we get a React event
              const e = event as unknown as React.ChangeEvent<HTMLInputElement>
              handleInputChange(index, e.target?.value ?? '')
            }}
            onChangeText={text => handleInputChange(index, text ?? '')}
            {...(isWeb
              ? ({
                onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) =>
                  handleKeyDown(index, event),
                onPaste: (event: React.ClipboardEvent<HTMLInputElement>) =>
                  handlePaste(index, event),
                type: mask ? 'password' : 'text',
                inputMode: allowedCharacters === 'numeric' ? 'numeric' : 'text',
              } as Record<string, unknown>)
              : ({
                keyboardType: allowedCharacters === 'numeric' ? 'number-pad' : 'default',
                secureTextEntry: mask,
                editable: !disabled,
              } as Record<string, unknown>))}
            onFocus={() => selectInput(index)}
            autoFocus={autoFocus && index === 0}
            autoCorrect={false}
            autoCapitalize="none"
            disabled={isWeb ? disabled : undefined}
            {...inputProps}
          />
        ))}
      </OTPInputFrame>
    )
  }
)

OTPInputImpl.displayName = 'OTPInput'

export const OTPInput = withErrorLogging<OTPInputProps, ContainerRef>('OTPInput', OTPInputImpl)
