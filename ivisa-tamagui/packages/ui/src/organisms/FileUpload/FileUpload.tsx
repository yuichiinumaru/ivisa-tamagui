import React, { useRef } from 'react'
import { YStack, styled, GetProps, Text } from 'tamagui'
import { Upload } from '@tamagui/lucide-icons'

const FileUploadFrame = styled(YStack, {
  name: 'FileUpload',
  borderWidth: 2,
  borderColor: '$borderColor',
  borderStyle: 'dashed',
  borderRadius: '$md',
  padding: '$6',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$background',
  hoverStyle: {
    borderColor: '$primary',
    backgroundColor: '$muted',
  },
})

export interface FileUploadProps extends GetProps<typeof FileUploadFrame> {
  onFileSelect?: (file: File | { name: string; size: number }) => void
  accept?: string
}

export const FileUpload = ({ onFileSelect, accept, ...props }: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handlePress = () => {
    if (typeof document !== 'undefined' && inputRef.current) {
        inputRef.current.click()
    } else {
        console.warn("Native file picker not implemented")
        onFileSelect?.({ name: 'demo.jpg', size: 1024 })
    }
  }

  const handleWebChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
          onFileSelect?.(e.target.files[0])
      }
  }

  return (
    <FileUploadFrame onPress={handlePress} cursor="pointer" {...props}>
      <Upload size={32} color="$mutedForeground" />
      <YStack space="$2" alignItems="center" marginTop="$4">
        <Text fontWeight="bold">Click to upload</Text>
        <Text fontSize="$2" color="$mutedForeground">SVG, PNG, JPG or GIF</Text>
      </YStack>
      {typeof document !== 'undefined' && (
          <input
            type="file"
            ref={inputRef}
            style={{ display: 'none' }}
            onChange={handleWebChange}
            accept={accept}
            data-testid="file-input"
          />
      )}
    </FileUploadFrame>
  )
}
