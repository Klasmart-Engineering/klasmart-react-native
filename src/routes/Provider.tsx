import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen, {DetailsParams} from '../screens/DetailsScreen';
import HomeScreen, {HomeParams} from '../screens/HomeScreen';
import Toolbar from "../components/Toolbar/Toolbar";
import MiniModal, { MiniModalParams } from "../components/MiniModal/MiniModal";
import MediumModal, { MediumModalParams } from "../components/MiniModal/MediumModal";
import { LandingParams, LandingScreen } from "../screens/LandingScreen";


export type ScreenParams = {
  Landing: LandingParams;
  Home: HomeParams;
  Details: DetailsParams;
  MiniModal: MiniModalParams;
  MediumModal: MediumModalParams;
};

interface RouteProviderProps {
}

const RouteProvider: React.VFC<RouteProviderProps> = (props) => {
  const Stack = createNativeStackNavigator<ScreenParams>();
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        header: (props) => <></>
      }}
    >
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <Toolbar />
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
      />
      <Stack.Screen
        name="MiniModal"
        component={MiniModal}
        options={{
          presentation: `card`
        }}
      />
      <Stack.Screen
        name="MediumModal"
        component={MediumModal}
        options={{
          presentation: `transparentModal`
        }}
      />
    </Stack.Navigator>
  );
};

export default RouteProvider;
