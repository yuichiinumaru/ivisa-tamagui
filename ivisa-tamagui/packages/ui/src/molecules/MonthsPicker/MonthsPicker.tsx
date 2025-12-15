import { ChevronDown } from '@tamagui/lucide-icons'
import React, { useMemo } from 'react'
import { Adapt, styled } from 'tamagui'

import { Skeleton } from '../../atoms/Skeleton'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectViewport } from '../Select'
import { Sheet } from '../Sheet'

export interface MonthsPickerProps {
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  isLoading?: boolean
  hasError?: boolean
  isDisabled?: boolean
}

const MonthsPickerTrigger = styled(SelectTrigger, {
  name: 'MonthsPickerTrigger',
  width: 200,
  variants: {
    error: {
      true: {
        borderColor: '$red10',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        backgroundColor: '$gray5',
      },
    },
  },
})

export const MonthsPicker = ({
  value,
  onValueChange,
  placeholder = 'Selecione o Mês',
  isLoading = false,
  hasError = false,
  isDisabled = false,
}: MonthsPickerProps) => {
  const meses = useMemo(
    () => [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    []
  )

  if (isLoading) {
    return <Skeleton width={200} height={35} />
  }

  return (
    <Select value={value} onValueChange={onValueChange} disabled={isDisabled}>
      <MonthsPickerTrigger error={hasError} disabled={isDisabled} iconAfter={ChevronDown}>
        <SelectValue placeholder={placeholder} />
      </MonthsPickerTrigger>

      <Adapt when="sm" platform="touch">
        <Sheet modal dismissOnSnapToBottom>
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <SelectContent>
        <SelectViewport>
          {meses.map((mes, index) => (
            <SelectItem index={index} key={mes} value={mes}>
              {mes}
            </SelectItem>
          ))}
        </SelectViewport>
      </SelectContent>
    </Select>
  )
}
