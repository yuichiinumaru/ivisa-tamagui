// @ts-nocheck
import React, { useState } from 'react'
import { YStack, Text, styled } from 'tamagui'
import { Upload } from '@tamagui/lucide-icons'

export interface DropzoneProps {
  onDrop?: (files: File[]) => void
  accept?: string
  multiple?: boolean
}

const DropzoneFrame = styled(YStack, {
  borderWidth: 2,
  borderStyle: 'dashed',
  borderColor: '$gray8',
  borderRadius: '$4',
  padding: '$8',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$background',
  cursor: 'pointer',
  hoverStyle: {
    borderColor: '$primary',
    backgroundColor: '$blue2',
  },
  pressStyle: {
    borderColor: '$primary',
    backgroundColor: '$blue3',
  },
})

export const Dropzone = ({ onDrop, accept, multiple = false }: DropzoneProps) => {
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    if (onDrop && e.dataTransfer.files) {
      onDrop(Array.from(e.dataTransfer.files))
    }
  }

  return (
    <DropzoneFrame
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      borderColor={isDragOver ? '$primary' : '$gray8'}
      backgroundColor={isDragOver ? '$blue2' : '$background'}
    >
      <Upload size={48} color={isDragOver ? '$primary' : '$gray8'} />
      <Text marginTop="$4" color="$gray11" textAlign="center">
        {isDragOver ? 'Solte os arquivos aqui' : 'Arraste e solte arquivos aqui ou clique para selecionar'}
      </Text>
      {accept && (
        <Text fontSize="$2" color="$gray9" marginTop="$2">
          Suporta: {accept}
        </Text>
      )}
    </DropzoneFrame>
  )
}
