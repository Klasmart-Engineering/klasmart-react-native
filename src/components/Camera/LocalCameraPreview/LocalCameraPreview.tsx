import React, {
    useCallback,
    useEffect,
    useMemo,
    useState
} from "react";
import {
    StyleSheet,
    Text,
    View
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import {
    Facing,
    mediaDevices,
    MediaStream,
    RTCView,
    MediaDeviceInfo
} from "react-native-webrtc";

const style = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: "100%",
        padding: 8,
        flex: 1,
    },
    dropdown: {
        margin: 8,
        height: 50,
        borderRadius: 6,
        paddingHorizontal: 8,
        borderWidth: 0.5,
        borderColor: "gray",
    },
    cameraContainer: {
        backgroundColor: "black",
        borderColor: "gray",
        borderWidth: 0.5,
        width: "100%",
        flex: 1,
    },
    camera: {
        width: "100%",
        height: "100%",
    }
});

const LocalCameraPreview: React.VFC = () => {
    const [ mediaDeviceSources, setMediaDeviceSources ] = useState<MediaDeviceInfo[]>([]);
    const [ selectedCameraFacing, setSelectedCameraFacing ] = useState<Facing>("user");
    const [ mediaStream, setMediaStream ] = useState<MediaStream>();

    const cameras = useMemo(() => mediaDeviceSources.filter((device) => device.kind === "videoinput"), [ mediaDeviceSources ]);

    useEffect(() => {
        mediaDevices.enumerateDevices().then((sources: MediaDeviceInfo[]) => {
            setMediaDeviceSources(sources);
        }).catch(error => {
            console.error(error);
            setMediaDeviceSources([]);
        });
    }, []);

    useEffect(() => {
        mediaDevices.getUserMedia({
            video: {
                mandatory: {
                    minFrameRate: 10,
                    minHeight: 640,
                    minWidth: 480,
                },
                facingMode: selectedCameraFacing,
                optional: [],
            },
            audio: true,
        }).then(mediaStream => {
            setMediaStream(mediaStream);
        });

        return () => {
            if (mediaStream) {
                mediaStream.release();
                setMediaStream(undefined);
            }
        }

    }, [ selectedCameraFacing ]);

    const onChangeCamera = useCallback((camera: MediaDeviceInfo) => {
        setSelectedCameraFacing(camera.facing);
    }, []);

    return (
        <View style={style.container}>
            <Text>Camera</Text>
            <Dropdown data={cameras} 
                labelField={"facing"} 
                valueField={"facing"} 
                onChange={onChangeCamera}
                value={selectedCameraFacing} 
                style={style.dropdown}
                maxHeight={100}/>
            { mediaStream && 
                <View style={style.cameraContainer}>
                    <RTCView style={style.camera} streamURL={mediaStream.toURL()} /> 
                </View>
            }
        </View>
    );
}

export default LocalCameraPreview;
