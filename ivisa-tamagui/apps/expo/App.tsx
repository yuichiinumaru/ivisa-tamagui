import React from 'react';
import { AppProviders, Tabs } from '@ivisa/ui';
import { SafeAreaView } from 'react-native';
import { YStack, Text, styled } from 'tamagui';
import { ChatScreen } from './src/screens/ChatScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { DashboardScreen } from './src/screens/DashboardScreen';
import { I18N } from './src/i18n';

// Styled Components
const SafeView = styled(SafeAreaView, {
  name: 'SafeView',
  flex: 1,
})

export default function App() {
  return (
    <AppProviders theme="light">
      <SafeView>
        <YStack flex={1} backgroundColor="$background">
          <Tabs
            defaultValue="chat"
            orientation="horizontal"
            flexDirection="column"
            height="100%"
          >
            <Tabs.List
              disablePassBorderRadius
              loop={false}
              aria-label={I18N.TABS.ARIA_LIST}
              // 🛡️ Necromancer Fix: Use tokens (though 0 is usually safe, explicit is better)
              borderBottomLeftRadius={0}
              borderBottomRightRadius={0}
              padding="$2"
              backgroundColor="$background"
              borderBottomWidth={1}
              borderColor="$borderColor"
            >
              <Tabs.Trigger theme="alt1" value="chat" flex={1}>
                <Text>{I18N.TABS.CHAT}</Text>
              </Tabs.Trigger>
              <Tabs.Trigger theme="alt1" value="dashboard" flex={1}>
                <Text>{I18N.TABS.DASHBOARD}</Text>
              </Tabs.Trigger>
              <Tabs.Trigger theme="alt1" value="settings" flex={1}>
                <Text>{I18N.TABS.SETTINGS}</Text>
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="chat" flex={1}>
              <ChatScreen />
            </Tabs.Content>

            <Tabs.Content value="dashboard" flex={1}>
              <DashboardScreen />
            </Tabs.Content>

            <Tabs.Content value="settings" flex={1}>
              <SettingsScreen />
            </Tabs.Content>
          </Tabs>
        </YStack>
      </SafeView>
    </AppProviders>
  );
}
