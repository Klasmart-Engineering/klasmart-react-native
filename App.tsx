import React from "react";
import { PermissionsAndroid, SafeAreaView, StatusBar, Text, useColorScheme, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { PermissionsGate } from "./src/components/permissionsGate";
import { CmsTestPage } from "./src/pages/cmsTestPage";
import { DevicesTestPage } from "./src/pages/devicesTestPage";
import { UserTestPage } from "./src/pages/userTestPage";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <PermissionsGate permissions={[
          PermissionsAndroid.PERMISSIONS.CAMERA, 
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO]}
      >
        <DevicesTestPage />
      </PermissionsGate>
    </SafeAreaView>
  );
};

export default App;
