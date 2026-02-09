import React from 'react'
import { Search } from '@tamagui/lucide-icons'
import { GetProps, XStack, styled, Input as TamaguiInput, Text, YStack } from 'tamagui'

const SearchContainer = styled(XStack, {
  name: 'SearchContainer',
  backgroundColor: '$background',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$2',
  paddingHorizontal: '$3',
  alignItems: 'center',
  height: '$10',
  gap: '$2',

  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },
  focusStyle: {
    borderColor: '$ring',
    borderWidth: 2,
  },

  variants: {
    size: {
      sm: { height: '$9', paddingHorizontal: '$2' },
      md: { height: '$10', paddingHorizontal: '$3' },
      lg: { height: '$11', paddingHorizontal: '$4' },
    },
    isError: {
      true: {
        borderColor: '$red10',
      },
    },
  } as const,
  defaultVariants: {
    size: 'md',
  },
})

const StyledInput = styled(TamaguiInput, {
  name: 'SearchInput',
  flex: 1,
  borderWidth: 0,
  backgroundColor: 'transparent',
  fontSize: '$3',
  height: '100%',
  color: '$color',
  
  focusStyle: {
    borderWidth: 0,
    outlineWidth: 0,
  },
})

export type SearchBarProps = GetProps<typeof SearchContainer> & {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeText?: (text: string) => void
  placeholder?: string
  shortcut?: string
  error?: string
}

export const SearchBar = React.forwardRef<HTMLDivElement, SearchBarProps>(
  ({ value, onChange, onChangeText, placeholder = "Buscar...", shortcut, error, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onChangeText?.(e.target.value)
    }

    return (
      <YStack width="100%" gap="$1">
        <SearchContainer 
          ref={ref} 
          isError={!!error} 
          {...props}
        >
          <Search size={18} color="$gray10" />
          
          <StyledInput 
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
          />

          {shortcut && (
            <XStack 
              backgroundColor="$gray3" 
              paddingHorizontal="$2.5" 
              paddingVertical="$1" 
              borderRadius="$2"
              borderWidth={1}
              borderColor="$borderColor"
              marginLeft="$2"
            >
              <Text fontSize="$2" color="$gray11" fontWeight="600">
                {shortcut}
              </Text>
            </XStack>
          )}
        </SearchContainer>
        
        {error && (
          <Text color="$red10" fontSize="$1" marginLeft="$3">
            {error}
          </Text>
        )}
      </YStack>
    )
  }
)

SearchBar.displayName = 'SearchBar'
