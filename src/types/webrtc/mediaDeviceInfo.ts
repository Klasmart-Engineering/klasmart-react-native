
export type Kind = "videoinput" | "audioinput" | "audiooutput";
export type Facing = "environment" | "user";

export type MediaDeviceInfo = {
    deviceId: string,
    groupId: string,
    kind: Kind,
    label: string,
    facing: Facing, 
};
