import React from 'react'
import { YStack, ScrollView, Text, styled, useTheme } from 'tamagui'
import { Copy, Check } from '@tamagui/lucide-icons'
import { Button } from '../../atoms/Button'

interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
  maxHeight?: number
}

const CodeContainer = styled(YStack, {
  backgroundColor: '$background',
  borderRadius: '$2',
  borderWidth: 1,
  borderColor: '$borderColor',
  overflow: 'hidden',
  width: '100%',
})

const CodeHeader = styled(YStack, {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: '$3',
  paddingVertical: '$2',
  backgroundColor: '$muted',
  borderBottomWidth: 1,
  borderBottomColor: '$borderColor',
})

const CodeContent = styled(ScrollView, {
  padding: '$3',
})

const LineNumber = styled(Text, {
  fontFamily: '$mono',
  fontSize: '$2',
  color: '$mutedForeground',
  marginRight: '$3',
  textAlign: 'right',
  width: 30,
  userSelect: 'none',
  opacity: 0.5,
})

const CodeText = styled(Text, {
  fontFamily: '$mono',
  fontSize: '$2',
  color: '$color',
  whiteSpace: 'pre',
})

export function CodeBlock({ code, language = 'text', showLineNumbers = true, maxHeight }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)
  const theme = useTheme()

  const handleCopy = () => {
    // In a real env, use navigator.clipboard
    // Here just toggle state for UI feedback
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.split('\n')

  return (
    <CodeContainer>
      <CodeHeader>
        <Text fontSize="$2" fontWeight="600" color="$mutedForeground" textTransform="uppercase">
          {language}
        </Text>
        <Button
          size="$2"
          chromeless
          icon={copied ? Check : Copy}
          onPress={handleCopy}
          color={copied ? '$green10' : '$mutedForeground'}
        >
          {copied ? 'Copied' : 'Copy'}
        </Button>
      </CodeHeader>

      <CodeContent maxHeight={maxHeight}>
        <YStack>
          {lines.map((line, i) => (
            <YStack key={i} flexDirection="row">
              {showLineNumbers && (
                <LineNumber>{i + 1}</LineNumber>
              )}
              <CodeText>{line || ' '}</CodeText>
            </YStack>
          ))}
        </YStack>
      </CodeContent>
    </CodeContainer>
  )
}
