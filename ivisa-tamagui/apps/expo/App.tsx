import React from 'react';
import { AppProviders, Tabs } from '@ivisa/ui';
import { SafeAreaView } from 'react-native';
import { YStack, Text, Theme } from 'tamagui';
import { ChatScreen } from './src/screens/ChatScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { DashboardScreen } from './src/screens/DashboardScreen';

export default function App() {
  return (
    <AppProviders theme="light">
      <SafeAreaView style={{ flex: 1 }}>
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
              aria-label="Manage your account"
              borderBottomLeftRadius={0}
              borderBottomRightRadius={0}
              padding="$2"
              backgroundColor="$background"
              borderBottomWidth={1}
              borderColor="$borderColor"
            >
              <Tabs.Trigger theme="alt1" value="chat" flex={1}>
                <Text>Chat</Text>
              </Tabs.Trigger>
              <Tabs.Trigger theme="alt1" value="dashboard" flex={1}>
                <Text>Dashboard</Text>
              </Tabs.Trigger>
              <Tabs.Trigger theme="alt1" value="settings" flex={1}>
                <Text>Settings</Text>
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
      </SafeAreaView>
    </AppProviders>
  );
}
