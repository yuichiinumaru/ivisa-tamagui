import React, { useState, useEffect } from 'react'
import { XStack, YStack, Text } from 'tamagui'
import { Input } from '../../atoms/Input'
// import { Select } from '../../molecules/Select'
// import { DatePicker } from '../../molecules/DatePicker'
import { Select, Adapt, Sheet } from 'tamagui'
// Mocking DatePicker for now as it might be causing issues or we use a simpler one
// import { DatePicker } from '../../molecules/DatePicker'
import { Button } from '../../atoms/Button'
import { Search, Filter } from '@tamagui/lucide-icons'

export interface FilterOption {
  label: string
  value: string
}

export interface FilterConfig {
  id: string
  type: 'text' | 'select' | 'date'
  label?: string
  placeholder?: string
  options?: FilterOption[]
}

export interface FilterBarProps {
  filters: FilterConfig[]
  onFilterChange: (values: Record<string, any>) => void
  initialValues?: Record<string, any>
}

export const FilterBar = ({ filters, onFilterChange, initialValues = {} }: FilterBarProps) => {
  const [values, setValues] = useState<Record<string, any>>(initialValues)

  const handleChange = (id: string, value: any) => {
    const newValues = { ...values, [id]: value }
    setValues(newValues)
    onFilterChange(newValues)
  }

  return (
    <YStack gap="$4" padding="$4" borderWidth={1} borderColor="$borderColor" borderRadius="$4">
      <XStack alignItems="center" gap="$2">
        <Filter size={16} />
        <Text fontWeight="bold">Filtros</Text>
      </XStack>

      <XStack flexWrap="wrap" gap="$4">
        {filters.map((filter) => (
          <YStack key={filter.id} gap="$2" flex={1} minWidth={200}>
            {filter.label && <Text fontSize="$2">{filter.label}</Text>}

            {filter.type === 'text' && (
              <Input
                placeholder={filter.placeholder}
                value={values[filter.id] || ''}
                onChangeText={(text) => handleChange(filter.id, text)}
                // Also support standard onChange for web compatibility if needed
                onChange={(e: any) => handleChange(filter.id, e.target.value)}
              />
            )}

            {filter.type === 'select' && (
              <Select
                value={values[filter.id]}
                onValueChange={(val) => handleChange(filter.id, val)}
              >
                <Select.Trigger placeholder={filter.placeholder}>
                  <Select.Value placeholder={filter.placeholder} />
                </Select.Trigger>
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
                <Select.Content>
                  <Select.Viewport>
                    <Select.Group>
                        {filter.label && <Select.Label>{filter.label}</Select.Label>}
                        {filter.options?.map((opt, i) => (
                        <Select.Item key={opt.value} index={i} value={opt.value}>
                            <Select.ItemText>{opt.label}</Select.ItemText>
                            <Select.ItemIndicator marginLeft="auto" />
                        </Select.Item>
                        ))}
                    </Select.Group>
                  </Select.Viewport>
                </Select.Content>
              </Select>
            )}

            {filter.type === 'date' && (
                <Text>Date Picker Placeholder</Text>
            )}
          </YStack>
        ))}
      </XStack>

      <XStack justifyContent="flex-end" gap="$2">
          <Button
            theme="active"
            onPress={() => {
                setValues({})
                onFilterChange({})
            }}
          >
              Limpar
          </Button>
      </XStack>
    </YStack>
  )
}
