import { useMemo } from "react";
import { Facing, MediaStreamConstraints } from "react-native-webrtc";

interface Props {
    minWidth?: number,
    minHeight?: number,
    minFrameRate?: number,
    facingMode: Facing,
}

const DEFAULT_MIN_WIDTH = 640;
const DEFAULT_MIN_HEIGHT = 480;
const DEFAULT_MIN_FRAME_RATE = 10;

const useConstraints = (props: Props) => {
    const constraints = useMemo<MediaStreamConstraints>(() => {
        return {
            video: {
                mandatory: {
                    minFrameRate: props.minFrameRate ?? DEFAULT_MIN_FRAME_RATE,
                    minHeight: props.minWidth ?? DEFAULT_MIN_WIDTH,
                    minWidth: props.minHeight ?? DEFAULT_MIN_HEIGHT,
                },
                facingMode: props.facingMode,
                optional: [],
            },
            audio: true,
        }
    }, [ props ]);

    return constraints;
}

export default useConstraints;
