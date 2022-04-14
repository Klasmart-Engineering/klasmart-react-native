import React from "react";
import { useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { NavigationContainer } from '@react-navigation/native';
import RouteProvider from "./routes/Provider/Provider";
// note(axel): Polyfill for URL
import "react-native-url-polyfill/auto";
// note(axel): Polyfill for crypto.getRandomValues
import "react-native-get-random-values";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <RouteProvider />
      {/* <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <PermissionsGate permissions={[
          PermissionsAndroid.PERMISSIONS.CAMERA, 
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO]}
          >
          <DevicesTestPage />
        </PermissionsGate>
      </SafeAreaView> */}
    </NavigationContainer>
  );
};

export default App;
