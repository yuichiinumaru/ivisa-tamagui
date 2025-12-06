import React, { useState, useMemo } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../../molecules/Popover'
import { Input } from '../../atoms/Input'
import { Button } from '../../atoms/Button'
import { YStack, ScrollView, Text, ListItem, YGroup } from 'tamagui'
import { Check, ChevronDown } from '@tamagui/lucide-icons'

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
}

export const Autocomplete = ({
  options,
  value,
  onValueChange,
  placeholder = "Select...",
  emptyMessage = "No options found."
}: AutocompleteProps) => {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')

  const filteredOptions = useMemo(() => {
    if (!search) return options
    return options.filter(opt => opt.label.toLowerCase().includes(search.toLowerCase()))
  }, [options, search])

  const handleSelect = (option: AutocompleteOption) => {
    onValueChange?.(option)
    setOpen(false)
    setSearch('')
  }

  return (
    <Popover open={open} onOpenChange={setOpen} placement="bottom-start">
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          justifyContent="space-between"
          width={200}
        >
          <Text numberOfLines={1}>
            {value ? value.label : placeholder}
          </Text>
          <ChevronDown size={16} />
        </Button>
      </PopoverTrigger>
      <PopoverContent padding={0} width={200}>
        <YStack padding="$sm" borderBottomWidth={1} borderBottomColor="$borderColor">
          <Input
            placeholder="Search..."
            value={search}
            onChangeText={setSearch}
          // autoFocus // Can be problematic on mobile
          />
        </YStack>
        <ScrollView maxHeight={200} keyboardShouldPersistTaps="handled">
          {filteredOptions.length === 0 ? (
            <YStack padding="$md" alignItems="center">
              <Text color="$mutedForeground">{emptyMessage}</Text>
            </YStack>
          ) : (
            <YGroup>
              {filteredOptions.map(option => (
                <YGroup.Item key={option.value}>
                  <ListItem
                    hoverTheme
                    pressTheme
                    onPress={() => handleSelect(option)}
                    icon={value?.value === option.value ? Check : undefined}
                    cursor="pointer"
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
