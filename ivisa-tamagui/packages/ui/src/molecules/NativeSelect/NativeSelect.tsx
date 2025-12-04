import React, { forwardRef } from 'react'
import { styled, Stack } from 'tamagui'
import { ChevronDown } from '@tamagui/lucide-icons'

const SelectFrame = styled(Stack, {
  name: 'NativeSelect',
  position: 'relative',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$md',
  height: 40,
  justifyContent: 'center',
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const NativeSelect = forwardRef<HTMLSelectElement, any>(({ children, ...props }, ref) => {
  return (
    <SelectFrame>
      <select
        ref={ref}
        style={{
            appearance: 'none',
            background: 'transparent',
            border: 'none',
            width: '100%',
            height: '100%',
            outline: 'none',
            paddingLeft: '12px',
            paddingRight: '32px',
        }}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        size={16}
        position="absolute"
        right="$3"
        pointerEvents="none"
        color="$color10"
      />
    </SelectFrame>
  )
})
