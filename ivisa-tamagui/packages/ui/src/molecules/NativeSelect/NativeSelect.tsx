import React, { forwardRef } from 'react'
import { styled, Stack, GetProps } from 'tamagui'

const SelectFrame = styled(Stack, {
  name: 'NativeSelect',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$md',
  paddingHorizontal: '$3',
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
        }}
        {...props}
      >
        {children}
      </select>
    </SelectFrame>
  )
})
