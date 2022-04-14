import React from "react";
import {
    StyleSheet,
    Text,
    View
} from "react-native";
import {
    Facing,
    RTCView,
} from "react-native-webrtc";
import { useLocalCamera } from "../../../hooks/camera/useLocalCamera";

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    camera: {
        width: "100%",
        height: "100%",
    },
    cameraStatusText: {
        color: `white`,
        fontSize: 22,
    }
});

type Props = {
    facingMode: Facing,
};

const LocalCameraPreview: React.VFC<Props> = (props) => {
    const { mediaStream } = useLocalCamera({ facingMode: props.facingMode });

    return (
        <View style={styles.container}>
            { mediaStream && mediaStream.active ?
                <RTCView mirror={props.facingMode === `user`} objectFit="contain" style={styles.camera} streamURL={mediaStream.toURL()} /> : 
                <Text style={styles.cameraStatusText}>Camera Loading...</Text>
            }
        </View>
    );
}

export default LocalCameraPreview;
