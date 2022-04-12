declare module "react-native-webrtc" {
    export type Kind = "videoinput" | "audioinput" | "audiooutput";
    export type Facing = "environment" | "user";

    export interface MediaDeviceInfo {
        deviceId: string;
        groupId: string;
        kind: Kind;
        label: string;
        facing: Facing;
    }

    export class mediaDevices {
        static enumerateDevices(): Promise<MediaDeviceInfo>;
    }
};

// export empty object to make TypeScript happy
export {};

