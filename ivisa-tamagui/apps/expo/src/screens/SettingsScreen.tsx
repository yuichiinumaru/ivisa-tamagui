import React, { useState } from 'react'
import { YStack, XStack, Label, H4, Text } from 'tamagui'
import { Switch, Button, Select, Separator } from '@ivisa/ui'

export function SettingsScreen() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState('en')

  return (
    <YStack flex={1} padding="$4" gap="$6" backgroundColor="$background">
      <YStack gap="$2">
        <H4>Preferences</H4>
        <Text color="$mutedForeground">Manage your app settings.</Text>
      </YStack>

      <Separator />

      <YStack gap="$5">
        <XStack alignItems="center" justifyContent="space-between">
          <YStack>
            <Label fontWeight="bold">Dark Mode</Label>
            <Text fontSize="$2" color="$mutedForeground">Switch between light and dark themes</Text>
          </YStack>
          <Switch checked={darkMode} onCheckedChange={setDarkMode}>
            <Switch.Thumb animation="quick" />
          </Switch>
        </XStack>

        <Separator />

        <XStack alignItems="center" justifyContent="space-between">
          <YStack>
            <Label fontWeight="bold">Notifications</Label>
            <Text fontSize="$2" color="$mutedForeground">Receive alerts and updates</Text>
          </YStack>
          <Switch checked={notifications} onCheckedChange={setNotifications}>
            <Switch.Thumb animation="quick" />
          </Switch>
        </XStack>

        <Separator />

        <YStack gap="$2">
          <Label fontWeight="bold">Language</Label>
          <Select
            value={language}
            onValueChange={setLanguage}
            items={[
              { value: 'en', label: 'English' },
              { value: 'es', label: 'Spanish' },
              { value: 'fr', label: 'French' }
            ]}
          />
        </YStack>
      </YStack>

      <YStack marginTop="auto" gap="$3">
        <Button theme="active">Save Changes</Button>
        <Button variant="outline">Reset to Defaults</Button>
      </YStack>
    </YStack>
  )
}
