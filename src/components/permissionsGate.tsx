import { shouldCanonizeResults } from "@apollo/client/cache/inmemory/helpers";
import React, { useCallback, useEffect, useState } from "react";
import {
    Permission,
    PermissionsAndroid,
    Platform,
    Text,
    View
} from "react-native";

export type Props = {
    permissions: Permission[],
}

export const PermissionsGate: React.FC<Props> = ({children, permissions}) => {
    const [ granted, setGranted ] = useState(false);

    useEffect(() => {
        if (Platform.OS === "android") {
            PermissionsAndroid
                .requestMultiple(permissions)
                .then(result => {
                    setGranted(permissions.every(p => result[p] === PermissionsAndroid.RESULTS.GRANTED));
                });
        } else {
            setGranted(true);
        }
    }, [ permissions ]);

    if (!granted) {
        return ( 
            <View>
                <Text>Requesting permissions</Text>
            </View>
        );
    }

    return <>{children}</>;
}