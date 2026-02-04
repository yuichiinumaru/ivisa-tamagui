import React, { useState, KeyboardEvent } from 'react'
import { Input } from '../../atoms/Input/Input'
import { Send } from '@tamagui/lucide-icons'
import { GetProps, TextInput } from 'tamagui'

export type InputGPTProps = {
  onSend?: (value: string) => void
  placeholder?: string
} & GetProps<typeof Input.Field>

export const InputGPT = React.forwardRef<
  TextInput,
  InputGPTProps
>(({ onSend, placeholder = 'Envie uma mensagem...', ...props }, ref) => {
  const [text, setText] = useState('')

  const handleAction = () => {
    if (text.trim()) {
      onSend?.(text)
      setText('')
    }
  }

  const handleKeyDown = (
    e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleAction()
    }
  }

  return (
    <Input size="lg" variant="filled" paddingRight="$2">
      <Input.Field
        ref={ref}
        {...props}
        value={text}
        onChangeText={setText}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        multiline
      />
      <Input.Button
        size="sm"
        circular
        icon={Send}
        disabled={!text.trim()}
        onPress={handleAction}
        backgroundColor={text.trim() ? '$primary' : 'transparent'}
        hoverStyle={{
          backgroundColor: text.trim() ? '$primaryHover' : 'transparent',
        }}
      />
    </Input>
  )
})

InputGPT.displayName = 'InputGPT'
