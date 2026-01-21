// @ts-nocheck
import React from 'react'
import { YStack, XStack, styled, GetProps, Text } from 'tamagui'
import { MapPin, Navigation, Clock } from '@tamagui/lucide-icons'
import { Badge } from '../../atoms/Badge'

const LocationStatusFrame = styled(YStack, {
  name: 'LocationStatus',
  padding: '$4',
  borderRadius: '$4',
  backgroundColor: '$background',
  borderWidth: 1,
  borderColor: '$borderColor',
  gap: '$3',
})

const HeaderRow = styled(XStack, {
  justifyContent: 'space-between',
  alignItems: 'center',
})

const Title = styled(Text, {
  fontSize: '$4',
  fontWeight: 'bold',
  color: '$foreground',
})

const InfoRow = styled(XStack, {
  gap: '$4',
  alignItems: 'center',
  flexWrap: 'wrap',
})

const InfoItem = styled(XStack, {
  gap: '$2',
  alignItems: 'center',
})

const Label = styled(Text, {
  fontSize: '$2',
  color: '$mutedForeground',
})

const Value = styled(Text, {
  fontSize: '$3',
  fontWeight: '500',
  color: '$foreground',
})

export type LocationStatusProps = GetProps<typeof LocationStatusFrame> & {
  latitude?: number
  longitude?: number
  accuracy?: number // in meters
  timestamp?: Date | string
  isSearching?: boolean
  error?: string
}

const getAccuracyLevel = (accuracy?: number) => {
  if (accuracy === undefined) return { label: 'Desconhecido', color: '$gray10' }
  if (accuracy <= 10) return { label: 'Alta', color: '$green10' }
  if (accuracy <= 30) return { label: 'Média', color: '$yellow10' }
  return { label: 'Baixa', color: '$red10' }
}

export const LocationStatus = ({
  latitude,
  longitude,
  accuracy,
  timestamp,
  isSearching,
  error,
  ...props
}: LocationStatusProps) => {
  const accuracyLevel = getAccuracyLevel(accuracy)
  const formattedTime = timestamp ? new Date(timestamp).toLocaleTimeString('pt-BR') : '-'

  return (
    <LocationStatusFrame {...props}>
      <HeaderRow>
        <XStack gap="$2" alignItems="center">
          <MapPin size="$1" />
          <Title>Status da Localização</Title>
        </XStack>
        {isSearching && <Badge variant="outline">Buscando...</Badge>}
        {error && <Badge variant="destructive">Erro</Badge>}
        {!isSearching && !error && accuracy !== undefined && (
          <Badge style={{ backgroundColor: accuracyLevel.color, color: 'white' }}>
            Precisão: {accuracyLevel.label} ({accuracy?.toFixed(0)}m)
          </Badge>
        )}
      </HeaderRow>

      <InfoRow>
        <InfoItem>
          <Navigation size="$1" color="$mutedForeground" />
          <YStack>
            <Label>Coordenadas</Label>
            <Value>
              {latitude?.toFixed(6) ?? '-'}, {longitude?.toFixed(6) ?? '-'}
            </Value>
          </YStack>
        </InfoItem>

        <InfoItem>
          <Clock size="$1" color="$mutedForeground" />
          <YStack>
            <Label>Atualizado em</Label>
            <Value>{formattedTime}</Value>
          </YStack>
        </InfoItem>
      </InfoRow>

      {error && (
        <Text color="$destructive" fontSize="$2">
          {error}
        </Text>
      )}
    </LocationStatusFrame>
  )
}

