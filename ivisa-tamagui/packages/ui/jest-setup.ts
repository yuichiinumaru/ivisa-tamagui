import '@testing-library/jest-dom';

jest.mock('react-native', () => {
    const React = require('react');
    const View = React.forwardRef(({ children, ...props }, ref) => React.createElement('div', { ...props, ref }, children));
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
