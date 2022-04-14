import { ScreenParams } from "../../routes/Provider";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from "react";
import { PermissionsAndroid, Pressable, StyleSheet, View } from "react-native";
import { LiveScreenRouteName } from "../Live";
import { Text } from "react-native-paper";
import LocalCameraPreview from "../../components/Camera/LocalCameraPreview";
import { Facing } from "react-native-webrtc";
import PermissionsGate from "../../components/Common/PermissionsGate";
import useConstraints from "../../hooks/camera/useConstraints";

export const JoinScreenRouteName = `Join`;

export interface JoinParams {
}

export type JoinScreenProps = NativeStackScreenProps<ScreenParams, `Join`>;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: `center`,
        justifyContent: `center`,
    },
    horizontalSplitContainer: {
        flexDirection: `row`,
        backgroundColor: `lightblue`,
        borderRadius: 18,
        padding: 16,
    },
    cameraPreviewContainer: {
        alignItems: `center`,
        justifyContent: `center`,
        backgroundColor: `black`,
        width: 480,
        height: 360,
        borderRadius: 8,
    },
    settingsFormContainer: {
        marginLeft: 8,
        justifyContent: `flex-end`,
    },
    pressable: {
        width: 140,
        height: 50,
        borderRadius: 18,
        backgroundColor: `blue`,
        justifyContent: `center`,
        alignItems: `center`,
        marginTop: 8,
    },
    pressableText: {
        color: `white`,
        fontSize: 22,
    }
});

const JoinScreen: React.VFC<JoinScreenProps> = (props) => {
    const [ facingMode, setFacingMode ] = useState<Facing>("user");
    const mediaConstraints = useConstraints({ facingMode });

    return (
        <PermissionsGate permissions={[
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO]}
        >
            <View style={styles.container}>
                <View style={styles.horizontalSplitContainer}>
                    <View style={styles.cameraPreviewContainer}>
                        <LocalCameraPreview facingMode={facingMode} />
                    </View>
                    <View style={styles.settingsFormContainer}>
                        <Pressable style={styles.pressable} onPress={() => { setFacingMode(facingMode === "user" ? "environment" : "user")}}>
                            <Text style={styles.pressableText}>Flip Camera</Text>
                        </Pressable>
                        <Pressable style={styles.pressable} onPress={() => props.navigation.replace(LiveScreenRouteName, { mediaConstraints })}>
                            <Text style={styles.pressableText}>Go Live</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </PermissionsGate>
    );
}

export default JoinScreen;