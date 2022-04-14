import { useEffect, useMemo, useState } from "react";
import {
    Facing,
    mediaDevices,
    MediaStream,
    MediaStreamConstraints,
} from "react-native-webrtc";

interface Props {
    facingMode: Facing;
}

export const useLocalCamera = (props: Props) => {
    const [mediaStream, setMediaStream] = useState<MediaStream>();

    const constraints = useMemo<MediaStreamConstraints>(() => {
        return {
            video: {
                mandatory: {
                    minFrameRate: 10,
                    minHeight: 640,
                    minWidth: 480,
                },
                facingMode: props.facingMode,
                optional: [],
            },
            audio: false,
        }
    }, [ props.facingMode ]);

    useEffect(() => {
        mediaDevices.getUserMedia(constraints)
            .then(mediaStream => {
                setMediaStream(mediaStream);
            });

        return () => {
            mediaStream?.release();
            setMediaStream(undefined);
        }

    }, [ constraints ]);

    return mediaStream;
};