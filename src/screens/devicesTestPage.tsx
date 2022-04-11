import React from "react";
import { StyleSheet, View } from "react-native";
import { LocalCameraPreview } from "../components/localCameraPreview";

const style = StyleSheet.create({
    container: {
        height: `100%`,
        backgroundColor: `white`,
        alignItems: `center`,
    },
});

export const DevicesTestPage: React.VFC = () => {
    return (
        <View style={style.container}>
            <LocalCameraPreview />
        </View>
    );
};