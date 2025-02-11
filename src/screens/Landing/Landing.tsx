import KidsloopTextLogo from "../../assets/img/kidsloop_logo.svg";
import BackgroundCloudsBalloon from "../../assets/img/landing/background_clouds_balloon.svg";
import BackgroundGreenGrass from "../../assets/img/landing/background_green_grass.svg";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";
import { ScreenParams } from "../../routes/Provider/Provider";

const landingPageStyle = StyleSheet.create({
    container: {
        height: `100%`,
        backgroundColor: `white`,
        justifyContent: `center`,
        alignItems: `center`,
    },
    backgroundTopImageContainer: {
        position: `absolute`,
        width: `100%`,
        top: 0,
        justifyContent: `center`,
        alignItems: `center`,
    },
    backgroundBottomImageContainer: {
        position: `absolute`,
        width: `100%`,
        bottom: 0,
        justifyContent: `center`,
        alignItems: `center`,
    },
    logoImageContainer: {
        width: 300,
        height: 81,
        justifyContent: `center`,
        alignItems: `center`,
    },
    subtitleText: {
        color: `black`,
        fontSize: 24,
        fontWeight: `bold`,
        marginTop: 4,
    },
    signInButtonContainer: {
        marginTop: 40,
        width: 343,
        height: 58,
    },
});

export interface LandingParams {
};

type LandingScreenProps = NativeStackScreenProps<ScreenParams, `Landing`>

const LandingScreen: React.VFC<LandingScreenProps> = (props) => {
    return (
        <View style={landingPageStyle.container}>
            <View style={landingPageStyle.backgroundTopImageContainer}>
                <BackgroundCloudsBalloon
                    width={`100%`}
                    resizeMode={`cover`}
                />
            </View>
            <View style={landingPageStyle.backgroundBottomImageContainer}>
                <BackgroundGreenGrass
                    width={`100%`}
                    resizeMode={`cover`}
                />
            </View>
                <View style={landingPageStyle.logoImageContainer}>
                    <KidsloopTextLogo
                        width={`100%`}
                        height={`100%`}
                        resizeMode={`contain`}
                    />
                </View>
                <Text style={landingPageStyle.subtitleText}>
                    Education Platform for Students
                </Text>
            <View style={landingPageStyle.signInButtonContainer}>
                <Button
                    title={`Sign In`}
                    onPress={() => props.navigation.navigate(`Home`, {})}
                />
            </View>
        </View>
    );
}

export default LandingScreen;
