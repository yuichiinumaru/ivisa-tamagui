import React from 'react';
import { AppProviders, Tabs } from '@ivisa/ui';
import { SafeAreaView } from 'react-native';
import { YStack, Text, styled } from 'tamagui';
import { ChatScreen } from './src/screens/ChatScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { DashboardScreen } from './src/screens/DashboardScreen';

// 💀 The Rite of Resurrection: Typed Styles
const SafeView = styled(SafeAreaView, {
  name: 'SafeView',
  flex: 1,
})

const TAB_LABELS = {
  CHAT: 'Chat',
  DASHBOARD: 'Dashboard',
  SETTINGS: 'Settings',
  ARIA_LIST: 'Manage your account',
} as const;

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
              aria-label={TAB_LABELS.ARIA_LIST}
              // 💀 Fix: Use tokens instead of hardcoded 0 radius if possible, or explicit styles
              borderBottomLeftRadius={0}
              borderBottomRightRadius={0}
              padding="$2"
              backgroundColor="$background"
              borderBottomWidth={1}
              borderColor="$borderColor"
            >
              <Tabs.Trigger theme="alt1" value="chat" flex={1}>
                <Text>{TAB_LABELS.CHAT}</Text>
              </Tabs.Trigger>
              <Tabs.Trigger theme="alt1" value="dashboard" flex={1}>
                <Text>{TAB_LABELS.DASHBOARD}</Text>
              </Tabs.Trigger>
              <Tabs.Trigger theme="alt1" value="settings" flex={1}>
                <Text>{TAB_LABELS.SETTINGS}</Text>
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
