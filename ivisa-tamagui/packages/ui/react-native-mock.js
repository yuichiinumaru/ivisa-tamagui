const React = require('react');

const View = React.forwardRef(({ children, ...props }, ref) => React.createElement('div', { ...props, ref }, children));
const ScrollView = React.forwardRef(({ children, ...props }, ref) => React.createElement('div', { ...props, ref }, children));

module.exports = {
    View,
    Text: View,
    Image: View,
    ScrollView,
    FlatList: View,
    SectionList: View,
    TextInput: View,
    TouchableOpacity: View,
    Pressable: View,
    Platform: { OS: 'web', select: (obj) => obj.web || obj.default },
    StyleSheet: { create: (obj) => obj, flatten: (obj) => obj, hairlineWidth: 1 },
    Dimensions: { get: () => ({ width: 800, height: 600 }) },
    Animated: { View, createAnimatedComponent: (c) => c, timing: () => ({ start: () => { } }) },
    Appearance: { getColorScheme: () => 'light', addChangeListener: () => { } },
    I18nManager: { isRTL: false },
};
