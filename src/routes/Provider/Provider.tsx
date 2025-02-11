import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen, { DetailsParams } from '../../screens/Details/Details';
import HomeScreen, { HomeParams } from '../../screens/Home/Home';
import Toolbar from "../../components/Core/Toolbar/Toolbar";
import MiniModal, { MiniModalParams } from "../../components/MiniModal/MiniModal";
import MediumModal, { MediumModalParams } from "../../components/MediumModal";
import LandingScreen, { LandingParams } from "../../screens/Landing";
import LiveScreen, { LiveParams } from "../../screens/Live";
import JoinScreen, { JoinParams } from "../../screens/Join";


export type ScreenParams = {
    Landing: LandingParams;
    Home: HomeParams;
    Details: DetailsParams;
    MiniModal: MiniModalParams;
    MediumModal: MediumModalParams;
    Live: LiveParams;
    Join: JoinParams;
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
        <Stack.Screen
            name="Join"
            component={JoinScreen}
        />
        <Stack.Screen
            name="Live"
            component={LiveScreen}
        />
        </Stack.Navigator>
    );
};

export default RouteProvider;
