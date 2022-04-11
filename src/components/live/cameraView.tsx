import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MediaStream, RTCView } from "react-native-webrtc";

// TODO (axel):
// - optional label (name, etc.)
// - mute / unmute microphone
// - mute / unmute camera
// - loading indicator
// - activity indicator

const style = StyleSheet.create({
    container: {
        backgroundColor: "black",
        borderRadius: 25,
        justifyContent: `center`,
        alignItems: `center`,
        width: `100%`,
        height: 120,
        marginTop: 8,
    },
    camera: {
        width: "100%",
        height: "100%",
    },
    label: {
        color: `white`,
    }
});

type Props = {
    mediaStream?: MediaStream,
};

export const CameraView: React.VFC<Props> = ({ mediaStream }) => {
    return (
        <View style={style.container}>
            { mediaStream ? <RTCView style={style.camera} streamURL={mediaStream.toURL()} /> : <Text style={style.label}>Connecting Camera...</Text> }
        </View>
    );
};