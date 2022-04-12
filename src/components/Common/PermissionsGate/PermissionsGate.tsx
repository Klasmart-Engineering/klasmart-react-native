import React, { useEffect, useState } from "react";
import {
    Permission,
    PermissionsAndroid,
    Platform,
    Text,
    View
} from "react-native";

export interface PermissionGateProps {
    permissions: Permission[],
}

const PermissionsGate: React.FC<PermissionGateProps> = (props) => {
    const [ granted, setGranted ] = useState(false);

    useEffect(() => {
        if (Platform.OS === "android") {
            PermissionsAndroid
                .requestMultiple(props.permissions)
                .then(result => {
                    setGranted(props.permissions.every(p => result[p] === PermissionsAndroid.RESULTS.GRANTED));
                });
        } else {
            setGranted(true);
        }
    }, [ props.permissions ]);

    if (!granted) {
        return ( 
            <View>
                <Text>Requesting permissions</Text>
            </View>
        );
    }

    return <>{props.children}</>;
}

export default PermissionsGate;
