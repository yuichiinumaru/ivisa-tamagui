// @ts-nocheck
import { Check, ChevronDown, XCircle } from '@tamagui/lucide-icons'
import React, { useMemo, useState } from 'react'
import { ListItem, ScrollView, Text, YGroup, YStack } from 'tamagui'
import { Button } from '../../atoms/Button'
import { Input } from '../../atoms/Input'
import { Skeleton } from '../../atoms/Skeleton'
import { Popover, PopoverContent, PopoverTrigger } from '../../molecules/Popover'

export interface AutocompleteOption {
  label: string
  value: string | number
}

export interface AutocompleteProps {
  options: AutocompleteOption[]
  value?: AutocompleteOption | null
  onValueChange?: (value: AutocompleteOption | null) => void
  placeholder?: string
  emptyMessage?: string
  errorMessage?: string
  isLoading?: boolean
  hasError?: boolean
}

export const Autocomplete = ({
  options,
  value,
  onValueChange,
  placeholder = 'Selecione...',
  emptyMessage = 'Nenhuma opção encontrada.',
  errorMessage = 'Ocorreu um erro.',
  isLoading = false,
  hasError = false,
}: AutocompleteProps) => {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')

  const filteredOptions = useMemo(() => {
    if (!search) return options
    return options.filter((opt) => opt.label.toLowerCase().includes(search.toLowerCase()))
  }, [options, search])

  const handleSelect = (option: AutocompleteOption) => {
    onValueChange?.(option)
    setOpen(false)
    setSearch('')
  }

  if (isLoading) {
    return <Skeleton width="100%" height={40} />
  }

  if (hasError) {
    return (
      <YStack gap="$2" alignItems="center" padding="$4" backgroundColor="$red2" borderRadius="$4">
        <XCircle color="$red10" />
        <Text color="$red10">{errorMessage}</Text>
      </YStack>
    )
  }

  return (
    <Popover open={open} onOpenChange={setOpen} placement="bottom-start">
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          justifyContent="space-between"
          width="100%"
          iconAfter={ChevronDown}
          flex={1}
        >
          <Text numberOfLines={1} ellipse>
            {value ? value.label : placeholder}
          </Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent padding={0} width="100%" minWidth={200}>
        <YStack padding="$2" borderBottomWidth={1} borderBottomColor="$borderColor">
          <Input placeholder="Buscar..." value={search} onChangeText={setSearch} />
        </YStack>
        <ScrollView maxHeight={200} keyboardShouldPersistTaps="handled">
          {filteredOptions.length === 0 ? (
            <YStack gap="$2" padding="$4" alignItems="center" justifyContent="center">
              <Text color="$color11">{emptyMessage}</Text>
            </YStack>
          ) : (
            <YGroup>
              {filteredOptions.map((option) => (
                <YGroup.Item key={option.value}>
                  <ListItem
                    hoverTheme
                    pressTheme
                    onPress={() => handleSelect(option)}
                    icon={value?.value === option.value ? Check : undefined}
                  >
                    <Text>{option.label}</Text>
                  </ListItem>
                </YGroup.Item>
              ))}
            </YGroup>
          )}
        </ScrollView>
      </PopoverContent>
    </Popover>
  )
}
