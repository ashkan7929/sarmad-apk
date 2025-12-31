import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  useColorScheme,
  ActivityIndicator
} from 'react-native';
import { WebView } from 'react-native-webview';

const DEFAULT_URL = 'https://testmy.sarmadins.ir';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
      <WebView 
        source={{ uri: DEFAULT_URL }} 
        style={styles.webview}
        startInLoadingState={true}
        renderLoading={() => (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
});

export default App;
