import '@testing-library/jest-dom';

import React from 'react';

jest.mock('react-native', () => {
    const View = React.forwardRef(({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }, ref) => React.createElement('div', { ...props, ref }, children));
    // Mock other components as needed by Tamagui
    return {
        View,
        Text: View,
        Image: View,
        ScrollView: View,
        FlatList: View,
        SectionList: View,
        TextInput: View,
        TouchableOpacity: View,
        Pressable: View,
        Platform: { OS: 'web', select: (obj) => obj.web },
        StyleSheet: { create: (obj) => obj, flatten: (obj) => obj, hairlineWidth: 1 },
        Dimensions: { get: () => ({ width: 800, height: 600 }) },
        Animated: { View, createAnimatedComponent: (c) => c, timing: () => ({ start: () => { } }) },
        Appearance: { getColorScheme: () => 'light', addChangeListener: () => { } },
        I18nManager: { isRTL: false },
        // ... add more if needed
    };
});


Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

jest.mock('@tamagui/animations-react-native', () => ({
    createAnimations: jest.fn(() => ({
        'bouncy': {},
        'lazy': {},
        'quick': {},
    })),
}));

jest.mock('react-native-svg', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const React = require('react');
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const View = require('react-native').View;
  const SvgMock = React.forwardRef((props: any, ref: any) => React.createElement(View, { ...props, ref }));
  return {
    __esModule: true,
    default: SvgMock,
    Svg: SvgMock,
    Path: SvgMock,
    Rect: SvgMock,
    Circle: SvgMock,
    Line: SvgMock,
    Polygon: SvgMock,
    Polyline: SvgMock,
    Ellipse: SvgMock,
    G: SvgMock,
    Text: SvgMock,
    TSpan: SvgMock,
    TextPath: SvgMock,
    Use: SvgMock,
    Symbol: SvgMock,
    Defs: SvgMock,
    LinearGradient: SvgMock,
    RadialGradient: SvgMock,
    Stop: SvgMock,
    ClipPath: SvgMock,
    Pattern: SvgMock,
    Mask: SvgMock,
    Marker: SvgMock,
  };
});

global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};
