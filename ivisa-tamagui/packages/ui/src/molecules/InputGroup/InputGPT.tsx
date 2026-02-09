import React, { useState } from 'react'
import { TamaguiElement, XStack, YStack, Text } from 'tamagui'
import { Send, Mic } from '@tamagui/lucide-icons'
import { Input } from '../../atoms/Input/Input'
import { Button } from '../../atoms/Button'

export interface InputGPTProps {
  onSend?: (value: string) => void
  placeholder?: string
  size?: 'sm' | 'default' | 'lg'
  variant?: 'default' | 'filled'
  isLoading?: boolean // Adicionado
  error?: string      // Adicionado
  disabled?: boolean
}

export const InputGPT = React.forwardRef<TamaguiElement, InputGPTProps>(
  (props, ref) => {
    const { onSend, placeholder, size = 'lg', variant = 'filled', isLoading, error, disabled } = props
    const [text, setText] = useState('')

    const handleAction = () => {
      const trimmedText = text.trim()
      if (trimmedText && !isLoading && !disabled) {
        onSend?.(trimmedText)
        setText('')
      }
    }

    // Suporte ao "Enter" para enviar e "Shift + Enter" para quebrar linha
    const handleKeyPress = (e: any) => {
      if (e.nativeEvent.key === 'Enter' && !e.nativeEvent.shiftKey) {
        e.preventDefault() // Evita a quebra de linha
        handleAction()
      }
    }

    return (
      <YStack width="100%" gap="$1.5">
        <Input 
          ref={ref} 
          size={size} 
          variant={variant}
          backgroundColor={disabled ? "$gray3" : "white"}
          borderRadius={100}
          borderWidth={1}
          borderColor={error ? "$red10" : "$borderColor"}
          elevation={2}
          paddingRight="$2"
          paddingLeft="$4"
          opacity={disabled ? 0.6 : 1}
        >
          <Input.Field
            value={text}
            onChangeText={setText}
            placeholder={placeholder || "Como posso ajudar?"}
            multiline
            paddingVertical="$3"
            color="#333"
            onKeyPress={handleKeyPress} // Adicionado suporte a tecla
            disabled={disabled || isLoading}
          />
                  
          <XStack gap="$1" alignItems="center" paddingRight="$2">
            {!text.trim() && (
               <Button 
                  size="sm" 
                  circular 
                  backgroundColor="transparent"
                  borderWidth={0}
                  opacity={0.5} 
                  pressStyle={{ opacity: 0.3 }}
                  disabled={disabled || isLoading}
                >
                  <Mic size={18} color="$gray10" />
                </Button>
            )}

            <Input.Button
              size="sm"
              circular
              disabled={!text.trim() || disabled || isLoading}
              onPress={handleAction}        
              backgroundColor={text.trim() ? '$primary' : 'transparent'}
              borderWidth={0}              
              hoverStyle={{
                backgroundColor: text.trim() ? '$primaryHover' : 'transparent',
              }}
              pressStyle={{ opacity: 0.7 }}
            >
              <Send 
                size={18} 
                color={text.trim() ? 'white' : '$gray10'} 
              />
            </Input.Button>
          </XStack>
        </Input>

        {error && (
          <Text color="$red10" fontSize="$2" marginLeft="$4">
            {error}
          </Text>
        )}
      </YStack>
    )
  }
)

InputGPT.displayName = 'InputGPT'