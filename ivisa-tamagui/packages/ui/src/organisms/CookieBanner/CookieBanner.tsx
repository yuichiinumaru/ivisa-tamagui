import React from 'react'
import { styled, YStack, XStack, Text, Switch, Label } from 'tamagui'
import { Button } from '../../atoms/Button'
import { Dialog } from '../../molecules/Dialog'
import { Cookie, ShieldCheck } from '@tamagui/lucide-icons'

// --- Types ---
export type CookiePreference = {
  id: string
  label: string
  description: string
  required?: boolean
  enabled: boolean
}

export type CookieBannerProps = {
  onAcceptAll: () => void
  onRejectAll: () => void
  onSavePreferences: (preferences: CookiePreference[]) => void
  isOpen?: boolean
  policyUrl?: string
}

// --- Components ---
const BannerContainer = styled(YStack, {
  name: 'CookieBanner',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '$background',
  padding: '$4',
  borderTopWidth: 1,
  borderColor: '$borderColor',
  shadowColor: '$shadowColor',
  shadowRadius: 20,
  zIndex: 1000,

  variants: {
      floating: {
          true: {
              bottom: '$4',
              left: '$4',
              right: '$4',
              borderRadius: '$4',
              borderWidth: 1,
          }
      }
  } as const
})

const PreferenceRow = styled(XStack, {
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: '$3',
  borderBottomWidth: 1,
  borderColor: '$borderColor',
})

// --- Organism ---
export const CookieBanner = ({
  onAcceptAll,
  onRejectAll,
  onSavePreferences,
  isOpen = true,
  policyUrl = '#',
}: CookieBannerProps) => {
  const [showPreferences, setShowPreferences] = React.useState(false)
  const [preferences, setPreferences] = React.useState<CookiePreference[]>([
      { id: 'essential', label: 'Essenciais', description: 'Necessários para o site funcionar.', required: true, enabled: true },
      { id: 'analytics', label: 'Analíticos', description: 'Ajudam a melhorar nosso site.', required: false, enabled: false },
      { id: 'marketing', label: 'Marketing', description: 'Para mostrar anúncios relevantes.', required: false, enabled: false },
  ])

  if (!isOpen) return null

  const handleToggle = (id: string, val: boolean) => {
      setPreferences(prev => prev.map(p => p.id === id ? { ...p, enabled: val } : p))
  }

  return (
    <>
      <BannerContainer floating>
        <XStack gap="$4" flexWrap="wrap" alignItems="center" justifyContent="space-between">
            <XStack gap="$3" flex={1} minWidth={300}>
                <Cookie size={32} color="$primary" />
                <YStack flex={1}>
                    <Text fontWeight="bold" fontSize="$4">Valorizamos sua privacidade</Text>
                    <Text fontSize="$3" color="$gray10">
                        Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa{' '}
                        <Text tag="a" href={policyUrl} color="$blue10" textDecorationLine="underline">Política de Privacidade</Text>.
                    </Text>
                </YStack>
            </XStack>

            <XStack gap="$2" flexWrap="wrap">
                <Button variant="outline" onPress={() => setShowPreferences(true)}>
                    Personalizar
                </Button>
                <Button variant="ghost" onPress={onRejectAll}>
                    Rejeitar
                </Button>
                <Button variant="primary" onPress={onAcceptAll}>
                    Aceitar Todos
                </Button>
            </XStack>
        </XStack>
      </BannerContainer>

      {/* Preferences Dialog */}
      <Dialog modal open={showPreferences} onOpenChange={setShowPreferences}>
          <Dialog.Content maxWidth={600}>
              <Dialog.Title>Preferências de Cookies</Dialog.Title>
              <Dialog.Description>
                  Gerencie suas preferências de consentimento para cada categoria.
              </Dialog.Description>

              <YStack paddingVertical="$4">
                  {preferences.map(pref => (
                      <PreferenceRow key={pref.id}>
                          <YStack flex={1} paddingRight="$4">
                              <XStack alignItems="center" gap="$2">
                                  {pref.required && <ShieldCheck size={16} color="$green10" />}
                                  <Label htmlFor={pref.id} fontWeight="bold" marginBottom={0}>{pref.label}</Label>
                              </XStack>
                              <Text fontSize="$2" color="$gray10">{pref.description}</Text>
                          </YStack>
                          <Switch
                            id={pref.id}
                            checked={pref.enabled}
                            disabled={pref.required}
                            onCheckedChange={(val) => handleToggle(pref.id, val)}
                          >
                              <Switch.Thumb animation="quick" />
                          </Switch>
                      </PreferenceRow>
                  ))}
              </YStack>

              <XStack justifyContent="flex-end" gap="$2">
                  <Button variant="outline" onPress={() => setShowPreferences(false)}>Cancelar</Button>
                  <Button variant="primary" onPress={() => {
                      onSavePreferences(preferences)
                      setShowPreferences(false)
                  }}>
                      Salvar Preferências
                  </Button>
              </XStack>
          </Dialog.Content>
      </Dialog>
    </>
  )
}
