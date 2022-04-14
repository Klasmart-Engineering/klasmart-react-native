import { useEffect, useMemo, useState } from "react";
import {
    Facing,
    mediaDevices,
    MediaStream,
    MediaStreamConstraints,
} from "react-native-webrtc";
import useConstraints from "./useConstraints";

interface Props {
    facingMode: Facing;
}

export const useLocalCamera = (props: Props) => {
    const [mediaStream, setMediaStream] = useState<MediaStream>();

    const constraints = useConstraints({ facingMode: props.facingMode });

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

    return { mediaStream, constraints };
};