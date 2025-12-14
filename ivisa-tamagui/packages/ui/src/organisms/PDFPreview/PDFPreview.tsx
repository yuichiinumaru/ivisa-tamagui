import React from 'react'
import { YStack, styled, GetProps, Text, Spinner } from 'tamagui'
import { FileText } from '@tamagui/lucide-icons'

const PDFContainer = styled(YStack, {
  name: 'PDFPreview',
  width: '100%',
  height: 500,
  backgroundColor: '$background',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$4',
  overflow: 'hidden',
  position: 'relative',
})

const PDFFrame = styled(YStack, {
  tag: 'iframe',
  width: '100%',
  height: '100%',
  borderWidth: 0,
})

const Placeholder = styled(YStack, {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',
})

export type PDFPreviewProps = GetProps<typeof PDFContainer> & {
  fileUrl?: string
  title?: string
  isLoading?: boolean
  error?: string
}

export const PDFPreview = ({
  fileUrl,
  title = 'PDF Document',
  isLoading = false,
  error,
  ...props
}: PDFPreviewProps) => {
  if (isLoading) {
    return (
      <PDFContainer {...props} alignItems="center" justifyContent="center">
        <Spinner size="large" />
      </PDFContainer>
    )
  }

  if (error || !fileUrl) {
    return (
      <PDFContainer {...props}>
        <Placeholder>
          <FileText size="$6" color="$gray8" />
          <Text color="$gray10">{error || 'Nenhum documento selecionado'}</Text>
        </Placeholder>
      </PDFContainer>
    )
  }

  return (
    <PDFContainer {...props}>
      <PDFFrame
        src={`${fileUrl}#toolbar=0`}
        title={title}
        // @ts-ignore - Tamagui types might not cover iframe props fully on YStack
        allowFullScreen
      />
    </PDFContainer>
  )
}
