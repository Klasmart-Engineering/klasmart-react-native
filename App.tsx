import React from "react";
import { PermissionsAndroid, SafeAreaView, StatusBar, Text, useColorScheme, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { PermissionsGate } from "./src/components/permissionsGate";
import { CmsTestPage } from "./src/screens/cmsTestPage";
import { DevicesTestPage } from "./src/screens/devicesTestPage";
import { UserTestPage } from "./src/screens/userTestPage";
import { NavigationContainer } from '@react-navigation/native';
import RouteProvider from "./src/routes/Provider";

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
