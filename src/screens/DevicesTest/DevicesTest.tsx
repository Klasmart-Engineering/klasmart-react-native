import React from "react";
import { StyleSheet, View } from "react-native";
import LocalCameraPreview from "../../components/Camera/LocalCameraPreview";

const style = StyleSheet.create({
    container: {
        height: `100%`,
        backgroundColor: `white`,
        alignItems: `center`,
    },
});

const DevicesTestScreen: React.VFC = () => {
    return (
        <View style={style.container}>
            <LocalCameraPreview />
        </View>
    );
};

export default DevicesTestScreen;
