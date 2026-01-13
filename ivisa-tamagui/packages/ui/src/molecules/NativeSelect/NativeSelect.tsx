// @ts-nocheck
import { ChevronDown, AlertCircle } from '@tamagui/lucide-icons'
import React, { forwardRef, useId } from 'react'
import { SelectProps, YStack } from 'tamagui'

import { Skeleton } from '../../atoms/Skeleton'
import { Label, SelectContainer, SelectElement, SelectTrigger } from './NativeSelect.styles'

export interface NativeSelectProps extends SelectProps {
  children: React.ReactNode
  label?: string
  hasError?: boolean
  isLoading?: boolean
  // We already have `disabled` from SelectProps, so no need to redeclare
}

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ children, label, id, hasError = false, isLoading = false, disabled = false, ...props }, ref) => {
    const internalId = useId()
    const selectId = id || internalId

    if (isLoading) {
      return (
        <SelectContainer>
          {label && <Skeleton height={20} width={100} />}
          <Skeleton height={40} />
        </SelectContainer>
      )
    }

    return (
      <SelectContainer>
        {label && (
          <Label htmlFor={selectId} hasError={hasError}>
            {label}
          </Label>
        )}
        <SelectTrigger hasError={hasError} disabled={disabled}>
          <SelectElement id={selectId} ref={ref} disabled={disabled} {...props}>
            {children}
          </SelectElement>
          <YStack pointerEvents="none" position="absolute" right="$3" alignItems="center">
            {hasError ? (
              <AlertCircle size={16} color="$red10" />
            ) : (
              <ChevronDown size={16} color="$color10" />
            )}
          </YStack>
        </SelectTrigger>
      </SelectContainer>
    )
  }
)

NativeSelect.displayName = 'NativeSelect'
