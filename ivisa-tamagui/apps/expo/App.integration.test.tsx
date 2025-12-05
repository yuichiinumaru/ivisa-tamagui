/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from './App';

// Mock @ivisa/ui
jest.mock('@ivisa/ui', () => {
  const React = require('react');
  const { View, Text, TouchableOpacity } = require('react-native');

  const TabsContext = React.createContext({ value: '', setValue: (_v: string) => {} });

  const Tabs = ({ children, defaultValue, value, onValueChange }: any) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || value);
    const actualValue = value !== undefined ? value : internalValue;
    const setValue = onValueChange || setInternalValue;

    return (
        <TabsContext.Provider value={{ value: actualValue, setValue }}>
            <View testID="tabs-root">{children}</View>
        </TabsContext.Provider>
    );
  };

  const List = ({ children }: any) => <View>{children}</View>;

  const Trigger = ({ value, children }: any) => {
    const { setValue } = React.useContext(TabsContext);
    return (
        <TouchableOpacity onPress={() => setValue(value)} testID={`tab-trigger-${value}`}>
            {children}
        </TouchableOpacity>
    );
  };

  const Content = ({ value, children }: any) => {
    const { value: currentValue } = React.useContext(TabsContext);
    if (currentValue !== value) return null;
    return <View testID={`tab-content-${value}`}>{children}</View>;
  };

  Tabs.List = List;
  Tabs.Trigger = Trigger;
  Tabs.Content = Content;

  return {
    AppProviders: ({ children }: any) => <View>{children}</View>,
    Tabs,
    Input: () => <View testID="input" />,
    Button: ({ children, onPress }: any) => <TouchableOpacity onPress={onPress}><Text>{children}</Text></TouchableOpacity>,
    Avatar: Object.assign(() => <View />, { Image: () => <View />, Fallback: () => <View /> }),
    Card: ({ children }: any) => <View>{children}</View>,
    Separator: () => <View />,
    Switch: () => <View />,
    Select: () => <View />,
    DataTable: () => <View testID="data-table" />,
    BarChart: () => <View testID="bar-chart" />,
    Label: ({ children }: any) => <Text>{children}</Text>,
    H4: ({ children }: any) => <Text>{children}</Text>,
    MutedText: ({ children }: any) => <Text>{children}</Text>,
    Text: ({ children }: any) => <Text>{children}</Text>,
  };
});

// Mock Tamagui components that are used directly
jest.mock('tamagui', () => {
  const React = require('react');
  const { View, Text, ScrollView } = require('react-native');
  return {
    YStack: ({ children, ...props }: any) => <View {...props}>{children}</View>,
    XStack: ({ children, ...props }: any) => <View {...props}>{children}</View>,
    ScrollView: ({ children }: any) => <ScrollView>{children}</ScrollView>,
    Text: ({ children, ...props }: any) => <Text {...props}>{children}</Text>,
    H4: ({ children }: any) => <Text>{children}</Text>,
    Label: ({ children }: any) => <Text>{children}</Text>,
    Theme: ({ children }: any) => <View>{children}</View>,
    styled: (Comp: any) => Comp,
    isWeb: false,
  };
});

describe('App Navigation Flow', () => {
  it('navigates between Chat and Dashboard', () => {
    const { getByTestId, queryByTestId } = render(<App />);

    // Initial state: Chat should be visible
    expect(getByTestId('tab-content-chat')).toBeTruthy();
    expect(queryByTestId('tab-content-dashboard')).toBeNull();

    // Click Dashboard tab
    fireEvent.press(getByTestId('tab-trigger-dashboard'));

    // Check state: Dashboard should be visible
    expect(getByTestId('tab-content-dashboard')).toBeTruthy();
    expect(queryByTestId('tab-content-chat')).toBeNull();

    // Verify Dashboard content
    expect(getByTestId('data-table')).toBeTruthy();
    expect(getByTestId('bar-chart')).toBeTruthy();
  });

  it('navigates to Settings', () => {
    const { getByTestId, queryByTestId } = render(<App />);

    // Click Settings tab
    fireEvent.press(getByTestId('tab-trigger-settings'));

    // Check state
    expect(getByTestId('tab-content-settings')).toBeTruthy();
    expect(queryByTestId('tab-content-chat')).toBeNull();
  });
});
