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

export interface CameraViewProps {
    mediaStream?: MediaStream,
};

const CameraView: React.VFC<CameraViewProps> = (props) => {
    return (
        <View style={style.container}>
            {props.mediaStream ? <RTCView style={style.camera} streamURL={props.mediaStream.toURL()} /> : <Text style={style.label}>Connecting Camera...</Text> }
        </View>
    );
};

export default CameraView;
