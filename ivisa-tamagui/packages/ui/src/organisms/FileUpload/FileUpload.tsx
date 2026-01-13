// @ts-nocheck
import React, { useRef } from 'react'
import { YStack, styled, GetProps, Text } from 'tamagui'
import { Upload } from '@tamagui/lucide-icons'
import { Skeleton } from '../../atoms/Skeleton'
import { Button } from '../../atoms/Button'

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
  gap: '$4',
  width: '100%',

  variants: {
    hasError: {
      true: {
        borderColor: '$red10',
        backgroundColor: '$red2',
      },
    },
  } as const,
})

export interface FileUploadProps extends GetProps<typeof FileUploadFrame> {
  onFileSelect?: (file: File | { name: string; size: number }) => void
  accept?: string
  title?: string
  subtitle?: string
  isLoading?: boolean
  hasError?: boolean
  errorMessage?: string
}

export const FileUpload = ({
  onFileSelect,
  accept,
  title = 'Clique para enviar um arquivo',
  subtitle = 'SVG, PNG, JPG ou GIF (MAX. 800x400px)',
  isLoading = false,
  hasError = false,
  errorMessage = 'Ocorreu um erro. Tente novamente.',
  ...props
}: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handlePress = () => {
    if (isLoading) return
    if (typeof document !== 'undefined' && inputRef.current) {
      inputRef.current.click()
    } else {
      console.warn('Native file picker not implemented')
      onFileSelect?.({ name: 'demo.jpg', size: 1024 })
    }
  }

  const handleWebChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect?.(e.target.files[0])
    }
  }

  if (isLoading) {
    return (
      <FileUploadFrame {...props}>
        <Skeleton height={32} width={32} borderRadius="$12" />
        <YStack gap="$1" alignItems="center" width="100%">
          <Skeleton height={20} width="60%" />
          <Skeleton height={16} width="80%" />
        </YStack>
      </FileUploadFrame>
    )
  }

  return (
    <FileUploadFrame hasError={hasError} {...props}>
      <Button
        variant="ghost"
        onPress={handlePress}
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        gap="$4"
        disabled={isLoading}
        aria-label={title}
      >
        <Upload size={32} color={hasError ? '$red10' : '$gray10'} />
        <YStack gap="$1" alignItems="center">
          <Text fontWeight="bold" color={hasError ? '$red11' : undefined}>
            {title}
          </Text>
          <Text fontSize="$2" color={hasError ? '$red10' : '$gray11'}>
            {subtitle}
          </Text>
        </YStack>
      </Button>
      {hasError && errorMessage && (
        <Text fontSize="$2" color="$red11" textAlign="center">
          {errorMessage}
        </Text>
      )}
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
