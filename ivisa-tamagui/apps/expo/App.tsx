import { TamaguiProvider } from 'tamagui';
import config from '../../packages/ui/src/tamagui.config';
import { View, Text } from 'react-native';

function App() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to Ivisa Tamagui (Expo)</Text>
      </View>
    </TamaguiProvider>
  );
}

export default App;
