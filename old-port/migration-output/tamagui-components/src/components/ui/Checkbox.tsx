import React from 'react'
import { View, Text } from 'tamagui'
import styled from '@tamagui/styled-components'

const CheckboxContainer = styled(View, {
  name: 'CheckboxContainer',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$2',
})

const CheckboxInput = styled(View, {
  name: 'CheckboxInput',
  width: '$4',
  height: '$4',
  borderRadius: '$2',
  borderWidth: 2,
  borderColor: '$borderColor',
  justifyContent: 'center',
  alignItems: 'center',
  variants: {
    checked: {
      true: {
        backgroundColor: '$primary',
        borderColor: '$primary',
      },
      false: {
        backgroundColor: 'transparent',
      }
    },
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      }
    }
  }
})

const CheckboxCheckmark = styled(View, {
  name: 'CheckboxCheckmark',
  width: '$2',
  height: '$2',
  backgroundColor: '$background',
  borderRadius: '50%',
  opacity: 0,
  variants: {
    checked: {
      true: {
        opacity: 1,
      }
    }
  }
})

const CheckboxLabel = styled(Text, {
  name: 'CheckboxLabel',
  fontSize: '$3',
  color: '$foreground',
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
      }
    }
  }
})

interface CheckboxProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  id?: string
  children?: React.ReactNode
}

export const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>(
  ({ checked = false, onCheckedChange, disabled = false, id, children }, ref) => {
    return (
      <CheckboxContainer ref={ref}>
        <CheckboxInput
          checked={checked}
          disabled={disabled}
          onClick={() => !disabled && onCheckedChange?.(!checked)}
          role="checkbox"
          aria-checked={checked}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
        >
          <CheckboxCheckmark checked={checked} />
        </CheckboxInput>
        {children && (
          <CheckboxLabel disabled={disabled}>
            {children}
          </CheckboxLabel>
        )}
      </CheckboxContainer>
    )
  }
)

Checkbox.displayName = 'Checkbox'
