import { ArrowUp, ArrowDown, Zap, Database } from '@tamagui/lucide-icons'
import React from 'react'
import { YStack, XStack, Text, Button, Popover, Progress, Separator } from 'tamagui'

export interface TokenUsage {
  inputTokens: number
  outputTokens: number
  totalTokens: number
  cacheReadTokens?: number
  cacheCreationTokens?: number
  lastUpdated: Date
}

interface TokenUsageMeterProps {
  tokenUsage: TokenUsage
  modelId: string
  contextLimit?: number
}

// Default limits if not provided
const DEFAULT_LIMIT = 128_000

function formatTokenCount(tokens: number): string {
  if (tokens >= 1_000_000) return `${(tokens / 1_000_000).toFixed(1)}M`
  if (tokens >= 1_000) return `${Math.round(tokens / 1_000)}K`
  return tokens.toString()
}

function formatTokenCountFull(tokens: number): string {
  return tokens.toLocaleString()
}

export function TokenUsageMeter({
  tokenUsage,
  contextLimit = DEFAULT_LIMIT
}: TokenUsageMeterProps) {
  const usedTokens = tokenUsage.inputTokens
  const usagePercent = Math.min((usedTokens / contextLimit) * 100, 100)

  // Color logic
  let color = '$blue10'
  let bgColor = '$blue2'
  let statusText = 'Normal'

  if (usagePercent >= 90) {
    color = '$red10'
    bgColor = '$red2'
    statusText = 'Critical'
  } else if (usagePercent >= 75) {
    color = '$orange10'
    bgColor = '$orange2'
    statusText = 'Warning'
  } else if (usagePercent >= 50) {
    color = '$yellow10'
    bgColor = '$yellow2'
    statusText = 'Moderate'
  }

  const hasCacheData = tokenUsage.cacheReadTokens || tokenUsage.cacheCreationTokens

  return (
    <Popover placement="top">
      <Popover.Trigger asChild>
        <Button
          size="$2"
          chromeless
          backgroundColor={bgColor}
          paddingHorizontal="$2"
          height={24}
        >
          <XStack alignItems="center" gap="$1.5">
            <Zap size={12} color={color} />
            <Text fontFamily="$mono" fontSize="$1" color={color}>
              {formatTokenCount(usedTokens)} / {formatTokenCount(contextLimit)}
            </Text>
            <Text fontSize="$1" color={color} opacity={0.7}>
              ({usagePercent.toFixed(0)}%)
            </Text>
          </XStack>
        </Button>
      </Popover.Trigger>

      <Popover.Content borderWidth={1} borderColor="$borderColor" padding="$0" width={280}>
        <YStack padding="$3" gap="$3">
          {/* Header */}
          <XStack justifyContent="space-between" alignItems="center">
            <Text fontSize="$2" fontWeight="600">Context Window</Text>
            <YStack backgroundColor={bgColor} paddingHorizontal="$1.5" borderRadius="$1">
              <Text fontSize="$1" fontWeight="600" color={color}>{statusText}</Text>
            </YStack>
          </XStack>

          {/* Progress Bar */}
          <YStack gap="$1">
            <Progress value={usagePercent} height={8} backgroundColor="$gray3">
                <Progress.Indicator backgroundColor={color} animation="bouncy" />
            </Progress>
            <XStack justifyContent="space-between">
              <Text fontSize="$1" color="$mutedForeground">{formatTokenCountFull(usedTokens)} tokens</Text>
              <Text fontSize="$1" color="$mutedForeground">{formatTokenCountFull(contextLimit)} max</Text>
            </XStack>
          </YStack>

          <Separator />

          {/* Breakdown */}
          <YStack gap="$2">
            <Text fontSize="$1" fontWeight="600" color="$mutedForeground" textTransform="uppercase">Token Breakdown</Text>

            <XStack justifyContent="space-between">
                <XStack gap="$1.5" alignItems="center">
                    <ArrowUp size={12} color="$mutedForeground" />
                    <Text fontSize="$2" color="$mutedForeground">Input</Text>
                </XStack>
                <Text fontSize="$2" fontFamily="$mono">{formatTokenCountFull(tokenUsage.inputTokens)}</Text>
            </XStack>

            <XStack justifyContent="space-between">
                <XStack gap="$1.5" alignItems="center">
                    <ArrowDown size={12} color="$mutedForeground" />
                    <Text fontSize="$2" color="$mutedForeground">Output</Text>
                </XStack>
                <Text fontSize="$2" fontFamily="$mono">{formatTokenCountFull(tokenUsage.outputTokens)}</Text>
            </XStack>

            <Separator />

             <XStack justifyContent="space-between">
                <XStack gap="$1.5" alignItems="center">
                    <Zap size={12} color="$mutedForeground" />
                    <Text fontSize="$2" color="$mutedForeground">Total</Text>
                </XStack>
                <Text fontSize="$2" fontFamily="$mono">{formatTokenCountFull(tokenUsage.totalTokens)}</Text>
            </XStack>
          </YStack>

          {/* Cache */}
          {hasCacheData && (
             <>
                <Separator />
                <YStack gap="$2">
                    <Text fontSize="$1" fontWeight="600" color="$mutedForeground" textTransform="uppercase">Cache</Text>
                    {tokenUsage.cacheReadTokens && (
                        <XStack justifyContent="space-between">
                            <XStack gap="$1.5" alignItems="center">
                                <Database size={12} color="$green10" />
                                <Text fontSize="$2" color="$green10">Cache Hits</Text>
                            </XStack>
                            <Text fontSize="$2" fontFamily="$mono" color="$green10">{formatTokenCountFull(tokenUsage.cacheReadTokens)}</Text>
                        </XStack>
                    )}
                     {tokenUsage.cacheCreationTokens && (
                        <XStack justifyContent="space-between">
                            <XStack gap="$1.5" alignItems="center">
                                <Database size={12} color="$blue10" />
                                <Text fontSize="$2" color="$blue10">Cache Created</Text>
                            </XStack>
                            <Text fontSize="$2" fontFamily="$mono" color="$blue10">{formatTokenCountFull(tokenUsage.cacheCreationTokens)}</Text>
                        </XStack>
                    )}
                </YStack>
             </>
          )}

          <Separator />
          <Text fontSize="$1" color="$mutedForeground">Last updated: {tokenUsage.lastUpdated.toLocaleTimeString()}</Text>

        </YStack>
      </Popover.Content>
    </Popover>
  )
}
